/* src/App.js */
import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createCustomer} from './graphql/mutations'
import { listCustomers } from './graphql/queries'

// const initialState = { name: '', phone: '', email: ''}
const initialState = { name: '', phone: ''}
let id_count = 0

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    fetchCustomers()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchCustomers() {
    try {
      const customerData = await API.graphql(graphqlOperation(listCustomers))
      const customers = customerData.data.listCustomers
      setCustomers(customers)
    } catch (err) { console.log('error fetching customers') }
  }

  async function addCustomer() {
    try {
      if (!formState.name) return
      id_count = customers.length + 1
      const customer = { ...formState, "id":  id_count}
      setCustomers([...customers, customer])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createCustomer, {createCustomerInput: customer}))
    } catch (err) {
      console.log('error creating customer:', err)
    }
  }

  return (
    <div style={styles.container}>
      <h2>Amplify Customers</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('phone', event.target.value)}
        style={styles.input}
        value={formState.phone}
        placeholder="Phone"
      />
      {/* <input
        onChange={event => setInput('email', event.target.value)}
        style={styles.input}
        value={formState.email}
        placeholder="Email"
      /> */}
      <button style={styles.button} onClick={addCustomer}>Create Customer</button>
      {
        customers.map((customer, index) => (
          <div key={customer.id ? customer.id : index} style={styles.customer}>
            <p style={styles.customerName}>{customer.name}</p>
            <p style={styles.p}>{customer.phone}</p>
            {/* <p style={styles.p}>{customer.email}</p> */}
          </div>
        ))
      }
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  customer: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  customerName: { fontSize: 20, fontWeight: 'bold', textAlign: 'left'},
  p: { marginBottom: 0, textAlign: 'left' },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App
