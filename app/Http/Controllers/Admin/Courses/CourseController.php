<?php

namespace App\Http\Controllers\Admin\Courses;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateCoursesRequest;
use App\Models\Course;
use App\Models\Location;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;


class CourseController extends Controller
{
    /**
     * @return View
     */
    public function index(): view
    {
        $courses = Course::get();
        return view('admin.courses.index', compact('courses'));
    }

    /**
     * @return View
     */
    public function create(): view
    {
        return $this->edit(new Course());
    }

    /**
     * @param UpdateCoursesRequest $request
     * @return RedirectResponse
     */
    public function store(UpdateCoursesRequest $request): RedirectResponse
    {
        return $this->update($request, new Course());
    }

    /**
     * @param Course $course
     * @return View
     */
    public function edit(Course $course): view
    {
        $model = $course->load('locations');
        $locations = Location::get();
        return view('admin.courses.edit', compact('model','locations'));
    }

    /**
     * @param UpdateCoursesRequest $request
     * @param Course $course
     * @return RedirectResponse
     */
    public function update(UpdateCoursesRequest $request, Course $course): RedirectResponse
    {
        $course->updateCourses($request);
        return redirect()->route('admin.courses.index');
    }
}
