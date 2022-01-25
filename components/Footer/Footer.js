import { footerContainer, rightsCopy } from "./Footer.module.css";

const Footer = function() {
    return (
        <footer className={footerContainer}>
            <article>
                This site was created with the best intentions. 
                It is however possible that there are unforseen bugs. 
                We will aim to fix these as soon as possible. 
                Should you encounter any issues please reach out using the about and contact page.
            </article>
            <p className={rightsCopy}>
            All rights reserved &copy; Amsterdam {new Date().getFullYear()}
            </p>
        </footer>
    )
}

export default Footer;