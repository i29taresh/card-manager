import { Box, HStack } from "@chakra-ui/react";
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
      <Box padding={5} marginTop={'370px'}>
        <HStack justifyContent={"space-between"} mt={"auto"} mb={0}>
          <Box onClick={handleOnHomeButtonClick}>
            <AiOutlineHome size={40} />
          </Box>

          <Box onClick={handleOnCatalogueButtonClick}>
            <BiSquareRounded size={40} />
          </Box>

          <Box onClick={handleOnHistoryButtonClick}>
            <FaHistory size={40} />
          </Box>

          <Box>
            <GiHamburgerMenu size={40} />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default FooterNavBar;
