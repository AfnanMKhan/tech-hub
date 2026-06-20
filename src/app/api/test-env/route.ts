export async function GET() {
  return Response.json({
    hasOpenAI: !!process.env.OPENAI_API_KEY,
  });
}