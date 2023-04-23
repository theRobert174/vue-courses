<template>
    <h1>Lista de tareas de Thanos</h1>
    <h4>Tareas: {{ pending.length }}</h4>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()


        return{
            pending: computed(() => store.getters['pendingTodos'])
        }
    }
}
</script>

<style>

</style>