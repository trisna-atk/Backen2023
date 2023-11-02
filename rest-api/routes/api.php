<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use app\Http\Controllers\AnimalController;
use app\Http\Controllers\StudentController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//route untuk menampilkan semua animal
Route::get('animals', [AnimalController::class, "index"]);

//route untuk menambahkan hewan
Route::post('animals', [AnimalController::class, 'store']);

//Route untuk mengedit hewan 
Route::put('animals/{id}', [AnimalController::class, "update"]);

//Route untuk menghapus hewan 
Route::delete('animals/{id}', [AnimalController::class, "destroy"]);


//untuk menampilkan semua siswa
Route::get('students', [StudentController::class, "index"]);

//untuk menambahkan data siswa
Route::post('students', [StudentController::class, 'store']);

//untuk mengedit data siswa
Route::put('students/{id}', [StudentController::class, 'update']);

//untuk menghapus siswa
Route::delete('students/{id}', [StudentController::class, 'destroy']);
