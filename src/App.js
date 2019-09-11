import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import AccessoriesSelector from './AccessoriesSelector'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

const ContentWrapper = styled.div`
  border: 1px solid #BCB5B9;
  border-radius: 3px;
  padding: 20px 40px;
  background: #F2F2F2;
  max-width: 480px;
  min-width: 300px;
  min-height: 300px;
`


const accessories = [
  {
    id: "fdsaf",
    name: "SD Card 64 GB",
    image: "img/sd-card.png",
    price: 45.6
  },
  {
    id: "hjkdhf",
    name: "Mini SD Card",
    image: "img/mini-sd-card.jpg",
    price: 12.3
  },
  {
    id: "nfjdsk",
    name: "USB Memory Stick",
    image: "img/usb-stick.jpg",
    price: 78.9
  },
  {
    id: "nicvxoi",
    name: "Headphones",
    image: "img/headphones.jpg",
    price: 34.7
  },
  {
    id: "rqzwion",
    name: "PC Mouse",
    image: "img/mouse.jpg",
    price: 42
  }
]

const addToBasket = (item) => alert(item.name + " added to basket.\nID: " + item.id + "\nPrice: " + item.price.toFixed(2))

function App() {
  return (
    <AppWrapper>
      <GlobalStyles />
      <ContentWrapper>
        <AccessoriesSelector
          accessories={accessories}
          isLoading={false}
          addToBasketAction={addToBasket}>
        </AccessoriesSelector>
      </ContentWrapper>
    </AppWrapper>
  )
}


export default App
