// Vercel Edge Streaming AI Coach Response

export const runtime = 'edge';

export async function POST(req: Request) {
  const { prompt, sessionId } = await req.json();
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      // Simulate / proxy AI streaming
      const chunks = ['Coaching insight 1: ', 'Focus on your goals. ', 'Personalized tip: Use daily reflection. ', '🔥 Action step ready!'];
      for (const chunk of chunks) {
        controller.enqueue(encoder.encode(chunk));
        await new Promise(r => setTimeout(r, 80)); // realistic stream
      }
      controller.close();
    }
  });
  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}