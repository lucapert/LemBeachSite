import Styles from '../styles/Home.module.css';
import CarouselReactB  from '../components/Carousel/Carousel';
import Row from '../components/Row/Row';
import TextRow from '../components/TextRow/TextRow'
export default function Home() {
  return (
    <>
      <CarouselReactB />
      <Row backGroudColor="#ededed" children={ <TextRow /> }/>
    </>
  )
}
