import React from 'react'
import { CardContainer, ImagemCard, Container, Footer, Data } from './styles'
// import ImanImage from '../../assets/Ellipse 8.png'
import card from '../../assets/Card.png'

function Home() {
  return (
    <>
      <Container>
        {/* <ContainerFoto>
          <Image src={fotos} alt="foto" />
          <Image src={fotos} alt="foto" />
          <Image src={fotos} alt="foto" />
          <Image src={fotos} alt="foto" />
          <Image src={fotos} alt="foto" />
          <Image src={fotos} alt="foto" />
          <Image src={fotos} alt="foto" />
          <Image src={fotos} alt="foto" />
          <Image src={fotos} alt="foto" />
          <Image src={fotos} alt="foto" />
        </ContainerFoto> */}
        <CardContainer>
          <ImagemCard src={card} alt="cardFoto" />
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
