import { combineReducers, createStore, Store, AnyAction } from "redux";
import { persistReducer, persistStore, Persistor } from "redux-persist";
import todoListReducer, { TodoListState } from "../modules/todos";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "todo",
  storage,
};

export type RootState = {
  todoList: TodoListState;
};

const rootReducer = combineReducers<RootState>({
  todoList: todoListReducer, // todoListReducer를 todoList 속성에 연결합니다.
});

const enhancedReducer = persistReducer<RootState, AnyAction>(
  persistConfig,
  rootReducer
);

const store: Store<RootState, AnyAction> = createStore(enhancedReducer);
const persistor: Persistor = persistStore(store);

export { store, persistor };
