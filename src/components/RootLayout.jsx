import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <h1>RootLayout</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
