import { Stack } from '@mui/system'
import React from 'react'
import ProductForm from './ProductForm'
import DataTable from './DataTable'
import { useParams } from 'react-router'


const UpdateProduct = () => {

  const {id} = useParams()

  console.log(id)

  return (
    <Stack>
      <ProductForm/>
    </Stack>
  )
}

export default UpdateProduct
