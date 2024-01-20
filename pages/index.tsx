import type { NextPage } from 'next';
import { ConnectKitButton } from 'connectkit';
import { useAccount } from "wagmi";
import { useState } from "react";
import CardBox from './sections/Cardbox';
import BaseCard from './sections/BaseCard';

const Home: NextPage = () => {
  const { isConnected } = useAccount();
  const [page, setPage] = useState(1);

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
            gap:100
          }}
        >
          <CardBox page={page}
          setPage={setPage}/>
        </div>
      </>}
      {page == 2 && <>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            gap:100
          }}
        >
          <BaseCard page={page}
          setPage={setPage}/>
        </div>
      </>}
    </>



  );
};

export default Home;
