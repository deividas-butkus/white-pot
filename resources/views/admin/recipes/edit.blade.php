@extends('admin.layouts.page',['content_title'=>trans('app.recipes'), 'icon'=>'bone'])

@section('content')
    <?php
    if ($model->exists) {
        $tableColor = 'primary';
        $tableName = 'app.edit_entry';
        $btnColor = 'primary';
        $action = 'edit';
        $route = route('admin.recipes.update', $model);
    } else {
        $tableColor = 'success';
        $tableName = 'app.create_entry';
        $btnColor = 'success';
        $action = 'create';
        $route = route('admin.recipes.store');
    }
    ?>
    <section class="content">
        <div class="container-fluid">
            <div class="card card-{{$tableColor}}">

                <div class="card-header">
                    <h3 class="card-title">@lang($tableName)</h3>
                </div>

                <form action="{{$route}}" method="POST">

                    @if($model->exists)
                        @method('PUT')
                    @endif
                    @csrf

                    <div class="card-body row">

                        <div class="form-group col-12">
                            <label for="name">@lang('app.name')</label>
                            <input type="text" class="form-control" name="name" id="name"
                                   value="{{$model->name ?? ''}}" placeholder="@lang('app.enter_name')">
                        </div>

                    </div>

                    <div class="card-body row">

                        <div class="form-group col-6">
                            <label for="cooking_directions">@lang('app.cooking_directions')</label>
                            <textarea class="form-control" name="cooking_directions" id="cooking_directions"
                                      placeholder="@lang('app.enter_cooking_directions')">{{$model->cooking_directions ?? ''}}</textarea>
                        </div>

                        <div class="form-group col-3">
                            <label for="cooking_time">@lang('app.cooking_time')</label>
                            <input type="text" class="form-control" name="cooking_time" id="cooking_time"
                                   value="{{$model->cooking_time ?? ''}}"
                                   placeholder="@lang('app.enter_cooking_time')">
                        </div>

                        <div class="form-group col-3">
                            <label for="portions">@lang('app.portions')</label>
                            <input type="number" class="form-control" name="portions" id="portions"
                                   value="{{$model->portions ?? ''}}"
                                   placeholder="@lang('app.enter_portions')">
                        </div>
                    </div>
{{--                    <div class="card-body row">--}}
{{--                        <div class="form-group col-4">--}}
{{--                            <label for="ingredients">@lang('app.ingredients')</label>--}}
{{--                            <select multiple class="select2" name="ingredients[]" id="ingredients"--}}
{{--                                    data-placeholder="Select ingredient" style="width: 100%;">--}}
{{--                                @foreach($ingredients as $ingredient)--}}
{{--                                    <option value="">@lang('app.select')</option>--}}
{{--                                    <option--}}
{{--                                        {{$model->ingredients->contains($ingredient->id) ? 'selected=selected' : ''}} value="{{$ingredient->id}}">--}}
{{--                                        {{$ingredient->name}}--}}
{{--                                    </option>--}}
{{--                                @endforeach--}}
{{--                            </select>--}}
{{--                        </div>--}}
{{--                    </div>--}}

{{--                    <div class="card-body row">--}}
{{--                        <div class="form-group col-3">--}}
{{--                            <label for="ingredients">@lang('app.ingredients_quantity')</label>--}}
{{--                            @foreach($ingredients as $ingredient)--}}
{{--                                <div class="input-group mb-3">--}}
{{--                                    <span class="input-group-text" id="ingredient">{{ $ingredient->name }}</span>--}}
{{--                                    <input type="text" class="form-control" aria-label="Sizing example input"--}}
{{--                                           aria-describedby="inputGroup-sizing-default">--}}
{{--                                </div>--}}
{{--                            @endforeach--}}
{{--                        </div>--}}
{{--                    </div>--}}

                        <div class="card-body row">
                            <div class="form-group col-6">
                                <label for="ingredients">@lang('app.ingredient')</label>
                                <select class="select2" name="ingredients[]" id="ingredients"
                                        data-placeholder="Select ingredient" style="width: 100%;">
                                    @foreach($ingredients as $ingredient)
                                        <option value="">@lang('app.select')</option>
                                        <option
                                            {{$model->ingredients->contains($ingredient->id) ? 'selected=selected' : ''}} value="{{$ingredient->id}}">
                                            {{$ingredient->name}}
                                        </option>
                                    @endforeach
                                </select>
                            </div>

{{--                            <div class="form-group col-6">--}}
{{--                                <label for="units">@lang('app.unit')</label>--}}
{{--                                <select class="select2" name="ingredients[]" id="units"--}}
{{--                                        data-placeholder="Select ingredient" style="width: 100%;">--}}
{{--                                    @foreach($units as $unit)--}}
{{--                                        <option value="">@lang('app.select')</option>--}}
{{--                                        <option--}}
{{--                                            {{$model->units->contains($unit->id) ? 'selected=selected' : ''}} value="{{$unit->id}}">--}}
{{--                                            {{$unit->name}}--}}
{{--                                        </option>--}}
{{--                                    @endforeach--}}
{{--                                </select>--}}
{{--                            </div>--}}

                        </div>

                    <div class="card-footer">
                        <button type="submit" class="btn btn-{{$btnColor}}">@lang('app.submit')</button>
                    </div>

                </form>

            </div>
        </div>
    </section>
@endsection
