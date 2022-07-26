import { styled } from '@stitches/react';
import { violet, mauve, blackA } from '@radix-ui/colors';
export const Sidebar = styled('div', {
    margin: 0,
    padding: 0,
    width: 256,
    backgroundColor: '#324b64',
    position: 'fixed',
    height: '100%',
    overflow: 'auto',
    '@media(max-width:700px)': {
        width: '100%',
        height: 'auto',
        position: 'relative'
    }
});

export const SidebarTitle = styled('div', {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    height: 20,
    alignItems: 'center',
    fontFamily: 'sans-serif',
    fontSize: 16,
    display: 'flex',
    color: '#cdd2d7',
    padding: 18,
    backgroundColor: '#2f3b54',
    '@media(max-width:400px)': {
        display: 'none',
    }
});

export const SidebarSubTitle = styled('div', {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    fontSize: 12,
    display: 'flex',
    color: '#cdd2d7',
    padding: 18,
    paddingTop: 28,
    paddingBottom: 12,
    '@media(max-width:700px)': {
        float: 'left'
    },
    '@media(max-width:400px)': {
        textAlign: 'center',
        float: 'none'
    }
});

export const SidebarItem = styled('a', {
    // fontWeight: 'bold',
    transition: 'all 0.5s ease',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    fontSize: 14,
    display: 'flex',
    color: '#cdd2d7',
    padding: 14,
    textDecoration: 'none',
    '&:active': { backgroundColor: '#46546b', color: 'White' },
    '&:hover': { backgroundColor: '#2db75b', color: 'White' },
    '&:child': { backgroundColor: 'Black' },
    '@media(max-width:700px)': {
        float: 'left'
    },
    '@media(max-width:400px)': {
        textAlign: 'center',
        float: 'none'
    }
});

export const SidebarIcon = styled('img', {
    paddingRight: 22,
    // paddingLeft: 10,
    width: 20,
    '@media(max-width:400px)': {
        textAlign: 'center',
        float: 'none'
    }
});

export const SidebarContent = styled('a', {
    fontFamily: 'sans-serif',
    backgroundColor: 'Green',//'#ebedee',
    marginLeft: 250,
    width: '80%',
    padding: '1px 16px',
    height: 1000,
    '@media(max-width:400px)': {
        margin: 300,
        backgroundColor: 'Red',
        // width: '100%'
    }
});

// footer in sidebar: #303C54

const w3_open = () => {
    // var main = document.getElementById("main") as HTMLInputElement;
    // main.style.marginLeft = "25%";
    var side = document.getElementById("mySidebar") as HTMLDivElement;
    // side.style.width = "25%";
    side.style.display = "block";
    // var nav = document.getElementById("openNav") as HTMLInputElement;
    // nav.style.display = "none"
}

const w3_close = () => {
    // var main = document.getElementById("main") as HTMLDivElement;
    // main.style.marginLeft = "0%";
    var side = document.getElementById("mySidebar") as HTMLDivElement;
    // side.style.width = "none";
    side.style.backgroundColor = 'Blue';
    // var nav = document.getElementById("openNav") as HTMLDivElement;
    // nav.style.display = "inline-block"
}

export const SidebarContainer = () => {
    return (
        <>
            <Sidebar id="mySidebar" >
                {/* <button onClick={w3_close() as any}>Close &times;</button> */}
                <SidebarTitle>
                    <SidebarIcon src="/src/assets/image/heraldica.png" alt="Arrow" ></SidebarIcon>
                    Application
                </SidebarTitle>
                <SidebarSubTitle>Group</SidebarSubTitle>
                <SidebarItem href='/accordion' >
                    <SidebarIcon src="/src/assets/image/folder.png" alt="Arrow" ></SidebarIcon>
                    Accordion
                </SidebarItem>
                <SidebarItem href='#news' >
                    <SidebarIcon src="/src/assets/image/folder.png" alt="Arrow" ></SidebarIcon>
                    News
                </SidebarItem>
                <SidebarItem href='#contact' >
                    <SidebarIcon src="/src/assets/image/folder.png" alt="Arrow" ></SidebarIcon>
                    Contact
                </SidebarItem>
                <SidebarItem href='#about' >
                    <SidebarIcon src="/src/assets/image/folder.png" alt="Arrow" ></SidebarIcon>
                    About
                </SidebarItem>
                <SidebarItem href='/observation' >
                    <SidebarIcon src="/src/assets/image/folder.png" alt="Arrow" ></SidebarIcon>
                    Observation
                </SidebarItem>
                <SidebarItem href='/observationcoreui' >
                    <SidebarIcon src="/src/assets/image/folder.png" alt="Arrow" ></SidebarIcon>
                    ObservationCoreUI
                </SidebarItem>
            </Sidebar>
            {/* <SidebarContent id="main">
                <Observation mimi='oi'></Observation>
                <button id="openNav" onClick={w3_open() as any}>&#9776;</button>
                <>
                    <>Marcelo Ribeiro Gadelha oh iuy uguo yui tfut fut cyt c yrff yct yitciy</>
                </>
            </SidebarContent> */}
        </>
    );
}