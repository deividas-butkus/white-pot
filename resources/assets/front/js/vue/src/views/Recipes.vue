<template>
    <ContainerLayout>
        <h1>Recipes</h1>
        <!--        <Table/>-->
        <ul>
            <li v-for="recipe in recipes">{{ recipe.name }}</li>
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
