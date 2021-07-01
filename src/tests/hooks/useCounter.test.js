import { act, renderHook } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe('Prubas de useCounter', () => {
  test('Debe de retorar valores por defecto', () => {
    const { result } = renderHook( () => useCounter() );
    
    expect( result.current.state ).toBe(10);
    expect( typeof result.current.increment ).toBe('function');
    expect( typeof result.current.decrement ).toBe('function');
    expect( typeof result.current.reset ).toBe('function');
  });
  test('Debe de tener el state en 100', () => {
    const { result } = renderHook( () => useCounter(100) );
    
    expect( result.current.state ).toBe(100);
  });
  
  test('Debe de incrementar el counter en 1', () => {
    const { result } = renderHook( () => useCounter(100) );
    const { increment } = result.current;

    act(() => {
      increment();
    });

    const { state } = result.current;
    expect( state ).toBe(101);
  })
  test('Debe de decrementar el counter en 1', () => {
    const { result } = renderHook( () => useCounter(100) );
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    const { state } = result.current;
    expect( state ).toBe(99);
  })
  test('Debe de restaurar el counter al valor inicial', () => {
    const defaultValue = 100;
    const { result } = renderHook( () => useCounter(defaultValue) );
    const { reset, increment } = result.current;

    act(() => {
      increment();
      reset();
    });

    const { state } = result.current;
    expect( state ).toBe(100);
  })
  
});
