import React, { Component } from 'react';

import './Home.css'

class Home extends React.Component {

  render() {
    return(
     <div class="margen">
       <a class= "noticia" href="https://www.marca.com/motor/formula1/2022/02/26/621a3ba1ca4741c1488b4605.html">
        <h4 >Alpine: "No vamos a estar al fondo de la hoja de tiempos</h4>
        <img class= "img" src = "https://phantom-marca.unidadeditorial.es/8c4af9f6fc15b918ca08b7583fc38b87/resize/660/f/webp/assets/multimedia/imagenes/2022/02/26/16458953098494.jpg"/>
        <hr/>
        <p/>
       </a>

       <a class= "noticia" href="https://www.marca.com/motor/formula1/2022/02/27/6219c50e268e3eb0378b45e0.html">
        <h4>¿Hay un plan B?</h4>
        <img class= "img" src = "https://phantom-marca.unidadeditorial.es/d4e8c5300690fd12339920973632a63a/resize/660/f/webp/assets/multimedia/imagenes/2022/02/26/16458553299956.jpg"/>
        <hr/>
        <p/>
       </a>

       <a class= "noticia" href="https://www.marca.com/motor/formula1/2022/02/27/621b435222601d5c5c8b45d4.html">
        <h4 onClick={}>Alfa Romeo presenta el C42</h4>
        <img class= "img" src = "https://phantom-marca.unidadeditorial.es/23dcaa52894a89f2319708feca3a70d3/resize/660/f/webp/assets/multimedia/imagenes/2022/02/27/16459541918324.jpg"/>
        <hr/>
        <p/>
       </a>

       <a class= "noticia" href="https://www.marca.com/motor/formula1/2022/02/26/6219e85222601d36528b458e.html">
        <h4 onClick={}>Haas ya tiene posible sustituto para Mazepin</h4>
        <img class= "img" src = "https://phantom-marca.unidadeditorial.es/d2e339bd233834c11604a632d16f1dcd/resize/660/f/webp/assets/multimedia/imagenes/2022/02/26/16458651074221.jpg"/>
        <hr/>
        <p/>
      </a>
       <a class= "noticia" href="https://www.marca.com/motor/formula1/2022/02/26/621a153722601d194a8b4601.html">
        <h4 onClick={}>Horner: "Masi tuvo que soportar amenazas de muerte tras Abu Dabi"</h4>
        <img class= "img" src = "https://phantom-marca.unidadeditorial.es/9ac62501078f8e3176e9503e38bdcf98/resize/660/f/webp/assets/multimedia/imagenes/2022/02/11/16445719327061.jpg"/>
        <hr/>
        <p/>
       </a>

       <a class= "noticia" href="https://www.marca.com/motor/formula1/2022/02/25/62187f10ca474183408b45e2.html">
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