import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

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
import { ObservationAdd } from "./components/observation/observation.add";
import { UserSignin } from "./components/user/user.signin";
import { Header } from "./containers/menus/header";
import { Footer } from "./containers/menus/footer";
import { initialObservation } from "./components/observation/observation.initial"

export default function AppRoutes() {
    const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
        isAuthenticated: getUser(),
        authenticationPath: '/signin',
    };
    return (
        <body>
            <BrowserRouter>
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
                        <Route path="/observationadd" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<ObservationAdd value={initialObservation} />} />} />
                        <Route path="/upload" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<ObservationUpload />} />} />
                        <Route path="/observation/:object" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<ObservationAdd value={initialObservation} /> }/>} />
                    </Routes>
                    {/* <Footer /> */}
                </main>
            </BrowserRouter>
        </body>
    )
}