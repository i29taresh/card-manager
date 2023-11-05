import { Box, Flex, HStack, Heading, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import PageNamedHeader from "./PageNamedHeader";
import PaymentDetailsCard from "./PaymentDetailsCard";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const TransactionHistoryPage = () => {
  let navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/");
  }
  return (
    <>
      <Box onClick={handleOnClick} color={'white'} paddingLeft={5}>
        <AiOutlineArrowLeft size={30} />
      </Box>
      <PageNamedHeader pageTitle={"History"} />
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
        <PaymentDetailsCard
          paymentTo={"Uber"}
          message={"Service"}
          amount={-124}
          recieversAccountNumber={"xxxxxxxxxx7535"}
          date={"21/09/2023"}
          time={"08:10 P.M."}
        />
      </Box>
    </>
  );
};

export default TransactionHistoryPage;
