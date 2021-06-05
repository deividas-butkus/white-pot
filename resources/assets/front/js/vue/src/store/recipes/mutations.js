export default {

   SAVE_RECIPES(state, recipes) {
        state.recipes = recipes;
    },

    SAVE_ERROR(state, errMsg) {
        state.errMsg = errMsg;
    },
};
