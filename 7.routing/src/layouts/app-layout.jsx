import { Outlet } from "react-router-dom";
import Header from "../components/header";

const AppLayout = () => {
    return <div>
        React Router DOM Tutorial
        {/* Header */}
        <Header />
        {/* Loading */}
        {/* Pages */}
        <Outlet />
    </div>
}

export default AppLayout;