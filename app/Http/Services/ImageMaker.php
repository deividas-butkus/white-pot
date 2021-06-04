<?php

namespace App\Http\Services;

use App\Http\Traits\FileUpload;
use Dotenv\Exception\ValidationException;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;
use Throwable;

class ImageMaker
{
    /**
     * @var array;
     */
    public array $images;
    /**
     * @var string|null
     */
    public ?string $constrainHeight;
    /**
     * @var string|null
     */
    public ?string $constrainWidth;
    /**
     * @var array|string[]
     */
    static array $allowedImageTypes = ['png', 'jpg'];
    /**
     * @var string
     */
    public string $imageOriginalPath;
    /**
     * @var string
     */
    static string $imageUploadDir = 'images';
    /**
     * @var string
     */
    static string $originalImagePath = 'original';
    /**
     * @var string
     */
    static string $thumbImagePath = 'thumb';

    use FileUpload;


    /**
     * ImageMaker constructor.
     * @param array|null $images
     * @param string $fileUploadPath
     * @param string|null $width
     * @param string|null $height
     */
    public function __construct(?array $images, string $fileUploadPath, ?string $width, ?string $height)
    {
        $this->prepareInstance($images, $fileUploadPath, $width, $height);
    }

    /**
     * @param $images
     * @param $fileUploadPath
     * @param $width
     * @param $height
     * @throws Throwable
     */
    public function prepareInstance($images, $fileUploadPath, $width, $height)
    {
        $this->validateImages($images);
        $this->setFiles($images);
        $this->setImageInstances();
        $this->setImagePaths($fileUploadPath);
        $this->setImageProperties($width, $height);
    }

    /**
     * @param $images
     * @return $this
     * @throws Throwable
     */
    public function validateImages($images): ImageMaker
    {
        $allowedTypes = implode(',', self::$allowedImageTypes);
        throw_unless($images, new ValidationException('No images provided'));

        $validator = Validator::make($images, ['.*' => 'required|file|mimes:' . $allowedTypes . '|max:20000']);
        if ($validator->fails()) {
            throw new ValidationException($validator->errors()->first());
        }

        return $this;
    }

    /**
     * @param $images
     * @return $this
     */
    public function setFiles($images): ImageMaker
    {
        $this->files = $images;
        return $this;
    }

    /**
     * @param $fileUploadPath
     * @return $this
     */
    public function setImagePaths($fileUploadPath): ImageMaker
    {
        self::setPath(public_path(self::$uploadRoot . '/' . self::$imageUploadDir));
        self::setPath($fileUploadPath);

        return $this;
    }

    /**
     * @param $width
     * @param $height
     * @return $this
     */
    public function setImageProperties($width, $height): ImageMaker
    {
        $this->constrainHeight = $height;
        $this->constrainWidth = $width;

        return $this;
    }

    /**
     * @return string
     */
    public static function getThumbPath(): string
    {
        return self::getPath(self::$uploadRoot, self::$imageUploadDir, self::$thumbImagePath);
    }

    /**
     * @return string
     */
    public static function getOriginalPath(): string
    {
        return self::getPath(self::$uploadRoot, self::$imageUploadDir, self::$originalImagePath);
    }

    /**
     * @return collection
     */
    public function upload(): collection
    {
        $imageTitles = collect([]);
        foreach ($this->images as $imageName => $image) {
            $savedImage = $image->save($this->fileUploadPath . '/' . $imageName);
            $imageTitles->push($savedImage->basename);
        }

        return $imageTitles;
    }

    /**
     * @return $this
     */
    public function setImageInstances(): ImageMaker
    {
        foreach ($this->files as $file) {
            $this->images[$this->getFileName($file)] = self::makeImage($file);
        }

        return $this;
    }

    /**
     * @param $file
     * @return \Intervention\Image\Image
     */
    public static function makeImage($file): \Intervention\Image\Image
    {
        return Image::make($file);
    }

    /**
     * @throws Throwable
     */
    public function resizeImage(): ImageMaker
    {
        foreach ($this->images as $image) {
            throw_unless($image instanceof \Intervention\Image\Image, new Exception('Image not provided'));
            $width = $image->width();
            $height = $image->height();

            if ($this->constrainWidth && $width > $this->constrainWidth) {
                $image->resize($this->constrainWidth, null, function ($constraint) {
                    $constraint->aspectRatio();
                });
            }

            if ($this->constrainHeight && $height > $this->constrainHeight) {
                $image->resize(null, $this->constrainHeight, function ($constraint) {
                    $constraint->aspectRatio();
                });
            }
        }

        return $this;
    }
}
