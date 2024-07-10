import React from "react";
import { useRoutes } from "react-router-dom";
import MainPage from "../Component/MainPage/MainPage";
import MainLayout from "../layout/MainLayout";
import DetailFlight from "../pages/DetailFlight/DetailFlight";

const useRouteElements = () => {
    const routeElements = useRoutes([
        {
            path: "/",
            element: (
                <MainLayout>
                    <MainPage />
                </MainLayout>
            ),
        },
        {
            path: "/detailFlight",
            element: (
                <MainLayout>
                    <DetailFlight />
                </MainLayout>
            ),
        },
    ]);
    return routeElements;
};

export default useRouteElements;
