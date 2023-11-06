import React from 'react'
import PageNamedHeader from './PageNamedHeader'
import CatalogueItemCard from './CatalogueItemCard'
import { Box } from '@chakra-ui/react';
import FooterNavBar from './FooterNavBar';

const CataloguePage = () => {
  return (
    <Box className="main-container">
        <PageNamedHeader pageTitle={"Catalogue"} />
        <CatalogueItemCard paymentType={"Mobile"} amount={'34.00'} iconType={'mobile'} />
        <CatalogueItemCard paymentType={"Internet and TV"} amount={'21.00'} iconType={'wifi'} />
        <CatalogueItemCard paymentType={"Traffic fines"} amount={'1221.00'} iconType={'car'} />
        <CatalogueItemCard paymentType={"Housing Services"} amount={'0.00'} iconType={'home'} />
        <CatalogueItemCard paymentType={"Utility Payment"} amount={'442.00'} iconType={'light'} />
        <Box className="footer">
          <FooterNavBar />
        </Box>
    </Box>
  )
}

export default CataloguePage