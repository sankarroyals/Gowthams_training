import {React,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Singleproduct } from '../../../redux/actions/CartActions'

const SingleProduct = () => {
 const {id} = useParams()

 const dispatch = useDispatch()

 const data = useSelector(state=>state.ShoppingReducers.singleProduct)

 useEffect(()=>{
    dispatch(Singleproduct(id))
 },[dispatch,id])


console.log(data)

  return (
    <div>
        {id}
    </div>
  )
}

export default SingleProduct