import { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "../../pages/main-page/main-page";
import { AppRoute } from "../../consts";
import LoginPage from "../../pages/login-page/login-page";
import NotFoundPage from "../../pages/not-found-page/not-found-page";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
