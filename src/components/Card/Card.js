import "./Card.css"
export function Card({ logo, price, tvl, apr, percentage, graphcircle , text}) {
    return (
        <>
            <div>

                <div className="card-2">
                    <div>
                        <img src={logo} className="icon" /><span className="text-light bold">{text}</span>
                    </div>
                    <div className="card-data">
                        <span>Price</span>
                        <span>{price}</span>
                    </div>
                    <div className="card-data">
                        <span>TVL</span>
                        <span>{tvl}</span>
                    </div>
                    <div className="card-data">
                        <span>APR</span>
                        <span>{apr}</span>
                    </div>
                    <div className="card-data">
                        <span>Stables Percentage
                        </span>
                        <span>{percentage}</span>
                    </div>
                </div>
            </div>

        </>
    );
}

export function StackCard({ stacklextitle, stacklexnumber, wallet, staked, apr, rewards, pointapr, boostpecentage }) {
    return (
        <>
            <div className="d-flex">
                <div className="stack-card">
                    <div className="d-flex">
                        <img src="https://app.lexer.markets/assets/lex-40b73a15.svg" className="lex-icon" />
                        <div> <span className="stack-titile">{stacklextitle}</span><br />
                            <span>{stacklexnumber}</span></div>
                    </div>
                    <div>
                        <div className="card2-data">
                            <span className="data-name">Wallet</span>
                            <span className="data-value">{wallet}</span>
                        </div>
                        <div className="card2-data">
                            <span className="data-name">Staked</span>
                            <span className="data-value">{staked}</span>
                        </div>
                        <hr />
                        <div className="card2-data">
                            <span className="data-name">APR</span>
                            <span className="data-value">{apr}</span>
                        </div>
                        <div className="card2-data">
                            <span className="data-name">Rewards</span>
                            <span className="data-value">{rewards}</span>
                        </div>
                        <div className="card2-data">
                            <span className="data-name">Multiplier Points APR</span>
                            <span className="data-value">{pointapr}</span>
                        </div>
                        <div className="card2-data">
                            <span className="data-name">Boost Percentage</span>
                            <span className="data-value">{boostpecentage}</span>
                        </div>
                    </div>
                    <div className="total-stacked data-name"><p>Total Staked</p>
                        <p className="total-stacke-number data-value">10,976,638.16 LEX ($44,488.31)</p></div>
                    <div>
                        <button className="buy-lex-btm">Buy LEX</button></div>
                </div>





                <div className="stack-card-2 ">
                    <div className="d-flex">
                        <img src="https://app.lexer.markets/assets/lex-40b73a15.svg" className="lex-icon" />
                        <div> <span className="stack-titile">esLEX</span><br />
                            <span>$0.0040</span></div>
                    </div>
                    <div>
                        <div className="card2-data">
                            <span className="data-name">Wallet</span>
                            <span className="data-value">{wallet}</span>
                        </div>
                        <div className="card2-data">
                            <span className="data-name">Staked</span>
                            <span className="data-value">{staked}</span>
                        </div>
                        <hr />
                        <div className="card2-data">
                            <span className="data-name">APR</span>
                            <span className="data-value">{apr}</span>
                        </div>

                        <div className="card2-data">
                            <span className="data-name">Multiplier Points APR</span>
                            <span className="data-value">{pointapr}</span>
                        </div>

                    </div>
                  <div className="d-flex justify-content-between">
                  <div className="card2-total-stacked data-name"><p>Total Staked</p>
                        <p className="card2-total-stacke-number data-value">2,507,184.80 esLEX ($10,161.62)</p>
                    </div>
                    <div className="card2-total-stacked data-name"><p>Total Supply</p>
                        <p className="card-2-total-stacke-number data-value">7,143,975 esLEX ($28,954)</p>
                    </div>

                  </div>
                    <div><button className="buy-lex-btm">Connect Wallet</button></div>
                </div>
            </div>
        </>
    );
}