import { shallowMount } from '@vue/test-utils'
import MsCell from '@/components/presentations/MsCell.vue'

describe('MsCell.vue', () => {
  test('open=false の場合は count が描画されないこと', () => {
    const wrapper = shallowMount(MsCell, {
      propsData: {
        count: '8',
        open: false
      }
    })

    expect(wrapper.text()).not.toContain('8')
  })

  test('open=true の場合は count が描画されること', () => {
    const wrapper = shallowMount(MsCell, {
      propsData: {
        count: '8',
        open: true
      }
    })

    expect(wrapper.text()).toContain('8')
  })

  test('クリックしたら click イベントが発火されること', () => {
    const wrapper = shallowMount(MsCell, {
      propsData: {
        count: '8',
        open: true
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
        count: '8',
        open: true
      }
    })

    // 右クリックイベントを発火
    wrapper.trigger('contextmenu')

    // right-click イベントとして通知されていること
    expect(wrapper.emitted('right-click')).not.toBeUndefined()
  })
})
