<template>
  <q-page class="flex column q-pa-md">
    <!-- <h1>Typography</h1> -->
    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>
    <q-separator/>
    <span class="text-subtitle1">Subtitle1</span>
    <span class="text-subtitle2">Subtitle2</span>
    <q-separator/>
    <p class="text-body1">In eu cillum consectetur deserunt eu dolore labore sunt reprehenderit aliqua excepteur veniam duis veniam. Aliqua veniam sit sunt nulla officia nostrud officia eu non sunt dolore aliqua elit. Veniam do laboris magna sint sunt anim ad nulla non aliqua consectetur reprehenderit. Do do incididunt anim laborum culpa sunt deserunt sunt id proident ex amet. Cupidatat anim duis pariatur culpa. Proident ea esse Lorem incididunt fugiat laboris sit.</p>
    <p class="text-body2">In eu cillum consectetur deserunt eu dolore labore sunt reprehenderit aliqua excepteur veniam duis veniam. Aliqua veniam sit sunt nulla officia nostrud officia eu non sunt dolore aliqua elit. Veniam do laboris magna sint sunt anim ad nulla non aliqua consectetur reprehenderit. Do do incididunt anim laborum culpa sunt deserunt sunt id proident ex amet. Cupidatat anim duis pariatur culpa. Proident ea esse Lorem incididunt fugiat laboris sit.</p>
    <q-separator/>
    <span class="text-weight-thin">Proident tempor laboris mollit cillum deserunt ut.</span>
    <span class="text-weight-light">Cillum veniam velit eiusmod sit aliqua cupidatat exercitation fugiat.</span>
    <span class="text-weight-regular">In nisi proident irure officia elit mollit Lorem Lorem minim quis incididunt sit.</span>
    <span class="text-weight-medium">Pariatur culpa ut eu cupidatat ex nisi consectetur voluptate aute id.</span>
    <span class="text-weight-bold">Lorem aliquip ipsum eiusmod consequat dolore nisi cupidatat anim.</span>
    <span class="text-weight-bolder">Irure magna enim cillum dolor officia proident veniam aliquip pariatur sunt commodo magna ipsum.</span>

    <q-btn color="primary" :label="sideMenuOpen ? 'Close menu' : 'Open menu'" class="q-mt-md" @click="toggleSideMenu"/>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import useUI from '../composables/useUI'

export default defineComponent({
  name: "TypographyPage",
  setup(){
    const { toggleSideMenu, sideMenuOpen } = useUI()
    return{
      toggleSideMenu, sideMenuOpen
    }
  }
});
</script>
