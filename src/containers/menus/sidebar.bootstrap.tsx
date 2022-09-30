import "./sidebars.css"
import "../../assets/bootstrap/dist/js/bootstrap.bundle.min.js"
import { getRoles } from "../../services/service.token"
import logo from '../../assets/image/heraldica.png'
import { stitches } from '../../containers/models/globalStyles'
import { Icon } from '../../assets/image/svg.access'

const { styled } = stitches;

export const A = styled('a', {
    background: '0 0',
    border: '0',
    borderRadius: '.25rem',
    display: 'block',
    padding: '.5rem 1rem',
    textDecoration: 'none',
    transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out',
    listStyle: 'none',
    color: 'lightgray',
    '&:hover': {
        color: '#2F4F4F',
        backgroundColor: 'white',
    },
});
export const AHeader = styled('a', {
    background: '0 0',
    border: '0',
    borderRadius: '.25rem',
    display: 'block',
    padding: '.5rem 1rem',
    textDecoration: 'none',
    // transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out',
    listStyle: 'none',
    color: 'black',
    // '&:hover': {
    //     color: '#2F4F4F',
    //     backgroundColor: 'white',
    // },
});
export const Ul = styled('ul', {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: '0',
    listStyle: 'none',
    flexDirection: 'column !important',
    marginBottom: 'auto !important',
    'div > ul > li': {
        paddingLeft: '15px',
        fontSize: '90%',
    },
    'li': {
        fontSize: '100%',
    }
});
export const UlMenu = styled('ul', {
    display: 'block',
    zIndex: '1000',
    minWidth: '10rem',
    padding: '.5rem 0',
    fontSize: '1rem',
    color: '#212529',
    textAlign: 'left',
    listStyle: 'none',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid rgba(0,0,0,.15)',
    borderRadius: '.25rem',
    cursor: 'pointer',
});
const Collapsible = styled('button', {
    color: 'lightgray',
    lineHeight: '1.5',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    userSelect: 'none',
    fontSize: '1rem',
    transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    padding: '.25rem .5rem',
    fontWeight: '600',
    backgroundColor: 'transparent',
    display: 'inline-flex !important',
    alignItems: 'center !important',
    borderRadius: '.25rem !important',
    border: '0 !important',
    '&::before': {
        width: '1.25em',
        lineHeight: '0',
        content: `'url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e")'`,
        transition: 'transform .35s ease',
        transformOrigin: '.5em 50%',
    },
    '&[aria-expanded="true"]': {
        color: 'black',
        backgroundColor: 'lightwhite',
    },
    '&[aria-expanded="true"]:before': {
        transform: 'rotate(90deg)',
    },
    '&:hover': {
        color: 'black',
        backgroundColor: 'white',
    },
    '&:only-child': {
        padding: '50px',
    }
});
const Largura = styled('div', {
    width: '256px',
    backgroundColor: 'rgb(58, 72, 100)',
    backgroundImage: 'linear-gradient(to bottom left, rgb(58, 72, 100), rgb(86, 97, 93))',
    /* background-image: url(nova-logo-mb.png); */
    backgroundPosition: '50%',
    /* opacity: 20%; */
});

export const Sidestrap = () => {
    return (
        <>
            <main>
                <Largura className="d-flex flex-column flex-shrink-0 p-3 text-white largura">
                    <A href="/application-front">
                        <img className="mb-6 rounded-circle me-2 logo" src={logo} alt="" width="35" height="38"></img>
                        <span className="fs-4">CHM</span>
                    </A>
                    <hr></hr>
                    <Ul>
                        <li>
                            <A href="#/signin"><Icon name="speedometer" />Observações</A>
                        </li>
                        {getRoles() == "ROLE_ADMIN" &&
                            <>
                            <li><A href="#/om"><Icon name="home" />OM</A></li>
                            <li><A href="#/users"><Icon name="people-circle" />Usários</A></li>
                            <Collapsible className="btn-toggle" data-bs-toggle="collapse" data-bs-target="#station-collapse" aria-expanded="false">Estações</Collapsible>
                            <div id="station-collapse">
                                <Ul>
                                    <li><A href="#/station"><Icon name="home"/>Todas</A></li>
                                    <li><A href="#/stationOnShore"><Icon name="calendar3" />Synop</A></li>
                                    <li><A href="#/stationOffShore"><Icon name="chat-quote-fill" />Ship</A></li>
                                </Ul>
                            </div>
                            <li><A href="#/country"><Icon name="cpu-fill" />Países</A></li>
                            <li><A href="#/platformCategory"><Icon name="gear-fill" />Tipos de Plataforma</A></li>
                            </>
                        }
                        <li><A href="#/researcher"><Icon name="people-circle" />Pesquisador</A></li>
                        <li><A href="#/platform"><Icon name="toggles2" />Plataforma</A></li>
                        <li><A href="#/equipment"><Icon name="tools" />Equipamentos</A></li>
                        <li><A href="#/manufacturer"><Icon name="chevron-right" />Fabricantes</A></li>
                        <li><A href="#/institution"><Icon name="geo-fill" />Instituições</A></li>
                    </Ul>
                </Largura>
            </main>
        </>
    );
};