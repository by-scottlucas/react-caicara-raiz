import Header from '../../components/Header/Header';
import './Contact.css';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (value.trim()) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors = {
            name: formData.name.trim() ? '' : 'O nome é obrigatório.',
            email: formData.email.trim()
                ? validateEmail(formData.email)
                    ? ''
                    : 'Por favor, insira um e-mail válido.'
                : 'O e-mail é obrigatório.',
            message: formData.message.trim() ? '' : 'A mensagem é obrigatória.',
        };

        setErrors(newErrors);

        if (!Object.values(newErrors).some((error) => error)) {
            e.currentTarget.submit();
        }
    };

    return (
        <>
            <Header />

            <section className="contact-container container-fluid mt-5 mt-xl-2" id="contact">
                <div className="row">
                    <div className="col-12 col-sm-11 col-md-12 m-auto mb-3 mb-xl-5">
                        <header className="contact-header text-center">
                            <h2 className="contact-header-title mb-1">Entre em Contato</h2>
                            <p className="contact-header-description">
                                Tem alguma sugestão, proposta ou quer apenas dizer um olá? Vá em frente
                            </p>
                        </header>
                    </div>
                </div>

                <form
                    action="https://formsubmit.co/lucasluke307@gmail.com"
                    method="POST"
                    className="col-12 col-sm-11 col-lg-9 col-xl-6"
                    onSubmit={handleSubmit}
                >
                    <div className="row">
                        <div className="mb-3 col-sm-6 col-md-6">
                            <label className="form-label mb-2">Seu Nome</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                placeholder="Insira seu nome"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>

                        <div className="mb-3 col-sm-6 col-md-6">
                            <label className="form-label mb-2">E-mail</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                placeholder="Insira seu e-mail"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                    </div>

                    <div className="mt-3 mt-xxl-4 mb-2 mb-lg-4">
                        <label className="form-label mb-2">Mensagem</label>
                        <textarea
                            id="message"
                            name="message"
                            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                            placeholder="Insira sua Mensagem"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </div>

                    <input type="hidden" name="_subject" value="Nova mensagem do Caiçara Raíz!" />
                    <input type="hidden" name="_next" value="http://localhost:5173/mail" />
                    <input type="hidden" name="_template" value="box" />

                    <button type="submit" className="btn contact-button-style mt-3">
                        <span>Enviar</span>
                    </button>
                </form>
            </section>
        </>
    );
}
