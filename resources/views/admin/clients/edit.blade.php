@extends('admin.layouts.page',['content_title'=>trans('app.clients'), 'icon'=>'briefcase'])

@section('content')
    <?php
    if ($model->exists) {
        $tableColor = 'primary';
        $tableName = 'app.edit_entry';
        $btnColor = 'primary';
        $action = 'edit';
        $route = route('admin.clients.update', $model);
    } else {
        $tableColor = 'success';
        $tableName = 'app.create_entry';
        $btnColor = 'success';
        $action = 'create';
        $route = route('admin.clients.store');
    }
    ?>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">

                    <div class="card card-{{ $tableColor }}">
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
                                    <label for="email">@lang('app.email')</label>
                                    <input type="email" class="form-control" name="email" id="email"
                                           value="{{$model->email ?? ''}}" placeholder="@lang('app.enter_email')">
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
