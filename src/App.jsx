import FirstInfo from './components/FirstInfo';
import Header from './components/Header';
import Footer from './components/Footer';
import MainMenu from './components/MainMenu';
import Integrantes from './components/Integrantes';
import Rest from './components/Rest';

function App() {
  return (
    <>
    <div className ="masterContainer"></div>
      <MainMenu/>
      <div className ="contentContainer">
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
