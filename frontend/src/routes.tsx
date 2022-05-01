import App from "./App";
import LoginPage from "./pages/LoginPage";

const routes = [
    {
      path: "/",
      component: App
    },
    {
      path: "/login",
      component: LoginPage,
    }
];

export default routes;