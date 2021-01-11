import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import MsField from '@/components/organisms/MsField.vue'
import MsFieldRow from '@/components/organisms/MsFieldRow.vue'
import MsCell from '@/components/molecules/MsCell.vue'
import Game from '@/lib/Game'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Row.vue', () => {
  it('配列数だけ Row が作成されること', () => {
    const game = new Game();
    game.setting.merge({ width: 3, height: 2, numMines: 1 });
    game.initialize();

    let store = new Vuex.Store({
      state: { game }
    })

    const wrapper = mount(MsField, { store, localVue })

    expect(wrapper.findAllComponents(MsFieldRow).length).toBe(2);
    expect(wrapper.findAllComponents(MsCell).length).toBe(6);
  })

  it('Cell をクリックすると cellClick イベントが発火され、インデックスが引数として渡されること', () => {
    const game = new Game();
    game.setting.merge({ width: 3, height: 2, numMines: 1 });
    game.initialize();

    // モックする関数
    const mockOpen = jest.fn();

    let store = new Vuex.Store({
      state: { game },
      mutations: { open: mockOpen }
    })

    const wrapper = mount(MsField, { store, localVue })

    // ２行目、３列目の Cell をクリック
    wrapper.findAllComponents(MsFieldRow).at(1)
      .findAllComponents(MsCell).at(2)
      .trigger('click');

    const args = mockOpen.mock.calls[0];
    // 引数に index が渡されていること
    const payload = args[1];
    expect(payload.x).toBe(2);
    expect(payload.y).toBe(1);
  })

  it('Cell を右クリックすると cellRightClick イベントが発火され、インデックスが引数として渡されること', () => {
    const game = new Game();
    game.setting.merge({ width: 3, height: 2, numMines: 1 });
    game.initialize();

    // モックする関数
    const mockFlag = jest.fn();

    let store = new Vuex.Store({
      state: { game },
      mutations: { flag: mockFlag }
    })

    const wrapper = mount(MsField, { store, localVue })

    // ２行目、３列目の Cell を右クリック
    wrapper.findAllComponents(MsFieldRow).at(1)
      .findAllComponents(MsCell).at(2)
      .trigger('contextmenu');

    const args = mockFlag.mock.calls[0];
    // 引数に index が渡されていること
    const payload = args[1];
    expect(payload.x).toBe(2);
    expect(payload.y).toBe(1);
  })
})
