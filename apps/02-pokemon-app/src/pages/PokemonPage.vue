<template>
  <h1 v-if="!pokemon">Espere por favor ...</h1>
  <div v-else>
    <div style="display: relative; height: 110px;">
      <h1>Who's that Pokemon?</h1>
      <h1 class="back-title">Who's that Pokemon?</h1>
    </div>
    <PokemonPicture style="" :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer"/>

    <template v-if="showAnswer" >
      <h2 class="fade-in" :class="{'glow-correct' : isCorrect, 'glow-incorrect' : !isCorrect}">{{message}}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'
// console.log(getPokemonOptions())

export default {
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data() {
      return {
        pokemonArr: [],
        pokemon: null,
        showPokemon: false,
        message: '',
        showAnswer: false,
        isCorrect: false
      }
    },
    methods:{
      async mixPokemonArray(){
        this.pokemonArr = await getPokemonOptions()

        const rndInt = Math.floor(Math.random() * 4)
        this.pokemon = this.pokemonArr[rndInt]
      },

      checkAnswer(selectedId){
        // console.log('Respuesta de evento options', selectedId)
          this.showPokemon = true
          this.showAnswer = true

        if(selectedId === this.pokemon.id){
          this.isCorrect = true
          this.message = `Correcto, ${this.pokemon.name}`
        }
        else {
          this.isCorrect = false
          this.message = `Oops, era ${this.pokemon.name}`
        }
        //console.log('HolaMundo',this.showPokemon)
      },

      async newGame(){
        this.showPokemon = this.showAnswer = false
        this.pokemonArr = []
        this.pokemon = null
        await this.mixPokemonArray()
      }
    },
    mounted(){
      this.mixPokemonArray()
    }
}
</script>

<style scoped>
  @import url('http://fonts.cdnfonts.com/css/pokemon-hollow');
  h1{
    font-family: 'Pokemon Solid', sans-serif;
    color: gold;
    position: absolute;
    right: 37%;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
  }
  .back-title{
    font-family: 'Pokemon Hollow', sans-serif;
    color: blue;
  }

  .glow-correct {
  text-align: center;
  -webkit-animation: glow-correct 1s ease-in-out infinite alternate;
  -moz-animation: glow-correct 1s ease-in-out infinite alternate;
  animation: glow-correct 1s ease-in-out infinite alternate;
  }

  @keyframes glow-correct {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #2ee600, 0 0 40px #2ee600, 0 0 50px #2ee600, 0 0 60px #2ee600, 0 0 70px #2ee600;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #7cff4d, 0 0 40px #7cff4d, 0 0 50px #7cff4d, 0 0 60px #7cff4d, 0 0 70px #7cff4d, 0 0 80px #7cff4d;
    }
  }

  .glow-incorrect {
  text-align: center;
  -webkit-animation: glow-incorrect 1s ease-in-out infinite alternate;
  -moz-animation: glow-incorrect 1s ease-in-out infinite alternate;
  animation: glow-incorrect 1s ease-in-out infinite alternate;
  }

  @keyframes glow-incorrect {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60000, 0 0 40px #e60000, 0 0 50px #e60000, 0 0 60px #e60000, 0 0 70px #e60000;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #ff4d4d, 0 0 40px #ff4d4d, 0 0 50px #ff4d4d, 0 0 60px #ff4d4d, 0 0 70px #ff4d4d, 0 0 80px #ff4d4d;
    }
  }
</style>