const Quotes=(props)=>{
    return(
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target={`#id-${props.id}`} aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item
                </button>
            </h2>
            <div id={`id-${props.id}`} className="accordion-collapse collapse show" aria-labelledby="headingOne"
                 data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <h3>Quote: {props.quote}</h3>
                    <p>Author: {props.author}</p>
                </div>
            </div>
        </div>
    )

}
export default Quotes