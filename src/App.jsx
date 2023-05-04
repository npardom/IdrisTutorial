import FirstInfo from './components/FirstInfo';
import Header from './components/Header';
import Footer from './components/Footer';
import MainMenu from './components/MainMenu';
import Integrantes from './components/Integrantes';
import Rest from './components/Rest';
import { useEffect } from 'react';

function App() {
  
  useEffect(()=>{
    const element = document.getElementById("contentContainerId");
    element.addEventListener("scroll", () => {
      document.body.style.setProperty('--scroll', element.scrollTop/element.scrollHeight);
    });
  
  },[])

  return (
    <>
    <div className ="masterContainer"></div>
    <div className ="linesContainer"></div>
      <MainMenu/>
      <div className ="contentContainer" id ="contentContainerId">
        <Header />
        <FirstInfo/>
        <Rest/>
        <Integrantes/>
      </div>
      <Footer />
    </>
  )
}

export default App
