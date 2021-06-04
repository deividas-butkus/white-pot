@extends('admin.layouts.page',['content_title'=>trans('app.users'), 'icon'=>'user'])

@section('content')
    <?php
    if ($model->exists) {
        $tableColor = 'primary';
        $tableName = 'app.edit_entry';
        $btnColor = 'primary';
        $action = 'edit';
        $route = route('admin.users.update', $model);
    } else {
        $tableColor = 'success';
        $tableName = 'app.create_entry';
        $btnColor = 'success';
        $action = 'create';
        $route = route('admin.users.store');
    }
    ?>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">

                    @if ($errors->any())
                        @foreach ($errors->all() as $error)
                            <div class="mb-2 text-danger">{{$error}}</div>
                        @endforeach
                    @endif

                    <div class="card card-{{ $tableColor }}">
                        <div class="card-header">
                            <h3 class="card-title">@lang($tableName)</h3>
                        </div>

                        <form action="{{ $route }}" method="POST">

                            @if($model->exists)
                                @method('PUT')
                            @endif
                            @csrf
                            <div class="card-body row">
                                <div class="form-group col-4">
                                    <label for="first_name">@lang('app.name')</label>
                                    <input type="text" class="form-control" name="first_name" id="first_name" value="{{ $model->first_name ?? ''}}" placeholder="@lang('app.enter_first_name')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="last_name">@lang('app.last_name')</label>
                                    <input type="text" class="form-control" name="last_name" id="last_name" value="{{ $model->last_name ?? ''}}" placeholder="@lang('app.enter_last_name')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="email">@lang('app.email')</label>
                                    <input type="email" class="form-control" name="email" id="email" value="{{ $model->email ?? ''}}" placeholder="@lang('app.enter_email')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="phone">@lang('app.phone')</label>
                                    <input type="text" class="form-control" name="phone" id="phone" value="{{ $model->phone ?? ''}}" placeholder="@lang('app.enter_phone')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="address">@lang('app.address')</label>
                                    <input type="text" class="form-control" name="address" id="address" value="{{ $model->address ?? ''}}" placeholder="@lang('app.enter_address')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="password">@lang('app.password')</label>
                                    <input type="password" class="form-control" name="password" id="password" value="{{ $model->password ?? ''}}" placeholder="@lang('app.enter_password')">
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
