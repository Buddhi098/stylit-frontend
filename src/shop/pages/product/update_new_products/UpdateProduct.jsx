import { Stack } from '@mui/system'
import React from 'react'
import ProductForm from './ProductForm'
import { useParams } from 'react-router'


const UpdateProduct = () => {

  const {id} = useParams()

  console.log(id)

  return (
    <Stack>
      <ProductForm id={id}/>
    </Stack>
  )
}

export default UpdateProduct
