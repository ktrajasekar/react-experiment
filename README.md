Step 1: npm install redux && npm install react-redux

https://laurenyz.medium.com/how-to-implement-redux-in-a-react-application-58d150921c08

- Setup redux dev tools 
- npm install --save-dev redux-devtools-extension

Modify below code in store.js
```
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools()
);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

ref - https://medium.com/@samueldinesh/setting-up-redux-devtools-a-simple-guide-3b386a6254fa