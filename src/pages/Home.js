import { useSearchParams, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()
    const redirectLocation = searchParams.get("redirect") || "about"
    return (
        <div>
            <Navbar />
            <h1>Home Page</h1>
            <h3>Programmatically Redirect To Search Param</h3>
            <button onClick={()=>{
                navigate(`/${redirectLocation}`)
            }}>Redirect</button>
        </div>
    )
}

export default Home