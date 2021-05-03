import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import { mockData } from '../mockData/datasource';
import { Button } from 'react-bootstrap';
import firebase from 'firebase/app';



const getArtView = async (id, callback) => {
    const { artsCollection } = mockData();
    const currentLanguage = localStorage.getItem('i18nextLng');
    const artView = await artsCollection.getArtById(id, currentLanguage);
    callback(artView);
}

const ArtViewPage = ({ history, match: { params: { id } } }) => {
    const [t, i18n] = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    const [artView, setArtView] = useState(null);
  
    const db = firebase.database();
    db.ref(id).push(artView);
    console.log(db.ref(id))
    const pictureName = db.ref('pictureName')
    pictureName.on('value', (elem) => console.log(elem.val(), 'Italian Cafe'));
 
 
  
    useEffect(() => {
        setIsLoading(true);
        const setDataCallback = (data) => {
            setArtView(data);
            setIsLoading(false);
         
        }
        getArtView(id, setDataCallback);
    }, [id, i18n.language, ]);


    return isLoading ? (<div className="font-italic">{t("loader.loader")}</div>) :
        artView ? (
            <div className="container-art">
                <h1 className="title mb-4 font-italic" style={{ color: '#042801', textAlign: 'center', alignItems: 'center' }} >{t("pictureInformation.title")}</h1>
                <div className='art  mb-4'>
                    <img className="img mx-auto d-block mb-4"
                        style={{ width: 1100, maxWidth: '100%', maxHeight: '100%', display: 'block' }}
                        object-fit="cover"
                        src={artView.image}
                        alt={artView.pictureName}></img>
                    <div className='art-info'>
                        <div className=" blockquote text-center font-weight-bold my-2">
                            <h2 className="blockquote-header font-italic" style={{ textAlign: 'center' }}>{t("newArt.name")} {artView.pictureName}</h2>
                        </div>
                        <div className=" blockquote text-justify font-italic">
                            <h4>{t("newArt.artist")} {artView.painter}</h4>
                            <h5>{t("newArt.lifeAndCountry")}{artView.lifeAndCountry}</h5>
                            <h6>{t("newArt.description")} {artView.body}</h6>
                            <h6>{t("newArt.dimention")} {artView.dimention}</h6>
                            <h6>{t("newArt.matherials")} {artView.matherial}</h6>
                            <h6 className="block mb-4 ">{t("newArt.date")} {artView.year}</h6>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <Button
                            onClick={() => history.push('/collection')}
                            type="button"
                            className="btn btn-primary rounded mx-auto font-italic">
                            {t("title.button")}
                        </Button>
                    </div>
                </div>
            </div>

        ) : (<div>{t("loader.notification")}</div>)
}
export default ArtViewPage;