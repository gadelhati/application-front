import { Route, HashRouter, Routes, Navigate } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoutes";
import { ProtectedRouteProps } from "./ProtectedRoutes";
import { OMList } from "./components/om/om.list";
import { Profile } from "./components/user/profile";
import { SigninContainer } from "./components/auth/signin";
import { SideBar } from "./containers/menus/sidebar/sidebar";
import { getRoles, getUser } from "./services/service.token"

import "./AppRoutes.css"
import { UserList } from "./components/user/user.list";
import { ObservationList } from "./components/observation/observation.list";
import { ObservationUpload } from "./components/observation/observation.upload";
import { UserSignin } from "./components/user/user.signin";
import { Header } from "./containers/menus/header";
import { Footer } from "./containers/menus/footer";
import { initialObservation } from "./components/observation/observation.initial"
import { ResearcherList } from "./components/researcher/researcher.list";
import { PlatformList } from "./components/platform/platform.list";
import { CountryList } from "./components/country/country.list";
import { EquipmentList } from "./components/equipment/equipment.list";
import { ManufacturerList } from "./components/manufacturer/manufacturer.list";
import { InstitutionList } from "./components/institution/institution.list";
import { PlatformCategoryList } from "./components/platformCategory/platformCategory.list";
import { AuthProvider } from "./assets/context/AuthProvider";
import RequireAuth from "./RequireAuth";
import { useAuth } from "./assets/hook/useAuth";
import { StationList } from "./components/station/station.list";
import { StationOffShoreList } from "./components/station/station.offshore/station.offshore.list";
import { StationOnShoreList } from "./components/station/station.onshore/station.onshore.list";
import { RoleList } from "./components/role/role.list";

const ROLES = {
    'User': "ROLE_USER",
    'Admin': "ROLE_ADMIN",
}

export default function AppRoutes() {
    const { roles } = useAuth();
    const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
        isAuthenticated: getUser(),
        authenticationPath: '/signin',
        allowedRoles: "",
        // allowedRoles: getUser()?.roles.find((role: any) => role),
    };
    const getRole = (role: string): boolean => getRoles().map((element: any) => {
        if (element.name == role) {
            return true;
        } else {
            return false;
        }
    })
    return (
        <body>
            <HashRouter>
                <AuthProvider>
                    <aside>
                        {getUser() && <SideBar />}
                    </aside>
                    <main>
                        {/* <Header /> */}
                        <Routes>
                            <Route path="*" element={getUser() == null ? <SigninContainer /> : <Navigate to="/observation" />}></Route>
                            <Route path="/" element={getUser() == null ? <SigninContainer /> : <Navigate to="/observation" />}></Route>
                            <Route path="/signin" element={getUser() == null ? <SigninContainer /> : <Navigate to="/observation" />}></Route>
                            <Route path="/signin2" element={getUser() == null ? <UserSignin /> : <Navigate to="/observation" />}></Route>
                            <Route path="/om" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<OMList />} />} />
                            {getRole("ROLES_ADMIN") && <Route path="/users" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<UserList />} />} />}
                            {getRole("ROLES_ADMIN") && <Route path="/roles" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<RoleList />} />} />}

                            <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />}>
                                <Route path="/institution" element={<InstitutionList />} />
                                <Route path="/station" element={<StationList />} />
                                <Route path="/stationOffShore" element={<StationOffShoreList />} />
                                <Route path="/stationOnShore" element={<StationOnShoreList />} />
                            </Route>

                            <Route path="/profile" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Profile />} />} />
                            <Route path="/observation" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<ObservationList />} />} />
                            <Route path="/upload" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<ObservationUpload />} />} />
                            <Route path="/researcher" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<ResearcherList />} allowedRoles={"ROLE_ADMIN"} />} />
                            <Route path="/platform" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<PlatformList />} />} />
                            <Route path="/country" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<CountryList />} />} />
                            <Route path="/equipment" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<EquipmentList />} />} />
                            <Route path="/manufacturer" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<ManufacturerList />} />} />
                            {/* <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                                <Route path="/manufacturer" element={<ManufacturerList />} />
                            </Route> */}
                            {/* <Route path="/institution" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<InstitutionList />} />} /> */}
                            <Route path="/platformCategory" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<PlatformCategoryList />} />} />
                        </Routes>
                        {/* <Footer /> */}
                    </main>
                </AuthProvider>
            </HashRouter>
        </body>
    )
}