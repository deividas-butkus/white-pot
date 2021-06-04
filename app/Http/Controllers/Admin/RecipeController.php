<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Ingredient;
use App\Models\Admin\Recipe;
use App\Http\Requests\Admin\UpdateRecipesRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Carbon;

/**
 * Class RecipeController
 * @package App\Http\Controllers\Admin
 */
class RecipeController extends Controller
{
    /**
     * @return View
     */
    public function index(): View
    {
        $recipes = Recipe::with('ingredients')->get();
        dd($recipes);
        return view('admin.recipes.index', compact('recipes'));
    }

    /**
     * @return View
     */
    public function create(): View
    {
        return $this->edit(new Recipe());
    }

    /**
     * @param UpdateRecipesRequest $request
     * @return RedirectResponse
     */
    public function store(UpdateRecipesRequest $request): RedirectResponse
    {
        return $this->update($request, new Recipe());
    }

    /**
     * @param Recipe $recipe
     * @return View
     */
    public function edit(Recipe $recipe): View
    {
        $model = $recipe->load('ingredients');
        $ingredients = Ingredient::all();
        return view('admin.recipes.edit', compact('model', 'ingredients'));
    }

    /**
     * @param UpdateRecipesRequest $request
     * @param Recipe $recipe
     * @return RedirectResponse
     */
    public function update(UpdateRecipesRequest $request, Recipe $recipe): RedirectResponse
    {
        $recipe->updateRecipe($request);
        return redirect()->route('admin.recipes.index');
    }

    /**
     * @param Recipe $recipe
     * @return \Illuminate\Contracts\Foundation\Application|RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function destroy(Recipe $recipe)
    {
        $recipe->deleted_at = Carbon::now();
        $recipe->save();
        return redirect(route('admin.recipes.index'));
    }
}
