import { Outlet } from "react-router";

const Layout = () => {
    return(
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <Outlet />
        </div>
    );
}

export default Layout;