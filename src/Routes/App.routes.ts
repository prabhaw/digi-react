import AboutPage from "../Pages/About";
import HomePage from "../Pages/Home";

export const indexRoutes = [
  { path: "/", name: "HomePage", component: HomePage, authenticated: false },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
    authenticated: true,
  },
];
