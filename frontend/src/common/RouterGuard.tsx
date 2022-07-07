import { PropsWithChildren } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export interface RouterGuardProps {
    isAllowed: boolean;
    redirectPath: string;
}

const RouterGuard = (props: PropsWithChildren<RouterGuardProps>): JSX.Element => {
    if (!props.isAllowed) {
        return <Navigate to={props.redirectPath} replace />;
    }
    return props.children ? <>{props.children}</> : <Outlet />;
};

export default RouterGuard;
