import React from 'react'
import {
  CardContainer,
  ImagemFace,
  ImagemAvatar,
  Container,
  Footer,
  Data,
  PromoContainer,
  TextOne,
  TextAll,
  TextTwo,
  TextThre,
} from './styles'
// import ImanImage from '../../assets/Ellipse 8.png'
import Avatar from '../../assets/Card/BASTA.png'
import Face from '../../assets/Card/FRIDA.png'
import TextOneImage from '../../assets/Card/Texto.png'
import Text1Image from '../../assets/Card/Texto-1.png'
import Text3 from '../../assets/Card/Texto-2.png'
import Header from '../Header/index'

function Home() {
  return (
    <>
      <Header />
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
            <TextAll>
              <TextOne src={TextOneImage} alt="text1" />
              <TextTwo src={Text1Image} alt="textOne-1" />
              <TextThre src={Text3} alt="textOne-3" />
            </TextAll>
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
