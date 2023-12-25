import "./Liquidity.css"
import ToggleSidebar from './../../components/Navbar/Navbar'
import { Card, StackCard } from './../../components/Card/Card';

export default function Liquidity() {
    return (
        <>

            <div>
                <ToggleSidebar />
            </div>

            <div className="stack">
               
                <p>Purchase sXLP to earn ETH fees from leverages trading.</p>
            </div>

        </>
    );
}