import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Root() {
    return (
        <div className="">
            <Header />
            <div className="body">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
