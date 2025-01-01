import express from 'express'
import cors from 'cors'
import Stripe from 'stripe'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy')

// In-memory storage
const store = {
  waitlist: [],
  inventory: { total: 500, remaining: 497 }
}

app.use(cors())
app.use(express.json())

app.post('/api/waitlist', (req, res) => {
  const { email, betaTester } = req.body
  try {
    // Check if email already exists
    if (store.waitlist.find(entry => entry.email === email)) {
      throw new Error('Email already registered')
    }
    
    store.waitlist.push({
      email,
      betaTester,
      createdAt: new Date().toISOString()
    })
    res.json({ success: true })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.post('/api/create-payment-intent', async (req, res) => {
  try {
    // For development, return a mock client secret
    res.json({ clientSecret: 'mock_client_secret' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.get('/api/inventory', (req, res) => {
  res.json(store.inventory)
})

// Add a health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
