import React from "react";
import { Box, Heading } from "@chakra-ui/react";
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

      </Box>
    </>
  );
};

export default BankCardBack;
