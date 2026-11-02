<template>
    <h1>Aprendiendo Slots</h1>
    <button @click="openModal">Abrir Modal</button>


    <modal v-if="isOpen" @on:close="closeModal" title="Hola Mundo">
        <!-- <h2>Titulo del Modal</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas delectus consectetur tempore. Vel, dignissimos?</p>
        <button>Salir</button> -->
        <template v-slot:footer>
            <button @click="closeModal">Salir</button>
        </template>
        <template v-slot:header>
            <h2>Titulo del modal</h2>
        </template>
        <template v-slot:body>
            <p>Lorem ipsum dolor sit amet.</p>
        </template>

        <template v-slot:exposed="{newTitle}">
            <h2>{{ newTitle }}</h2>
        </template>
    </modal>
</template>

<script>
import { ref } from 'vue'
import Modal from '../components/ModalComponent.vue'
export default {
    components: {Modal},
    setup(){

        const isOpen = ref(false)
        return{
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,
        }
    }
}
</script>

<style>

</style>