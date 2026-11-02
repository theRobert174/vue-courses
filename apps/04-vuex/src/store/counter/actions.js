import getRandomInt from "../../helpers/getRandomInt";

export const incrementRandomInt = async ({commit}) => {
    commit('setLoading',true)
    const randomint = await getRandomInt()

    commit('incrementBy',randomint)
    commit('setLoading',false)

}