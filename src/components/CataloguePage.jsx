import React from 'react'
import PageNamedHeader from './PageNamedHeader'
import CatalogueItemCard from './CatalogueItemCard'
import { useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const CataloguePage = () => {
  let navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/");
  }
  return (
    <>
        <Box onClick={handleOnClick} color={'white'} paddingLeft={5}>
          <AiOutlineArrowLeft size={30} />
        </Box>
        <PageNamedHeader pageTitle={"Catalogue"} />
        <CatalogueItemCard paymentType={"Mobile"} amount={'34.00'} />
        <CatalogueItemCard paymentType={"Internet and TV"} amount={'21.00'} />
        <CatalogueItemCard paymentType={"Traffic fines"} amount={'1221.00'} />
        <CatalogueItemCard paymentType={"Housing Services"} amount={'0.00'} />
    </>
  )
}

export default CataloguePage