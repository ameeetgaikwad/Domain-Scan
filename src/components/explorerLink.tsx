type explorerObject = {
  name: string;
  explorer: string;
};

export const explorers: explorerObject[] = [
  { name: "EtherScan", explorer: "https://etherscan.io/address/" },
  { name: "BscScan", explorer: "https://bscscan.com/address/" },
  { name: "PolygonScan", explorer: "https://polygonscan.com/address/" },
  {
    name: "Avalanche-Explorer",
    explorer: "https://subnets.avax.network/c-chain/address/",
  },
  { name: "ArbiScan", explorer: "https://arbiscan.io/address/" },
  {
    name: "Optimism-Explorer",
    explorer: "https://optimistic.etherscan.io/address/",
  },
  { name: "LineaScan", explorer: "https://lineascan.build/address/" },
  { name: "BaseScan", explorer: "https://basescan.org/address/" },
];
