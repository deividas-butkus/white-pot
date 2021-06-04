@extends('admin.layouts.page',['content_title'=>trans('app.course_requests')])

@section('content')
    <?php
    if ($model->exists) {
        $tableColor = 'primary';
        $action = 'edit';
        $route = route('admin.course_requests.update', $model);
    } else {
        $tableColor = 'success';
        $action = 'create';
        $route = route('admin.course_requests.store');
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
                                <div class="form-group col-4">
                                    <label for="course">@lang('app.client')</label>
                                    <select class="select2" name="client_id" id="client"
                                            data-placeholder="select client" style="width: 100%;">
                                        @foreach($clients as $client)
                                            <option
                                                {{$model->client_id === $client ? 'selected=selected' : ''}} value="{{$client->id}}">
                                                {{$client->first_name}} {{$client->last_name}}
                                            </option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group col-4">
                                    <label for="course">@lang('app.course')</label>
                                    <select class="select2" name="course_id" id="course"
                                            data-placeholder="select course" style="width: 100%;">
                                        @foreach($courses as $course)
                                            <option
                                                {{$model->course_id === $course ? 'selected=selected' : ''}} value="{{$course->id}}">
                                                {{$course->title}}
                                            </option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group col-4">
                                    <label for="course">@lang('app.location')</label>
                                    <select class="select2" name="location_id" id="location" data-placeholder="select location" style="width: 100%;"></select>
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
    @parent
    <script>
        let route = "{{route('admin.course_requests.selections')}}",
            parent = $('#course'),
            target = $('#location');
        parent.on('change.select2', function () {
            let modelId = $(this).val();
            target.select2().val(null)
            App.getSelections(route, target, modelId);
        });
        parent.trigger('change');
    </script>
@endsection
