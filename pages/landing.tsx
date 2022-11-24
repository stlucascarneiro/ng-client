import { useState } from 'react'
import Head from 'next/head'
// Components
import { Button, Header } from 'components'
import { Drawer } from 'organisms'
import { Body, Footer, Heading2, Illustration, Link } from '../styles/landing'
// Assets

// Types
export async function getServerSideProps() {
  return { props: { data: 'Hello World!' } }
}

export default function Home() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [drawerFlow, setDrawerFlow] = useState<'register' | 'login'>('login')

  const handleDrawer = (flow: 'register' | 'login') => {
    setOpenDrawer(true)
    setDrawerFlow(flow)
  }
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <Header onClick={() => setOpenDrawer(false)}/>
      <Body>
        <Heading2>Independência com a sua grana, independente da sua idade</Heading2>
        <Illustration src='images\illustrations\illustration.svg'/>
      </Body>
      <Footer>
        <Button onClick={() => handleDrawer('register')}>criar conta</Button>
        <Link onClick={() => handleDrawer('login')}>acessar minha conta</Link>
      </Footer>
      {openDrawer && <Drawer flow={drawerFlow} setDrawerFlow={setDrawerFlow} />}
    </>
  )
}