const {createStore}=require("vuex");
import CoachModules from './modules/coaches/index.js'
const store=createStore({
    modules:{
     coaches:CoachModules
    }
});

export default store;

