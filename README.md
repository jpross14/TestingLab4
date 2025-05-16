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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## For e2e test

1. Make sure server is running
```bash
npm run dev
```

2. Run cypress
```bash
npx cypress run 
```
or open cypress if tests keep failing due to response time
```bash
npx cypress open 
```

## Linting

```bash
npm run lint
```
