import { lazy, Suspense } from "react";
const Product = lazy(() => import("./Product"));

const Dashboard = () => {
  return (
    <Suspense fallback={<h1>App Level Loading...</h1>}>
      <Product />
    </Suspense>
  );
};

export default Dashboard;
