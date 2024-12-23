# WZRD.tech Landing Page Documentation

## Overview

This repository demonstrates a comprehensive full-stack application integrating:
- React frontend with Vite & TypeScript
- Supabase Edge Functions for backend services
- Blockchain services (EVM/Solana)
- AI features powered by OpenAI

## Project Structure

```
.
├─ src/                    # Frontend React application
│   ├─ components/         # Reusable UI components
│   ├─ pages/              # React Router pages
│   ├─ services/           # Frontend services
│   ├─ lib/                # Utility functions
│   └─ main.tsx           # Application entry point
│
├─ supabase/
│   ├─ functions/         # Edge Functions (backend)
│   │   ├─ handle-crossmint-mint/
│   │   ├─ process-mode-tx/
│   │   └─ generate-embeddings/
│   └─ config.toml        # Local Supabase configuration
│
├─ index.html             # Base HTML file
├─ package.json           # Dependencies & scripts
├─ vite.config.ts         # Vite configuration
└─ .env                   # Environment variables
```

## Core Features

### 1. Frontend Services

- **React Components**: Modern UI built with TypeScript and Vite
- **Blockchain Integration**: 
  - Solana operations via @solana/web3.js
  - EVM support through ethers.js
  - Transaction handling and staking features
- **AI Services**: Sentiment analysis with caching support

### 2. Backend Services (Supabase Edge Functions)

- **NFT Minting**: Crossmint API integration with operation logging
- **Blockchain Transactions**: Mode network transaction processing
- **AI Operations**: OpenAI text embeddings generation and storage

### 3. Database Structure

Supabase tables include:

- **embeddings**: Stores AI text embeddings
  - Columns: content, embedding, namespace
- **token_operations**: NFT minting logs
- **ai_insights**: AI-generated data and sentiment analysis
- **transactions**: Blockchain transaction records
- **users/profiles**: User management and authentication

## Setup Instructions

### Prerequisites

- Node.js (version 16+)
- npm or yarn
- Supabase account
- Required API keys (OpenAI, Crossmint, etc.)

### Environment Configuration

Create a `.env` file with the following:

```env
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-key

# API Keys
OPENAI_API_KEY=your-openai-key
CROSSMINT_API_KEY=your-crossmint-key

# Blockchain Configuration
MODE_RPC_URL=https://mainnet.mode.network/
MODE_PRIVATE_KEY=your-private-key
EVM_PROVIDER_URL=your-evm-url
EVM_PRIVATE_KEY=your-evm-key
SOLANA_RPC_URL=your-solana-url
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/project-name.git
   cd project-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

## Development Guide

### Local Development

1. Frontend Development:
   ```bash
   npm run dev       # Starts Vite dev server
   ```

2. Supabase Functions:
   ```bash
   supabase start   # Start local Supabase
   supabase functions serve [function-name]
   ```

### Testing Edge Functions

Example endpoints:

1. Crossmint Minting:
   ```http
   POST /handle-crossmint-mint
   {
     "collectionId": "collection-name",
     "recipientAddress": "0x...",
     "metadata": {
       "name": "NFT Name",
       "image": "ipfs://..."
     }
   }
   ```

2. Mode Transactions:
   ```http
   POST /process-mode-tx
   {
     "to": "0x...",
     "data": "0x...",
     "value": "1000000000000000000"
   }
   ```

## Deployment

### 1. Edge Functions

```bash
# Deploy individual functions
supabase functions deploy handle-crossmint-mint
supabase functions deploy process-mode-tx
supabase functions deploy generate-embeddings
```

### 2. Frontend Application

```bash
# Build the application
npm run build

# Deploy to your preferred platform
# (Netlify, Vercel, etc.)
```

### 3. Environment Variables

Configure environment variables in:
- Supabase dashboard for Edge Functions
- Frontend hosting platform for React application

## Contributing

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```

2. Make your changes and commit:
   ```bash
   git commit -m "Add feature description"
   ```

3. Push and create a pull request:
   ```bash
   git push origin feature/your-feature
   ```

## License

MIT License - See LICENSE file for details.

## Support

For questions or issues:
1. Open a GitHub issue
2. Contact: your-email@domain.com
3. Twitter: [@YourHandle](https://twitter.com/YourHandle)

---

**Note**: Customize configurations and endpoints according to your specific deployment requirements.
