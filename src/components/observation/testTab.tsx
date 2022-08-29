import { MouseEvent } from 'react'

export const TestTab = () => {
    const styles: { [key: string]: React.CSSProperties } = {
        all: {
            margin: '0 auto',
        },
        bar: {
            // textAlign: 'center',
            width: '100%',
            // display: 'block',
            padding: '8px 16px',
            textAlign: 'left',
            border: 'none',
            // whiteSpace: 'normal',
            float: 'left',
            outline: '0',            
            // width: 'auto',
            display: 'inline-block',
            verticalAlign: 'middle',
            overflow: 'hidden',
            textDecoration: 'none',
            color: 'inherit',
            backgroundColor: 'inherit',
            // textAlign: 'center',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            // webkitTouchCallout: 'none',
            // webkitUserSelect: 'none',
            // khtmlUserSelect: 'none',
            // mozUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none',
            // cursor: 'not-allowed',
            // opacity: '0.3',
            // whiteSpace: 'normal',
        },
        tab: {
            display: 'none',
            padding: '0.01em 16px',
            position: 'relative',
            animation: 'animateleft 0.4s',
        },
        'tab:after, tab:before': {
            content: '',display: 'table',clear: 'both',
        },
        tabs: {
            marginLeft: '130px',
        },
        buttons: {
            width: '130px',
            // height: '100%',
            // width: '200px',
            // backgroundColor: '#fff',
            // position: 'fixed',
            zIndex: '1',
            overflow: 'auto',
            display: 'block',
            textAlign: 'left',
            padding: '8px',
            border: 'none',
            whiteSpace: 'normal',
            float: 'left',
            outline: '0',
            boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)',
            // color: '#fff',
            // backgroundColor: '#000',
        },
        addClass: {
            display: 'block',
        },
    }
    const openLink = (evt: any, animName: any) => {
        var i, x: any, tablinks;
        x = document.getElementsByClassName("city");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < x.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
        }
        var box = document.getElementById(animName);
        box != null ? box.style.display = 'block': ''
        evt.currentTarget.className += " w3-red";
    }
    return (
        <div style={styles.all}>
            <div style={styles.buttons}>
                <button className="tablink" style={styles.bar} onClick={() => openLink(event, 'Fade')}>Fade</button>
                <button className="tablink" style={styles.bar} onClick={() => openLink(event, 'Left')}>Left</button>
                <button className="tablink" style={styles.bar} onClick={() => openLink(event, 'Right')}>Right</button>
                <button className="tablink" style={styles.bar} onClick={() => openLink(event, 'Top')}>Top</button>
                <button className="tablink" style={styles.bar} onClick={() => openLink(event, 'Bottom')}>Bottom</button>
                <button className="tablink" style={styles.bar} onClick={() => openLink(event, 'Zoom')}>Zoom</button>
            </div>
            <div style={styles.tabs}>
                <div id="Fade" className="city w3-animate-opacity" style={styles.tab}>
                    <h2>Fade in</h2>
                    <p>London is the capital city of England.</p>
                    <p>It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
                </div>

                <div id="Left" className="city" style={styles.tab}>
                    <h2>Slide in from left</h2>
                    <p>Paris is the capital of France.</p>
                    <p>The Paris area is one of the largest population centers in Europe, with more than 12 million inhabitants.</p>
                </div>

                <div id="Top" className="city w3-animate-top" style={styles.tab}>
                    <h2>Slide in from top</h2>
                    <p>Tokyo is the capital of Japan.</p>
                    <p>It is the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p>
                </div>

                <div id="Right" className="city w3-animate-right" style={styles.tab}>
                    <h2>Slide in from right</h2>
                    <p>London is the capital city of England.</p>
                    <p>It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
                </div>

                <div id="Bottom" className="city w3-animate-bottom" style={styles.tab}>
                    <h2>Slide in from bottom</h2>
                    <p>Paris is the capital of France.</p>
                    <p>The Paris area is one of the largest population centers in Europe, with more than 12 million inhabitants.</p>
                </div>

                <div id="Zoom" className="city w3-animate-zoom" style={styles.tab}>
                    <h2>Zoom in</h2>
                    <p>Tokyo is the capital of Japan.</p>
                    <p>It is the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p>
                </div>
            </div>
        </div>
    )
}