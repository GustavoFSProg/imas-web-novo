import React from 'react'
import {
  CardContainer,
  Line,
  ContainerImage,
  TitleContainer,
  Container,
  Title,
  ImagemIman,
} from './styles'
import ImanImage from '../../assets/Ellipse 8.png'

function Home() {
  return (
    <>
      <Container>
        <CardContainer>
          <TitleContainer>
            <Title>Ímãs de geladeira, fotografias e albuns</Title>
          </TitleContainer>

          <ContainerImage>
            <ImagemIman src={ImanImage} alt="ImanImage" />
          </ContainerImage>
        </CardContainer>
        <Line />
      </Container>
    </>
  )
}

export default Home
