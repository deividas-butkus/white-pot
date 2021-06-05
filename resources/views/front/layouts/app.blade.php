<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

@include('front.layouts.partials.head')

<body class="{{$body_class ?? ''}}">

@yield('page')

@include('front.layouts.partials.javascripts')
{{--@yield('js')--}}
</body>
</html>
