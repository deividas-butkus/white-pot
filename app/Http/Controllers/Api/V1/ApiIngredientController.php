<?php


namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use App\Models\Admin\Ingredient;
use App\Models\Admin\Recipe;

class ApiIngredientController extends Controller
{
    public function index()
    {
        return response(Ingredient::all());
    }

}
