import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Create from "./pages/Create";
import EventDetails from "./pages/EventDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "create",
                element: <Create/>
            },
            {
                path: "event/:id",
                element: <EventDetails/>
            }
        ]
    }
]);
export default router;