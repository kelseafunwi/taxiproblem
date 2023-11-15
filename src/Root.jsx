import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="body">
          <Outlet />
      </div>
    </>
  )
}
