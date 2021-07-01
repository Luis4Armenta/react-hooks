import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe('HookApp', () => {
  test('Debe iniciar HookApp', () => {
    const wrapper = shallow(<HookApp />);

    expect(wrapper).toMatchSnapshot();
  });
})
