# Aomi Next.js Starter

A working Next.js 15 integration with the [Aomi](https://aomi.dev) shadcn chat widget.

## Quick Start

```bash
git clone https://github.com/ExpertVagabond/aomi-nextjs-starter.git
cd aomi-nextjs-starter
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Features

- Chat UI powered by the Aomi SDK and assistant-ui
- Tool calling with inline results
- SSE streaming responses
- Model and app switcher
- Wallet connect (via Para/wagmi)
- Dark mode
- Thread management

## Stack

- [Next.js 15](https://nextjs.org/)
- [@aomi-labs/react](https://www.npmjs.com/package/@aomi-labs/react)
- [@assistant-ui/react](https://www.npmjs.com/package/@assistant-ui/react)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Configuration

The app connects to the Aomi backend via `NEXT_PUBLIC_BACKEND_URL`. It defaults to `https://api.aomi.dev` if not set.

To override, create a `.env.local` file:

```
NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.com
```

See `.env.example` for reference.

## Docs

- [Aomi SDK Overview](https://aomi.dev/docs/build/overview)

## License

MIT
