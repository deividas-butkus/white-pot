@extends('admin.layouts.page', ['content_title'=>trans('app.units'), 'icon'=>'weight'])

@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">@lang('app.list')</h3>
                            <div>
                                <a href="{{route('admin.units.create')}}" style="float:right" class="btn btn-success"
                                   href="">@lang('app.new')</a>
                            </div>
                        </div>
                        <div class="card-body">
                            <div id="client_table_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6"></div>
                                    <div class="col-sm-12 col-md-6"></div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <table id="client_table"
                                               class="table table-bordered table-hover dataTable dtr-inline"
                                               role="grid" aria-describedby="example2_info">
                                            <thead>
                                            <tr role="row">
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.name')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.weight')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="2">
                                                    @lang('app.actions')
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($units as $unit)
                                                <tr class="odd">
                                                    <td>{{$unit->name ?? ''}}</td>
                                                    <td>{{$unit->weight ?? ''}}</td>
                                                    <td><a class="btn btn-primary"
                                                           href="{{route('admin.units.edit', $unit->id)}}">@lang('app.edit')</a>
                                                    </td>
                                                    <td>
                                                        <form action="{{route('admin.units.destroy', $unit->id)}}"
                                                              method="POST">
                                                            @csrf
                                                            @method('DELETE')
                                                            <button type="submit"
                                                                    class="btn btn-danger">@lang('app.destroy')</button>
                                                        </form>
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
