import "./LexStack.css"
import ToggleSidebar from './../../components/Navbar/Navbar'
import { Card, StackCard } from './../../components/Card/Card';
export default function LexStack() {
    return (
        <>

            <div>
                <ToggleSidebar />
            </div>

            <div className="stack">
                <div>
                    <p className="stack-heading">Stake LEX and esLEX to earn rewards from variant LP pools.</p>
                </div>
                <div className="claimable-reward">Claimable Rewards:<span className="num"> $0.00</span> </div>
                <div className="d-flex justify-content-between">
                    <StackCard stacklextitle="LEX" stacklexnumber="$0.0040" wallet="0.00 LEX ($0.00"
                        staked="0.00 LEX ($0.00)" apr="
                72.32%" rewards="
                $0.00" pointapr="
                100.00%" boostpecentage="
                0.00%"/>
                </div>
                <div className="mt-5">
                    <h6 className="stack-heading">Convert esLEX tokens to LEX tokens.</h6>
                    <h6 className="stack-heading">Please read the vesting details before using the vaults.</h6>
                </div>
                <div className="lex-valute p-3">
                    <div>
                        <h5>LEX Vault</h5>
                        <div className="card2-data">
                            <span className="data-name">Staked Tokens</span>
                            <span className="data-value">0.00</span>
                        </div>
                        <div className="card2-data">
                            <span className="data-name">Reserved for Vesting</span>
                            <span className="data-value">0.00 / 0.00</span>
                        </div>
                    
                        <div className="card2-data">
                            <span className="data-name">Vesting Status</span>
                            <span className="data-value">
                                0.0000 / 0.0000</span>
                        </div>
                        <div className="card2-data">
                            <span className="data-name">Claimable</span>
                            <span className="data-value">
                              
0.0000 LEX</span>
                        </div>
                      
                     
                    </div>
                  
                    <div><button className="buy-lex-btm mt-2">Connect Wallet</button></div>
                </div>

            </div>

        </>
    );
}