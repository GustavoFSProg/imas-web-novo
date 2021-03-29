import React from 'react'
import {
  CardContainer,
  ImagemFace,
  ImagemAvatar,
  Container,
  Footer,
  Data,
  PromoContainer,
} from './styles'
// import ImanImage from '../../assets/Ellipse 8.png'
import Avatar from '../../assets/Card/BASTA.png'
import Face from '../../assets/Card/FRIDA.png'

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
          <PromoContainer>
            <ImagemAvatar src={Avatar} alt="avatar" />
            <ImagemFace src={Face} alt="face" />
          </PromoContainer>

          {/* <ImagemCard src={card} alt="cardFoto" /> */}
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
