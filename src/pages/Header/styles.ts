import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: #f77d27;
  /* background: yellow; */

  display: flex;
  align-items: center;
  text-align: center;
  text-align: center;
  justify-content: center;
`
export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`
export const Image = styled.p`
  /* position: relative; */
  width: 10%;
  height: 26%;
  left: 387px;
  /* top: 12px; */

  font-family: Chonburi;
  font-style: normal;
  font-weight: normal;
  font-size: 47px;
  line-height: 0px;
  /* or 0% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;

  color: #ffffff;
`
export const Logo = styled.img`
  width: 13%;
  background: green;

  @media screen and (max-width: 400px) {
    width: 40%;
  }
  @media screen and (min-width: 400px) and (max-width: 800px) {
    width: 25%;
  }
`

export const ImageFooter = styled.p`
  /* position: absolute; */
  width: 110px;
  height: 56px;
  margin-left: -7px;
  margin-top: 57px;
  /* background: red; */

  font-family: Handlee;
  font-style: normal;
  font-weight: normal;
  font-size: 37px;
  line-height: 0px;
  /* or 0% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;

  color: #ffffff;
`
