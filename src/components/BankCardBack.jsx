import React from "react";
import { FcSimCardChip } from "react-icons/fc";
import { BsWifi2 } from "react-icons/bs";
import { FaCcMastercard } from "react-icons/fa";
import { Box, HStack, Heading, Text } from "@chakra-ui/react";
const BankCardBack = ({ cvv }) => {
  const bankName = "Universal Bank";
  return (
    <>
      <Box
        position={"relative"}
        width={"350px"}
        height={"200px"}
        bgGradient="linear(to-br, #D16BA5, #9BD0F4, #1F5BE5)"
        borderRadius={10}
        padding={4}
      >
        {/* <HStack>
                <Heading color={'whiteAlpha.900'}>CB</Heading>
                <Heading color={'white'} size={'md'}>|</Heading>
                <Heading color={'#C6E4FD'} size={'md'}>Universal Bank</Heading>
            </HStack> */}
        <Box position={"absolute"} top={"50px"} left={"0px"}>
          <Box height={"50px"} width={"350px"} backgroundColor={"#0C2462"}></Box>

          <Box
            borderRadius={5}
            height={"40px"}
            width={"330px"}
            margin={"10px"}
            backgroundColor={"#608BF9"}
          >
            <Heading paddingRight={2} color={'white'} fontSize={'25px'} textAlign={'right'}>123</Heading>
          </Box>
        </Box>

        <HStack>{/* <Heading color={'white'}>{cardNumber}</Heading> */}</HStack>

        <HStack justifyContent={"space-between"}>
          {/* <Heading size={'sm'} color={'#C6E4FD'}>{expiryDate}</Heading> */}
          {/* <FaCcMastercard size={50}/> */}
        </HStack>
      </Box>
    </>
  );
};

export default BankCardBack;
