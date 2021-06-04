@extends('admin.layouts.page',['content_title'=>trans('app.users')])

@section('content')
    <?php
    if ($model->exists) {
        $tableColor = 'primary';
        $action = 'edit';
        $route = route('admin.users.update', $model);
    } else {
        $tableColor = 'success';
        $action = 'create';
        $route = route('admin.users.store');
    }
    ?>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">

                    <div class="card card-{{$tableColor}}">
                        <div class="card-header">
                            <h3 class="card-title">@lang('app.new_entry')</h3>
                        </div>

                        <form action="{{$route}}" method="POST" enctype="multipart/form-data">

                            @if($model->exists)
                                @method('PUT')
                            @endif
                            @csrf()
                            <div class="card-body row">
                                <div class="form-group col-4">
                                    <label for="first_name">@lang('app.first_name')</label>
                                    <input type="text" class="form-control" name="first_name" id="first_name"
                                           value="{{$model->first_name ?? ''}}"
                                           placeholder="@lang('app.enter_first_name')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="last_name">@lang('app.last_name')</label>
                                    <input type="text" class="form-control" name="last_name" id="last_name"
                                           value="{{$model->last_name ?? ''}}"
                                           placeholder="@lang('app.enter_last_name')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="email">@lang('app.email')</label>
                                    <input type="email" class="form-control" name="email" id="email"
                                           value="{{$model->email ?? ''}}" placeholder="@lang('app.enter_email')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="phone">@lang('app.phone')</label>
                                    <input type="text" class="form-control" name="phone" id="phone"
                                           value="{{$model->phone ?? ''}}" placeholder="@lang('app.enter_phone')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="address">@lang('app.address')</label>
                                    <input type="text" class="form-control" name="address" id="address"
                                           value="{{$model->address ?? ''}}" placeholder="@lang('app.enter_address')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="password">@lang('app.password')</label>
                                    <input {{$model->exists ? 'disabled' : ''}} type="password" class="form-control"
                                           name="password" id="password"
                                           value="{{$model->password ?? ''}}" placeholder="@lang('app.enter_password')">
                                </div>
                                <div class="form-group col-4">
                                    <div class="image_container">
                                        @foreach($model->images as $image)
                                            <div class="image_block">
                                                <span class="remove_image"><i class="fas fa-window-close"></i></span>
                                                 <a href="/storage/uploads/images/original/{{$image->title ?? ''}}">
                                                    <img src="/storage/uploads/images/thumb/{{$image->title ?? ''}}" alt="not available" width="80"/>
                                                </a>
                                                 <input type="hidden" name="old_images[]" class="images_input" value="{{$image->title}}">
                                            </div>
                                        @endforeach
                                    </div>
                                    <input multiple type="file" name="images[]" class="images_input" id="user_images">
                                    <label class="images" for="images">@lang('app.select_image')</label>
                                    <div id="image_display">

                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">@lang('app.submit')</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@section('js')
    <script>
        $('.remove_image').click(function(){
            $(this).closest('.image_block').remove();
        });
    </script>
@endsection
