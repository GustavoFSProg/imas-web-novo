import React from 'react'
import { Container, Logo, ContainerLogo, Lista } from './styles'
import logo from '../../assets/4logo.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Container>
      <Lista>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: ' #1aa27c',
            fontFamily: 'Lato',
            fontSize: '19px',
          }}
        >
          Home
        </Link>
      </Lista>
      <Lista>
        <Link
          to="/about"
          style={{
            textDecoration: 'none',
            color: ' #1aa27c',
            fontFamily: 'Lato',
            fontSize: '19px',
          }}
        >
          About
        </Link>
      </Lista>

      <ContainerLogo>
        <Logo src={logo} alt="logo" />

        {/* <Image> ÍMÃ</Image>
        <ImageFooter>gens</ImageFooter> */}
      </ContainerLogo>
    </Container>
  )
}

export default Header
