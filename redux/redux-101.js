const redux = require("redux");
const createStore = redux.createStore;

const initState = { fruits: [] };
// reducer
const fruitReducer = (state = initState, action) => {
  const { fruits } = state;
  console.log(action);
  // handle event
  if (action.type === "add") {
    return { ...state, fruits: [...fruits, action.fruit] };
  }

  return state;
};

// create store with reducer
const store = createStore(fruitReducer);

// subscription
const countFruit = () => {
  console.log("[store] = ", store.getState().fruits);
};
store.subscribe(countFruit);

// dispatching
store.dispatch({ type: "add", fruit: "apple" });
store.dispatch({ type: "add", fruit: "banana" });

console.log(store.getState());
