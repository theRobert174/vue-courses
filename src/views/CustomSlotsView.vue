<template>
    <h1>Aprendiendo Slots</h1>
    <button>Abrir Modal</button>
    <modal>
        <!-- <h2>Titulo del Modal</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas delectus consectetur tempore. Vel, dignissimos?</p>
        <button>Salir</button> -->
        <template v-slot:footer>
            <button>Salir</button>
        </template>
        <template v-slot:header>
            <h2>Titulo del modal</h2>
        </template>
        <template v-slot:body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas delectus consectetur tempore. Vel, dignissimos?</p>
        </template>
    </modal>
</template>

<script>
import Modal from '../components/ModalComponent.vue'
export default {
    components: {Modal},
    setup(){

    }
}
</script>

<style>

</style>