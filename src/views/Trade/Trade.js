import "./Trade.css"
import ToggleSidebar from './../../components/Navbar/Navbar'
import trad from './trade.png'
import { useState } from 'react';
// import Model from 'react-modal';
export default function Trade() {

    const [visible, setVisible] = useState(false)

    return (
        <>

            <div>
                <ToggleSidebar />
            </div>

            <div className="stack d-flex justify-content-between align-self-baseline">
                <div className="first-main-container m-2 p-2">

                    <div class="   btn-long d-flex justify-content-between border-2" type="button">
                        <button class="btn btn-primary width-30" type="button">Long</button>
                        <button class="btn  width-30" type="button">Short</button>
                        <button class="btn  width-30" type="button">Swap</button>
                    </div>

                    <div class=" mt-5 btn-long d-flex justify-content-between border-2" type="button">
                        <button class="btn btn-primary width-50" type="button">Market</button>
                        <button class="btn  width-50" type="button" >Limit</button>

                    </div>
                    <br />

                    <div className=" mt-4 d-flex justify-content-between">
                        <span className=" ms-5">Pay</span>
                        <span className="me-5"></span>
                    </div>
                    <div class="  btn-long d-flex justify-content-between " type="button">
                        <span class=" margin-start width-50" >00</span>
                        <button class="  btn-side font-20" type="button" onClick={() => { setVisible(true) }}>Button</button>
                    </div>

                    <div className=" mt-4 d-flex justify-content-between">
                        <span className=" ms-5">Long</span>
                        <span className="me-5">Leverage: 43.20x</span>
                    </div>
                    <div class="  btn-long d-flex justify-content-between " type="button">
                        <span class=" margin-start width-50" >00</span>
                        <button class="  btn-side font-20" type="button" onClick={() => { setVisible(true) }}>Button</button>
                    </div>

                    <div className=" mt-4 d-flex justify-content-between">
                        <span className=" ms-5">Price</span>
                        <span className="me-5">Mark: 2,289.73</span>
                    </div>
                    <div class="  btn-long d-flex justify-content-between " type="button">
                        <span class=" margin-start width-50" >2289.73</span>
                        <button class="  btn-side font-20" type="button" >USD</button>
                    </div>

                    <div className=" mt-4 d-flex justify-content-between">
                        <span className=" ms-5">Collateral in </span>
                        <span className="me-5">USD</span>
                    </div>

                    <div className=" mt-4 d-flex justify-content-between">
                        <span className=" ms-5">Leverage</span>
                        <span className="me-5">-</span>
                    </div>

                    <div className=" mt-4 d-flex justify-content-between">
                        <span className=" ms-5">Entry Price</span>
                        <span className="me-5">$2,289.73</span>
                    </div>

                    <div className=" mt-4 d-flex justify-content-between">
                        <span className=" ms-5">Liq. Price</span>
                        <span className="me-5">-</span>
                    </div>

                    <div className=" mt-4 d-flex justify-content-between">
                        <span className=" ms-5">Open Fees</span>
                        <span className="me-5">-</span>
                    </div>

                    <div className=" mt-4 d-flex justify-content-between">
                        <span className=" ms-5">Dynamic Fees</span>
                        <span className="me-5">0.0011% / 1h</span>
                    </div>

                    <div className=" mt-4 d-flex justify-content-between">
                        <span className=" ms-5">Available Liquidity</span>
                        <span className="me-5">$10,188.88</span>
                    </div>
                    <br />
                    <div class="d-grid gap-2 col-6 ">
                        <button class="btn btn-primary btn-connect text-bg-secondary" disabled type="button">Smart Router</button>
                    </div>
                    <br /><br />
                    <div class="d-grid gap-2 col-6 ">
                        <button class="btn btn-primary btn-connect" type="button">Connec Wallet</button>
                    </div>

                </div>
                <div className="grap-main-container m-2 ">
                    <div class="d-flex align-content-start flex-wrap heding-button">
                        <h4 className=" button-eth">ETH/USD</h4>
                        <div className="margin-left">
                            <span className=" font-20  ">$2,280.16</span> <br />
                            <span className=" font-15">$2,278.75</span>
                        </div>

                        <div className="margin-left">
                            <span className=" font-15  ">24h Change</span> <br />
                            <span className=" font-15 col-red">-1.31%</span>
                        </div>

                        <div className="margin-left">
                            <span className=" font-15  ">24h High</span> <br />
                            <span className=" font-20">2,320.52</span>
                        </div>

                        <div className="margin-left">
                            <span className=" font-15  ">24h Low</span> <br />
                            <span className=" font-20">24h Low</span>
                        </div>

                        <br />
                        <br />
                    </div>
                    <br />
                    <br />
                    <img src={trad} alt="img" className="img-tread" />

                </div>

            </div>

            {/* <Model isOpen={visible} className='popup' onRequestClose={() => { setVisible(false) }}
                style={{
                    overlay: {
                        backgroundColor: " "
                    }
                }}
            > */}
                <p className='text-right'>
                    <button className='bag-non ms-6 text-red-500' onClick={() => { setVisible(false) }}>❌</button>

                </p>
                
                <h3 className='popup-heding'> Long</h3>
                <br />

                <input type="search" class="form-control input-seach" id="exampleFormControlInput1" placeholder="Search  Token" />

                <br /><br /><br />

                <div className="hover-1"> <span className="popup-heding-1"> Bitcoin</span> <span> (BTC/USD)</span></div>
                <br />
                <div className="hover-2">  <span className="popup-heding-1"> Ethereum</span> <span> (ETC/USD)</span> </div>
                <br />
                <div className="hover-3">  <span className="popup-heding-1"> Euro</span> <span> (EUR/USD)</span> </div>
                <br />
                <div className="hover-4"><span className="popup-heding-1"> British Pound</span> <span> (BTC/USD)</span> </div>
                <br />
                <div className="hover-5"><span className="popup-heding-1"> Australian Dollar</span> <span> (BTC/USD)</span> </div>
                <br />
                <div className="hover-6"> <span className="popup-heding-1"> Japanese Yen</span> <span> (USD/JPY)</span> </div>
                <br />

            {/* </Model> */}


        </>
    );
}
