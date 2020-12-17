const initialState = {
  todos: []
};

export const todoReducer = (state, action) => {
  switch(action.type) {
    case("ADD_TODO"):
      return state;
    case("TOGGLE_TODO"):
      return state;
    case("CLEAR_COMPLETED"):
      return state;
    default:
      return state;
  }
}