import './footer.css';

export const Footer = () => {
    return (
        <footer>
            <div>
                <a href="https://www.marinha.mil.br/" target="_blank" >Marinha do Brasil</a>
                <span></span>
            </div>
            <div className="mfs-auto">
                <span>Desenvolvido por</span>
                <a href="https://www.marinha.mil.br/chm/" target="_blank" >Centro de Hidrografia da Marinha</a>
            </div>
        </footer>
    );
};