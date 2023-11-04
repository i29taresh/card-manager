import React from 'react'
import {FcSimCardChip} from 'react-icons/fc';
import {BsWifi2} from 'react-icons/bs';
import {FaCcMastercard} from 'react-icons/fa';
import { Box, HStack, Heading } from '@chakra-ui/react';
const BankCard = ({cardNumber, expiryDate}) => {
    const bankName = "Universal Bank";
  return (
    <>
        <Box width={'350px'} height={'200px'} bgGradient="linear(to-tr, #D16BA5, #9BD0F4, #1F5BE5)"  borderRadius={10} padding={4}>
            <HStack>
                <Heading color={'whiteAlpha.900'}>CB</Heading>
                <Heading color={'white'} size={'md'}>|</Heading>
                <Heading color={'#C6E4FD'} size={'md'}>Universal Bank</Heading>
            </HStack>
            <HStack justifyContent={'space-between'}>
                <FcSimCardChip size={50}/>
                <BsWifi2 className='rotate-right' size={50} color='#C6E4FD'/>
            </HStack>

            <HStack>
                <Heading color={'white'}>{cardNumber}</Heading>
            </HStack>

            <HStack justifyContent={'space-between'}>
                <Heading size={'sm'} color={'#C6E4FD'}>{expiryDate}</Heading>
                <FaCcMastercard size={50}/>
            </HStack>
        </Box>
    </>
  )
}

export default BankCard