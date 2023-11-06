import { Box, Button, Center, HStack, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineWifi } from "react-icons/ai";
import { AiOutlineCar } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { BsLightning } from "react-icons/bs";

const CatalogueItemCard = ({ paymentType, amount, iconType }) => {
  var floatAmount = parseFloat(amount);
  return (
    <>
      <Box
        padding={2}
        borderRadius={10}
        mb={2}
      >
        <HStack>
          <Box width={"15%"} minWidth={"60px"}>
            <Center
              height={"60px"}
              width={"60px"}
              bgGradient='linear(to-b, #68A9FF, #4F47FE)'
              borderRadius={1000}
            >
            {iconType === "mobile" ? (
                <BsTelephone size={35} color={"white"} />
            ) : iconType === "wifi" ? (
                <AiOutlineWifi size={35} color={"white"} />
            ) : iconType === "car" ? (
                <AiOutlineCar size={35} color={"white"} />
            ) : iconType === "home" ? (
                <AiOutlineHome size={35} color={"white"} />
            ) : (
                <BsLightning size={35} color={"white"} />
            )}
            </Center>
          </Box>
          {/* <Spacer/> */}
          <Box
            width={"85%"}
            borderBottom={"2px"}
            borderColor={"gray"}
            padding={"20px"}
          >
            <HStack justifyContent={"space-between"}>
              <Box textAlign={"left"}>
                <Heading size="md" color={"white"}>
                  {paymentType}
                </Heading>
                <Text color={"#94A3D3"}>The Debt is ${amount}</Text>
              </Box>
              <Box>
                {floatAmount !== 0.0 ? (
                  <Button
                    colorScheme="linkedin"
                    variant="outline"
                    paddingLeft={4}
                    paddingRight={4}
                    fontWeight="bold"
                    border={"2px"}
                  >
                    Pay
                  </Button>
                ) : (
                  <Button
                    colorScheme="gray"
                    variant="outline"
                    paddingLeft={4}
                    paddingRight={4}
                    isDisabled={true}
                    color={"white"}
                  >
                    Pay
                  </Button>
                )}
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default CatalogueItemCard;
