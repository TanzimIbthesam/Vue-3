const { createStore } = require("vuex");

const store=createStore({
    
    state:{
        counter:0,
        todos:[
            {id:1,title:"First Title",description:"Description of first post",done:true},
            {id:2,title:"Second Title",description:"Description of first post",done:true},
            {id:1,title:"First Title",description:"Description of first post",done:false},
        ]
    },
    getters:{
           allTodos(state){
              return state.todos.map((todo)=>todo)
           },
           doneTodos(state){
               return state.todos.map((todo)=>!todo.done)

           },
           todosNotTodos(state){
            return state.todos.map((todo)=>!todo.done)

        }


    },
    mutations:{
        increaseCounter(state){
          return state.counter++;
        }
    },
    actions:{
        increaseCounter(context){
             return context.commit('increaseCounter')
        }
    }
    

});

export default store;