import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function EventCard({
    id,
    title,
    type,
    imageUrl,
    information,
    informationSource,
    reference,
    date,
    time,
    location
}) {
    const [readMore, setReadMore] = useState(false);
    const [t] = useTranslation();

    return (
        <div className="card mb-3" key={id}>
            <div className="card-header py-3 font-italic ">
                <strong >{type}</strong>
                 <strong> {location} {date} {time} </strong>
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-2 font-italic ">
                    <h4> {title}</h4>
                    <div className="events">
                        <img className="card-img-top rounded position-unset" src={imageUrl} alt={imageUrl} />
                        <Button type="button" className="text-white btn btn-primary btn-sm my-2 font-italic "  onClick={() => setReadMore(!readMore)}>
                            <h6> {t(`pages.event.cta.${!readMore ? 'readMore' : 'readLess'}`)}</h6>
                        </Button>
                        <div className="font-italic ">
                            {readMore && information}
                        </div>
                    </div>
                    <footer className="blockquote-footer font-italic">
                        {informationSource}
                        <cite title="Source Title"> {reference}</cite>
                    </footer>
                </blockquote>
            </div>
        </div>
    );
}
