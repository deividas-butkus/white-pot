@extends('admin.layouts.page',['content_title'=>'Recipes', 'icon'=>'bone'])

@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">@lang('app.list')</h3>
                            <div>
                                <a href="{{route('admin.recipes.create')}}" style="float:right" class="btn btn-success"
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
                                        <table id="recipe_table"
                                               class="table table-bordered table-hover dataTable dtr-inline"
                                               role="grid" aria-describedby="example2_info">
                                            <thead>
                                            <tr role="row">
                                                <th class="sorting sorting_asc" tabindex="0" rowspan="1" colspan="1"
                                                    aria-sort="ascending">
                                                    @lang('app.name')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.cooking_directions')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.cooking_time')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.portions')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.editors_choice')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.ingredients')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="2">
                                                    @lang('app.actions')
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($recipes as $recipe)
                                                <tr class="odd">
                                                    <td>{{$recipe->name ?? ''}}</td>
                                                    <td>{{$recipe->cooking_directions ?? ''}}</td>
                                                    <td>{{$recipe->cooking_time ?? ''}}</td>
                                                    <td>{{$recipe->portions ?? ''}}</td>
                                                    <td class="text-center">{!! $recipe->editors_choice ? html_entity_decode('&#9734;') : '' !!}</td>
                                                    <td>
                                                        <ul>
                                                            @foreach($recipe->ingredients as $ingredient)
                                                                <li>{{$ingredient->name ?? ''}}</li>
                                                            @endforeach
                                                        </ul>

                                                    </td>

                                                    <td><a class="btn btn-primary"
                                                           href="{{route('admin.recipes.edit', $recipe->id)}}">@lang('app.edit')</a>
                                                    </td>
                                                    <td>
                                                        <form action="{{route('admin.recipes.destroy', $recipe->id)}}"
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
