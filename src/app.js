import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/ContactUs";
import ReastaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ShimmerUI from "./components/ShimmerUI";


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    return (
        <>
         <Header/>
         <Outlet/>
        </>
        
    );
};

const appRouter = createBrowserRouter([
    {
     path: "/",
     element: <AppLayout/>,
     children: [
        {
            path: "/",
            element: <Body/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path: "/grocery",
            element: <Suspense fallback={<ShimmerUI/>}><Grocery/></Suspense>
        },
        {
            path: "/restaurantmenu/:id",
            element: <ReastaurantMenu/>
        },
     ],
     errorElement: <Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>);
