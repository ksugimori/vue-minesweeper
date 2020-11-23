import { mount } from '@vue/test-utils'
import Field from '@/components/Field.vue'
import Row from '@/components/Row.vue'
import Cell from '@/components/Cell.vue'

describe('Row.vue', () => {
  it('配列数だけ Row が作成されること', () => {
    const game = {
      open: (row, col) => { },
      field: [
        [
          { count: 0, isOpen: false },
          { count: 0, isOpen: false },
          { count: 0, isOpen: false },
        ],
        [
          { count: 0, isOpen: false },
          { count: 0, isOpen: false },
          { count: 0, isOpen: false },
        ],
      ],
      numMines: 1,
      flagCount: 0
    }

    const wrapper = mount(Field, {
      propsData: {
        game: game,
      }
    })

    expect(wrapper.findAllComponents(Row).length).toBe(2);
    expect(wrapper.findAllComponents(Cell).length).toBe(6);
  })

  it('Cell をクリックするとコールバック関数が呼ばれ、インデックスが引数として渡されること', () => {

    // モックする関数
    const mockOpen = jest.fn();

    const game = {
      open: mockOpen,
      field: [
        [
          { count: 0, isOpen: false },
          { count: 0, isOpen: false },
          { count: 0, isOpen: false },
        ],
        [
          { count: 0, isOpen: false },
          { count: 0, isOpen: false },
          { count: 0, isOpen: false },
        ],
      ],
      numMines: 1,
      flagCount: 0
    }

    const wrapper = mount(Field, {
      propsData: {
        game: game,
      }
    })

    // ２行目、３列目の Cell をクリック
    wrapper.findAllComponents(Row).at(1)
      .findAllComponents(Cell).at(2)
      .trigger('click');

    const args = mockOpen.mock.calls[0];
    // 引数に index が渡されていること
    expect(args[0]).toBe(1);
    expect(args[1]).toBe(2);
  })
})
