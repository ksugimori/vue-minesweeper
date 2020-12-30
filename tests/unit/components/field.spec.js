import { mount, createLocalVue } from '@vue/test-utils'
import Field from '@/components/layout/Field.vue'
import Row from '@/components/layout/Row.vue'
import Cell from '@/components/layout/Cell.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

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

    let store = new Vuex.Store({
      state: {
        game
      }
    })

    const wrapper = mount(Field, {
      store, localVue
    })

    expect(wrapper.findAllComponents(Row).length).toBe(2);
    expect(wrapper.findAllComponents(Cell).length).toBe(6);
  })

  it('Cell をクリックすると cellClick イベントが発火され、インデックスが引数として渡されること', () => {
    const game = {
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

    // モックする関数
    const mockOpen = jest.fn();

    let store = new Vuex.Store({
      state: {
        game
      },
      mutations: {
        open: mockOpen,
      }
    })

    const wrapper = mount(Field, {
      store, localVue
    })


    // ２行目、３列目の Cell をクリック
    wrapper.findAllComponents(Row).at(1)
      .findAllComponents(Cell).at(2)
      .trigger('click');

    const args = mockOpen.mock.calls[0];
    // 引数に index が渡されていること
    expect(args[1].x).toBe(2);
    expect(args[1].y).toBe(1);
  })

  it('Cell を右クリックすると cellRightClick イベントが発火され、インデックスが引数として渡されること', () => {
    const game = {
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

    // モックする関数
    const mockFlag = jest.fn();

    let store = new Vuex.Store({
      state: {
        game
      },
      mutations: {
        flag: mockFlag,
      }
    })

    const wrapper = mount(Field, {
      store, localVue
    })


    // ２行目、３列目の Cell を右クリック
    wrapper.findAllComponents(Row).at(1)
      .findAllComponents(Cell).at(2)
      .trigger('contextmenu');

    const args = mockFlag.mock.calls[0];
    // 引数に index が渡されていること
    expect(args[1].x).toBe(2);
    expect(args[1].y).toBe(1);
  })
})
