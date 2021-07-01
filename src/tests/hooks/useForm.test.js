import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Probando useForm', () => {
  const defaultForm = {
    name: 'Luis Angel',
    email: 'example@email.com'
  }
  
  test('debe de regresar un formulario por defecto', () => {
    const { result } = renderHook(() => useForm(defaultForm));

    const [values, handleInputChange, reset] = result.current;
    expect(values).toEqual(defaultForm);

    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('Debe de cambiar el valor del formulario', () => {
    const newValue = {
      ...defaultForm,
      name: 'José María'
    };

    const { result } = renderHook(() => useForm(defaultForm));
    const [ , handleInputChange ] = result.current;

    act(() => {
      handleInputChange({target: {
        name: 'name',
        value: newValue.name
      }});
    })
    const [values] = result.current;
    expect( values ).toEqual({
      ...defaultForm,
      name: newValue.name
    });
  });

  test('Debe de regresar al valor default del formulario', () => {
    const newValue = {
      ...defaultForm,
      name: 'José María'
    };

    const { result } = renderHook(() => useForm(defaultForm));
    const [ , handleInputChange, reset ] = result.current;

    act(() => {
      handleInputChange({target: {
        name: 'name',
        value: newValue.name
      }});
      reset();
    })
    const [values] = result.current;
    expect( values ).toEqual(defaultForm);
  });
});