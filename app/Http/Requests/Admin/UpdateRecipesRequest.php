<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class UpdateRecipesRequest
 * @package App\Http\Requests\Admin
 */
class UpdateRecipesRequest extends FormRequest
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

    /**
     * @return string[]
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'cooking_directions' => 'required|string',
            'cooking_time' => 'required|string|max:20',
            'portions' => 'required|integer',
        ];
    }
}
