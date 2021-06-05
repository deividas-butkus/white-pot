<template>
    <ContainerLayout>
        <h1>Recipes</h1>
        <!--        <Table/>-->
        <ul>
            <li v-for="recipe in recipes" :key="recipe.name">
                <h4>{{ recipe.name }}</h4>
                <p><strong>Paruošimo nurodymai: </strong>{{recipe.cooking_directions}}</p>
                <p><strong>Paruošimo laikas: </strong>{{recipe.cooking_time}} min.</p>
                <p><strong>Porcijos: </strong>{{recipe.portions}}</p>
            </li>
        </ul>
        <ul>
        </ul>
    </ContainerLayout>
</template>


<script>
import ContainerLayout from '@/layouts/ContainerLayout.vue';
import {mapActions, mapGetters} from 'vuex';
// import Table from '@/components/recipes/Table.vue';

export default {
    name: 'Recipes',
    components: {
        ContainerLayout,
    },
    computed: {
        ...mapGetters('recipes', {
            recipes: 'getRecipes',
        }),
    },
    created() {
        this.$store.dispatch('recipes/getRecipes');
    }
    ,
}
;
</script>
