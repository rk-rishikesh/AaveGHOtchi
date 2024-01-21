import type { NextPage } from 'next';
import { ConnectKitButton } from 'connectkit';
import { useAccount } from "wagmi";
import { useState, useEffect } from "react";
import CardBox from './sections/Cardbox';
import BaseCard from './sections/BaseCard';
import OfferCard from './sections/OfferCard';

const Home: NextPage = () => {
  const { isConnected } = useAccount();
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (isConnected) {
      setPage(1);
    }
  }, [])

  return (
    <>
      {page == 0 && <>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <ConnectKitButton />
        </div>
      </>}

      {page == 1 && <>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            gap: 100
          }}
        >
          <CardBox page={page}
            setPage={setPage} />
        </div>
      </>}
      {page == 2 && <>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            gap: 100
          }}
        >
          <BaseCard page={page}
            setPage={setPage} />
        </div>
      </>}
      {page == 3 && <>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            gap: 100
          }}
        >
          <OfferCard page={page}
            setPage={setPage} />
        </div>
      </>}
    </>



  );
};

export default Home;
