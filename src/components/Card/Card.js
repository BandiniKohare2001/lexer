export function Card({logo, price, tvl, apr,percentage, graphcircle}){
    return(
        <>
        <div className="card-2">
            <span>{logo}</span>
            <p>{price}</p>
            <p>{tvl}</p>
            <p>{apr}</p>
            <p>{price}</p>
        </div>

        </>
    );
}