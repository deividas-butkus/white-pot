<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\ApiRecipeController;
use App\Http\Controllers\Api\V1\ApiLocationController;
use App\Http\Controllers\Api\V1\ApiIngredientController;

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

Route::prefix('/')->name('api.')->group(function () {
    Route::prefix('recipes')->name('recipes.')->group(function () {
        Route::get('/', [ApiRecipeController::class, 'index']);
        Route::post('/create', [ApiRecipeController::class, 'create']);
    });
    Route::prefix('ingredients')->name('ingredients.')->group(function () {
        Route::get('/', [ApiIngredientController::class, 'index']);
    });
});
