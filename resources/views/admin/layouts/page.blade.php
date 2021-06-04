@extends('admin.layouts.app',['body_class'=>'sidebar-mini layout-fixed'])

@section('page')
    <div class="wrapper">
        <!-- Preloader -->
        <div class="preloader flex-column justify-content-center align-items-center">
            <img class="animation__shake" src="/assets/img/white-pot.png" alt="White Pot logo" height="60" width="60"
                 sty>
        </div>
        <!-- NAVBAR-->
    @include('admin.layouts.partials.navbar')

    <!-- SIDEBAR-->
        @include('admin.layouts.partials.sidebar')

        <div class="content-wrapper {{$class ?? ''}}">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">
                                <i class="nav-icon fas fa-{{$icon ?? ''}}"></i>
                                {{$content_title ?? 'Admin Page Blade'}}
                            </h1>
                        </div>
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- CONTENT-->
            @yield('content')

        </div>
        <!-- FOOTER-->
        @include('admin.layouts.partials.footer')
    </div>
@endsection

@section('js')
    @parent
@endsection
