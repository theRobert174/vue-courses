<template>
    <h1>Buscar pokemon: {{ pokemonId }}</h1>
    <form @submit.prevent="onSumbit">
        <input type="number" placeholder="Numero de pokemon" v-model="pokemonId" ref="txtSearchId">
    </form>
    <br>
    <span>Presione enter para buscar</span>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from "vue-router";
export default {
    setup(){
        const router = useRouter()
        const pokemonId = ref(1)
        const txtSearchId = ref()

        onActivated(() => {
            // txtSearchId.value.focus()
            txtSearchId.value.select()
        })

        return{
            pokemonId, txtSearchId,

            onSumbit: () => {
                console.log('pokemon a buscar', pokemonId.value)
                router.push({name: 'pokemon-id', params: { id: pokemonId.value}})
            }
        }
    }
}
</script>

<style>

</style>