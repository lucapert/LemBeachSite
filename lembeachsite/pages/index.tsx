import Styles from '../styles/Home.module.css';
import CarouselReactB  from '../components/Carousel/Carousel';
import Row from '../components/Row/Row';
import Cards from '../components/Cards/Cards';
import TextRow from '../components/TextRow/TextRow';
import News from '../components/News/News';
export default function Home() {
  return (
    <>
      <CarouselReactB />
      <Row id="cardsText" styles="" backGroudColor="#ededed" children={ <TextRow titleColor="inherited" title="MARE, SPORT, DIVERTIMENTO E TANTO ALTRO..." article="Al LEM troverai strutture sportive per poter tenerti sempre in allenamento. Corsi per tutti i livelli e tutte le fasce di età."  /> }/>
      <Row id="cards" styles="" backGroudColor="#ffffff" children={ <Cards /> } />
      <Row id="newstext" styles="" backGroudColor="#ededed" children={ <TextRow titleColor="inherited" title="News, stay tuned" article="Gli ultimi eventi in programma..."  /> }/>
      <Row id="news" styles="" backGroudColor="#ffffff" children={ <News /> } />
    </>
  )
}
