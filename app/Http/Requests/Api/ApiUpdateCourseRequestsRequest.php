<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class ApiUpdateCourseRequestsRequest extends FormRequest
{
    /**
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * @return string[]
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'phone' => 'required|string|max:50',
//            'email' => 'required|email|unique:clients,email,' . ($this->route('client')->id ?? ''),
            'email' => 'required|email',
            'address' => 'required|string|max:255',
            'course_id' => 'required|integer|exists:courses,id',
            'location_id' => 'required|integer|exists:locations,id',
        ];
    }
}
