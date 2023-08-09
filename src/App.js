import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
const Product = lazy(() => import("./components/Product"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route />
      </Route>,
    ),
  );

  return (
    <div className="App">
      <Suspense fallback={<h1>App Level Loading...</h1>}>
        <Product />
      </Suspense>
    </div>
  );
}

export default App;
