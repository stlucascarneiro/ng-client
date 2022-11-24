import Head from 'next/head'
import { useEffect, useState } from 'react'
// Components
import { Button, Header, Menu, Navigation, Username } from 'components'
import { Transactions as TransactionsOrganism } from 'organisms'
import { Body, Chevron, FilterContainer, Footer, MenuContainer } from '../styles/transactions'
import DatePicker from 'react-datepicker'
// Assets
import 'react-datepicker/dist/react-datepicker.css'
import { ForwardButton } from 'components/Button/ForwardButton'
import { useQuery } from '@apollo/client'
import { getTransactionsOptions, GET_TRANSACTIONS } from 'api/Transaction'
import { BeatLoader } from 'react-spinners'

// Types
type filter = 'todos' | 'ganhos' | 'gastos'

const DateInit = () => {
  const now = new Date()
  const monthEarlier = new Date()
  monthEarlier.setMonth(now.getMonth() - 1)
  return [monthEarlier, now]
}

export default function Transactions() {
  const [filter, setFilter] = useState<filter>('todos')
  const [menuOpen, setMenuOpen] = useState(false)
  const [dateRange, setDateRange] = useState(DateInit())
  const [startDate, endDate] = dateRange
  const options = getTransactionsOptions(startDate, endDate, filter)
  const { data, loading } = useQuery(GET_TRANSACTIONS, { ...options, skip: (!startDate || !endDate) })

  useEffect(() => {
    setMenuOpen(false)
  }, [filter])

  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <Header />
      <Body>
        <Navigation title='Transações'/>
        <FilterContainer>
          <MenuContainer>
            <Button
              style={{ fontSize: '16px' }}
              containerStyle={{ height: '54px', width: '98px' }}
              onClick={() => setMenuOpen(!menuOpen)} >
              {filter === 'todos' ? 'filtros' : filter} <Chevron />
            </Button>
            {menuOpen && <Menu options={[
              { label: 'Todos', state: 'todos' },
              { label: 'Ganhos', state: 'ganhos' },
              { label: 'Gastos', state: 'gastos' }
            ]} setState={setFilter}/>}
          </MenuContainer>
          <DatePicker
            dateFormat='dd/MM/yy'
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update: any) => {
              setDateRange(update)
            }}
            customInput={<ForwardButton />} />
        </FilterContainer>
        {loading && <BeatLoader loading={true} color='#7431F4' />}
        {(data && startDate && endDate) && <TransactionsOrganism data={data.getTransactions}/>}
      </Body>
      <Footer>
        <Username/>
      </Footer>
    </>
  )
}