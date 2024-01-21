import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, polygonMumbai } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';
import { alchemyProvider } from "wagmi/providers/alchemy";

const { publicClient, chains } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({ apiKey: "w-aEgDPKbBnk4gB9MO8v10gpeJcE0lWY" }),
  ],
);

const config = createConfig(
  getDefaultConfig({
    appName: 'ConnectKit Next.js demo',
    //infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    alchemyId:  "w-aEgDPKbBnk4gB9MO8v10gpeJcE0lWY",
    chains,
    publicClient,
    walletConnectProjectId: "a9938b02ae85b52af38ab56af579fca4",
  })
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider
        customTheme={
          {
            "--ck-font-family": "Nunito",
            "--ck-body-color": "#ffffff",
            "--ck-border-radius": "29px",
            "--ck-overlay-background": "#f0e7f7",
            "--ck-overlay-backdrop-filter": "blur(8px)",
            "--ck-primary-button-color": "#000000",
            "--ck-primary-button-background": "#eae8ff",
            "--ck-primary-button-box-shadow": "0px 0px 0px 1px #eae8ff",
            "--ck-primary-button-border-radius": "29px",
            "--ck-primary-button-font-weight": "400",
            "--ck-primary-button-hover-color": "#000000",
            "--ck-primary-button-hover-background": "#ffffff",
            "--ck-primary-button-hover-box-shadow": "0px 1px 0px 1px #ffffff",
            "--ck-primary-button-active-background": "#eae8ff",
            "--ck-primary-button-active-box-shadow": "0px 2px 0px 0px #eae8ff",
            "--ck-secondary-button-color": "#000000",
            "--ck-secondary-button-background": "#eae8ff",
            "--ck-secondary-button-box-shadow": "0px 3px 0px 1px #eae8ff",
            "--ck-secondary-button-border-radius": "29px",
            "--ck-secondary-button-font-weight": "700",
            "--ck-secondary-button-hover-color": "#000000",
            "--ck-secondary-button-hover-background": "#ffffff",
            "--ck-secondary-button-hover-box-shadow": "0px 1px 0px 0px #ffffff",
            "--ck-secondary-button-active-background": "#eae8ff",
            "--ck-secondary-button-active-box-shadow": "0px 3px 0px 0px #eae8ff",
            "--ck-tertiary-button-color": "#000000",
            "--ck-tertiary-button-background": "#eae8ff",
            "--ck-tertiary-button-box-shadow": "0px 0px 0px 1px #eae8ff",
            "--ck-tertiary-button-border-radius": "29px",
            "--ck-tertiary-button-font-weight": "600",
            "--ck-tertiary-button-hover-color": "#000000",
            "--ck-tertiary-button-hover-background": "#ffffff",
            "--ck-tertiary-button-hover-box-shadow": "0px 1px 0px 1px #ffffff",
            "--ck-modal-box-shadow": "0px 3px 0px 0px #b68cfd",
            "--ck-body-background": "#cab6fc",
            "--ck-body-background-secondary": "#8376ff",
            "--ck-body-background-tertiary": "#8376ff",
            "--ck-body-color-muted": "#ffffff",
            "--ck-body-color-muted-hover": "#ffffff",
            "--ck-body-color-danger": "#ffffff",
            "--ck-body-color-valid": "#ffffff",
            "--ck-modal-heading-font-weight": "700",
            "--ck-focus-color": "#ffffff",
            "--ck-body-action-color": "#ffffff",
            "--ck-body-divider": "#8376ff",
            "--ck-qr-dot-color": "#ffffff",
            "--ck-qr-background": "#8376ff",
            "--ck-qr-border-color": "#ffffff",
            "--ck-qr-border-radius": "29px",
            "--ck-tooltip-color": "#ffffff",
            "--ck-tooltip-background": "#8376ff",
            "--ck-tooltip-background-secondary": "#8376ff",
            "--ck-tooltip-shadow": "0px 0px 0px 1px #8376ff",
            "--ck-spinner-color": "#ffffff",
            "--ck-recent-badge-color": "#ffffff",
            "--ck-recent-badge-background": "#8376ff",
            "--ck-recent-badge-border-radius": "29px",
            "--ck-body-disclaimer-color": "#ffffff",
            "--ck-body-disclaimer-link-color": "#ffffff",
            "--ck-body-disclaimer-link-hover-color": "#ffffff",
            "--ck-body-disclaimer-background": "#8376ff",
            "--ck-connectbutton-font-size": "18px",
            "--ck-connectbutton-border-radius": "29px",
            "--ck-connectbutton-color": "#000000",
            "--ck-connectbutton-background": "#eae8ff",
            "--ck-connectbutton-box-shadow": "0px 0px 0px 1px #eae8ff",
            "--ck-connectbutton-hover-color": "#000000",
            "--ck-connectbutton-hover-background": "#ffffff",
            "--ck-connectbutton-hover-box-shadow": "0px 0px 0px 0px #ffffff",
            "--ck-connectbutton-active-color": "#000000",
            "--ck-connectbutton-active-background": "#eae8ff",
            "--ck-connectbutton-active-box-shadow": "0px 3px 0px 0px #eae8ff"
          }
        }
      >
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
