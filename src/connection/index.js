import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { arbitrumSepolia, arbitrum } from '@reown/appkit/networks'

// 1. Get projectId
const projectId = import.meta.env.VITE_PROJECTID

// 2. Set the networks
const networks = [arbitrumSepolia, arbitrum]

// 3. Create a metadata object - optional
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', 
  icons: ['https://avatars.mywebsite.com/']
}

// 4. Create a AppKit instance
export const configWallet = () => createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true 
  },
  themeVariables: {
    '--w3m-accent': '#EB722F',
  }
})