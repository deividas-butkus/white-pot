<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\UpdateClientsRequest;

class ClientController extends Controller
{
    /**
     * @return View
     */
    public function index(): view
    {
        $clients = Client::get();
        return view('admin.clients.index', compact('clients'));
    }

    /**
     * @return View
     */
    public function create(): view
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
    public function edit(Client $client): view
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
}
