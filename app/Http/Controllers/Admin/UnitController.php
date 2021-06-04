<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Unit;
use Illuminate\Contracts\View\View;
use App\Http\Requests\Admin\UpdateUnitsRequest;
use Illuminate\Http\RedirectResponse;
use Carbon\Carbon;

/**
 * Class UnitController
 * @package App\Http\Controllers\Admin
 */
class UnitController extends Controller
{
    /**
     * @return View
     */
    public function index(): View
    {
        $units = Unit::all();
        return view('admin.units.index', compact('units'));
    }

    /**
     * @return View
     */
    public function create(): View
    {
        return $this->edit(new Unit());
    }

    /**
     * @param UpdateUnitsRequest $request
     * @return RedirectResponse
     */
    public function store(UpdateUnitsRequest $request): RedirectResponse
    {
        return $this->update($request, new Unit());
    }

    /**
     * @param Unit $unit
     * @return View
     */
    public function edit(Unit $unit): View
    {
        $model = $unit;
        return view('admin.units.edit', compact('model'));
    }

    /**
     * @param UpdateUnitsRequest $request
     * @param Unit $unit
     * @return RedirectResponse
     */
    public function update(UpdateUnitsRequest $request, Unit $unit): RedirectResponse
    {
        $unit->fill($request->all())->save();
        return redirect()->route('admin.units.index');
    }

    /**
     * @param Unit $unit
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function destroy(Unit $unit)
    {
        $unit->deleted_at = Carbon::now();
        $unit->save();
        return redirect(route('admin.units.index'));
    }
}
