import React, { useState } from "react";
import PageNamedHeader from "./PageNamedHeader";
import { Box, Button, Center, Flex, HStack, Heading, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import BankCard from "./BankCard";
import FooterNavBar from "./FooterNavBar";

const FrontPage = ({ balance, cards }) => {
    let navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    balance = "1234.00";

    const goToPrevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? cards.length - 1 : currentSlide - 1);
    };

    const goToNextSlide = () => {
        setCurrentSlide(currentSlide === cards.length - 1 ? 0 : currentSlide + 1);
    };
    const handleOnClick = () => {
        navigate('/cardDetails');
    }
  return (
    <Box padding={5} height={'100%'}>
      <PageNamedHeader pageTitle={"Bank Cards"} />
      <Box>
        <Stack gap={0}>
          <Heading size={"sl"} color={"#fff"}>
            Balance
          </Heading>
          <Heading color={"white"}>${balance}</Heading>
        </Stack>
      </Box>

      <Center>
        <Box className="carousel">
          {cards.map((card, index) => (
            <Box
              key={index}
              style={{ display: index === currentSlide ? "block" : "none" }}
              onClick={handleOnClick}
            >
              <BankCard
                cardNumber={card.cardNumber}
                expiryDate={card.expiryDate}
              />
            </Box>
          ))}
        </Box>
      </Center>
      <Box marginTop={3}>
        <HStack justifyContent={'center'}>
            <Box >
                <Button onClick={goToPrevSlide}>Prev</Button>
            </Box>
            <Box>
                <Button onClick={goToNextSlide}>Next</Button>
            </Box>
        </HStack>
      </Box>
    
        <FooterNavBar />
    </Box>
  );
};

export default FrontPage;
