<?php

use App\Http\Controllers\Api\V1\ApiCourseController;
use App\Http\Controllers\Api\V1\ApiCourseRequestController;
use App\Http\Controllers\Api\V1\ApiLocationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::prefix('/')->name('api.')->group(function () {
    Route::prefix('courses')->name('courses.')->group(function () {
        Route::get('/', [ApiCourseController::class, 'index']);
        Route::get('{id}', [ApiCourseController::class, 'show']);
    });

    Route::prefix('course_requests')->name('course_requests.')->group(function () {
        Route::post('/', [ApiCourseRequestController::class, 'store']);
    });

    Route::prefix('locations')->name('locations.')->group(function () {
        Route::get('/', [ApiLocationController::class, 'index']);
        Route::get('{id}', [ApiLocationController::class, 'show']);
    });
});
