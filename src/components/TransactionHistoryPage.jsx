import { Box, Flex, HStack, Heading, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import PageNamedHeader from "./PageNamedHeader";
import PaymentDetailsCard from "./PaymentDetailsCard";
import FooterNavBar from "./FooterNavBar";

const TransactionHistoryPage = () => {
  return (
    <Box className="main-container">
      <PageNamedHeader pageTitle={"History"} />
      <Box padding={3}>
        <Heading mb={3} color={"white"} size={"md"}>
          Today
        </Heading>
        <PaymentDetailsCard
          paymentTo={"Card To Card"}
          message={"Maria"}
          amount={1234}
          recieversAccountNumber={"xxxxxxxxxx4536"}
          date={"21/09/2023"}
          time={"10:12 A.M."}
          iconType={"cardPayment"}
        />
        <PaymentDetailsCard
          paymentTo={"Apple Music"}
          message={"Online"}
          amount={-467}
          recieversAccountNumber={"xxxxxxxxxx4123"}
          date={"21/09/2023"}
          time={"12:14 P.M."}
          iconType={"music"}
        />
        <PaymentDetailsCard
          paymentTo={"Uber"}
          message={"Service"}
          amount={-124}
          recieversAccountNumber={"xxxxxxxxxx1455"}
          date={"21/09/2023"}
          time={"02:47 P.M."}
          iconType={"service"}
        />
        <PaymentDetailsCard
          paymentTo={"Uber"}
          message={"Service"}
          amount={-43}
          recieversAccountNumber={"xxxxxxxxxx1455"}
          date={"21/09/2023"}
          time={"02:47 P.M."}
          iconType={"service"}
        />
        <PaymentDetailsCard
          paymentTo={"Card To Card"}
          message={"Maria"}
          amount={323}
          recieversAccountNumber={"xxxxxxxxxx4536"}
          date={"21/09/2023"}
          time={"10:12 A.M."}
          iconType={"cardPayment"}
        />
        <Heading mb={3} color={"white"} size={"md"}>
          12 March
        </Heading>
        <PaymentDetailsCard
          paymentTo={"Card To Card"}
          message={"Maria"}
          amount={786}
          recieversAccountNumber={"xxxxxxxxxx4536"}
          date={"21/09/2023"}
          time={"10:12 A.M."}
          iconType={"cardPayment"}
        />
      </Box>
      <Box className="footer">
          <FooterNavBar />
        </Box>
    </Box>
  );
};

export default TransactionHistoryPage;
