<template>
    <h1>Lista de tareas de Thanos</h1>
    <h4>Tareas: {{ pending.length }}</h4>
    <hr>
    <button :class="{'active' : currentTab === 'all'}" @click="currentTab = 'all'">Todos</button>
    <button :class="{'active' : currentTab === 'pending'}" @click="currentTab = 'pending'">Pendientes</button>
    <button :class="{'active' : currentTab === 'completed'}" @click="currentTab = 'completed'">Completados</button>

    <div>
        <ul>
            <li v-for="todo in getTodosByTab" :key="todo.id" :class="{'completed' : todo.completed}" @dblclick="toggleTodo(todo.id)">{{ todo.text }}</li>
        </ul>
    </div>

    <button @click="isOpen = true">Crear todo</button>
    <modal v-if="isOpen" @on:close="isOpen = false">
        <template v-slot:header>
            <h1>Nueva Tarea</h1>
        </template>
        <template v-slot:body>
            <form @submit.prevent="createTodo(newTodoText); isOpen = false">
                <input type="text" placeholder="Nueva tarea" v-model="newTodoText">
            </form>
            <br>
            <br>
            <button type="submit" @click.prevent="createTodo(newTodoText); isOpen = false">Crear</button>
        </template>
    </modal>
</template>

<script>
/*import { ref, computed } from 'vue'
import { useStore } from 'vuex'*/
import  useTodos  from "../composables/useTodos"
import Modal from "@/components/ModalComponent.vue"
import { ref } from 'vue'
export default {
    components: {Modal},
    setup(){
        /*const store = useStore()

        const currentTab = ref('all')

        return{
            currentTab,
            pending: computed(() => store.getters['pendingTodos']),
            all: computed(() => store.getters['allTodos']),
            completed: computed(() => store.getters['completedTodos']),

            getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),

            toggleTodo: (id) => store.commit('toggleTodo', id)
        }*/
        const { pending, currentTab, getTodosByTab, toggleTodo, createTodo} = useTodos()
        return {
            pending, currentTab, getTodosByTab, toggleTodo, createTodo,
            isOpen: ref(false),
            newTodoText: ref('')
        }
    }
}
</script>

<style scoped>
    div{
        display: flex;
        justify-content: center;
        text-align: center;
    }
    ul{
        width: 300px;
        text-align: left;
    }
    li{
        cursor: pointer;
    }
    .active{
        background-color: #2c3e50;
        color: white;
    }
    .completed{
        text-decoration: line-through;
    }
</style>