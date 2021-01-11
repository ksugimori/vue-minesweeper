import { mount } from '@vue/test-utils'
import Row from '@/components/layout/Row.vue'
import MsCell from '@/components/layout/MsCell.vue'

describe('Row.vue', () => {
  it('配列数だけセルが作成されること', () => {
    const cells = [
      {
        count: 1,
        isOpen: false,
      },
      {
        count: 2,
        isOpen: false,
      },
      {
        count: 3,
        isOpen: false,
      }
    ];

    const wrapper = mount(Row, {
      propsData: {
        cells: cells,
        onClickMsCell: () => { },
      }
    })

    expect(wrapper.findAllComponents(MsCell).length).toBe(3);
  })

  it('セルをクリックすると cellClick イベントが発火され、インデックスが引数として渡されること', () => {
    const cells = [
      {
        count: 1,
        isOpen: false,
      },
      {
        count: 2,
        isOpen: false,
      },
      {
        count: 3,
        isOpen: false,
      }
    ];

    const wrapper = mount(Row, {
      propsData: {
        cells: cells,
      }
    })

    // ひとつずつ MsCell をクリック
    wrapper.findAllComponents(MsCell).at(0).trigger('click');
    wrapper.findAllComponents(MsCell).at(1).trigger('click');
    wrapper.findAllComponents(MsCell).at(2).trigger('click');

    // それぞれ引数に index が渡されていること
    expect(wrapper.emitted().cellClick[0][0]).toBe(0);
    expect(wrapper.emitted().cellClick[1][0]).toBe(1);
    expect(wrapper.emitted().cellClick[2][0]).toBe(2);
  })

  it('セルを右クリックすると cellRightClick イベントが発火され、インデックスが引数として渡されること', () => {
    const cells = [
      {
        count: 1,
        isOpen: false,
      },
      {
        count: 2,
        isOpen: false,
      },
      {
        count: 3,
        isOpen: false,
      }
    ];

    const wrapper = mount(Row, {
      propsData: {
        cells: cells,
      }
    })

    // ひとつずつ MsCell を右クリック
    wrapper.findAllComponents(MsCell).at(0).trigger('contextmenu');
    wrapper.findAllComponents(MsCell).at(1).trigger('contextmenu');
    wrapper.findAllComponents(MsCell).at(2).trigger('contextmenu');

    // それぞれ引数に index が渡されていること
    expect(wrapper.emitted().cellRightClick[0][0]).toBe(0);
    expect(wrapper.emitted().cellRightClick[1][0]).toBe(1);
    expect(wrapper.emitted().cellRightClick[2][0]).toBe(2);
  })
})
