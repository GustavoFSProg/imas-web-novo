import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel'
import Card from '../assets/Card.png'
import placas2 from '../assets/placas2.png'
import Elipse from '../assets/Ellipse 8.png'
import { CarouselContainer } from './style'

class App extends Component {
  state = {
    items: [
      { id: 1, embed: `${Card}` },
      { id: 2, embed: `${placas2}` },
      { id: 3, embed: `${Elipse}` },
      { id: 4, embed: `${Card}` },
    ],
  }

  render() {
    const { items } = this.state
    return (
      <CarouselContainer>
        <Carousel isRTL={false} enableAutoPlay autoPlaySpeed={3000} transitionMs={1060}>
          {items.map((item) => (
            <div key={item.id}>
              <img src={item.embed} alt="f" style={{ width: '100%', height: '190px' }} />
            </div>
          ))}
        </Carousel>
      </CarouselContainer>
    )
  }
}

export default App
