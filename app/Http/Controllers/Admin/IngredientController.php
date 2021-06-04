<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Ingredient;
use App\Models\Admin\Unit;
use App\Http\Requests\Admin\UpdateIngredientsRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\View\View;
use Carbon\Carbon;


/**
 * Class IngredientController
 * @package App\Http\Controllers\Admin
 */
class IngredientController extends Controller
{
    /**
     * @return View
     */
    public function index(): View
    {
        $ingredients = Ingredient::all();
        return view('admin.ingredients.index', compact('ingredients'));
    }

    /**
     * @return View
     */
    public function create(): View
    {
        return $this->edit(new Ingredient());
    }

    /**
     * @param UpdateIngredientsRequest $request
     * @return RedirectResponse
     */
    public function store(UpdateIngredientsRequest $request): RedirectResponse
    {
        return $this->update($request, new Ingredient());
    }

    /**
     * @param Ingredient $ingredient
     * @return View
     */
    public function edit(Ingredient $ingredient): View
    {
        $model = $ingredient->load('units');
        $units = Unit::all();
        return view('admin.ingredients.edit', compact('model', 'units'));
    }

    /**
     * @param UpdateIngredientsRequest $request
     * @param Ingredient $ingredient
     * @return RedirectResponse
     */
    public function update(UpdateIngredientsRequest $request, Ingredient $ingredient): RedirectResponse
    {
        $ingredient->updateIngredient($request);
        return redirect()->route('admin.ingredients.index');
    }

    /**
     * @param Ingredient $ingredient
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function destroy(Ingredient $ingredient)
    {
        $ingredient->deleted_at = Carbon::now();
        $ingredient->save();
        return redirect(route('admin.ingredients.index'));
    }
}
