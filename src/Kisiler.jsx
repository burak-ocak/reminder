import "./kisiler.css";

function Kisiler({bilgi}) {

    return (
        <div className="kok-etiket">
            <div className="kisiler">
                <div className="resim">
                    <img alt="kisi" src={bilgi.image} />
                </div>

                <div className="kisi-bilgi">
                    <p><strong>{bilgi.name}</strong></p>
                    <p>{bilgi.age} years</p>
                </div>
            </div>
        </div>
    )
}

export default Kisiler;