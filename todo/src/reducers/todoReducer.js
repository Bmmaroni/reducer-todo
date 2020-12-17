export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const initialState = {
  todos: [
      {
        item: 'Learn about reducers',
        completed: false,
        id: Date.now()
    }
  ]
};

export const todoReducer = (state, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ] 
      };
    case TOGGLE_TODO:
      return state;
    case CLEAR_COMPLETED:
      return state;
    default:
      return state;
  }
}