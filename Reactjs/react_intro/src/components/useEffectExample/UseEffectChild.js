import React from 'react'

const UseEffectChild = ({trigger,changingTrigger}) => {
  return (
    <div>

        {trigger ? <div>Hello</div> : <div>Bye</div>}
        <button onClick={e=>changingTrigger(e)}>Click me</button>
    </div>
  )
}

export default UseEffectChild