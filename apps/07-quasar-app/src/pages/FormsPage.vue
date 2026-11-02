<template>
  <q-page class="q-ma-md">
    <span class="text-h3">Forms</span>
    <q-separator spaced/>

    <div class="row justify-center">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pt-t"
        >
          <q-input
            filled
            type="email"
            v-model="userForm.email"
            label="Email *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'The field must be filled',
              isValidEmail
            ]"
          />

          <q-input
            filled
            type="password"
            v-model="userForm.password"
            label="Password *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'The field must be filled']"
          />

          <q-input
            filled
            type="password"
            v-model="userForm.password_confirmation"
            label="Repeat password *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'The field must be filled',
              isSamePassword
            ]"
          />

          <q-checkbox right-label v-model="userForm.conditions" label="Terms and Conditions"
            :style="userForm.errorInConditions && !userForm.conditions && 'color:red'" />

          <div class="row justify-end">
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
            <q-btn unelevated label="Submit" type="submit" color="primary"/>
          </div>
        </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from 'quasar'

export default defineComponent({
  name: "FormsPage",
  setup(){

    const $q = useQuasar()



    const userForm = ref({
      email: '',
      password: '',
      password_confirmation: '',
      conditions: false,
      errorInConditions: false
    })

    return{
      userForm,
      onSubmit(){
        userForm.value.errorInConditions = false
        if(!userForm.value.conditions){
          $q.notify({
            type: 'negative',
            message: 'Please accept the terms and conditions',
            color: 'red'
          })
          userForm.value.errorInConditions = true
          return
        }
        console.log(userForm.value)
      },
      onReset(){
        userForm.value = {
          email: '',
          password: '',
          password_confirmation: '',
          conditions: false,
          errorInConditions: false
        }
      },
      isValidEmail( val ) {
          const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
          return emailPattern.test(val) || 'El correo no parece ser válido';
      },
      isSamePassword(val){
        return (val === userForm.value.password) || 'The password is not the same'
      },
    }
  }
});
</script>
