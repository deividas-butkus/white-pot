<?php

namespace App\Http\Traits;

trait FileUpload
{
    /**
     * @var array
     */
    public array $files;
    /**
     * @var string
     */
    public string $fileUploadPath;
    /**
     * @var string
     */
    static string $uploadRoot = 'storage/uploads';

    /**
     * @param $path
     */
    public function setPath($path): void
    {
        if (!file_exists(self::$uploadRoot)) {
            mkdir(self::$uploadRoot, 0775);
        }

        if (!file_exists($path)) {
            mkdir($path, 0775);
        }

        $this->fileUploadPath = $path;
    }

    /**
     * @param $uploadRoot
     * @param $fileTypeDir
     * @param $pathName
     * @return string
     */
    public static function getPath($uploadRoot, $fileTypeDir, $pathName): string
    {
        return public_path($uploadRoot . '/' . $fileTypeDir . '/' . $pathName);
    }

    /**
     * @param $file
     * @return string
     */
    public function getFileExtension($file): string
    {
        return $file->getClientOriginalExtension();
    }

    /**
     * @param $file
     * @return string
     */
    public function getFileName($file): string
    {
        return $file->getClientOriginalName();
    }
}
