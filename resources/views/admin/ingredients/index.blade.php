@extends('admin.layouts.page', ['content_title'=>trans('app.ingredients'), 'icon'=>'balance-scale-left'])

@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">@lang('app.list')</h3>
                            <div>
                                <a href="{{route('admin.ingredients.create')}}" style="float:right" class="btn btn-success"
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
                                                    @lang('app.price_per_gram')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.units')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="2">
                                                    @lang('app.actions')
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($ingredients as $ingredient)
                                                <tr class="odd">
                                                    <td>{{$ingredient->name ?? ''}}</td>
                                                    <td>{{$ingredient->price_per_gram ?? ''}}</td>
                                                    <td>
                                                        <ul>
                                                            @foreach($ingredient->units as $unit)
                                                                <li>{{$unit->name ?? ''}}</li>
                                                            @endforeach
                                                        </ul>
                                                    </td>

                                                    <td><a class="btn btn-primary"
                                                           href="{{route('admin.ingredients.edit', $ingredient->id)}}">@lang('app.edit')</a>
                                                    </td>
                                                    <td>
                                                        <form action="{{route('admin.ingredients.destroy', $ingredient->id)}}"
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
