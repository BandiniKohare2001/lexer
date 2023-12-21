import "./DashboardCard.css"

export default function DashboardCard({title, number}){
    return(
        <>
       
       <div className="card">
            <h5 className="title">{title}</h5>
            <p className="number">{number}</p>
        </div>
      
        </>

    );
}
// export function Card({logo, price, tvl, apr,percentage graphcircle}){
//     return(
//         <>
//         <div>
//             <span>{logo}</span>
//             <p>{price}</p>
//             <p>{tvl}</p>
//             <p>{apr}</p>
//             <p>{price}</p>
//         </div>

//         </>
//     );
// }