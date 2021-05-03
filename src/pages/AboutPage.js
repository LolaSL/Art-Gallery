import React from 'react';
import { useTranslation } from 'react-i18next';
import SubscriptionForm from '../components/SubscriptionForm';




export function AboutPage() {
    const [t] = useTranslation();
    return (
        <>
            <main className="main">
                <div>
                    <h1 className="title pt-4 font-italic " style={{ color: '#042801', textAlign: 'center' }} > {t('pages.about.title')}</h1>
                </div>
                <div className="container">
                    <h3 className="mission pt-4 font-italic " style={{ color: '#042801' }}><strong>{t('pages.about.ourMission')}</strong></h3>
                    <h4 className="value pt-4 font-italic ">{t("pages.about.text")}</h4>
                </div>
                <div className="container 3">
                    <h3 className="value pt-4 font-italic " style={{ color: '#042801' }}><strong>{t('pages.about.ourValues')}</strong></h3>
                    <h4 className="value pt-4 font-italic ">{t("pages.about.text1")}</h4>
                </div>
                <SubscriptionForm />
            </main>
        </>

    );
}

