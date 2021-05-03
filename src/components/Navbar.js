import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';
import { Styles } from '../components/Styles';

const tabs = [
    {
        route: '/',
        textKey: 'artGallery'
    },
    {
        route: '/collection/',
        textKey: 'collection'
    },
    {
        route: '/events',
        textKey: 'events'
    },
    {
        route: '/booking',
        textKey: 'booking'
    },
    {
        route: '/about',
        textKey: 'about'
    }, 
  
];

export function Navbar() {
    const [t, i18n] = useTranslation();

    function handleClick(language) {
        i18n.changeLanguage(language);
        localStorage.setItem('i18nextLng', language)
    }
    return (
        <Styles>
            <div className="container-nav">
                <Nav className="navbar navbar-expand-sm bg-dark navbar-dark font-italic" aria-label="main navigation" fill  variant="tabs" defaultActiveKey="/">
                    {tabs.map((tab, index) => {
                        return (
                            <Nav.Item key={`nav-tab-${index}`}>
                                <Link style={{ border: "unset" }} to={tab.route}> {t(`navbar.tabs.${tab.textKey}`)}</Link>
                            </Nav.Item>
                        );
                    })}
                    <Nav>
                        <Button type="button" className="btn btn-default navbar-btn font-italic" onClick={() => handleClick('en')}>EN</Button>
                        <Button type="button" className="btn btn-default navbar-btn font-italic" onClick={() => handleClick('ru')}> RU</Button>
                    </Nav>
                </Nav>
            </div>
        </Styles>
    );
}
