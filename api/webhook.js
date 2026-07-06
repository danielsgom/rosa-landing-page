import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export const config = {
  api: {
    bodyParser: false,
  },
}

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    req.on('data', (chunk) => chunks.push(chunk))
    req.on('end', () => resolve(Buffer.concat(chunks)))
    req.on('error', reject)
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const sig = req.headers['stripe-signature']
  if (!sig) {
    return res.status(400).json({ error: 'Missing stripe-signature header' })
  }

  let event
  try {
    // In dev (server.dev.js) the middleware already consumed the stream and
    // stored the raw buffer in req.rawBody. In Vercel production the stream
    // is still open, so we read it here.
    const rawBody = req.rawBody instanceof Buffer
      ? req.rawBody
      : await getRawBody(req)
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return res.status(400).json({ error: `Webhook error: ${err.message}` })
  }

  // Handle relevant events
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object
      const plan = session.metadata?.plan
      const customerEmail = session.customer_details?.email

      console.log(`New subscription — plan: ${plan}, email: ${customerEmail}`)

      // TODO: Add subscriber to your notification system (e.g. send welcome email,
      // add to database, trigger Telegram notification, etc.)
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object
      console.log(`Subscription cancelled: ${subscription.id}`)
      break
    }

    default:
      // Unhandled event — ignore
      break
  }

  return res.status(200).json({ received: true })
}
