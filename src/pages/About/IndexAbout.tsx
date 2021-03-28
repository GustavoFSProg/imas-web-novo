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
  Data,
} from './styles'
import ImanImage from '../../assets/Ellipse 8.png'
import fotos from '../../assets/placas2.png'

function About() {
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
        <Footer>
          <Data>©2020 Imagens.Arte CNPJ: 29.779.590/0001-84 São Leopoldo-RS</Data>
          <Data>Siga-nos em: {/* <img src={insta} alt="instagram" width="25%" /> */}</Data>
          <Data>©2020 Imagens.Arte CNPJ: 29.779.590/0001-84 São Leopoldo-RS</Data>
        </Footer>
      </Container>
    </>
  )
}

export default About
