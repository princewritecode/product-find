const { createRoot } = require("react-dom/client");
import Header from "./src/components/Header";
import Body from "./src/components/Body";
//import About from "./components/About";
import Contact from "./src/components/Contact";
import ProductsInfo from "./src/components/ProductsInfo";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import ProductsInfo from "./src/components/ProductsInfo";
import { lazy, Suspense } from "react";

const About = lazy(() => import('./src/components/About'));
const AppLayOut = () =>
{
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};
const appRouter = createBrowserRouter([
    {
        path: '/', element: <AppLayOut></AppLayOut>,
        children: [
            { path: '/', element: <Body></Body> },
            { path: '/about', element: <Suspense> <About></About> </Suspense> },
            { path: '/contact', element: <Contact></Contact> },
            { path: '/products/:resId', element: <ProductsInfo></ProductsInfo> }
        ]
        , errorElement: <Error></Error>
    }
]);
const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}></RouterProvider>);