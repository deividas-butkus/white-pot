<?php


namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use App\Models\Admin\Recipe;
use Illuminate\Http\Response;

/**
 * Class ApiRecipeController
 * @package App\Http\Controllers\Api\V1
 */
class ApiRecipeController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        return response(Recipe::all());
    }

//    public function create(): Response
//    {
//        Recipe::created();
//    }

}
