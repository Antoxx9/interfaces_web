import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Home from "../../components/home";

class HomePage extends React.Component{
  render() {
    return (
      <div>
        <Header logged={false }/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;