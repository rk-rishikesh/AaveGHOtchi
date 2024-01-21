import { useState } from "react";
import { FACILITATORABI, FACILITATORADDRESS } from "../constants/Facilitator";
import { ethers } from "ethers";

interface Props {
    page: number;
    setPage: (arg0: number) => void;
}

const OfferCard = ({
    page,
    setPage,
}: Props) => {

    const [accepted, setAccepted] = useState(false);

    const handleAccept = async () => {
        const ethereum = await window.ethereum;
        const signer = await new ethers.BrowserProvider(ethereum).getSigner();
        console.log(signer)

        const facilitator = new ethers.Contract(
            FACILITATORADDRESS,
            FACILITATORABI,
            signer
        );
        console.log(facilitator)
        const acceptDeal = await facilitator.acceptDeal("0xD035b68e6f10840e6E3AFd0bb6995F965a4dCeEf")
        setPage(3)
        setAccepted(true)
    }

    function truncate(source: any, size: any) {
        return source.length > size ? source.slice(0, size - 1) + "…" : source;
    }


    return (
        <div className="offercard">

            {accepted &&
                <>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <p className="title"> ⬆️ &nbsp;&nbsp;R E P A Y&nbsp;&nbsp; ⬆️</p>

                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <p className="subtitle">GHO Balance : 100 </p>
                        <img style={{ width: "50%" }} src="https://www.aavegotchi.com/_next/image?url=%2Fimages%2Faavegotchis%2F01.png&w=1200&q=75" />
                        <button className="magicbutton">&nbsp;&nbsp;R E P A Y&nbsp;&nbsp;</button>
                    </div>

                    {/* 
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <img style={{ width: "100%" }} src="https://www.aavegotchi.com/_next/image?url=%2Fimages%2Faavegotchis%2F01.png&w=1200&q=75" />

                        </div> */}

                </>
            }
            {!accepted &&
                <>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <p className="title">Lending Offers</p>
                    </div>

                    <div className="user__container">
                        <div className="user">
                            <div className="image">🚀</div>
                            <div className="user__content">
                                <div className="text">
                                    <span className="name">{truncate("0xD035b68e6f10840e6E3AFd0bb6995F965a4dCeEf", 14)}</span>
                                    <p className="username">8% Interest</p>
                                </div>
                                <button className="follow" onClick={handleAccept}>Accept</button>
                            </div>
                        </div>
                    </div>
                    <a className="more" ></a>
                </>
            }
        </div>
    );
};

export default OfferCard;