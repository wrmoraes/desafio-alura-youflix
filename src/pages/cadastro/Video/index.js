import React from 'react';
import PageDefaut from "../../../components/PageDefault";
import {Link} from "react-router-dom";

function CadastroVideo() {
    return (
        <PageDefaut>
            <h1>Cadastro de vídeo</h1>
            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefaut>
    )
}

export default CadastroVideo