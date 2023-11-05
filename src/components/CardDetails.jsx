import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BankCard from "./BankCard";
import { FaHistory } from "react-icons/fa";
import { PiShareFatFill } from "react-icons/pi";
import { MdHorizontalRule } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import BankCardBack from "./BankCardBack";
import PaymentDetailsCard from "./PaymentDetailsCard";
import { useNavigate } from "react-router-dom";

const CardDetails = ({ balance }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const [secondClick, setSecondClick] = useState(false);
  let navigate = useNavigate();
  // const handleMouseDown = () => {
  //   console.log('pressed');
  //   setIsPressed(true);
  // };

  // const handleMouseUp = () => {
  //   console.log('released');
  //   setIsPressed(false);
  // };
  const handleMouseClick = () => {
    console.log("released");
    setIsPressed(!isPressed);
  };
  const handleClick = () => {
    if (!firstClick) {
      setFirstClick(true);
    } else if (!secondClick) {
      setSecondClick(true);
    } else {
      setFirstClick(false);
      setSecondClick(false);
    }
  };
  const handleOnClick = () => {
    navigate("/");
  }
  balance = "2748.00";
  return (
    <Box>
      <HStack padding={5} color={'white'}>
        <Box onClick={handleOnClick}>
          <AiOutlineArrowLeft size={30} />
        </Box>
        {!firstClick && !secondClick ? (
          <></>
        ) : (
          <Box marginLeft={"90px"}>
            <Heading size={"md"} fontSize={"1.5em"}>
              Salary Card
            </Heading>
          </Box>
        )}
      </HStack>
      {secondClick ? (
        <></>
      ) : (
        <Box padding={5}>
          {firstClick ? (
            <></>
          ) : (
            <Box>
              <Heading color={"white"} mb={4}>
                Salary Card
              </Heading>
            </Box>
          )}

          <Center>
            <div
              // onMouseDown={handleMouseDown}
              // onMouseUp={handleMouseUp}
              // onMouseLeave={handleMouseUp}
              onClick={handleMouseClick}
            >
              {isPressed ? (
                <BankCardBack cvv={"123"} />
              ) : (
                <BankCard cardNumber="1234 5678 9012 3456" expiryDate="05/22" />
              )}
            </div>
          </Center>
          <HStack>
            <Box width={"100%"} mt={5}>
              <HStack justifyContent={"space-between"}>
                <Stack gap={0}>
                  <Heading size={"sl"} color={"#fff"}>
                    Balance
                  </Heading>
                  <Heading color={"white"}>${balance}</Heading>
                </Stack>
                <Spacer />
                <HStack>
                  <Box>
                    <Button
                      borderColor={"#4C546A"}
                      variant={"outline"}
                      color={"white"}
                    >
                      <FaHistory />
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      borderColor={"#4C546A"}
                      variant={"outline"}
                      color={"white"}
                    >
                      <PiShareFatFill />
                    </Button>
                  </Box>
                </HStack>
              </HStack>
            </Box>
          </HStack>
        </Box>
      )}

      <Box
        backgroundColor={"#1C2641"}
        // height={"100px"}
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
        border={"1px solid black"}
      >
        <Box>
          <Center>
            <Button onClick={handleClick} variant={"ghost"}>
              <MdHorizontalRule color="#2D3757" size={50} pt={0} />
            </Button>
          </Center>
          <Box padding={3}>
            <Heading mb={3} color={"white"} size={"md"}>
              20 April
            </Heading>
            <PaymentDetailsCard
              paymentTo={"Card To Card"}
              message={"Maria"}
              amount={1234}
              recieversAccountNumber={"xxxxxxxxxx4536"}
              date={"21/09/2023"}
              time={"10:12 A.M."}
            />
            <PaymentDetailsCard
              paymentTo={"Apple Music"}
              message={"Online"}
              amount={-467}
              recieversAccountNumber={"xxxxxxxxxx4123"}
              date={"21/09/2023"}
              time={"12:14 P.M."}
            />
            <PaymentDetailsCard
              paymentTo={"Uber"}
              message={"Service"}
              amount={-124}
              recieversAccountNumber={"xxxxxxxxxx1455"}
              date={"21/09/2023"}
              time={"02:47 P.M."}
            />
            {/* <PaymentDetailsCard
          paymentTo={"Uber"}
          message={"Service"}
          amount={-124}
          recieversAccountNumber={"xxxxxxxxxx7535"}
          date={"21/09/2023"}
          time={"08:10 P.M."}
        /> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardDetails;
