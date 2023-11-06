import React, { useState } from "react";
import PageNamedHeader from "./PageNamedHeader";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import BankCard from "./BankCard";
import FooterNavBar from "./FooterNavBar";
import { AiOutlineArrowLeft, AiOutlineLine } from "react-icons/ai";
import BankCardBack from "./BankCardBack";
import { FaHistory } from "react-icons/fa";
import { PiShareFatFill } from "react-icons/pi";
import { MdHorizontalRule } from "react-icons/md";
import PaymentDetailsCard from "./PaymentDetailsCard";

const DemoFrontPage = ({ balance, cards }) => {
  let navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [card, setCard] = useState(false);
  balance = "1234.00";

  const goToPrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? cards.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === cards.length - 1 ? 0 : currentSlide + 1);
  };
  const handleOnClick = () => {
    // navigate("/cardDetails");
    setCard(!card);
  };

  // xxxxxxxxxxxxxxxxxxxx
  const [isPressed, setIsPressed] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const [secondClick, setSecondClick] = useState(false);
  // let navigate = useNavigate();
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
  // const handleOnClick = () => {
  //   navigate("/");
  // };
  return (
    <>
      <Box className="main-container">
        {!card ? (
          <>
            <PageNamedHeader pageTitle={"Bank Cards"} />
            <Box paddingLeft={5}>
              <Stack gap={0}>
                <Heading size={"sl"} color={"#fff"}>
                  Balance
                </Heading>
                <Heading color={"white"}>${balance}</Heading>
              </Stack>
            </Box>
          </>
        ) : (
          <>
            <HStack padding={5} color={"white"}>
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
              <Box>
                {firstClick ? (
                  <></>
                ) : (
                  <Box paddingLeft={5}>
                    <Heading color={"white"} mb={4}>
                      Salary Card
                    </Heading>
                  </Box>
                )}
              </Box>
            )}
          </>
        )}

        {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
        {secondClick ? (
          <></>
        ) : (
          <Center paddingLeft={5}>
            <div className={card ? "rotate-class" : ""}>
              <Box className="carousel">
                {cards.map((card, index) => (
                  <Box>
                    <Box
                      key={index}
                      style={{
                        display: index === currentSlide ? "block" : "none",
                      }}
                      onClick={handleOnClick}
                      className="rotate-left"
                    >
                      <BankCard
                        cardNumber={card.cardNumber}
                        expiryDate={card.expiryDate}
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            </div>
          </Center>
        )}

        {!card ? (
          <Box marginTop={"11em"}>
            <HStack justifyContent={"center"}>
              <Box marginLeft={"-80px"}>
                <AiOutlineLine size={40} onClick={goToPrevSlide} />
              </Box>
              <Box>
                <AiOutlineLine size={40} onClick={goToNextSlide} />
              </Box>
            </HStack>
          </Box>
        ) : (
          <>
            {secondClick ? (
              <></>
            ) : (
              <HStack>
                <Box width={"100%"} mt={5} padding={5}>
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
            )}

            <Box
              backgroundColor={"#1C2641"}
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
                  {!firstClick && !secondClick ? (
                    <>
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
                    </>
                  ) : secondClick ? (
                    <>
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
                    </>
                  ) : (
                    <>
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
                        amount={-124}
                        recieversAccountNumber={"xxxxxxxxxx1455"}
                        date={"21/09/2023"}
                        time={"02:47 P.M."}
                        iconType={"service"}
                      />
                    </>
                  )}
                </Box>
              </Box>
            </Box>
          </>
        )}

        <Box className="footer">
          <FooterNavBar />
        </Box>
      </Box>
    </>
  );
};

export default DemoFrontPage;
