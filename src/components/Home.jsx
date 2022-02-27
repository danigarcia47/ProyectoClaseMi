import React, { Component } from 'react';

class Home extends React.Component {

  state = {
    noticias : []
  }

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
      console.log(noticias)
      this.setState({
        noticias: noticias.articles
      })
    })
  }

  render() {
    return(
     <div></div>
    );
  }

}
export default Home;