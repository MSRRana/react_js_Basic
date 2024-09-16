import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Fetch_DATA_START":
      return { ...state, loading: true };
    case "Fetch_DATA_SUCCESS":
      return { loading: false, error: null, data: action.payload };
    case "Fetch_DATA_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "DELETE_DATA":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    case "ADD_DATA":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
  }
};
const initialState = {
  data: [],
  loading: false,
  error: null,
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "Fetch_DATA_START" });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      dispatch({ type: "Fetch_DATA_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "Fetch_DATA_ERROR", payload: error.message });
    }
  };

  const deleteData = (id) => {
    dispatch({ type: "DELETE_DATA", payload: id });
  };

  const addData = (data) => {
    dispatch({ type: "ADD_DATA", payload: data });
  };
  return (
    <div>
      <h1>UseReducer</h1>

      <button onClick={fetchData}>Fetch Data</button>

      {state.loading && <p>Loading.......</p>}
      {state.error && <p>Error: {state.error}</p>}
      {state.data && (
        <div>
          <h2>Data</h2>

          <ul>
            {state.data.map((item, index) => (
              <dic>
                <li key={index}>
                  {item.title}
                  <button onClick={() => deleteData(item.id)}>Delete</button>
                </li>
              </dic>
            ))}
          </ul>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addData({
                id: Date.now(),
                title: e.target.title.value,
              });
            }}
          >
            <input type="text" name="title" placeholder="Enter title" />
            <button type="submit">Add</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UseReducer;
