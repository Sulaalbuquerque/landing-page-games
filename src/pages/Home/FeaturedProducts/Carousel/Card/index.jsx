import { useState, useContext } from "react"

import { CounterBagContext }  from '../../../../../contexts/CounterBagContext'
import { SuccessIsVisibleContext } from "../../../../../contexts/SuccessIsVisibleContext"

import imgGameCharacter from '../../../../../../public/assets/svgs/image_6-removebg-preview-1.svg'

import { ContainerCard } from "./style"

export const Card = ({ img, 
                       altImg, 
                       name, 
                       price }) => {
  
  const { counterBag, setCounterBag} = useContext(CounterBagContext);
  const { setSuccessIsVisible } = useContext(SuccessIsVisibleContext)
  
  const [clickedButton, setClickedButton] = useState(false)

  const hideScrollSuccess = () => {
    document.body.style.overflow = 'hidden'
  }

  const changeStyleButton = () => {
    setClickedButton(true)
    setSuccessIsVisible(true)
    setCounterBag(counterBag + 1)
    hideScrollSuccess()
  }

  return (
    <>
      <ContainerCard isClickedButton={clickedButton}>
        <div className="container-image">
          <img 
            className="image-card"
            src={img} 
            alt={altImg} 
          />
        </div>    

        <div className="description">
          <div className="details">
            <span className="name">{name}</span>
            <span className="value">{price}</span>
          </div>    

          <button onClick={changeStyleButton}>
            <div className="content">COMPRAR</div>
            <div className="success">
              <div className="text">COMPRADO!</div>
              <div className="img">
                <img src={imgGameCharacter} />
              </div>
            </div>
          </button>
        </div>
      </ContainerCard>
    </>
  )
}