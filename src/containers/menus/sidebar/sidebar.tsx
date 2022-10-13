import { getRoles } from "../../../services/service.token"
import logo from '../../../assets/image/heraldica.png'
import { Icon } from '../../../assets/image/svg.access'
import { A, Ul, Collapsible, Nav } from './sidebar.stitches'

import "../../../assets/bootstrap/dist/js/bootstrap.bundle.min.js"
import './sidebars.css'

export const SideBar = () => {
    const access = (role: string): boolean => {
        let allowed: boolean = false
        for(let i=0; i < getRoles().length; i++){
            if(role == getRoles()[i]) {
                return allowed = true
                break;
            }
        }
        return allowed
    }
    return (
        <main>
            <Nav>
                <A href="/application-front">
                    <img src={logo}></img><span>CHM</span>
                </A>
                <hr></hr>
                <Ul>
                    <li><A href="#/signin"><Icon name="speedometer" />Observações</A></li>
                    <li><A href="#/equipment"><Icon name="tools" />Equipamentos</A></li>
                    <li><A href="#/researcher"><Icon name="people-circle" />Pesquisador</A></li>
                    {(access("ROLE_ADMIN") || access("ROLE_MODERATOR")) &&
                        <>
                            <Collapsible className="btn-toggle" data-bs-toggle="collapse" data-bs-target="#station-collapse" aria-expanded="true">Estações</Collapsible>
                            <div id="station-collapse">
                                <Ul>
                                    <li><A href="#/station"><Icon name="home" />Todas</A></li>
                                    <li><A href="#/stationOnShore"><Icon name="calendar3" />Synop</A></li>
                                    <li><A href="#/stationOffShore"><Icon name="chat-quote-fill" />Ship</A></li>
                                </Ul>
                            </div>
                            <Collapsible className="btn-toggle" data-bs-toggle="collapse" data-bs-target="#united-collapse" aria-expanded="true">Unidades</Collapsible>
                            <div id="united-collapse">
                                <Ul>
                                    <li><A href="#/observer"><Icon name="people-circle" />observer</A></li>
                                    <li><A href="#/platform"><Icon name="toggles2" />Plataforma</A></li>
                                    <li><A href="#/manufacturer"><Icon name="chevron-right" />Fabricantes</A></li>
                                    <li><A href="#/platformCategory"><Icon name="gear-fill" />Tipos de Plataforma</A></li>
                                    <li><A href="#/country"><Icon name="cpu-fill" />Países</A></li>
                                    <li><A href="#/institution"><Icon name="geo-fill" />Instituições</A></li>
                                    <li><A href="#/om"><Icon name="home" />OM</A></li>
                                </Ul>
                            </div>
                        </>
                    }
                    {access("ROLE_ADMIN") &&
                        <>
                        <Collapsible className="btn-toggle" data-bs-toggle="collapse" data-bs-target="#permissions-collapse" aria-expanded="true">Permissões</Collapsible>
                            <div id="permissions-collapse">
                                <Ul>
                                    <li><A href="#/users"><Icon name="people-circle" />Usários</A></li>
                                    <li><A href="#/roles"><Icon name="people-circle" />Roles</A></li>
                                </Ul>
                            </div>
                        </>
                    }
                </Ul>
            </Nav>
        </main>
    );
};