<?php

namespace App\Http\Controllers\Admin\Courses;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateCourseRequestsRequest;
use App\Models\Client;
use App\Models\Course;
use App\Models\CourseRequest;
use App\Models\Location;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


class CourseRequestController extends Controller
{
    /**
     * @return View
     */
    public function index(): view
    {
        $course_requests = CourseRequest::with(['course', 'client', 'location'])->get();
        return view('admin.course_requests.index', compact('course_requests'));
    }

    /**
     * @return View
     */
    public function create(): view
    {
        return $this->edit(new CourseRequest());
    }

    /**
     * @param UpdateCourseRequestsRequest $request
     * @return RedirectResponse
     */
    public function store(UpdateCourseRequestsRequest $request): RedirectResponse
    {
        return $this->update($request, new CourseRequest());
    }

    /**
     * @param CourseRequest $courseRequest
     * @return View
     */
    public function edit(CourseRequest $courseRequest): view
    {
        $model = $courseRequest;
        $clients = Client::get();
        $courses = Course::get();
        $locations = Location::get();

        return view('admin.course_requests.edit', compact('model', 'clients', 'courses', 'locations'));
    }

    /**
     * @param UpdateCourseRequestsRequest $request
     * @param CourseRequest $courseRequest
     * @return RedirectResponse
     */
    public function update(UpdateCourseRequestsRequest $request, CourseRequest $courseRequest): RedirectResponse
    {
        $courseRequest->fill($request->all())->save();
        return redirect()->route('admin.course_requests.index');
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function selections(Request $request): Response
    {
        $courseId = $request->modelId;
        $term = $request->searchTerm;

        $locations = Location::with('courses')->whereHas('courses', function ($query) use ($courseId) {
            $query->where('courses.id', $courseId);
        })->where(function ($query) use ($term) {
            return $term ? $query->where('title', 'like', $term . '%') : $query;
        })->get();

        $results = [];
        foreach ($locations as $location) {
            $results[] = [
                'id' => $location->id,
                'text' => $location->title
            ];
        }

        return response($results);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}
