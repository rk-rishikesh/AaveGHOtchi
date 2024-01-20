import { useState } from "react";

interface Props {
    page: number;
    setPage: (arg0: number) => void;
  }

const CardBox = ({
    page,
    setPage,
  }: Props) => {
    const [loading, setLoading] = useState(false);
    const [evolve, setEvolve] = useState(false);

    const createTBA = () => {
        // setLoading(true)

        setEvolve(true)
    }


    const handleEnter = () => {
        // setLoading(true)

        setPage(2)
    }


    if (loading) {
        return (
            <div>
                <div className="e-card playing">
                    <div className="image"></div>

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
                    <div className="image"></div>

                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>

                    {
                        evolve ?
                            <>
                                <div className="infotop">
                                    <div className="name">Token ID #21</div>
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
                                    <div className="leftname">Token ID #21</div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <img style={{ width: "40%" }} src="https://app.aavegotchi.com/images/aavegotchialpha.png" />

                                    </div>
                                    <button className="magicbutton" onClick={createTBA}>E V O L V E</button>
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
                    <button className="magicbutton" onClick={handleEnter}>E N T E R</button>
                </div>}
            </div>
        );
    }


};

export default CardBox;