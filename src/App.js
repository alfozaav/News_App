import React, { Fragment, useState, useEffect } from 'react';

import Header from './Components/Header';
import Formulario from './Components/Formulario';
import ListadoNoticias from './Components/ListadoNoticias';

function App() {

  //  Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {

      const apiKey = '82f5dafc9de54666800d2b66b09bd1a7'
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${apiKey}`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json()

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header titulo='Buscador de Noticias' />
      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
