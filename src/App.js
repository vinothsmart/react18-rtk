import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Testing } from "./components/Testing";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Cart = lazy(() => import("./components/Cart"));
const RootLayout = lazy(() => import("./components/RootLayout"));
const NoMatch = lazy(() => import("./components/NoMatch"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Suspense fallback={<h1>App Level Loading...</h1>}>
            <RootLayout />
          </Suspense>
        }>
        <Route
          index
          element={
            <Suspense fallback={<h1>App Level Loading...</h1>}>
              <Dashboard />
            </Suspense>
          }></Route>
        <Route
          path="/cart"
          element={
            <Suspense fallback={<h1>App Level Loading...</h1>}>
              <Cart />
            </Suspense>
          }></Route>
        <Route
          path="/testing"
          element={
            <Suspense fallback={<h1>App Level Loading...</h1>}>
              <Testing />
            </Suspense>
          }></Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<h1>App Level Loading...</h1>}>
              <NoMatch />
            </Suspense>
          }
        />
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
