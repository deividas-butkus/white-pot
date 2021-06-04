<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecipesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipes', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->text('cooking_directions');
            $table->text('cooking_time');
            $table->integer('portions');
            $table->boolean('editors_choice')->default(false);
            $table->timestamps();
            $table->softDeletes();

            $table->unsignedBigInteger('client_id');
            $table->unsignedBigInteger('recipe_category_id');
            $table->unsignedBigInteger('review_id');

            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');
            $table->foreign('recipe_category_id')->references('id')->on('recipe_categories')->onDelete('cascade');
            $table->foreign('review_id')->references('id')->on('reviews')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recipes');
    }
}
