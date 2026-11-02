import { computed } from "vue"
import { useStore } from "vuex"

const useUI = () => {
  const store = useStore()

  return {
    //Side menu options
    sideMenuOpen: computed({
      get() {
        return store.getters['ui/isSideMenuOpen']
      },
      set() {
        store.commit('ui/toggleSideMenu')
      }
    }),
    toggleSideMenu: () => store.commit('ui/toggleSideMenu'),
  }
}

export default useUI
