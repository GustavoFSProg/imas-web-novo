import React from 'react'
import {
  CardContainer,
  Line,
  ContainerImage,
  TitleContainer,
  Container,
  Title,
  ImagemIman,
  ContainerTexto,
  ContainerFoto,
  Image,
  Footer,
} from './styles'
import ImanImage from '../../assets/Ellipse 8.png'
import fotos from '../../assets/placas2.png'

function Home() {
  return (
    <>
      <Container>
        <ContainerFoto>
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
        </ContainerFoto>
        <CardContainer>
          <TitleContainer>
            <Title>Ímãs de geladeira, fotografias e albuns</Title>
            <Line />
            <ContainerTexto>
              Há mais de 5 anos no mercado, especializada em ímãs temáticos para geladeiras e muito
              mais.
            </ContainerTexto>
          </TitleContainer>

          <ContainerImage>
            <ImagemIman src={ImanImage} alt="ImanImage" />
          </ContainerImage>
        </CardContainer>
        <Footer></Footer>
      </Container>
    </>
  )
}

export default Home
