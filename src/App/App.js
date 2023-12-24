import { useFetch } from '../useFetch/useFetch';
import { SmartHeader } from '../SmartHeader';
import { SmartNav } from '../SmartNav'
import { SmartCategories } from '../SmartCategories';
import { Footer } from '../Footer';
import { Main } from '../Main';
import { SmartIcons } from '../SmartIcon';
import './App.css';
import { SmartJumbo } from '../SmartJumbo';
import { SmartPublic } from '../SmartPublic';

const products = [
  {
    Disponible: true,
    name: 'Cuido',
    image: <SmartIcons/>,
    normalPrice: 250000,
    Oferta: 90000
  },
  {
    Disponible: true,
    name: 'Cuido',
    image: <SmartIcons/>,
    normalPrice: 250000,
    Oferta: 90000
  },
  {
    Disponible: true,
    name: 'Cuido',
    image: <SmartIcons/>,
    normalPrice: 250.000,
    Oferta: 90000
  },
  {
    Disponible: true,
    name: 'Cuido',
    image: <SmartIcons/>,
    normalPrice: 250000,
    Oferta: 90000
  },
  {
    Disponible: true,
    name: 'Cuido',
    image: <SmartIcons/>,
    normalPrice: 250000,
    Oferta: 90000
  },
  {
    Disponible: true,
    name: 'Cuido',
    image: <SmartIcons/>,
    normalPrice: 250000,
    Oferta: 90000
  },
  {
    Disponible: true,
    name: 'Cuido',
    image: <SmartIcons/>,
    normalPrice: 250000,
    Oferta: 90000
  },
]



const App = () => {
  // const [data, loading] = useFetch('https://smart-pocket.co')


  return (
    <>
      <SmartHeader/>
      <SmartNav />
      <SmartJumbo />
      <Main >
        <SmartCategories />
        <SmartPublic />
      </Main>
      <Footer/>
    </>
  );
}

export { App };
