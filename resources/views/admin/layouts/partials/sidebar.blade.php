<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="https://laravel.com/" class="brand-link">
        <img src="{{asset('assets/admin/images/logo.png')}}" alt="logo" class="brand-image elevation-3"
             style="opacity: .8">
        <span class="brand-text font-weight-light">@lang('app.programming_courses')</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="/storage/uploads/images/thumb/{{Auth::user()->image ?? ''}}" style="width:4rem" class="img-circle elevation-1" alt="User Image">
            </div>
            <div class="info">
                <a href="#" class="d-block">{{Auth::user() ? Auth::user()->getFullNameAttribute() : ''}}</a>
            </div>
        </div>

        <!-- SidebarSearch Form -->
{{--        <div class="form-inline">--}}
{{--            <div class="input-group" data-widget="sidebar-search">--}}
{{--                <input class="form-control form-control-sidebar" type="search" placeholder="Search"--}}
{{--                       aria-label="Search">--}}
{{--                <div class="input-group-append">--}}
{{--                    <button class="btn btn-sidebar">--}}
{{--                        <i class="fas fa-search fa-fw"></i>--}}
{{--                    </button>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                     with font-awesome or any other icon font library -->
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                            @lang('app.courses')
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{route('admin.courses.index')}}" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>@lang('app.courses')</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{route('admin.course_requests.index')}}" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>@lang('app.course_requests')</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="{{route('admin.users.index')}}" class="nav-link">
                        <i class="nav-icon fas fa-user"></i>
                        <p>
                            @lang('app.users')
                        </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{route('admin.clients.index')}}" class="nav-link">
                        <i class="nav-icon fas fa-briefcase"></i>
                        <p>
                            @lang('app.clients')
                        </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{route('admin.locations.index')}}" class="nav-link">
                        <i class="nav-icon fas fa-map-marker"></i>
                        <p>
                            @lang('app.locations')
                        </p>
                    </a>
                </li>
                <!-- logout --><li class="nav-item">
                    <form id="logout" action="{{ route('logout') }}" method="POST"
                          style="display: none;">
                        @csrf
                    </form>
                    <a href="#logout" onclick="event.preventDefault();document.getElementById('logout').submit()" class="nav-link">
                        <i class="nav-icon fas fa-sign-out-alt"></i>
                        <p>
                            @lang('app.logout')
                        </p>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
