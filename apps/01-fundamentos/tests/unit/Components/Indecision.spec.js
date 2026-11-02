import { shallowMount } from "@vue/test-utils"
import Indecision from '@/components/Indecision'
//import fetch from 'jest-fetch-mock'


describe('Indecision component', () => {
    let wrapper
    let clgSpy

    //Mock fetch
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }) )

    beforeEach(() => {
        wrapper = shallowMount(Indecision)
        clgSpy = jest.spyOn(console, 'log')
        jest.clearAllMocks()
    })

    test('Hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Escribir en el input no debe de disparar nada (clg)', async() => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        const input = wrapper.find('input')

        await input.setValue('Hola Mundo')
        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).not.toHaveBeenCalled()

    })

    test('Escribir el símbolo de "?" debe de disparar el getAnswer()', async() => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('Hola Mundo?')

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalled()
    })

    test('Pruebas en getAnswer()', async() => {
        await wrapper.vm.getAnswer()

        // console.log(wrapper.vm.img)
        // console.log(wrapper.vm.answer)

        const img = wrapper.find('img')

        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('yes')
    })

    test('Pruebas en getAnswer() - Fallo de API', async() => {

        fetch.mockImplementationOnce(() => Promise.reject('API is down'))//Simulación de error
        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo cargar del API')
    })
})