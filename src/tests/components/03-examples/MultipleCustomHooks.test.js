import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      state: 10,
      increment: () => {}
    });
  })
  
  test('debe mostrarse correctamente', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    
    expect(wrapper).toMatchSnapshot();
  });
  
  test('Debe de mostrar la información', () => {
    const mockObject = {
      author: 'Luis',
      quote: 'Hola mundo'
    };
    useFetch.mockReturnValue({
      data: [ mockObject ],
      loading: false,
      error: null
    });
    
    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find('.alert').exists()).toBeFalsy();
    expect(wrapper.find('.mb-0').text().trim()).toBe(mockObject.quote);
    expect(wrapper.find('footer').text().trim()).toBe(mockObject.author);
    
    
    console.log(wrapper.html());
  });  
});