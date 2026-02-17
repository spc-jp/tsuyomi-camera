import OpenAI from "openai";

const client = new OpenAI({
apiKey: process.env.OPENAI_API_KEY
});

export async function handler(event) {
try {
const { text } = JSON.parse(event.body || "{}");

if (!text) {
  return {
    statusCode: 400,
    body: JSON.stringify({ error: "text is required" })
  };
}

const completion = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    {
      role: "system",
      content: "あなたは中小企業向けSNS投稿のプロです。親しみやすく実用的な投稿文を作ります。"
    },
    {
      role: "user",
      content: text
    }
  ]
});

return {
  statusCode: 200,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type"
  },
  body: JSON.stringify({
    result: completion.choices[0].message.content
  })
};


} catch (err) {
return {
statusCode: 500,
body: JSON.stringify({ error: err.message })
};
}
}
