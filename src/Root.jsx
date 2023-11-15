import { Outlet } from "react-router-dom";
import { NavBar } from './Components/NavBar/NavBar'

export default function Root() {
  return (
    <>
      <NavBar />
      <div className="body">
          <Outlet />
      </div>
    </>
  )
}
