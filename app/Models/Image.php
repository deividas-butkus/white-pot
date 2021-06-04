<?php

namespace App\Models;

use App\Http\Services\ImageMaker;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Throwable;

class Image extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
    ];

    /**
     * @param Request $request
     * @return mixed
     * @throws Throwable
     */
    public static function handleImageInsert(Request $request): collection
    {
        //upload images
        $imageTitles = Image::uploadImages($request->images);
        //store images to db
        $imageIds = Image::storeImages($imageTitles)->pluck('id');
        //find old images for sync, merge with new ids, return all ids for sync
        return Image::mergeOldImages($request->old_images ?? [], $imageIds);
    }

    /**
     * @param array $images
     * @return Collection
     * @throws Throwable
     */
    public static function uploadImages(?array $images): collection
    {
        $imageTitles = collect([]);
        if ($images) {
            //upload thumb
            (new ImageMaker($images, ImageMaker::getThumbPath(), 100, null))->resizeImage()->upload();
            //upload original
            $imageTitles = (new ImageMaker($images, ImageMaker::getOriginalPath(), 600, null))->resizeImage()->upload();
        }

        return $imageTitles;
    }

    /**
     * @param Collection $imageTitles
     * @return Collection
     */
    public static function storeImages(collection $imageTitles): collection
    {
        $storedImages = collect([]);
        foreach ($imageTitles as $imageTitle) {
            $image = (new Image())->where('title', $imageTitle)->first() ?: new Image();
            $image->fill(['title' => $imageTitle])->save();
            $storedImages[] = $image;
        }

        return $storedImages;
    }

    /**
     * @param array $oldImages
     * @param Collection $imageIds
     * @return Collection
     */
    public static function mergeOldImages(array $oldImages, collection $imageIds): collection
    {
        $oldImageIds = Image::whereIn('title', $oldImages)->pluck('id');
        return $imageIds->merge($oldImageIds);
    }

}
