import React from 'react'
import PageNamedHeader from './PageNamedHeader'
import CatalogueItemCard from './CatalogueItemCard'

const CataloguePage = () => {
  return (
    <>
        <PageNamedHeader pageTitle={"Catalogue"} />
        <CatalogueItemCard paymentType={"Mobile"} amount={'34.00'} />
        <CatalogueItemCard paymentType={"Internet and TV"} amount={'21.00'} />
        <CatalogueItemCard paymentType={"Traffic fines"} amount={'1221.00'} />
        <CatalogueItemCard paymentType={"Housing Services"} amount={'0.00'} />
    </>
  )
}

export default CataloguePage