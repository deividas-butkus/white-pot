<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCoursesRequest extends FormRequest
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
            'title' => 'required|string|max:255',
            'locations' => 'required|array',
            'locations.*' => 'exists:locations,id', // check each item in the array
            'description' => 'nullable|string',
        ];
    }
}
