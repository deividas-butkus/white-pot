<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="{{ route('admin.') }}" class="brand-link">
        <img src="/assets/img/white-pot.png" alt="White Pot logo" class="brand-image img-circle elevation-3"
             style="opacity: .8">
        <span class="brand-text font-weight-light">{{ config('app.name', 'Katilas baltas') }}</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="/assets/img/deividas-butkus.jpg" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <a href="#" class="d-block">{{ Auth::user()->first_name }} {{ Auth::user()->last_name }}</a>
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                     with font-awesome or any other icon font library -->
                <li class="nav-item">
                    <a href="{{ route('admin.users.index') }}" class="nav-link">
                        <i class="nav-icon fas fa-user"></i>
                        <p>
                            @lang('app.users')
                        </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('admin.clients.index') }}" class="nav-link">
                        <i class="nav-icon fas fa-briefcase"></i>
                        <p>
                            @lang('app.clients')
                        </p>
                    </a>
                </li>
                <li class="nav-item ">
                    <a href="{{ route('admin.recipes.index') }}" class="nav-link">
                        <i class="nav-icon fas fa-bone"></i>
                        <p>
                            @lang('app.recipes')
                        </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('admin.ingredients.index') }}" class="nav-link">
                        <i class="nav-icon fas fa-balance-scale-left"></i>
                        <p>
                            @lang('app.ingredients')
                        </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('admin.units.index') }}" class="nav-link">
                        <i class="nav-icon fas fa-weight"></i>
                        <p>
                            @lang('app.units')
                        </p>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
