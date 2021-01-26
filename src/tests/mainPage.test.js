
// и компонент, который хотим протестировать
import { shallowMount } from '@vue/test-utils'
import MainPage from '../components/mainPage/mainPage.vue'

describe('Компонент MainPage', () => {
  // Теперь монтируем компонент и получаем wrapper
  const wrapper = shallowMount(MainPage)

  // it('отображает корректную разметку', () => {
  //   expect(wrapper.html()).toContain(`<p>Hi</p>`)
  // })

  it('нажатие на div.hello должно поменять текст', async () => {
    let hello = wrapper.find('.test')
    expect(hello.text()).toBe('Hello Kitty')
    hello.trigger('click')
    await wrapper.vm.$nextTick()
    expect(hello.text()).toBe('Buy Kitty')
  })

})

  
  
