<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Client;
use App\Http\Requests\Admin\UpdateClientsRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Carbon;

/**
 * Class ClientController
 * @package App\Http\Controllers\Admin
 */
class ClientController extends Controller
{
    /**
     * @return View
     */
    public function index(): View
    {
        $clients = Client::all();
        return view('admin.clients.index', compact('clients'));
    }

    /**
     * @return View
     */
    public function create(): View
    {
       return $this->edit(new Client());
    }

    /**
     * @param UpdateClientsRequest $request
     * @return RedirectResponse
     */
    public function store(UpdateClientsRequest $request): RedirectResponse
    {
        return $this->update($request, new Client());
    }

    /**
     * @param Client $client
     * @return View
     */
    public function edit(Client $client): View
    {
        $model = $client;
        return view('admin.clients.edit', compact('model'));
    }

    /**
     * @param UpdateClientsRequest $request
     * @param Client $client
     * @return RedirectResponse
     */
    public function update(UpdateClientsRequest $request, Client $client): RedirectResponse
    {
        $client->fill($request->all())->save();
        return redirect()->route('admin.clients.index');
    }

    /**
     * @param Client $client
     * @return \Illuminate\Contracts\Foundation\Application|RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function destroy(Client $client)
    {
        $client->deleted_at = Carbon::now();
        $client->save();
        return redirect(route('admin.clients.index'));
    }
}
