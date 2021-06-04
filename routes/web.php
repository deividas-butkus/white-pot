<?php

use App\Http\Controllers\Admin\ClientController;
use App\Http\Controllers\Admin\Courses\CourseRequestController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\LocationController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\Courses\CourseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    return view('front.index');
});

Route::prefix('admin')
    ->middleware('auth')
    ->name('admin.')->group(function(){
    Route::get('/', [HomeController::class, 'index']);
    Route::resource('users',UserController::class);
    Route::resource('clients',ClientController::class);
    Route::resource('courses',CourseController::class);
    Route::resource('locations',LocationController::class);
    Route::resource('course_requests',CourseRequestController::class);

    Route::get('course_requestss/selections',[CourseRequestController::class,'selections'])->name('course_requests.selections');
});

Auth::routes();
