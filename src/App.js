import React from "react";
import { Provider } from "react-redux";
import store from "./redux-store/store";
import Root from "./routes-config";

function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
