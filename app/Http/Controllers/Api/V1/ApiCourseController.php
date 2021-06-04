<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Response;

class ApiCourseController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        return response(Course::with('locations')->get());
    }

    /**
     * @param $id
     * @return Response
     */
    public function show($id): Response
    {
        $course = Course::with('locations')->where('id',$id)->first();

        if(!$course){
            return response(['status' => 404, 'message'=>'course not found']);
        }

        return response($course);
    }
}
