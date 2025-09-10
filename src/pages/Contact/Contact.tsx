import './Contact.css';

import { useCallback, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { InputField } from './components/InputField/InputField';
import { validateEmail } from './utils/formUtils';
import Seo from '../../components/Seo/Seo';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const initialFormData: FormData = { name: '', email: '', message: '' };
const initialErrors: FormData = { name: '', email: '', message: '' };

export default function Contact() {
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY ?? '';
    const destinationEmail = import.meta.env.VITE_DESTINATION_EMAIL_ENV ?? '';
    const formRef = useRef<HTMLFormElement>(null);

    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<FormData>(initialErrors);
    const [showCaptcha, setShowCaptcha] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
            if (value.trim()) setErrors((prev) => ({ ...prev, [name]: '' }));
        },
        []
    );

    const validateForm = (data: FormData): FormData => ({
        name: data.name.trim() ? '' : 'O nome é obrigatório.',
        email: data.email.trim()
            ? validateEmail(data.email)
                ? ''
                : 'Por favor, insira um e-mail válido.'
            : 'O e-mail é obrigatório.',
        message: data.message.trim() ? '' : 'A mensagem é obrigatória.',
    });

    const handleSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const newErrors = validateForm(formData);
            setErrors(newErrors);

            if (Object.values(newErrors).some(Boolean)) return;

            if (!captchaToken) {
                setShowCaptcha(true);
                return;
            }

            formRef.current?.submit();
        },
        [formData, captchaToken]
    );

    const fields = [
        { id: 'name', label: 'Seu Nome', placeholder: 'Insira seu nome' },
        { id: 'email', label: 'E-mail', placeholder: 'Insira seu e-mail' },
        { id: 'message', label: 'Mensagem', placeholder: 'Insira sua mensagem', type: 'textarea' },
    ];

    return (
        <div className="contact-page">
            <Seo
                title="Fale Conosco | Caiçara Raíz"
                description="Entre em contato com a equipe do blog Caiçara Raíz para dúvidas, sugestões ou parcerias. Estamos prontos para responder!"
                url={`${window.location.origin}/contact`}
                type="page"
            />

            <Header />
            <section className="contact" id="contact">
                <header className="contact__header">
                    <h2 className="contact__title">Entre em Contato</h2>
                    <p className="contact__description">
                        Tem alguma sugestão, proposta ou quer apenas dizer um olá? Vá em frente
                    </p>
                </header>

                <form
                    ref={formRef}
                    className="contact__form"
                    onSubmit={handleSubmit}
                    action={`https://formsubmit.co/${destinationEmail}`}
                    method="POST"
                >
                    {fields.map(({ id, label, placeholder, type }) => (
                        <InputField
                            key={id}
                            id={id}
                            label={label}
                            onChange={handleChange}
                            placeholder={placeholder}
                            type={type as 'text' | 'textarea'}
                            value={formData[id as keyof FormData]}
                            error={errors[id as keyof FormData]}
                        />
                    ))}

                    {showCaptcha && (
                        <div className="contact__captcha">
                            <ReCAPTCHA
                                sitekey={siteKey}
                                onChange={(token) => {
                                    setCaptchaToken(token);
                                    if (token) formRef.current?.submit();
                                }}
                            />
                        </div>
                    )}

                    <input type="hidden" name="_subject" value="Nova mensagem do Caiçara Raíz!" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value={window.location.origin + "/contact/success"} />
                    <input type="hidden" name="_template" value="box" />

                    <button type="submit" className="contact__button">Enviar</button>
                </form>
            </section>
            <Footer />
        </div>
    );
}