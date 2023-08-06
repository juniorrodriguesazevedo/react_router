import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Product from "./pages/product/Product";
import NotFound from "./pages/404/NotFound";
import Layout from "./components/layout/Layout";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/sobre',
                element: <About />
            },
            {
                path: '/contato',
                element: <Contact />
            },
            {
                path: '/produto/:id',
                element: <Product />
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    }
]);

export default router;