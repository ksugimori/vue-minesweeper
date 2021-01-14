import { shallowMount } from '@vue/test-utils'
import MsCell from '@/components/molecules/MsCell.vue'

describe('MsCell.vue', () => {
  it('opened=false の場合は count が描画されないこと', () => {
    const wrapper = shallowMount(MsCell, {
      propsData: {
        text: '8',
        opened: false
      }
    })

    expect(wrapper.text()).not.toContain('8')
  })

  it('opened=true の場合は count が描画されること', () => {
    const wrapper = shallowMount(MsCell, {
      propsData: {
        text: '8',
        opened: true
      }
    })

    expect(wrapper.text()).toContain('8')
  })

  it('クリックしたら cellClick イベントが発火されること', () => {
    const wrapper = shallowMount(MsCell, {
      propsData: {
        text: '8',
        opened: true
      }
    })

    // click イベントを発火
    wrapper.trigger('click')

    // cellClick イベントとして通知されていること
    expect(wrapper.emitted().cellClick).not.toBeUndefined()
  })

  it('右クリックしたら cellRightClick イベントが発火されること', () => {
    const wrapper = shallowMount(MsCell, {
      propsData: {
        text: '8',
        opened: true
      }
    })

    // 右クリックイベントを発火
    wrapper.trigger('contextmenu')

    // cellRightClick イベントとして通知されていること
    expect(wrapper.emitted().cellRightClick).not.toBeUndefined()
  })
})
