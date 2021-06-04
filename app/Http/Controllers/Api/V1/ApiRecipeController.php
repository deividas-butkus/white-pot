<?php


namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use App\Models\Admin\Recipe;

class ApiRecipeController extends Controller
{
    public function index()
    {
        return response(Recipe::all());
    }

}
