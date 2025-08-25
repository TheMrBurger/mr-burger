'use client';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body>
        <main className="mx-auto max-w-3xl p-8">
          <h1 className="text-3xl font-bold">Something went wrong</h1>
          <p className="mt-2 text-white/80" role="status">We’re on it. You can try again.</p>
          <button onClick={reset} className="btn btn-primary mt-6">Reload</button>
        </main>
      </body>
    </html>
  );
}