const initialState = [
    {
      text: "Learn about reducers",
      completed: true,
    },
  ];
  
  export default function todoReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_TODO":
        const newTodo = action.payload;
        const updatedState = [...state, newTodo];
        return updatedState;
      case "TOGGLE_TODO":
        const updatedStateWithToggle = state.map((todo, index) => {
          if (index === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        });
        return updatedStateWithToggle;
      case "DELETE_TODO":
        const updatedStateWithDelete = state.filter((todo, index) => {
          return index !== action.payload;
        });
        return updatedStateWithDelete;
      default:
        return state;
    }
  }