<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiUpdateCourseRequestsRequest;
use App\Models\CourseRequest;
use Illuminate\Http\Response;

class ApiCourseRequestController extends Controller
{
    /**
     * @param ApiUpdateCourseRequestsRequest $request
     * @return Response
     */
    public function store(ApiUpdateCourseRequestsRequest $request): Response
    {
        return (new CourseRequest())->makeNewRequest($request);
    }
}
