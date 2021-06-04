@extends('admin.layouts.page',['content_title'=>trans('app.course_requests')])

@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">@lang('app.list')</h3>
                            <div>
                                <a href="{{route('admin.course_requests.create')}}" style = "float:right" class="btn btn-success" href="">@lang('app.new')</a>
                            </div>
                        </div>
                        <div class="card-body">
                            <div id="course_table_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6"></div>
                                    <div class="col-sm-12 col-md-6"></div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <table id="course_table"
                                               class="table table-bordered table-hover dataTable dtr-inline"
                                               role="grid" aria-describedby="example2_info">
                                            <thead>
                                            <tr role="row">
                                                <th class="sorting sorting_asc" tabindex="0" rowspan="1" colspan="1"
                                                    aria-sort="ascending">
                                                    @lang('app.created_at')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.client')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.course')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.location')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.actions')
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($course_requests as $course_request)
                                                <tr class="odd">
                                                    <td>{{$course_request->created_at ?? ''}}</td>
                                                    <td>
                                                        {{$course_request->client ?
                                                          $course_request->client->first_name . ' ' .
                                                          $course_request->client->last_name: ''}}
                                                    </td>
                                                    <td>{{$course_request->course ?  $course_request->course->title : ''}}</td>
                                                    <td>{{$course_request->location ?  $course_request->location->title : ''}}</td>
                                                    <td><a class="btn btn-info"
                                                           href="{{route('admin.course_requests.edit', $course_request->id)}}">@lang('app.edit')</a>
                                                    </td>
                                                </tr>
                                            @endforeach
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
