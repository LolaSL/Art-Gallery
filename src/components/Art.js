import React from 'react';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Art({
    id,
    pictureName,
    image,
    history
}) {

    const [t] = useTranslation();
    const handleClick = () => {
        history.push(`/artView/${id}`)

    }
    return (
        <div className="row-eq-height">
            <div className="card">
                <div className="card-body">
                    <img className="card-img-top rounded position -unset"
                        object-fit="cover"
                        src={image} alt={t(pictureName)} />
                    <div className=" title mt-2 font-italic" key={pictureName.id} style={{ cursor: 'pointer', textAlign: 'center' }} onClick={handleClick}><h5>{pictureName}</h5></div>
                </div>
            </div>
        </div>


    )
}

export default withRouter(Art)