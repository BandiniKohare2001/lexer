import "./LeaderBoard.css"
import ToggleSidebar from './../../components/Navbar/Navbar'
import './../LexStack/LexStack.css'
import less from "./../../asset/less.png"
import greater from "./../../asset/greater.png"
export default function LeaderBoard() {
    return (
        <>
            <div className="leaderboard">
                <div>
                    <ToggleSidebar />
                </div>
                <div>
                    <img className="leaderboard-img" src="https://app.lexer.markets/assets/leaderboard_banner-f162ffcb.png" />
                </div>
                <div className="mx-4">
                    <div><button className="trade-lex mt-4">TRADE TO EARN</button></div>
                    <div className="wallet">
                        <div><button className="buy-lex mt-2">Connect Wallet</button></div>
                    </div>
                </div>
                <div className="ranking mx-4">
                    <h4 className="heading-ranking">Ranking</h4><br/>
                    <div className="d-flex header">
                        <span className="width">RANK</span>
                        <span className="width">TRADER</span>
                        <span className="width">TRADING VOLUME</span>
                        <span className="width">WIN/LOSE</span>
                        <span className="width">PNL</span>
                        <span className="width">REWARDS</span>
                    </div>
                    <hr />
                    <div className="d-flex rank-data">
                        <span className="width"><img className="rank-img" src="https://app.lexer.markets/assets/leaderboard_gold-e0ca022e.svg" /></span>
                        <span className="width">0x0a...3ce</span>
                        <span className="width">$15,969.25</span>
                        <span className="width">2/22</span>
                        <span className="width text-danger">$-5.15</span>
                        <span className="width text-success">926,014.9 esLEX</span>
                    </div>
                    <div className="d-flex rank-data">
                        <span className="width"><img className="rank-img" src="https://app.lexer.markets/assets/leaderboard_silver-03b4ddc2.svg" /></span>
                        <span className="width">0xcf...337</span>
                        <span className="width">$14,057.80</span>
                        <span className="width">1/21</span>
                        <span className="width text-danger">$-5.64</span>
                        <span className="width text-success">815,175.5 esLEX</span>
                    </div>
                    <div className="d-flex rank-data">
                        <span className="width"><img className="rank-img" src="https://app.lexer.markets/assets/leaderboard_bronze-4442432a.svg" /></span>
                        <span className="width">0xc6...11f</span>
                        <span className="width">$11,671.37</span>
                        <span className="width">0/20</span>
                        <span className="width text-danger">$-5.88</span>
                        <span className="width text-success">676,792.3 esLEX</span>
                    </div>
                    <div className="d-flex rank-data">
                        <span className="width">4</span>
                        <span className="width">0xef...d56				</span>
                        <span className="width">$11,192.82</span>
                        <span className="width">2/22</span>
                        <span className="width text-danger">$-8.16</span>
                        <span className="width text-success">649,042.7 esLEX</span>
                    </div>
                    <div className="d-flex rank-data">
                        <span className="width">5</span>
                        <span className="width">0x80...a34				</span>
                        <span className="width">$10,973.52</span>
                        <span className="width">3/20</span>
                        <span className="width text-danger">$-3.41</span>
                        <span className="width text-success">636,326.1 esLEX</span>
                    </div>
                    <div className="d-flex rank-data">
                        <span className="width">6</span>
                        <span className="width">0xb8...251				</span>
                        <span className="width">$10,545.33</span>
                        <span className="width">2/3</span>
                        <span className="width text-danger">$-15.91</span>
                        <span className="width text-success">611,496.0 esLEX</span>
                    </div>
                    <div className="d-flex rank-data">
                        <span className="width">7</span>
                        <span className="width">0x6e...60f</span>
                        <span className="width">$9,355.24</span>
                        <span className="width">2/21</span>
                        <span className="width text-danger">$-6.91</span>
                        <span className="width text-success">542,486.1 esLEX</span>
                    </div>
                    <div className="d-flex rank-data">
                        <span className="width">8</span>
                        <span className="width">0xc6...11f</span>
                        <span className="width">$11,671.37</span>
                        <span className="width">0/20</span>
                        <span className="width text-danger">$-5.88</span>
                        <span className="width text-success">676,792.3 esLEX</span>
                    </div>
                   


                   <div className="my-5 btnn">
                    <img src={less} className="sign"/>
                     <button className="rank-btn">1</button>
                     <img src={greater} className="sign"/>
                   </div>
                </div>
            </div>


        </>
    );
}