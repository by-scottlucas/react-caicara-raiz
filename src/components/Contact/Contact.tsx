import Header from '../Header/Header';
import './Contact.css';

export default function Contact({ showHeader }: any) {
    return (
        <>
            {showHeader && <Header />}

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

                <form action="https://formsubmit.co/lucasluke307@gmail.com" method="POST" className="col-12 col-sm-11 col-lg-9 col-xl-6">
                    <div className="row">
                        <div className="mb-3 col-sm-6 col-md-6">
                            <label className="form-label mb-2">Seu Nome</label>
                            <input id="name" name='name' type="text" className="form-control" placeholder="Insira seu nome" />
                        </div>

                        <div className="mb-3 col-sm-6 col-md-6">
                            <label className="form-label mb-2">E-mail</label>
                            <input id="email" name='email' type="email" className="form-control" placeholder="Insira seu e-mail" />
                        </div>
                    </div>

                    <div className="mt-3 mt-xxl-4 mb-2 mb-lg-4">
                        <label className="form-label mb-2">Mensagem</label>
                        <textarea id="message" name='message' className="form-control" placeholder="Insira sua Mensagem"></textarea>
                    </div>

                    <input type="hidden" name="_subject" value="Nova mensagem do Caiçara Raíz!" />

                    <button type="submit" className="btn contact-button-style mt-3">
                        <span>Enviar</span>
                    </button>
                </form>
            </section>
        </>
    )
}