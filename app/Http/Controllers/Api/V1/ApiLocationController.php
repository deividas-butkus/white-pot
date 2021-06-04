<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Location;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ApiLocationController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        return response(Location::with('courses')->get());
    }

    /**
     * @param Request $request
     * @param $id
     * @return Response
     */
    public function show(Request $request, $id): Response
    {
        $location = Location::query();

        if ($request->courses) {
            $location->with('courses');
        }

        $location = $location->where('id', $id)->first();

        if (!$location) {
            return response(['status' => 404, 'message' => 'location not found']);
        }

        return response($location);
    }
}
