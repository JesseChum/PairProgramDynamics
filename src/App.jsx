import './App.css'
import { Header } from "./assets/components/header";
import { Footer } from "./assets/components/footer";
import { CardList } from './assets/components/cardList.jsx';
import rawHoodies from "./assets/data.json";
import { parseHoodies } from './assets/components/parseHoodies.jsx';

const hoodies = parseHoodies(rawHoodies);

function App() {

  return (
    <>
        <Header siteTitle="JDM Hoodies"/>
        <main>
          <CardList hoodies = { hoodies }/>
        </main>
        <Footer siteTitle="JDM Hoodies"/>
    </>
    
  )
}

export default App
