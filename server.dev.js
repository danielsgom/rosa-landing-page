/**
 * Local dev API server — mirrors Vercel serverless functions at /api/*
 * Run with: npm run dev:api  (port 3001, proxied by Vite)
 */
import express from 'express'
import { createServer } from 'http'
import { readFileSync } from 'fs'
import { createHmac } from 'crypto'

const app = express()

// Raw body buffer needed for Stripe webhook signature verification
app.use((req, res, next) => {
  const chunks = []
  req.on('data', (chunk) => chunks.push(chunk))
  req.on('end', () => {
    req.rawBody = Buffer.concat(chunks)
    try {
      req.body = req.rawBody.length ? JSON.parse(req.rawBody.toString()) : {}
    } catch {
      req.body = {}
    }
    next()
  })
})

// Dynamically import handlers (ESM)
const importHandler = async (name) => {
  const mod = await import(`./api/${name}.js`)
  return mod.default
}

app.post('/api/create-checkout', async (req, res) => {
  const handler = await importHandler('create-checkout')
  await handler(req, res)
})

app.post('/api/webhook', async (req, res) => {
  // Restore raw body for webhook signature check
  req.body = req.rawBody
  const handler = await importHandler('webhook')
  await handler(req, res)
})

const PORT = 3001
createServer(app).listen(PORT, () => {
  console.log(`[dev:api] Local API server running on http://localhost:${PORT}`)
  console.log(`  POST /api/create-checkout`)
  console.log(`  POST /api/webhook`)
})
