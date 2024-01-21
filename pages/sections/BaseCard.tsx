import { useState, useEffect } from "react";
import { AAVEGOTCHIABI, AAVEGOTCHIADDRESS } from "../constants/Aavagotchi";
import { ethers } from "ethers";
import { useAccount } from 'wagmi'
import { TokenboundClient } from '@tokenbound/sdk'
import { FACILITATORABI, FACILITATORADDRESS } from "../constants/Facilitator";

interface Props {
    page: number;
    setPage: (arg0: number) => void;
}

const BaseCard = ({
    page,
    setPage,
}: Props) => {
    const [loading, setLoading] = useState(false);
    const [listed, setListed] = useState(false);
    const [tokenID, setTokenID] = useState();
    const [tba, setTba] = useState("");
    const { address } = useAccount();

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
            const tokenboundClient = new TokenboundClient({
                signer,
                chainId: 80001,
                implementationAddress: "0x41C8f39463A868d3A88af00cd0fe7102F30E44eC",
            })
            const account = await tokenboundClient.getAccount({
                tokenContract: AAVEGOTCHIADDRESS,
                tokenId: userTokenID.toString(),
            })
            setTba(account);
            setTokenID(userTokenID.toString())

            setLoading(false)
        }

        init();
    }, [])

    const listAsset = async () => {
        const ethereum = await window.ethereum;
        const signer = await new ethers.BrowserProvider(ethereum).getSigner();
        console.log(signer)

        const aavegotchi = new ethers.Contract(
            AAVEGOTCHIADDRESS,
            AAVEGOTCHIABI,
            signer
        );

        const approve = await aavegotchi.setApprovalForAll(FACILITATORADDRESS, true);

        const facilitator = new ethers.Contract(
            FACILITATORADDRESS,
            FACILITATORABI,
            signer
        );
        console.log(facilitator)

        // const list = await facilitator.createBorrowRequest();

        const list = await aavegotchi.transferFrom(address, FACILITATORADDRESS, 1);

        setListed(true)
    }

    const handleOffer = async() => {
        // setLoading(true)
        setPage(3)
        
    }

        return (
            <div className="basecard">

                <div className="basecard__avatar">
                    <img style={{ width: "80%" }} src="https://www.aavegotchi.com/_next/image?url=%2Fimages%2Faavegotchis%2F01.png&w=1200&q=75" />

                </div>
                <div className="basecard__title">100 USD</div>
                <div className="basecard__subtitle">{tba}</div>
                <div className="basecard__wrapper">
                    <div className="iconcard">
                        <div className="tooltip">
                            <a className="socialContainer containerThree">
                                <img className="socialSvg linkdinSvg" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ethereum-eth-icon.png" />
                            </a>
                            <span className="tooltiptext">50 USD</span>
                        </div>
                        <div className="tooltip">
                            <a className="socialContainer containerThree">
                                <img className="socialSvg linkdinSvg" src="https://cryptologos.cc/logos/chainlink-link-logo.png" />
                            </a>
                            <span className="tooltiptext">25 USD</span>
                        </div>
                        <div className="tooltip">
                            <a className="socialContainer containerThree">
                                <img className="socialSvg linkdinSvg" src="https://s2.coinmarketcap.com/static/img/coins/200x200/1966.png" />
                            </a>
                            <span className="tooltiptext">25 USD</span>
                        </div>
                    </div>

                    {listed && <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <button className="magicbutton" onClick={handleOffer}>&nbsp;&nbsp;V I E W  &nbsp;&nbsp;O F F E R S &nbsp;&nbsp;</button>
                    </div>}
                    {!listed && <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <button className="magicbutton" onClick={listAsset}>&nbsp;&nbsp; L I S T &nbsp;&nbsp;</button>
                    </div>}
                </div>
            </div>
        );



};

export default BaseCard;