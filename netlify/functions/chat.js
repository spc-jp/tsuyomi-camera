export async function handler(event) {
return {
statusCode: 200,
headers: {
"Access-Control-Allow-Origin": "*",
"Access-Control-Allow-Headers": "Content-Type"
},
body: JSON.stringify({
message: "chat function is alive"
})
};
}
