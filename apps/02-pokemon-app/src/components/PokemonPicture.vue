<template>
    <div class="pokemon-container">
        <img v-if="!showPokemon" class="hidden-pokemon" :src="imgSrc">
        <img class="fade-in shown-pokemon" v-if="showPokemon" :src="imgSrc" alt="Pokemon">
    </div>
</template>

<script>
export default {
    props:{
        pokemonId: {
            type: Number,
            required: true,
            default: 1
        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    computed: {
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }

}
</script>

<style scoped>
    
    /* Pokemon Picture */
    .pokemon-container {
        height: 200px;
    }
    img {
        height: 200px;
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
    }
    .hidden-pokemon {
        filter: brightness(0);
    }
    .shown-pokemon{
        filter: drop-shadow(1px 1px 20px rgba(255, 242, 0, 0.5));
    }

</style>