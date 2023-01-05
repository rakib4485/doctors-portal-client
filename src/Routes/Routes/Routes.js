import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import About from "../../pages/About/About/About";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import ManageDoctors from "../../pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../pages/Dashboard/MyAppointment/MyAppointment";
import Payment from "../../pages/Dashboard/Payment/Payment";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoutes><AddDoctor></AddDoctor></AdminRoutes>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoutes><ManageDoctors></ManageDoctors></AdminRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoutes><Payment></Payment></AdminRoutes>,
                loader: ({params}) => fetch(`https://doctors-portal-server-liard-two.vercel.app/bookings/${params.id}`)
            },
        ]
    }
])

export default router;