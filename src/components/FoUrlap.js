import { adatLeiro } from "../Model/adatLeiro";

export default function FoUrlap(props) {
    const adat = {}
    function adatKuld(event) {
        event.preventDefault();
        props.adatKap(adat)
    }

    function adatValtoztat(event) {
        console.log(event.target.value);
        adat[event.target.id] = event.target.value
        //console.log(adat)
    }

    return (
        <form onSubmit={adatKuld}>
            {Object.keys(adatLeiro).map((elem, index) => {
               return( <div className="mb-3 mt-3" key={index}>
                    <label htmlFor={adatLeiro[elem].leiro} className="form-label">{adatLeiro[elem].megjelenes}</label>
                    <input type={adatLeiro[elem].tipus} className="form-control" id={adatLeiro[elem].leiro} 
                    placeholder={adatLeiro[elem].placeholder} name={adatLeiro[elem].leiro} onChange={adatValtoztat} />
                </div>)
            })}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}