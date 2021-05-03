import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';


async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [t] = useTranslation();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }
    return (

        <div className="login-wrapper">
            <Form onSubmit={handleSubmit}>
                <h1 className=" header mt-4 mb-4 font-italic" style={{ color: '#042801', textAlign: 'center' }}>{t("pages.admin.title")}</h1>
                <Form.Group className="basicUser" controlId="formBasicUser">
                    <Form.Control
                        className="form-group"
                        autoFocus
                        type="text"
                        value={username}
                        style={{ width: '370px', color: '#042801' }}
                        placeholder={t("pages.admin.admin")}
                        onChange={e => setUserName(e.target.value)} />
                </Form.Group>
                <Form.Group className="basicPassword" controlId="formBasicPassword">
                    <Form.Control
                        className="form-group"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="on"
                        style={{ width: '370px', color: '#042801' }}
                        placeholder={t("pages.admin.password")} />
                </Form.Group>
                <Form.Text className="helpBlock mb-2" id="passwordHelpBlock " muted>
                    {t("pages.admin.textMuted")}
                </Form.Text>
                <Button
                    className="font-italic btn"
                    variant="primary rounded"
                    style={{ width: '370px' }}
                    type="submit"
                >
                    {t("pages.admin.button")}
                </Button>
            </Form>

        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
