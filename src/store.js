import Vue from 'vue'
import Vuex from 'vuex'
import { DATASET } from './dataset'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        todos: [],
    },
    getters: {
        todos(state) {
            return state.todos
        },
        incompleteTodos(state) {
            return state.todos.filter(todo => todo.completed == false)
        },
        completeTodos(state) {
            return state.todos.filter(todo => todo.completed == true)
        }
    },
    mutations: {
        SET_TODOS(state, todos) {
            state.todos = todos
        },
        ADD_TODO(state, todo) {
            state.todos = [...state.todos, todo]
        },
        TOGGLE_TODO(state, { id, completed }) {
            state.todos.find(todo => todo.id == id).completed = completed
        }
    },
    actions: {
        async setTodos(context) {
            /*
                For the sake of the example, assume that this comment block is an api call 
                and we get DATASET, which is a list of todo items, as a response.  
            */
            context.commit('SET_TODOS', DATASET)
        },
        async addTodo(context, todo) {
            /*
                Api call to add the todo in the params to the database
                Return the newly added todo
            */
            context.commit('ADD_TODO', todo)
        },
        async toggleTodo(context, { id, completed }) {
            /*
                Api call that will set the completed state of the todo to true in the database 
            */
            context.commit('TOGGLE_TODO', { id, completed })
        }

    },
})

