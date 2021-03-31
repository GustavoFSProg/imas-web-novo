import React from 'react'
import {
  CardContainer,
  ContainerReactPlayer,
  ContainerCarousel,
  Container,
  Footer,
  Data,
} from './styles'
import ReactPlayer from 'react-player/youtube'
// import ImanImage from '../../assets/Ellipse 8.png'
// import Avatar from '../../assets/Card/BASTA.png'

import Header from '../Header/index'
import Carousel from '../../components/Carousel'

function Home() {
  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <ContainerCarousel>
            <Carousel />
          </ContainerCarousel>
        </CardContainer>

        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tAGnKpE4NCI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        /> */}

        <Footer>
          <Data>©2020 Imagens.Arte CNPJ: 29.779.590/0001-84 São Leopoldo-RS</Data>
          <Data>Siga-nos em: {/* <img src={insta} alt="instagram" width="25%" /> */}</Data>
          <Data>©2020 Imagens.Arte CNPJ: 29.779.590/0001-84 São Leopoldo-RS</Data>
        </Footer>
      </Container>
      <ContainerReactPlayer>
        <ReactPlayer
          width="100%"
          playing={true}
          height="100%"
          url="https://www.youtube.com/embed/tAGnKpE4NCI"
        />
      </ContainerReactPlayer>
    </>
  )
}

export default Home
