<?php

namespace App\Models\Admin;

use App\Http\Requests\Admin\UpdateRecipesRequest;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

/**
 * Class Recipe
 * @package App\Models\Admin
 */
class Recipe extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * @var string[]
     */
    protected $fillable = [
        'name',
        'cooking_directions',
        'cooking_time',
        'portions',
    ];

    /**
     * @return BelongsToMany
     */
    public function ingredients(): BelongsToMany
    {
        return $this->belongsToMany(Ingredient::class)->with('units');
    }

    public function updateRecipe(UpdateRecipesRequest $request): void
    {
        DB::transaction(function () use($request) {
            $this->fill($request->all())->save();
            $this->ingredients()->sync($request->ingredients);
        });
    }
}
