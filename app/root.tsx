import {
  Outlet,
} from "react-router";
import { Provider } from "react-redux";
import { store } from "./store";

import "./app.css";

export default function App() {
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  );
}
