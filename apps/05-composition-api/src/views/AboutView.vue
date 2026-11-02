<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="changeTitle">changeTitle</button>
  </div>
</template>
<script>
import { 
  ref,
  onBeforeMount, 
  onMounted, 
  onBeforeUpdate, 
  onUpdated, 
  onBeforeUnmount, 
  onUnmounted, 
  onErrorCaptured, 
  onRenderTracked, 
  onRenderTriggered, 
  onActivated, 
  onDeactivated 
} from 'vue'
export default {
  setup(){
    const title = ref('About')
    onBeforeMount(() => {
      console.log('Se llamo onBeforeMount')
    }),
    onMounted(() => {
      console.log('Se llamo onMounted')
    }),
    onBeforeUpdate(() => {
      console.log('Se llamo onBeforeUpdate')
    }),
    onUpdated(() => {
      console.log('Se llamo onUpdated')
    }),
    onBeforeUnmount(() => {
      console.log('Se llamo onBeforeUnmount')
    }),
    onUnmounted(() => {
      console.log('Se llamo onUnmounted')
    }),
    onErrorCaptured(() => {
      console.log('Se llamo onErrorCaptured')
    }),
    onRenderTracked(() => {
      console.log('Se llamo onRenderTracked')
    }),
    onRenderTriggered(() => {
      console.log('Se llamo onRenderTriggered')
    }),
    onActivated(() => {
      console.log('Se llamo onActivated')
    }),
    onDeactivated(() => {
      console.log('Se llamo onDeactivated')
    })
    
    return { title, changeTitle: () => title.value = 'New About'}
  }
}
</script>