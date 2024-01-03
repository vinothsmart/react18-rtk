import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "../store/store";
// import NavBar from "./NavBar";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        {/* <NavBar /> */}
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
