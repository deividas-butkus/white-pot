@extends('admin.layouts.page',['content_title'=>trans('app.locations')])

@section('content')
    <?php
        if($model->exists){
            $tableColor = 'primary';
            $action = 'edit';
            $route = route('admin.locations.update',$model);
        }else{
            $tableColor = 'success';
            $action = 'create';
            $route = route('admin.locations.store');
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

                        <form action="{{$route}}" method="POST">

                            @if($model->exists)
                                @method('PUT')
                            @endif
                            @csrf()
                            <div class="card-body row">
                                <div class="form-group col-6">
                                    <label for="title">@lang('app.title')</label>
                                    <input type="text" class="form-control" name="title" id="title" value= "{{$model->title ?? ''}}" placeholder="@lang('app.enter_title')">
                                </div>
                                <div class="form-group col-12">
                                    <label for="description">@lang('app.description')</label>
                                    <textarea class="form-control" name="description" id="description" placeholder="@lang('app.enter_description')">{{$model->description ?? ''}}</textarea>
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
