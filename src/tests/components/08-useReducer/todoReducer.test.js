import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en todoReducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test('debe de agregar un TODO', () => {
    const newTodo = {
      id: 3,
      desc: 'Aprender un CMS',
      done: false
    };

    const addTodoAction = {
      type: 'add',
      payload: newTodo
    }

    const state = todoReducer(demoTodos, addTodoAction)

    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });
  
  test('Debe de borrar un todos', () => {
    const todoToDelete = demoTodos[1];

    const deleteTodoAction = {
      type: 'delete',
      payload: todoToDelete.id
    }
    
    const state = todoReducer(demoTodos, deleteTodoAction);

    expect(state).not.toContain(todoToDelete);
  });

  test('debe de hacer el toggle del todo', () => {
    const index = 1;
    const todoToDoToggle = demoTodos[index];

    const toggleTodoAction = {
      type: 'toggle',
      payload: todoToDoToggle.id
    };

    const state = todoReducer(demoTodos, {});
    expect(state[index].done).toBeFalsy();

    const state2 = todoReducer(demoTodos, toggleTodoAction);
    expect(state2[index].done).toBeTruthy();
  });
});