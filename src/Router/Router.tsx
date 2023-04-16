import React from "react";
import HomePage from "../pages/HomePage";
import DetailsPage from "../pages/DetailsPage";
import { Route, Routes } from "react-router";

const Router = () => {
  const routes = [
    { path: "/", element: <HomePage />, id: 1 },
    { path: "/details/:id", element: <DetailsPage />, id: 2 },
  ];

  return (
    <>
      {routes.map((route) => (
        <Routes key={route.id}>
          <Route path={route.path} element={route.element} />
        </Routes>
      ))}
    </>
  );
};

export default Router;
