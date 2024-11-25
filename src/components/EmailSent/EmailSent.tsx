import './EmailSent.css';

import { Link } from 'react-router-dom';

export default function EmailSent() {
    return (
        <section className="container min-vh-100 d-flex justify-content-center align-items-center">
            <div className="text-center p-5">
                <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-envelope-check" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm0 1h12a1 1 0 0 1 1 1v.217l-6.422 4.28a.5.5 0 0 1-.556 0L1 4.217V4a1 1 0 0 1 1-1zm11.854 5.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                </div>

                <h2 className="email-sent-title fw-bold">Mensagem enviada!</h2>
                <p className="email-sent-description mt-3 text-muted">
                    Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.
                </p>

                <Link to="/" className="btn btn-primary rounded-0 w-25">Voltar</Link>
            </div>
        </section>
    );
};