import {
  Box,
  Collapse,
  HStack,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const PaymentDetailsCard = ({
  paymentType,
  paymentTo,
  message,
  amount,
  date,
  time,
  recieversAccountNumber,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  var floatAmount = parseFloat(amount);
  return (
    <>
      {/* <Box
        padding={2}
        border={"2px"}
        borderColor={"black"}
        borderStyle={"solid"}
        borderRadius={10}
        onClick={onToggle}
        mb={2}
      >
        <Flex>
          <Image
            src="https://bit.ly/dan-abramov"
            height={"60px"}
            borderRadius={1000}
            alt="Dan Abramov"
          />
          <Spacer />
          <Box maxWidth={"50%"} textAlign={"center"}>
            <Heading size="md">{paymentTo}</Heading>
            <Text>{message}</Text>
            <Collapse in={isOpen} animateOpacity>
              <Box color="black" mt="1">
                <Text>{recieversAccountNumber}</Text>
                <Text>{date} {time}</Text>
              </Box>
            </Collapse>
          </Box>
          <Spacer />
          <Box>
            <Heading>+ ${amount}</Heading>
          </Box>
        </Flex>
      </Box> */}

      <Box padding={2} borderRadius={10} onClick={onToggle} mb={2}>
        <HStack>
          <Box width={"15%"} minWidth={"60px"}>
            <Image
              src="https://bit.ly/dan-abramov"
              height={"60px"}
              borderRadius={1000}
              alt="Dan Abramov"
            />
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
                {floatAmount >= 0.00 ? (
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
