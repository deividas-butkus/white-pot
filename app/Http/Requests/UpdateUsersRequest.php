<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class UpdateUsersRequest
 * @package App\Http\Requests
 */
class UpdateUsersRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . ($this->route('user')->id ?? ''),
            'phone' => 'required|string|max:50',
            'address' => 'required|string|max:255',
            'password' => 'sometimes|string',
        ];
    }
}
