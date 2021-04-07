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

        <ContainerReactPlayer>
          <ReactPlayer controls width="100%" playing={true} height="70%" volume={1} muted url="" />
        </ContainerReactPlayer>

        <Footer>
          <Data>©2020 Imagens.Arte CNPJ: 29.779.590/0001-84 São Leopoldo-RS</Data>
          <Data>Siga-nos em: {/* <img src={insta} alt="instagram" width="25%" /> */}</Data>
          <Data>©2020 Imagens.Arte CNPJ: 29.779.590/0001-84 São Leopoldo-RS</Data>
        </Footer>
      </Container>
    </>
  )
}

export default Home
