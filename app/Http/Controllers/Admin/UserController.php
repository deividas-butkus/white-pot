<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\UpdateUsersRequest;
use Throwable;

class UserController extends Controller
{
    /**
     * @return View
     */
    public function index(): View
    {
        $users = User::with('images')->get();
        return view('admin.users.index', compact('users'));
    }

    /**
     * @return View
     */
    public function create(): View
    {
        return $this->edit(new User());
    }

    /**
     * @param UpdateUsersRequest $request
     * @return RedirectResponse
     */
    public function store(UpdateUsersRequest $request): RedirectResponse
    {
        return $this->update($request, new User());
    }

    /**
     * @param User $user
     * @return View
     */
    public function edit(User $user): View
    {
        $model = $user;
        return view('admin.users.edit', compact('model'));
    }

    /**
     * @param UpdateUsersRequest $request
     * @param User $user
     * @return RedirectResponse
     * @throws Throwable
     */
    public function update(UpdateUsersRequest $request, User $user): RedirectResponse
    {
        $user->createUser($request);
        return redirect()->route('admin.users.index');
    }
}
