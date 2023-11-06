import { Box, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSquareRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";


const FooterNavBar = () => {
    let navigate = useNavigate();
    const handleOnHomeButtonClick = () => {
        navigate('/');
    }

    const handleOnCatalogueButtonClick = () => {
        navigate('/catalogue');
    }

    const handleOnHistoryButtonClick = () => {
        navigate('/transactions');
    }
  return (
    <>
      <Box color={'#7A91D2'} padding={5} marginTop={'auto'} bgGradient={'linear(to-r, #212A47, #242E4B)'} width={'100vw'} border={'1px solid'} borderTopLeftRadius={'40px'} borderTopRightRadius={'40px'}>
        <HStack justifyContent={"space-between"}>
          <Box onClick={handleOnHomeButtonClick}>
            <AiOutlineHome size={40} />
          </Box>
          <Spacer />
          <Box onClick={handleOnCatalogueButtonClick}>
            <BiSquareRounded size={40} />
          </Box>
          <Spacer />
          <Box onClick={handleOnHistoryButtonClick}>
            <FaHistory size={40} />
          </Box>
          <Spacer />
          <Box>
            <GiHamburgerMenu size={40} />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default FooterNavBar;
