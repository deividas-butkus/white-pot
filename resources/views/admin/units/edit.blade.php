@extends('admin.layouts.page',['content_title'=>trans('app.units'), 'icon'=>'weight'])

@section('content')
    <?php
    if ($model->exists) {
        $tableColor = 'primary';
        $tableName = 'app.edit_entry';
        $btnColor = 'primary';
        $action = 'edit';
        $route = route('admin.units.update', $model);
    } else {
        $tableColor = 'success';
        $tableName = 'app.create_entry';
        $btnColor = 'success';
        $action = 'create';
        $route = route('admin.units.store');
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
                                    <label for="weight">@lang('app.weight')</label>
                                    <input type="number" class="form-control" name="weight" id="weight"
                                           value="{{$model->weight ?? ''}}" placeholder="@lang('app.enter_weight')">
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
