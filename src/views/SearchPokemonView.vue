<template>
    <h1>Buscar pokemon: {{ pokemonId }}</h1>
    <form @submit.prevent="onSumbit">
        <input type="number" placeholder="Numero de pokemon" autofocus v-model="pokemonId">
    </form>
    <br>
    <span>Presione enter para buscar</span>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from "vue-router";
export default {
    setup(){
        const router = useRouter()
        const pokemonId = ref(1)

        return{
            pokemonId,

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