import { mount } from '@vue/test-utils'
import Field from '@/components/game/Field.vue'
import Row from '@/components/game/Row.vue'
import Cell from '@/components/game/Cell.vue'

describe('Row.vue', () => {
  it('配列数だけ Row が作成されること', () => {
    const game = {
      open: (x, y) => { },
      field: {
        rows: [
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
        ]
      },
      numMines: 1
    }

    const wrapper = mount(Field, {
      propsData: {
        game: game,
      }
    })

    expect(wrapper.findAllComponents(Row).length).toBe(2);
    expect(wrapper.findAllComponents(Cell).length).toBe(6);
  })

  it('Cell をクリックすると cellClick イベントが発火され、インデックスが引数として渡されること', () => {
    // モックする関数
    const mockOpen = jest.fn();

    const game = {
      open: mockOpen,
      field: {
        rows: [
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
        ]
      },
      numMines: 1,
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
    expect(args[0]).toBe(2);
    expect(args[1]).toBe(1);
  })

  it('Cell を右クリックすると cellRightClick イベントが発火され、インデックスが引数として渡されること', () => {
    // モックする関数
    const mockFlag = jest.fn();

    const game = {
      flag: mockFlag,
      field: {
        rows: [
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
        ]
      },
      numMines: 1,
    }

    const wrapper = mount(Field, {
      propsData: {
        game: game,
      }
    })

    // ２行目、３列目の Cell を右クリック
    wrapper.findAllComponents(Row).at(1)
      .findAllComponents(Cell).at(2)
      .trigger('contextmenu');

    const args = mockFlag.mock.calls[0];
    // 引数に index が渡されていること
    expect(args[0]).toBe(2);
    expect(args[1]).toBe(1);
  })
})
