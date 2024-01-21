import { useState } from "react";
import CardBox from "./Cardbox";

interface Props {
    page: number;
    setPage: (arg0: number) => void;
}

const OfferCard = ({
    page,
    setPage,
}: Props) => {
    const [loading, setLoading] = useState(false);
    const [accepted, setAccepted] = useState(false);

    const listAsset = () => {
        // setLoading(true)


    }

    const handleAccept = () => {
        setAccepted(true)
    }

    function truncate(source: any, size: any) {
        return source.length > size ? source.slice(0, size - 1) + "…" : source;
    }


    if (loading) {
        return (
            <div>

            </div>
        )
    } else {
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
                            <p className="title"> ⬆️ &nbsp;&nbsp;Repay&nbsp;&nbsp; ⬆️</p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}
                        >
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
                                        <span className="name">{truncate("0xd877A332B0FACf7BD86b1609a9547279aCF38531", 14)}</span>
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
    }


};

export default OfferCard;