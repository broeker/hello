import React from "react"
import { Box, Switch, ChakraProvider, CSSReset } from "@chakra-ui/core"
import theme from "@chakra-ui/theme"

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Boxer
      </Box>
      <Switch id="email-alerts" />
    </ChakraProvider>
  )
}
