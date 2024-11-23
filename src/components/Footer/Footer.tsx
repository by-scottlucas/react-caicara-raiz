import './Footer.css';

import { useEffect, useState } from 'react';

export default function Footer() {
    const [currentDate, setCurrentDate] = useState(2024);

    function getCurrentDate(){
        const date = new Date();
        setCurrentDate(date.getFullYear());
    }

    useEffect(() => {
        getCurrentDate();
    },[])

    return (
        <footer className="blog-footer container-fluid mt-5">
            <p className="footer-content text-center">
                © { currentDate } Caiçara Raíz. Todos os direitos reservados.
            </p>
        </footer>
    )
}