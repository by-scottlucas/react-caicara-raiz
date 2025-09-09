import './MessageSent.css';

import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MessageSent() {
    const navigate = useNavigate();

    return (
        <div className="message-sent">
            <div className="message-sent__card">
                <CheckCircle className="message-sent__icon" />
                <h1 className="message-sent__title">Mensagem Enviada!</h1>
                <p className="message-sent__description">
                    Obrigado pelo seu contato. Recebemos sua mensagem e entraremos em contato em breve.
                </p>
                <button
                    className="message-sent__button"
                    onClick={() => navigate("/")}
                >
                    Voltar ao Início
                </button>
            </div>
        </div>
    );
}
