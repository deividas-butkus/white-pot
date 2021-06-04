<?php

namespace App\Models\Admin;

use App\Http\Requests\Admin\UpdateIngredientsRequest;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

class Ingredient extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'price_per_gram',
    ];

    /**
     * @return BelongsToMany
     */
    public function units(): BelongsToMany
    {
        return $this->belongsToMany(Unit::class);
    }

    public function updateIngredient(UpdateIngredientsRequest $request): void
    {
        DB::transaction(function () use($request) {
            $this->fill($request->all())->save();
            $this->units()->sync($request->units);
        });
    }
}
