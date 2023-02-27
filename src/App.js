import React, { Fragment, useState, useEffect } from 'react'
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticia from './components/ListNoticias';

function App() {

  // definir la categoria 
  const [categoria, guardarCategoria] = useState('');

  // noticias 
  const [noticias, guardarNoticias] = useState([]);


  // useEffect
  useEffect(()=>{
    const consultarAPI = async () =>{
      const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=85aeb651af9941c3ad08b09a1a560f90`
      //const URL = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=85aeb651af9941c3ad08b09a1a560f90`
    
      const respuesta = await fetch(URL);
      const Noticias = await respuesta.json()

      guardarNoticias(Noticias.articles);
      console.log(Noticias.articles)
    }
    consultarAPI();
    
  },[categoria]);



  return (
    <Fragment>
      <Header titulo="News Finder"/>
      
      <div className='container white'>
        <Formulario
        guardarCategoria={guardarCategoria}
        />

        <ListadoNoticia noticias={noticias}/>


      </div>

    </Fragment>
  );
}

export default App;
