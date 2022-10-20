import { getRoles } from "../../../services/service.token"
import logo from '../../../assets/image/heraldica.png'
import { Icon } from '../../../assets/image/svg.access'
import { ATitle, Ul, Collapsible, Nav } from './sidebar.stitches'

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
                <ATitle href="/application-front">
                    <img src={logo}></img><span>CHM</span>
                </ATitle>
                <hr></hr>
                <Ul>
                    <li><a href="#/signin"><Icon name="speedometer" />Observações</a></li>
                    <li><a href="#/equipment"><Icon name="tools" />Equipamentos</a></li>
                    <li><a href="#/researcher"><Icon name="people-circle" />Pesquisador</a></li>
                    {(access("ROLE_ADMIN") || access("ROLE_MODERATOR")) &&
                        <>
                            <Collapsible className="btn-toggle" data-bs-toggle="collapse" data-bs-target="#station-collapse" aria-expanded="false"><Icon name="people-circle" />Estações</Collapsible>
                            <div className="collapse" id="station-collapse">
                                <Ul>
                                    <li><a href="#/station"><Icon name="home" />Todas</a></li>
                                    <li><a href="#/stationOnShore"><Icon name="calendar3" />Synop</a></li>
                                    <li><a href="#/stationOffShore"><Icon name="chat-quote-fill" />Ship</a></li>
                                </Ul>
                            </div>
                            <Collapsible className="btn-toggle" data-bs-toggle="collapse" data-bs-target="#united-collapse" aria-expanded="false"><Icon name="people-circle" />Unidades</Collapsible>
                            <div  className="collapse" id="united-collapse">
                                <Ul>
                                    <li><a href="#/observer"><Icon name="people-circle" />observer</a></li>
                                    <li><a href="#/platform"><Icon name="toggles2" />Plataforma</a></li>
                                    <li><a href="#/manufacturer"><Icon name="chevron-right" />Fabricantes</a></li>
                                    <li><a href="#/platformCategory"><Icon name="gear-fill" />Tipos de Plataforma</a></li>
                                    <li><a href="#/country"><Icon name="cpu-fill" />Países</a></li>
                                    <li><a href="#/institution"><Icon name="geo-fill" />Instituições</a></li>
                                    <li><a href="#/om"><Icon name="home" />OM</a></li>
                                </Ul>
                            </div>
                        </>
                    }
                    {access("ROLE_ADMIN") &&
                        <>
                        <Collapsible className="btn-toggle" data-bs-toggle="collapse" data-bs-target="#permissions-collapse" aria-expanded="false"><Icon name="people-circle" />Permissões</Collapsible>
                            <div className="collapse" id="permissions-collapse">
                                <Ul>
                                    <li><a href="#/users"><Icon name="people-circle" />Usários</a></li>
                                    <li><a href="#/roles"><Icon name="people-circle" />Roles</a></li>
                                </Ul>
                            </div>
                        </>
                    }
                </Ul>
            </Nav>
        </main>
    );
};