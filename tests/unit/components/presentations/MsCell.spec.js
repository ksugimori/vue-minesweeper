import { shallowMount } from '@vue/test-utils'
import MsCell from '@/components/presentations/MsCell.vue'

describe('MsCell.vue', () => {
  test('reverse=false の場合は count が描画されないこと', () => {
    const wrapper = shallowMount(MsCell, {
      propsData: {
        text: '8',
        reverse: false
      }
    })

    expect(wrapper.text()).not.toContain('8')
  })

  test('reverse=true の場合は count が描画されること', () => {
    const wrapper = shallowMount(MsCell, {
      propsData: {
        text: '8',
        reverse: true
      }
    })

    expect(wrapper.text()).toContain('8')
  })

  test('クリックしたら click イベントが発火されること', () => {
    const wrapper = shallowMount(MsCell, {
      propsData: {
        text: '8',
        reverse: true
      }
    })

    // click イベントを発火
    wrapper.trigger('click')

    // click イベントとして通知されていること
    expect(wrapper.emitted('click')).not.toBeUndefined()
  })

  test('右クリックしたら right-click イベントが発火されること', () => {
    const wrapper = shallowMount(MsCell, {
      propsData: {
        text: '8',
        reverse: true
      }
    })

    // 右クリックイベントを発火
    wrapper.trigger('contextmenu')

    // right-click イベントとして通知されていること
    expect(wrapper.emitted('right-click')).not.toBeUndefined()
  })
})
