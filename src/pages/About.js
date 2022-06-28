import Navbar from "../components/Navbar";
import { Outlet, Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <Navbar />
            <h1>About Page</h1>
            <hr/>
            <ul>
                <li>
                <Link to="/about/info">Info</Link>
                </li>
                <li>
                <Link to="/about/class-list">Class List</Link>
                </li>
            </ul>
            <hr/>
            <Outlet />
        </div>
    )
}

export default About