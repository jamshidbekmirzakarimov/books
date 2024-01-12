import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home";
import AuthorDetails from "../pages/author-details";
import BookDetails from "../pages/book-details";
import Account from "../pages/account";
import SignIn from "../pages/auth/sign-in";
import SignUp from "../pages/auth/sign-up";
import GenericComp from "../components/generic";
import Authors from "../pages/authors";
import AllBooks from "../pages/all-books";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/author-details",
        element: <AuthorDetails />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/account/:id",
        element: <Account />,
      },
      {
        path: "/authors",
        element: <Authors />,
      },
      {
        path: "/books",
        element: <AllBooks/>,
      },
      {
        path: "/maqolalar",
        element: <GenericComp />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default router;
