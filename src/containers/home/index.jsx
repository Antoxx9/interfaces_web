import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Home from "../../components/home";
import Profile from "../../components/profile";

class HomePage extends React.Component{
  render() {
    return (
      <div>
        <Header logged={true}/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;