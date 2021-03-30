import React from 'react'
import { CardContainer, ContainerCarousel, Container, Footer, Data } from './styles'
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
