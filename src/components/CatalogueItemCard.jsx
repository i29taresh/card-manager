import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CatalogueItemCard = ({ paymentType, amount }) => {
    var floatAmount = parseFloat(amount);
  return (
    <>
      <Box
        padding={2}
        // border={"2px"}
        // borderColor={"black"}
        // borderStyle={"solid"}
        borderRadius={10}
        mb={2}
      >
        <HStack>
          <Box width={"15%"} minWidth={"60px"}>
            <Image
              src="https://bit.ly/dan-abramov"
              height={"60px"}
              borderRadius={1000}
              alt="Dan Abramov"
            />
          </Box>
          {/* <Spacer/> */}
          <Box width={"85%"} borderBottom={"2px"} borderColor={"gray"} padding={'20px'}>
            <HStack justifyContent={"space-between"}>
              <Box textAlign={"left"}>
                <Heading size="md" color={'white'}>{paymentType}</Heading>
                <Text color={'#94A3D3'}>The Debt is ${amount}</Text>
              </Box>
              <Box>
              {floatAmount !== 0.00 ? <Button colorScheme='linkedin' variant='outline' paddingLeft={4} paddingRight={4} fontWeight='bold' border={'2px'}>
                    Pay
                </Button> : 
                <Button colorScheme='gray' variant='outline' paddingLeft={4} paddingRight={4} isDisabled={true} color={'white'}>
                    Pay
                </Button>
                }
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default CatalogueItemCard;
