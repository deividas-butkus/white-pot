<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateLocationsRequest;
use App\Models\Location;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;


class LocationController extends Controller
{
    /**
     * @return View
     */
    public function index(): view
    {
        $locations = Location::get();
        return view('admin.locations.index', compact('locations'));
    }

    /**
     * @return View
     */
    public function create(): View
    {
        return $this->edit(new Location());
    }

    /**
     * @param UpdateLocationsRequest $request
     * @return RedirectResponse
     */
    public function store(UpdateLocationsRequest $request): RedirectResponse
    {
        return $this->update($request, new Location());
    }

    /**
     * @param Location $location
     * @return View
     */
    public function edit(Location $location): View
    {
        $model = $location;
        return view('admin.locations.edit', compact('model'));
    }

    /**
     * @param UpdateLocationsRequest $request
     * @param Location $location
     * @return RedirectResponse
     */
    public function update(UpdateLocationsRequest $request, Location $location): RedirectResponse
    {
        $location->fill($request->all())->save();
        return redirect()->route('admin.locations.index');
    }
}
