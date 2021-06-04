<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\ClientController;
use App\Http\Controllers\Admin\RecipeController;
use App\Http\Controllers\Admin\IngredientController;
use App\Http\Controllers\Admin\UnitController;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return view('front.index');
});

Route::prefix('admin')
    ->middleware('auth')
    ->name('admin.')->group(function(){
        Route::get('/', [HomeController::class, 'index']);
        Route::resource('users',UserController::class);
        Route::resource('clients',ClientController::class);
        Route::resource('recipes',RecipeController::class);
        Route::resource('ingredients',IngredientController::class);
        Route::resource('units',UnitController::class);
    });

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
