import {
  Box,
  Center,
  Collapse,
  HStack,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaShare } from "react-icons/fa";
import { BsMusicNote } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";

const PaymentDetailsCard = ({
  paymentType,
  paymentTo,
  message,
  amount,
  date,
  time,
  recieversAccountNumber,
  iconType,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  var floatAmount = parseFloat(amount);
  return (
    <>
      <Box padding={2} borderRadius={10} onClick={onToggle} mb={2}>
        <HStack>
          <Box width={"15%"} minWidth={"60px"}>
            {iconType === "cardPayment" ? (
              <Center
                height={"60px"}
                width={"60px"}
                backgroundColor={"#DE3A84"}
                borderRadius={1000}
              >
                <FaShare size={40} color={"white"} />
              </Center>
            ) : iconType === "music" ? (
              <Center
                height={"60px"}
                width={"60px"}
                backgroundColor={"#F3AC37"}
                borderRadius={1000}
              >
                <BsMusicNote size={40} color={"white"} />
              </Center>
            ) : (
              <Center
                height={"60px"}
                width={"60px"}
                backgroundColor={"#2774F3"}
                borderRadius={1000}
              >
                <AiOutlineCar size={40} color={"white"} />
              </Center>
            )}
          </Box>
          <Box
            width={"85%"}
            borderBottom={"2px"}
            borderColor={"gray"}
            padding={"20px"}
          >
            <HStack justifyContent={"space-between"}>
              <Box textAlign={"left"} color={"#94A3D3"}>
                <Heading size="md" color={"white"}>
                  {paymentTo}
                </Heading>
                <Text>{message}</Text>
                <Collapse in={isOpen} animateOpacity>
                  <Box mt="1">
                    <Text>{recieversAccountNumber}</Text>
                    <Text>
                      {date} {time}
                    </Text>
                  </Box>
                </Collapse>
              </Box>
              <Box>
                {floatAmount >= 0.0 ? (
                  <Heading size={"md"} color={"white"} fontWeight={"bold"}>
                    {" "}
                    +${Math.abs(amount)}
                  </Heading>
                ) : (
                  <Heading size={"md"} color={"white"} fontWeight={"bold"}>
                    {" "}
                    -${Math.abs(amount)}
                  </Heading>
                )}
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default PaymentDetailsCard;
