<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\View\View;


class HomeController extends Controller
{
    /**
     * @return View
     */
    public function index(): view
    {
        return view('admin.home');
    }
}
