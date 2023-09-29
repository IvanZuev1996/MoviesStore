import { memo, Suspense, useCallback } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter = () => {
    const renderRoute = useCallback((route: RouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        );

        return <Route path={route.path} element={element} key={route.path} />;
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderRoute)}</Routes>;
};

export default memo(AppRouter);
