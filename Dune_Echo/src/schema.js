// schema.js
import { gql } from 'apollo-server-express';

  const typeDefs = gql`



type TokenLogo {
  logo: String
  symbol: String
}

type DuneBalance {
  chain: String
  chainId: Int
  tokenAddress: String
  amount: String
  symbol: String
  name: String
  decimals: Int
  priceUsd: String
  valueUsd: String
  poolSize: String
  lowLiquidity: Boolean
}

type TokenMetadata {
  logo: String
  url: String
}

type TokenError {
  address: String
  chainId: Int
  description: String
}

type DuneErrors {
  tokenErrors: [TokenError]
}

type SolanaWalletHolding {
  tokenAddress: String
  amount: String
  chain: String
  chainId: Int
  decimals: Int
  priceUsd: String
  symbol: String
  tokenMetadata: TokenMetadata
  valueUsd: String
}



type Query {
  duneWalletHoldings(address: String!): [DuneBalance]
  fetchTokenLogo(symbol: String!): TokenLogo
  duneSolanaWalletHoldings(address: String!):[SolanaWalletHolding]
}

`;

export { typeDefs };