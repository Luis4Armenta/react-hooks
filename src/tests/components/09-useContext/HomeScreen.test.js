import { mount } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('pruebas en <HomeScreen />', () => {
  const user = {
    name: 'Luis',
    email: 'example@email.com'
  };
  
  const wrapper = mount(
    <UserContext.Provider value={{
      user 
    }}>
      <HomeScreen />
    </UserContext.Provider>
  );

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});