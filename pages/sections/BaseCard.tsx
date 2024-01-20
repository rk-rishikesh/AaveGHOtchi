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

    const handleEnter = () => {
        // setLoading(true)

        setPage(2)
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
                    <img style={{ width: "100%" }} src="https://www.aavegotchi.com/_next/image?url=%2Fimages%2Faavegotchis%2F01.png&w=1200&q=75" />

                </div>
                <div className="basecard__title">100 USD</div>
                <div className="basecard__wrapper">
                    <div className="iconcard">
                        <div className="tooltip">
                            <a href="#" className="socialContainer containerThree">
                                <img className="socialSvg linkdinSvg" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ethereum-eth-icon.png" />
                            </a>
                            <span className="tooltiptext">Tooltip text</span>
                        </div>
                        <div className="tooltip">
                            <a href="#" className="socialContainer containerThree">
                                <img className="socialSvg linkdinSvg" src="https://cryptologos.cc/logos/chainlink-link-logo.png" />
                            </a>
                            <span className="tooltiptext">Tooltip text</span>
                        </div>
                        <div className="tooltip">
                            <a href="#" className="socialContainer containerThree">
                                <img className="socialSvg linkdinSvg" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ethereum-eth-icon.png" />
                            </a>
                            <span className="tooltiptext">Tooltip text</span>
                        </div>


                    </div>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <button className="magicbutton">L I S T </button>
                    </div>
                </div>
            </div>
        );
    }


};

export default BaseCard;