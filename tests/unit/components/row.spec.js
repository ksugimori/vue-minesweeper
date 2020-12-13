import { mount } from '@vue/test-utils'
import Row from '@/components/layout/Row.vue'
import Cell from '@/components/layout/Cell.vue'

describe('Row.vue', () => {
  it('配列数だけ Cell が作成されること', () => {
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
        onClickCell: () => { },
      }
    })

    expect(wrapper.findAllComponents(Cell).length).toBe(3);
  })

  it('Cell をクリックすると cellClick イベントが発火され、インデックスが引数として渡されること', () => {
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

    // ひとつずつ Cell をクリック
    wrapper.findAllComponents(Cell).at(0).trigger('click');
    wrapper.findAllComponents(Cell).at(1).trigger('click');
    wrapper.findAllComponents(Cell).at(2).trigger('click');

    // それぞれ引数に index が渡されていること
    expect(wrapper.emitted().cellClick[0][0]).toBe(0);
    expect(wrapper.emitted().cellClick[1][0]).toBe(1);
    expect(wrapper.emitted().cellClick[2][0]).toBe(2);
  })

  it('Cell を右クリックすると cellRightClick イベントが発火され、インデックスが引数として渡されること', () => {
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

    // ひとつずつ Cell を右クリック
    wrapper.findAllComponents(Cell).at(0).trigger('contextmenu');
    wrapper.findAllComponents(Cell).at(1).trigger('contextmenu');
    wrapper.findAllComponents(Cell).at(2).trigger('contextmenu');

    // それぞれ引数に index が渡されていること
    expect(wrapper.emitted().cellRightClick[0][0]).toBe(0);
    expect(wrapper.emitted().cellRightClick[1][0]).toBe(1);
    expect(wrapper.emitted().cellRightClick[2][0]).toBe(2);
  })
})
