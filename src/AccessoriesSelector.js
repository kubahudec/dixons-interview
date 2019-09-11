import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BallClipRotate } from 'react-pure-loaders'

const Selector = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
`
const Item = styled.div`
  background-color: white;
  margin: 2% 0;
  width: 19%;
  display: flex;
  justify-content: center;
  height: 50px;
  border: ${props => props.selected ? "solid 2px blue" : "solid 1px #A2A2A2"};
`
const SelectorImage = styled.img`
  object-fit: contain;
  width: 100%;
`
const Button = styled.div`
  border: solid 3px green;
  border-radius: 4px;
  width 80%;
  margin: 1em auto;
  color: green;
  text-align: center;
  padding: 1em;
`
const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: #D2D2D2;
  margin: 10% auto;
`
const Detail = styled.div`
  background-color: white;
  padding: 1 0;
`
const Informations = styled.div`
  display: flex;
  flex-direction: row;
`
const Image = styled.div`
  padding: 5%;
  width: 40%;
  img { width: 100%; }
`
const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-evenly;
  width: 40%;
  height:100%;
  padding: 5%
`
const Title = styled.div`
  font-weight: bold;
`
const Price = styled.div`
  text-align: center;
  font-size: 1.5em;
`

const AccessoriesSelector = (props) => {
  const [selectedItem, setSelectedItem] = useState(0)

  const items = props.isLoading ?
    (
      <Selector>
        {[0,1,2,3,4].map(i => {
          return (
            <Item
              key={i}
              ><BallClipRotate color={"#A2A2A2"} loading={props.isLoading} /></Item>
          )
        })}
      </Selector>
    )
    : (
      <Selector>
        {props.accessories.slice(0, 5).map((item, index) => {
          return (
            <Item
              key={item.id}
              onClick={() => setSelectedItem(index)}
              selected={index === selectedItem ? true : false}
            ><SelectorImage src={item.image} alt={item.name} /></Item>)
        })}
      </Selector>
    )

  const detail = props.isLoading ?
    (
      <Detail>
        <Informations>
          <BallClipRotate color={"#A2A2A2"} loading={props.isLoading} />
        </Informations>
      </Detail>
    )
    : (
      <Detail>
        <Informations>
          <Image>
            <img
              src={props.accessories[selectedItem].image}
              alt={props.accessories[selectedItem].name} />
          </Image>
          <MainInfo>
            <Title>{props.accessories[selectedItem].name}</Title>
            <Line />
            <Price>{"£" + props.accessories[selectedItem].price.toFixed(2)}</Price>
            <Line />
          </MainInfo>
        </Informations>
        <Button onClick={() => props.addToBasketAction(props.accessories[selectedItem])}>
          Add to basket
        </Button>
      </Detail>
    )

  return (
    <div>
      {items}
      {detail}
   </div>
 )
}

AccessoriesSelector.propTypes = {
  accessories: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  addToBasketAction: PropTypes.func.isRequired
}

export default AccessoriesSelector
