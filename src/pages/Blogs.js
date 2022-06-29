import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Blogs = () => {
    return (
        <>
            <Navbar />
            <h1>Blogs Page</h1>
            <Outlet/>
        </>
    )
}

export default Blogs