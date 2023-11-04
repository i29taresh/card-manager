import React from 'react'
import { Box, Flex, HStack, Heading, Image, Spacer } from "@chakra-ui/react";

const PageNamedHeader = ({pageTitle}) => {
  return (
    <>
      <Box padding={3}>
        <HStack>
        <Box>
            <Heading color={'white'}>{pageTitle}</Heading>
        </Box>
        <Spacer />
        <Box>
            <Image
            src="https://bit.ly/dan-abramov"
            height={"60px"}
            borderRadius={1000}
            alt="Dan Abramov"
            />
        </Box>
        </HStack>
      </Box>
    </>
  )
}

export default PageNamedHeader