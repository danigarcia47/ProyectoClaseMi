import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { Noticias } from '../data/Noticias';
import './Home.css'

class Home extends React.Component {

  render() {
    return(
     <div class="margen">
       <a class= "noticia" onClick={Noticia1.mostrar}>
        <h4 >Alpine: "No vamos a estar al fondo de la hoja de tiempos</h4>
        <img class= "img" src = "https://phantom-marca.unidadeditorial.es/8c4af9f6fc15b918ca08b7583fc38b87/resize/660/f/webp/assets/multimedia/imagenes/2022/02/26/16458953098494.jpg"/>
        <hr/>
        <p/>
       </a>

       <a class= "noticia" onClick={}>
        <h4>¿Hay un plan B?</h4>
        <img class= "img" src = "https://phantom-marca.unidadeditorial.es/d4e8c5300690fd12339920973632a63a/resize/660/f/webp/assets/multimedia/imagenes/2022/02/26/16458553299956.jpg"/>
        <hr/>
        <p/>
       </a>

       <a class= "noticia" onClick={}>
        <h4 onClick={}>Alfa Romeo presenta el C42</h4>
        <img class= "img" src = "https://phantom-marca.unidadeditorial.es/23dcaa52894a89f2319708feca3a70d3/resize/660/f/webp/assets/multimedia/imagenes/2022/02/27/16459541918324.jpg"/>
        <hr/>
        <p/>
       </a>

       <a class= "noticia" onClick={}>
        <h4 onClick={}>Haas ya tiene posible sustituto para Mazepin</h4>
        <img class= "img" src = "https://phantom-marca.unidadeditorial.es/d2e339bd233834c11604a632d16f1dcd/resize/660/f/webp/assets/multimedia/imagenes/2022/02/26/16458651074221.jpg"/>
        <hr/>
        <p/>
      </a>
       <a class= "noticia" onClick={}>
        <h4 onClick={}>Horner: "Masi tuvo que soportar amenazas de muerte tras Abu Dabi"</h4>
        <img class= "img" src = "https://phantom-marca.unidadeditorial.es/9ac62501078f8e3176e9503e38bdcf98/resize/660/f/webp/assets/multimedia/imagenes/2022/02/11/16445719327061.jpg"/>
        <hr/>
        <p/>
       </a>

       <a class= "noticia" onClick={}>
        <h4 onClick={}>Día 3 de los test de pretemporada</h4>
        <img class= "img" src = "https://phantom-marca.unidadeditorial.es/e0e0ce17f03ce1a098d5e3764056c12d/resize/660/f/webp/assets/multimedia/imagenes/2022/02/25/16457825238354.jpg"/>
        <hr/>
        <p/>
       </a>
     </div>
    );
  }

}
export default Home;