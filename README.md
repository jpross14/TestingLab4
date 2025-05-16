## Getting Started

First, install dependencies

```bash
npm i
```

add .env.local at the root folder

```bash
NEXT_PUBLIC_SUPABASE_URL="your supabase URL"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your supabase anon key"
```

run the development server:

```bash
npm run dev
```
## For e2e test
```bash
npx cypress run
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Linting

```bash
npm run lint
```
