import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        background: "linear-gradient(to right, rgb(77, 95, 145), #27345f)"
      }
    })
  },
})
export default theme;