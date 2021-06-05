<template>
    <div>
        <ul class="list-unstyled">
            <li v-for="recipe in recipes" :key="recipe">
                {{ recipe.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'Table',
    data() {
        return {
            name: 'name',
            cooking_directions: 'cooking_directions',
            cooking_time: 'cooking_time',
            portions: 'portions',
        };
    },
    methods: {
        ...mapActions(['recipes/getRecipes'])
    },
    computed: {
        ...mapGetters('recipes', {
            recipes: 'getRecipes',
        }),
    },
};
</script>
