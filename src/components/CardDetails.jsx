import { Box, Center, HStack, Heading } from '@chakra-ui/react'
import React from 'react'
import BankCard from './BankCard'

const CardDetails = () => {
  return (
    <>
    <Box>
        <Heading>Salary Card</Heading>
    </Box>
    <Center>
        <BankCard cardNumber="1234 5678 9012 3456" expiryDate="05/22" />
    </Center>
    <HStack>
        <Box>
            
        </Box>
        <Box>

        </Box>
    </HStack>
    <Box>

    </Box>
    </>
  )
}

export default CardDetails