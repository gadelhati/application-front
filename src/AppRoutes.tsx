import { Route, HashRouter, Routes, Navigate } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoutes";
import { ProtectedRouteProps } from "./ProtectedRoutes";
import { OMList } from "./components/om/om.list";
import { Profile } from "./components/user/profile";
import { SigninContainer } from "./components/auth/signin";
import { Sidestrap } from "./containers/menus/sidebar.bootstrap";
import { getUser } from "./services/service.token"

import "./AppRoutes.css"
import { UserList } from "./components/user/user.list";
import { ObservationList } from "./components/observation/observation.list";
import { ObservationUpload } from "./components/observation/observation.upload";
import { UserSignin } from "./components/user/user.signin";
import { Header } from "./containers/menus/header";
import { Footer } from "./containers/menus/footer";
import { initialObservation } from "./components/observation/observation.initial"
import { ResearcherList } from "./components/researcher/researcher.list";

export default function AppRoutes() {
    const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
        isAuthenticated: getUser(),
        authenticationPath: '/signin',
    };
    return (
        <body>
            <HashRouter>
                <aside>
                    {getUser() && <Sidestrap />}
                </aside>
                <main>
                    {/* <Header /> */}
                    <Routes>
                        <Route path="*" element={getUser() === null ? <SigninContainer /> : <Navigate to="/om" />}></Route>
                        <Route path="/" element={getUser() === null ? <SigninContainer /> : <Navigate to="/om" />}></Route>
                        <Route path="/signin" element={getUser() === null ? <SigninContainer /> : <Navigate to="/om" />}></Route>
                        <Route path="/signin2" element={getUser() === null ? <UserSignin /> : <Navigate to="/om" />}></Route>
                        <Route path="/om" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<OMList />} />} />
                        <Route path="/users" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<UserList />} />} />
                        <Route path="/profile" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Profile />} />} />
                        <Route path="/observation" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<ObservationList />} />} />
                        <Route path="/upload" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<ObservationUpload />} />} />
                        <Route path="/researcher" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<ResearcherList />} />} />
                    </Routes>
                    {/* <Footer /> */}
                </main>
            </HashRouter>
        </body>
    )
}