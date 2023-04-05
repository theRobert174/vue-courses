import { ref } from "vue";
const useCounter = (initValue) => {
    const counter = ref(initValue)

    return{
      counter,
      increase: () => counter.value++,
      decrease: () => counter.value--
    }
}

export default useCounter