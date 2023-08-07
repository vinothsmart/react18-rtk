import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const Product = lazy(() => import("./components/Product"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Product Loading...</h1>}>
        <Product />
      </Suspense>
    </div>
  );
}

export default App;
