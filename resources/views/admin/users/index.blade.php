@extends('admin.layouts.page',['content_title'=>trans('app.users')])

@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">@lang('app.list')</h3>
                            <div>
                                <a href="{{route('admin.users.create')}}" style = "float:right" class="btn btn-success" href="">@lang('app.new')</a>
                            </div>
                        </div>
                        <div class="card-body">
                            <div id="user_table_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6"></div>
                                    <div class="col-sm-12 col-md-6"></div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <table id="user_table"
                                               class="table table-bordered table-hover dataTable dtr-inline"
                                               role="grid" aria-describedby="example2_info">
                                            <thead>
                                            <tr role="row">
                                                <th class="sorting sorting_asc" tabindex="0" rowspan="1" colspan="1"
                                                    aria-sort="ascending">
                                                    @lang('app.created_at')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.first_name')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.last_name')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.phone')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.address')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.image')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.actions')
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($users as $user)
                                                <tr class="odd">
                                                    <td>{{$user->created_at ?? ''}}</td>
                                                    <td>{{$user->first_name ?? ''}}</td>
                                                    <td>{{$user->last_name ?? ''}}</td>
                                                    <td>{{$user->phone ?? ''}}</td>
                                                    <td>{{$user->address ?? ''}}</td>
                                                    <td>
                                                        @foreach($user->images as $image)
                                                            <a href="/storage/uploads/images/original/{{$image->title ?? ''}}" class="table_image_link">
                                                                <img src="/storage/uploads/images/thumb/{{$image->title ?? ''}}" alt="not available" width="80"/>
                                                            </a>
                                                        @endforeach
                                                    </td>
                                                    <td><a class="btn btn-info"
                                                           href="{{route('admin.users.edit', $user->id)}}">@lang('app.edit')</a>
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
