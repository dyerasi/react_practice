import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
import produce from "immer"; //allows direct modification of state in reducer, no need to return new state object

const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "set-value";
const DECREMENT_COUNT = "decrement";
const SUBMIT_FORM = "submit-form";

//everytime dispatch calls reducer, returned value is new state
//let dispatch do all computation, not pass computed new params into payload
//keep calls to dispatch simple so if something goes wrong its contained in reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    // return {
    //   ...state,
    //   count: state.count + 1,
    // };
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    // return {
    //   ...state,
    //   valueToAdd: action.payload,
    // };
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    // return {
    //   ...state,
    //   count: state.count - 1,
    // };
    case SUBMIT_FORM:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    // return {
    //   ...state, //always a good habit to extract state, so if new state param added later, this will not skip new properties
    //   count: state.count + state.valueToAdd,
    //   valueToAdd: 0,
    // };
    default:
      throw new Error(
        "unexpected action type in CounterPage reducer " + action.type
      );
    // return state;
  }
};

function CounterPage({ initialCount }) {
  //const [count, setCount] = useState(initialCount);
  //const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    //dispatch calls reducer and passes argument to reducer through action param
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    //type of form input as string
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: SUBMIT_FORM,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          value={state.valueToAdd || ""}
          onChange={handleChange}
        />
        <Button>Add it</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
