import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const PRICE_IDS = {
  monthly: process.env.STRIPE_PRICE_MONTHLY,
  annual: process.env.STRIPE_PRICE_ANNUAL,
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { plan } = req.body

  if (!plan || !PRICE_IDS[plan]) {
    return res.status(400).json({ error: 'Plan inválido' })
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `https://${req.headers.host}`

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        {
          price: PRICE_IDS[plan],
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
      metadata: { plan },
      locale: 'es',
      payment_method_types: ['card'],
      subscription_data: {
        metadata: { plan },
      },
    })

    return res.status(200).json({ url: session.url })
  } catch (err) {
    console.error('Stripe error:', err.message)
    return res.status(500).json({ error: 'Error al crear la sesión de pago' })
  }
}
