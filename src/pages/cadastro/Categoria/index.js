import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const categoriaInicial = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categoria, setCategoria] = useState(categoriaInicial);
  const [categorias, setCategorias] = useState([]);

  function setValue(name, value) {
    setCategoria({
      ...categoria,
      [name]: value,
    });
  }

  function handlerOnChangeValue({ target }) {
    setValue(
      target.getAttribute('name'),
      target.value,
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([
      ...categorias,
      categoria,
    ]);

    setCategoria(categoriaInicial);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost') ? 'http://localhost:8080/categorias' : 'https://willflix.herokuapp.com/categorias';

    fetch(URL).then(async (serverResponse) => {
      const response = await serverResponse.json();
      setCategorias([...response]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {categoria.nome}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          name="nome"
          type="text"
          value={categoria.nome}
          onChange={handlerOnChangeValue}
        />

        <FormField
          label="Descrição"
          name="descricao"
          type="textarea"
          value={categoria.descricao}
          onChange={handlerOnChangeValue}
        />

        <FormField
          label="Cor"
          name="cor"
          type="color"
          value={categoria.cor}
          onChange={handlerOnChangeValue}
        />

        <Button>
          Cadastrar
        </Button>
      </form>
      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoriaItem, indice) => (
          <li key={`${categoriaItem}-${indice}`}>
            {categoriaItem.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
