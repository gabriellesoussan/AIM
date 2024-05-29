## SE Demo

#### Setup .env
In your SE Demo Stack, navigate to Settings > Tokens > + Delivery Token

Select `main` branch and the `preview` enviornment. Make sure 'Create Preview Token' is enabled. Click 'Generate Token' and copy tokens into `.env`. This is what your final `.env` should look like:

```ts
API_KEY='YOUR_API_KEY'
DELIVERY_TOKEN='YOUR_DELIVERY_TOKEN'
ENVIRONMENT='preview'
PREVIEW_TOKEN='YOUR_PREVIEW_TOKEN'
```

#### Install Packages and Run Locally
First, install all npm packages by running:

```bash
npm i
```

Next, run the app locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.