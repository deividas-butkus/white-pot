@extends('admin.layouts.app',['body_class'=>' sidebar-mini layout-fixed'])

@section('page')
    <div class="wrapper">
        <!-- Preloader -->
        <div class="preloader flex-column justify-content-center align-items-center">
            <img class="animation__shake" src="{{asset('assets/admin/images/logo.png')}}" alt="logo" height="60" width="60">
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
                            <h1 class="m-0">{{$content_title ?? 'Welcome'}}</h1>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">Dashboard v1</li>
                            </ol>
                        </div><!-- /.col -->
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
