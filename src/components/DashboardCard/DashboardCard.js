import "./DashboardCard.css"

export default function DashboardCard({title, number}){
    return(
        <>
       
       <div className="card-1">
            <h5 className="title">{title}</h5>
            <p className="number">{number}</p>
        </div>
      
        </>

    );
}
