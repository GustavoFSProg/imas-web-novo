import React from 'react'
import { Container, Logo, ContainerLogo } from './styles'
import logo from '../../assets/04-logo.svg'

function Header() {
  return (
    <Container>
      <ContainerLogo>
        <Logo src={logo} alt="logo" />

        {/* <Image> ÍMÃ</Image>
        <ImageFooter>gens</ImageFooter> */}
      </ContainerLogo>
    </Container>
  )
}

export default Header
