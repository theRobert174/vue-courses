<template>
    <h1>Lista de tareas de Thanos</h1>
    <h4>Tareas: {{ pending.length }}</h4>
    <hr>
    <button class="active">Todos</button>
    <button>Pendientes</button>
    <button>Completados</button>

    <div>
        <ul>
            <li v-for="todo in all" :key="todo.id" :class="{'completed' : todo.completed}">{{ todo.text }}</li>
        </ul>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()


        return{
            pending: computed(() => store.getters['pendingTodos']),
            all: computed(() => store.getters['allTodos']),
            completed: computed(() => store.getters['completedTodos'])
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