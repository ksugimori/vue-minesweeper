import { mount } from '@vue/test-utils'
import Row from '@/components/game/Row.vue'
import Cell from '@/components/game/Cell.vue'

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

  it('Cell をクリックするとコールバック関数が呼ばれ、インデックスが引数として渡されること', () => {
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

    // モックする関数
    const mockOnClickCell = jest.fn();

    const wrapper = mount(Row, {
      propsData: {
        cells: cells,
        onClickCell: mockOnClickCell,
      }
    })

    // ひとつずつ Cell をクリック
    wrapper.findAllComponents(Cell).at(0).trigger('click');
    wrapper.findAllComponents(Cell).at(1).trigger('click');
    wrapper.findAllComponents(Cell).at(2).trigger('click');

    // それぞれ引数に index が渡されていること
    expect(mockOnClickCell.mock.calls[0][0]).toBe(0);
    expect(mockOnClickCell.mock.calls[1][0]).toBe(1);
    expect(mockOnClickCell.mock.calls[2][0]).toBe(2);
  })
})
