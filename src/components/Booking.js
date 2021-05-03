
import React from 'react';
import { useTranslation } from 'react-i18next';
import Art from '../accets/Art.mp4';
import { useHistory } from "react-router";
import * as Icon from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";



export function Booking({
    info,
    link,
    paymentStatus,
    status,
    bookingStatus,
    phoneNumber,
    address,
    appartment,
    street,
    email,
    videoTitle
}) {
    const [t] = useTranslation();
    const history = useHistory();
    return (
        <main className="main1" >
            <div className="container pt-4" >
                <h3 className="info font-italic"> {info}
                    <Link to="/"> {link}</Link></h3>
                <Button type="button" onClick={() => history.push('/events')} className="text-white btn btn-primary rounded btn-sm my-2 font-italic">{t("pages.booking.bookingButton")}</Button>
            </div>
            <div className="container pt-4 font-italic" style={{ color: '#042801' }}>
                <p><strong>{paymentStatus}</strong></p>
                <p> <Icon.Alarm /> <strong> {status}</strong></p>
                <p> <Icon.Calendar /><strong> {bookingStatus}</strong></p>
                <p> <Icon.Telephone /><strong> {phoneNumber}</strong></p>
            </div>
            <div className="container pt-4 font-italic" style={{ color: '#042801' }}>
                <p><strong> {address}</strong></p>
                <p><strong> {appartment} </strong></p>
                <p><strong> {street}</strong></p>
                <p><strong> {email}</strong></p>
            </div>
            <div>
                <h2 className="trailer font-italic" style={{ color: '#042801', textAlign: 'center', alignItems: 'center' }}> {t("pages.booking.header")}</h2>
            </div>
            <div className="container mb-4 font-italic">
                <div className="video d-flex justify-content-center" >
                    <video
                        controls title={videoTitle}
                        width="620"
                        height="420"
                        frameBorder="1"
                        allowFullScreen>
                        <source src={Art} type="video/mp4" />
                    </video>
                </div>
            </div>
        </main>
    );
}