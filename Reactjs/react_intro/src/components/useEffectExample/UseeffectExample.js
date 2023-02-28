import React, { useEffect, useState } from 'react'
import UseEffectChild from './UseEffectChild'

const UseeffectExample = () => {

  const [trigger,setTrigger] = useState(false)

  const changingTrigger = (e) =>{
        
    setTrigger(!trigger)

  }


  


  useEffect(()=>{
    console.log(trigger)
  },[trigger])

  


  return (
    <div>

        <UseEffectChild  trigger={trigger} changingTrigger={changingTrigger} />
        
    </div>
  )
}

export default UseeffectExample