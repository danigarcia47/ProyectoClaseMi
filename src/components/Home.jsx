import React, { Component } from 'react';

class Home extends React.Component {

  componentDidMount(){
    this.consultaNoticias();
  }

  consultaNoticias = () => {
    let url = 'GET https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=e508a7d8f3284aea997c3de599f74c74'

    fetch(url)
    .then(respuesta => {
      return respuesta.json();
    })
    .then(noticias => {

    })
  }

  render() {
    return(
     <div className = "container">

     </div>
    );
  }

}
export default Home;