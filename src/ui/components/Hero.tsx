import React from 'react'
import { Container, Flex, Box, Img } from '../primitives'
import logo from '../../assets/img/logo.svg'
import grungepattern from '../../assets/img/grungepattern.png'

const Hero = () => (
  <Container width="100vw" height="100vh">
    <Box width="100%" height="100%" bgImage={`url(${grungepattern})`}>
      <Flex justify="center" align="center" width="100%" height="100%">
        <Img src={logo} alt="logo" width={150} />
      </Flex>
    </Box>
  </Container>
)

export { Hero }
