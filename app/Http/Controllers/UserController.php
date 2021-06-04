<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Contracts\View\View;
use App\Http\Requests\UpdateUsersRequest;
use Illuminate\Http\RedirectResponse;
use Carbon\Carbon;

/**
 * Class UserController
 * @package App\Http\Controllers
 */
class UserController extends Controller
{
    /**
     * @return View
     */
    public function index(): View
    {
        $users = User::all();
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
     */
    public function update(UpdateUsersRequest $request, User $user): RedirectResponse
    {
        $user->fill($request->all())->save();
        return redirect()->route('admin.users.index');
    }

    /**
     * @param User $user
     * @return \Illuminate\Contracts\Foundation\Application|RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function destroy(User $user)
    {
        $user->deleted_at = Carbon::now();
        $user->save();
        return redirect(route('admin.users.index'));
    }
}
