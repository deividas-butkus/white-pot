@extends('admin.layouts.page',['content_title'=>trans('app.ingredients'), 'icon'=>'balance-scale-left'])

@section('content')
    <?php
    if ($model->exists) {
        $tableColor = 'primary';
        $tableName = 'app.edit_entry';
        $btnColor = 'primary';
        $action = 'edit';
        $route = route('admin.ingredients.update', $model);
    } else {
        $tableColor = 'success';
        $tableName = 'app.create_entry';
        $btnColor = 'success';
        $action = 'create';
        $route = route('admin.ingredients.store');
    }
    ?>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">

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

                                <div class="form-group col-4">
                                    <label for="name">@lang('app.name')</label>
                                    <input type="text" class="form-control" name="name" id="name"
                                           value="{{$model->name ?? ''}}" placeholder="@lang('app.enter_name')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="price_per_gram">@lang('app.price_per_gram')</label>
                                    <input type="number" class="form-control" name="price_per_gram" id="price_per_gram"
                                           value="{{$model->price_per_gram ?? ''}}"
                                           placeholder="@lang('app.enter_price_per_gram')">
                                </div>
                            </div>

                            <div class="card-body row">
                                <div class="form-group col-4">
                                    <label for="units">@lang('app.units')</label>
                                    <select multiple class="select2" name="units[]" id="units"
                                            data-placeholder="Select unit" style="width: 100%;">
                                        @foreach($units as $unit)
                                            <option value="">@lang('app.select')</option>
                                            <option
                                                {{$model->units->contains($unit->id) ? 'selected=selected' : ''}} value="{{$unit->id}}">
                                                {{$unit->name}}
                                            </option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="card-footer">
                                <button type="submit" class="btn btn-{{$btnColor}}">@lang('app.submit')</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
