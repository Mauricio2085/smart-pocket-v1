import './App.css';
import { SmartHeader } from './SmartHeader';
import { SmartAside } from './SmartAside';
import { SmartMainContainer } from './SmartMainContainer';
import { Footer } from './Footer';
import { Main } from './Main';
import { Card } from './Card'

const saludo =() => {
  console.log('hola mundo')
  }

function App() {
  
  return (
    <>
      <SmartHeader/>
      <Main >
      <SmartAside/>
      <SmartMainContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SmartMainContainer>
      </Main>
      <Footer/>
    </>
  );
}

export default App;
