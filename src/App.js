import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import RootLayout from "./components/RootLayout";
import NoMatch from "./components/NoMatch";
const Product = lazy(() => import("./components/Product"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/products"
          element={
            <Suspense fallback={<h1>App Level Loading...</h1>}>
              <Product />
            </Suspense>
          }></Route>
        <Route path="*" element={<NoMatch />} />
      </Route>,
    ),
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
