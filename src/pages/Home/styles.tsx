import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 75%;
  height: 416px;
  background: #1aa27c;
  /* background: yellow; */
  border-radius: 12px;
  margin-top: 20px;
  color: white;
  /* color: yellow; */
  font-size: 25px;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: #e5e5e5;
`
export const TitleContainer = styled.div`
  width: 45%;
  margin-top: 62px;
  height: 116px;
  margin-left: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`
export const Title = styled.span`
  /* position: relative; */

  /* max-width: 12%; */
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
  line-height: 64, 8px;
  /* or 0% */
  /* 
  display: flex;
  align-items: center;
  text-align: center; */
  letter-spacing: 0.01em;

  color: #ffffff;

  @media screen and (max-width: 600px) {
    font-size: 1.7rem;
  }
`
export const Logo = styled.img`
  width: 13%;
  background: green;

  @media screen and (max-width: 400px) {
    width: 40%;
  }

  @media screen and (min-width: 400px) and (max-width: 800px) {
    width: 25%;
  } ;
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
