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
} from './styles'
import ImanImage from '../../assets/Ellipse 8.png'

function Home() {
  return (
    // Há mais de 5 anos no mercado, especializada em ímãs temáticos para geladeiras e muito mais.
    <>
      <Container>
        <CardContainer>
          <TitleContainer>
            <Title>Ímãs de geladeira, fotografias e albuns</Title>
          </TitleContainer>
          <Line />
          <ContainerTexto>
            Há mais de 5 anos no mercado, especializada em ímãs temáticos para geladeiras e muito
            mais.
          </ContainerTexto>
          <ContainerImage>
            <ImagemIman src={ImanImage} alt="ImanImage" />
          </ContainerImage>
        </CardContainer>
      </Container>
    </>
  )
}

export default Home
