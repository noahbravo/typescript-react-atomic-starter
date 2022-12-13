import React from 'react'
import { Container } from '@elenabravo/bones-ui'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container as="main">{children}</Container>
      <Footer />
    </>
  )
}

export { Layout }
