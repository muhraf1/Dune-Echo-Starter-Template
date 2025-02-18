// resolvers.js
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const resolvers = {
  Query: {
    duneWalletHoldings: async (_, { address }) => {
      try {
        const response = await axios.get(`https://api.dune.com/api/echo/v1/balances/evm/${address}`, {
          headers: {
            'X-Dune-Api-Key': process.env.DUNE_API_KEY
          }
        });
  
        if (!response.data || !response.data.balances) {
          return [];
        }
  
        // Transform the data and filter out tokens with low liquidity
        return response.data.balances
          .filter(balance => !balance.low_liquidity) // Filter out low liquidity tokens
          .map(balance => ({
            chain: balance.chain,
            chainId: balance.chain_id,
            tokenAddress: balance.address,
            amount: balance.amount,
            symbol: balance.symbol,
            name: balance.name,
            decimals: balance.decimals,
            priceUsd: balance.price_usd?.toString() || "0",
            valueUsd: balance.value_usd?.toString() || "0",
            poolSize: balance.pool_size?.toString() || "0",
            lowLiquidity: balance.low_liquidity || false
          }));
  
      } catch (error) {
        console.error('Failed to fetch data from Dune Echo API:', error);
        if (error.response) {
          console.error('Error response:', {
            status: error.response.status,
            data: error.response.data
          });
        }
        return [];
      }
    }
    },
    
  
};

export {
  resolvers
};