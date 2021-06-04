@extends('admin.layouts.page',['content_title'=>trans('app.courses')])

@section('content')
    <?php
        if($model->exists){
            $tableColor = 'primary';
            $action = 'edit';
            $route = route('admin.courses.update',$model);
        }else{
            $tableColor = 'success';
            $action = 'create';
            $route = route('admin.courses.store');
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
                                    <label for="first_name">@lang('app.title')</label>
                                    <input type="text" class="form-control" name="title" id="title" value= "{{$model->title ?? ''}}" placeholder="@lang('app.enter_title')">
                                </div>
                                <div class="form-group col-6">
                                    <label for="location">@lang('app.location')</label>
                                    <select multiple class="select2" name="locations[]" id="locations"
                                            data-placeholder="select locations" style="width: 100%;">
                                        @foreach($locations as $location)
                                            <option
                                                {{$model->locations->contains($location->id) ? 'selected=selected' : ''}} value="{{$location->id}}">
                                                {{$location->title}}
                                            </option>
                                        @endforeach
                                    </select>
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
