<!DOCTYPE html>
<html lang="lt">

@include('admin.layouts.partials.head')

<body class="{{$body_class ?? ''}}">

@yield('page')

@include('admin.layouts.partials.javascripts')
@yield('js')
</body>
</html>
