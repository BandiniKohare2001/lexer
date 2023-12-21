import "./Dashboard.css"
import ToggleSidebar from './../../components/Navbar/Navbar'
import DashboardCard from "../../components/DashboardCard/DashboardCard";

export default function Dashboard() {
    return (
        <>
            <div>
                <ToggleSidebar />
            </div>
            <div className="card-container">
                <DashboardCard title="Total Trading Volume" number="$197,559.40" />
                <DashboardCard title="Total Fees" number="$386.81" />
                <DashboardCard title="Total Trading Volume" number="$72,483.70" />
            </div>

            <div className="lex-container">
               <div className="div-icon"> 
               <img src="https://app.lexer.markets/assets/lex-40b73a15.svg" className="lex-icon" /> 
               LEX
               <h3></h3>
               </div>
            </div>
        </>
    );
}