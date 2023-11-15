import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Root() {
    return (
        <div className="">
            <Header />
            <div className="body min-h-screen bg-yellow-500">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
