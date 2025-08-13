import { serve } from "https://deno.land/std@0.190.0/http/server.ts"

const WEBHOOK_URL = 'https://cloud.activepieces.com/api/v1/webhooks/Yw0vpHAFGsTfYQ4VH8rbj'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const body = await req.json()

    // Forward the request to the ActivePieces webhook
    const webhookResponse = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text()
      console.error(`Webhook failed with status: ${webhookResponse.status}, text: ${errorText}`)
      throw new Error('The webhook endpoint returned an error.')
    }

    // We don't need to return the webhook's response data, just confirm success.
    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})