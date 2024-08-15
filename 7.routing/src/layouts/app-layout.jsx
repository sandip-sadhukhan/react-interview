import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/header";

const AppLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return <div>
        React Router DOM Tutorial
        {/* Header */}
        <Header />
        {/* Loading */}
        {isLoading && <div>Loading...</div>}
        {/* Pages */}
        <Outlet />
    </div>
}

export default AppLayout;