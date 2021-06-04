<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Query\Builder;
use Illuminate\Http\Response;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

/**
 * App\Models\CourseRequest
 *
 * @property int $id
 * @property int $client_id
 * @property int $course_id
 * @property int $location_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 * @property-read Client $client
 * @property-read Course $course
 * @property-read Location $location
 * @method static \Illuminate\Database\Eloquent\Builder|CourseRequest newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CourseRequest newQuery()
 * @method static Builder|CourseRequest onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|CourseRequest query()
 * @method static \Illuminate\Database\Eloquent\Builder|CourseRequest whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CourseRequest whereCourseId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CourseRequest whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CourseRequest whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CourseRequest whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CourseRequest whereLocationId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CourseRequest whereUpdatedAt($value)
 * @method static Builder|CourseRequest withTrashed()
 * @method static Builder|CourseRequest withoutTrashed()
 * @mixin Eloquent
 */
class CourseRequest extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'client_id',
        'course_id',
        'location_id',
    ];

    /**
     * @return BelongsTo
     */
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }

    /**
     * @return BelongsTo
     */
    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }

    /**
     * @return BelongsTo
     */
    public function location(): BelongsTo
    {
        return $this->belongsTo(Location::class);
    }

    public function makeNewRequest($request): Response
    {
        $client = Client::where('email', $request->email)->first();
        $course = CourseRequest::where(['course_id' => $request->course_id, 'client_id' => $client->id, 'location_id' => $request->location_id])->first();

        if($course){
            return response(['status'=>'failed','message'=>'course request already registered']);
        }

        DB::transaction(function () use ($request, $client) {
            if (!$client) {
                $client = Client::create([
                    'first_name' => $request->first_name,
                    'last_name' => $request->last_name,
                    'phone' => $request->phone,
                    'email' => $request->email,
                    'address' => $request->address,
                ]);
            }

            $this->fill([
                'course_id' => $request->course_id,
                'client_id' => $client->id,
                'location_id' => $request->location_id,
            ])->save();

        });

        return response(['status'=>'ok','message'=>'course ' . $this->course->title . ' request registered successfully']);
    }
}
