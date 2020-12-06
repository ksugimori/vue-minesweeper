import { shallowMount } from '@vue/test-utils'
import Cell from '@/components/game/Cell.vue'

describe('Cell.vue', () => {
  it('isOpen=false の場合は count が描画されないこと', () => {
    const obj = {
      count: 8,
      isOpen: false,
    };

    const wrapper = shallowMount(Cell, {
      propsData: {
        obj: obj,
        onClick: () => { },
      }
    })

    expect(wrapper.text()).not.toContain("8");
  })

  it('isOpen=true の場合は count が描画されること', () => {
    const obj = {
      count: 8,
      isOpen: true,
    };

    const wrapper = shallowMount(Cell, {
      propsData: {
        obj: obj,
        onClick: () => { },
      }
    })

    expect(wrapper.text()).toContain("8");
  })

  it('クリックしたら onClick で渡したコールバック関数が呼ばれること', () => {
    const obj = {
      count: 8,
      isOpen: true,
    };

    // コールバック関数のモック
    const mockOnClick = jest.fn();

    const wrapper = shallowMount(Cell, {
      propsData: {
        obj: obj,
        onClick: mockOnClick
      }
    });

    // click イベントを発火
    wrapper.trigger('click');

    expect(mockOnClick.mock.calls.length).toBe(1);
  })

  it('右クリックしたら onRightClick で渡したコールバック関数が呼ばれること', () => {
    const obj = {
      count: 8,
      isOpen: true,
    };

    // コールバック関数のモック
    const mockOnRightClick = jest.fn();

    const wrapper = shallowMount(Cell, {
      propsData: {
        obj: obj,
        onClick: () => {},
        onRightClick: mockOnRightClick
      }
    });

    // click イベントを発火
    wrapper.trigger('contextmenu');

    expect(mockOnRightClick.mock.calls.length).toBe(1);
  })
})
