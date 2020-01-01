import React from "react";
import Menu from "../Menu";
import Footer from "../Footer";

function PageDefaut({children}) {
    return(
        <div>
            <Menu/>
                {children}
            <Footer/>
        </div>
    );
}

export default PageDefaut;