import slide1 from '../../assets/carousel/1.png';
import slide2 from '../../assets/carousel/2.png';
import slide3 from '../../assets/carousel/3.png';
import slide4 from '../../assets/carousel/4.png';
import slide5 from '../../assets/carousel/5.png';
import slide6 from '../../assets/carousel/6.png';

export default function Banner() {
    const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <img src={slide} className="d-block w-100" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            <button
                type="button"
                className="carousel-control-prev"
                data-bs-slide="prev"
                data-bs-target="#carouselExampleAutoplaying"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            
            <button
                type="button"
                className="carousel-control-next"
                data-bs-slide="next"
                data-bs-target="#carouselExampleAutoplaying"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
