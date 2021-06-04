<!DOCTYPE html>
<html lang="lt">

@include('front.layouts.partials.head')

<body class="{{$body_class ?? ''}}">

@yield('page')

@include('front.layouts.partials.javascripts')
@yield('js')
</body>
</html>
