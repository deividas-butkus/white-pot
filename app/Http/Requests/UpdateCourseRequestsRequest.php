<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCourseRequestsRequest extends FormRequest
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
            'client_id' => 'required|integer|exists:clients,id',
            'course_id' => 'required|integer|exists:courses,id',
            'location_id' => 'required|integer|exists:locations,id',
        ];
    }
}
