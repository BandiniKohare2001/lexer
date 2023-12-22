import "./Dashboard.css"
import ToggleSidebar from './../../components/Navbar/Navbar'
import { Card } from './../../components/Card/Card'
import DashboardCard from "../../components/DashboardCard/DashboardCard";

export default function Dashboard() {
    return (
        <>
          
           <div>
                <ToggleSidebar />
            </div>
            <div className="dashboard">
            <div className="card-container">
                <DashboardCard title="Total Trading Volume" number="$197,559.40" />
                <DashboardCard title="Total Fees" number="$386.81" />
                <DashboardCard title="Total Trading Volume" number="$72,483.70" />
            </div>

            <div  className="card2-container">
                <Card logo="https://app.lexer.markets/assets/corecrypto-16dfbe5b.svg" price="$1.021" tvl="$52,713.07" apr="27.51%" percentage="53.83%"/>
                <Card logo="https://app.lexer.markets/assets/ic_usdc_24-3b8acc8e.svg" price="$1.021" tvl="$52,713.07" apr="27.51%" percentage="53.83%"/>
            </div>
         
            <div className="lex-container">
                <div className="div-icon">
                    <img src="https://app.lexer.markets/assets/lex-40b73a15.svg" className="lex-icon" />
                    <span className="lex-text">LEX</span>
                </div>
                <div>
                    <span className="lex-number">$0.0040</span>
                </div>
            </div>


           

           </div>

           
        </>
    );
}