import { useState } from "react";

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

    const listAsset = () => {
        // setLoading(true)

        setListed(true)
    }

    const handleOffer = () => {
        // setLoading(true)

        setPage(3)
    }


    if (loading) {
        return (
            <div>

            </div>
        )
    } else {
        return (
            <div className="basecard">

                <div className="basecard__avatar">
                    <img style={{ width: "80%" }} src="https://www.aavegotchi.com/_next/image?url=%2Fimages%2Faavegotchis%2F01.png&w=1200&q=75" />

                </div>
                <div className="basecard__title">100 USD</div>
                <div className="basecard__subtitle">0xd877A332B0FACf7BD86b1609a9547279aCF38531</div>
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
    }


};

export default BaseCard;