# white-pot

## Project setup
* copy `env.example`, it to `.env` file and add environment variables
* `composer install` to install a dependency manager for php
* `npm install` to install client side dependencies

## Project launch
### In main directory:
* `php artisan serve` to launch api server
* run an appropriate command for compilation:
  - `npm run dev`: "npm run development",
  - `npm run development`: "mix",
  - `npm run watch`: "mix watch",
  - `npm run watch-poll`: "mix watch -- --watch-options-poll=1000",
  - `npm run hot`: "mix watch --hot",
  - `npm run prod`: "npm run production",
  - `npm run production`: "mix --production"
