export type Todo = {
  id: number;
  title: string;
  body: string;
  isDone: boolean;
};

export type TodoListState = {
  todoList: Todo[];
};

const initialState: TodoListState = {
  todoList: [
    {
      id: 1,
      title: "끝내주게 자기",
      body: "아침 8시까지 풀 숙면 취하기",
      isDone: true,
    },
    {
      id: 2,
      title: "끝내주게 놀기",
      body: "노래방 갔다가 취해서 귀가하기",
      isDone: false,
    },
  ],
};

// 액션 타입 정의
const ADD_TODO = "TODO/ADD_TODO";
const TOGGLE_TODO = "TODO/TOGGLE_TODO";
const DELETE_TODO = "TODO/DELETE_TODO";

type AddTodoAction = {
  type: typeof ADD_TODO;
  payload: Todo;
};

type ToggleTodoAction = {
  type: typeof TOGGLE_TODO;
  payload: number;
};

type DeleteTodoAction = {
  type: typeof DELETE_TODO;
  payload: number;
};

type ActionTypes = AddTodoAction | ToggleTodoAction | DeleteTodoAction;

const todoListReducer = (
  state = initialState,
  action: ActionTypes
): TodoListState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todoListReducer;
