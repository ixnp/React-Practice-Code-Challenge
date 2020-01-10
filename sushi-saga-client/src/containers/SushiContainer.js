import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushi, eatSushi, popSushi}) => {
  return (
    <Fragment>
      <div className="belt">
        {
         
          sushi.map((sushi,index)=>{
            console.log(sushi)
            if(!sushi.isEaten){
              sushi.isEaten = false
            }
          return <Sushi sushi={sushi} key={index} eatSushi={eatSushi}/>
          })
        }
        <MoreButton popSushi={popSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer