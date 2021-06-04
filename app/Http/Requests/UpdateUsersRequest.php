<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUsersRequest extends FormRequest
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
            'email' => 'required|email|unique:users,email,' . ($this->route('user')->id ?? ''),
            'address' => 'required|string|max:255',
            'password' => 'sometimes|string',
        ];
    }
}
