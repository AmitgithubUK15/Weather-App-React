
const Result = ({temprature,city})=>{

    return (
        <>
        <div>
            <p className="resultpara">
                <h1>{temprature} </h1>
                
            </p>
            <p className="resultpara">{city}</p>
        </div>
        </>
    )
}

export default Result;