import { useState } from "react";
import { TokenboundClient } from '@tokenbound/sdk'
import { useAccount } from 'wagmi'
import { useCallback, useEffect } from 'react'
import { AAVEGOTCHIABI, AAVEGOTCHIADDRESS } from "../constants/Aavagotchi";
import { ethers } from "ethers";

interface Props {
    page: number;
    setPage: (arg0: number) => void;
}

const CardBox = ({
    page,
    setPage,
}: Props) => {

    const { isConnected, address } = useAccount();
    const [tokenID, setTokenID] = useState();
    const [loading, setLoading] = useState(false);
    const [evolve, setEvolve] = useState(false);

    useEffect(() => {
        const init = async () => {

            setLoading(true)
            const ethereum = await window.ethereum;
            const signer = await new ethers.BrowserProvider(ethereum).getSigner();
            console.log(signer)

            const aavegotchi = new ethers.Contract(
                AAVEGOTCHIADDRESS,
                AAVEGOTCHIABI,
                signer
            );
            console.log(aavegotchi)

            const userTokenID = await aavegotchi.getUserTokenID(address);
            console.log(userTokenID);
            setTokenID(userTokenID.toString())

            setLoading(false)
        }

        init();
    }, [])

    const createTBA = useCallback(async () => {
        setLoading(true)
        const ethereum = await window.ethereum;
        const signer = await new ethers.BrowserProvider(ethereum).getSigner();
        console.log(signer)

        const tokenboundClient = new TokenboundClient({
            signer,
            chainId: 80001,
            implementationAddress: "0x41C8f39463A868d3A88af00cd0fe7102F30E44eC",
        })

        if (!tokenboundClient || !address) return
        const aavegotchi = new ethers.Contract(
            AAVEGOTCHIADDRESS,
            AAVEGOTCHIABI,
            signer
        );
        console.log(aavegotchi)

        const userTokenID = await aavegotchi.getUserTokenID(address);
        console.log(userTokenID);

        const account = await tokenboundClient.getAccount({
            tokenContract: AAVEGOTCHIADDRESS,
            tokenId: userTokenID.toString(),
        })

        const isAccountDeployed = await tokenboundClient.checkAccountDeployment({
            accountAddress: account,
        })

        console.log("IS ACCOUNT DEPLOYED?", isAccountDeployed)

        if (!isAccountDeployed) {
            const createdAccount = await tokenboundClient.createAccount({
                tokenContract: AAVEGOTCHIADDRESS,
                tokenId: userTokenID.toString(),
            })
            console.log(createdAccount);
        }

        setLoading(false)
        setEvolve(true)

    }, [])

    const handleEnter = () => {
        // setLoading(true)
        console.log("ENTER")
        setPage(2)
    }

    if (loading) {
        return (
            <div>
                <div className="e-card playing">

                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>

                    <div className="leftinfotop">
                        <div className="name">E V O L V I N G</div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <img style={{ width: "100%" }} src="https://cdn3.emoji.gg/emojis/3209-hauntedghost.gif" />

                        </div>

                    </div>



                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="e-card playing">
                    {/* <div className="image"></div> */}

                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>

                    {
                        evolve ?
                            <>
                                <div className="infotop">
                                    <div className="name">Token ID #{tokenID}</div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <img style={{ width: "100%" }} src="https://www.aavegotchi.com/_next/image?url=%2Fimages%2Faavegotchis%2F01.png&w=1200&q=75" />

                                    </div>
                                </div>
                            </> :
                            <>
                                <div className="leftinfotop">
                                    <div className="leftname">Token ID #{tokenID}</div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <img style={{ width: "40%" }} src="https://app.aavegotchi.com/images/aavegotchialpha.png" />

                                    </div>
                                    <button className="magicbutton" onClick={createTBA}>&nbsp;&nbsp;E V O L V E&nbsp;&nbsp;</button>
                                </div>
                            </>
                    }




                </div>
                {evolve && <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <button className="magicbutton" onClick={handleEnter}>&nbsp;&nbsp;E N T E R&nbsp;&nbsp;</button>
                </div>}
            </div>
        );
    }


};

export default CardBox;