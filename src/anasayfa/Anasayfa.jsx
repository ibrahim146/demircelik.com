import './style/menu.css'
import { useEffect, useRef } from "react";
import Resim1 from "../anasayfa/demirimage/celikresim1.jpeg";
import Resim2 from "../anasayfa/demirimage/celikresim2.jpg";
import Resim3 from "../anasayfa/demirimage/celikresim3.jpeg";
import Resim4 from "../anasayfa/demirimage/celikresim4.jpeg";
import Resim5 from "../anasayfa/demirimage/celikresim5.jpeg";
import Resim6 from "../anasayfa/demirimage/celikresim6.jpeg";
import Resim7 from "../anasayfa/demirimage/celikresim7.jpeg";
import Resim8 from "../anasayfa/demirimage/celikresim8.jpeg";
import Resim9 from "../anasayfa/demirimage/celikresim9.jpeg";

function Gallery() {
    const losBoxesRef = useRef(null);
    useEffect(() => {
        const losBoxes = losBoxesRef.current.querySelectorAll(".gallery-image");
        
        let options = {
            threshold: 0.25
        };

        let observer = new IntersectionObserver((entries) => {
            entries.forEach(({ target, intersectionRatio, boundingClientRect }) => {
                target.dataset.visible = intersectionRatio > 0.25;

                let viewportPosition = 1;
                if (intersectionRatio > 0.24) {
                    viewportPosition = 0;
                } else if (boundingClientRect.y < 0) {
                    viewportPosition = -1;
                }

                target.dataset.viewportPosition = viewportPosition;
                target.style.setProperty("--ix-ratio", intersectionRatio);
            });
        }, options);

        losBoxes.forEach((elBox) => {
            observer.observe(elBox);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>

            <main ref={losBoxesRef} className="gallery">
                <figure className="gallery-image">
                    <img className='imagega' src={Resim5} alt='sdasdda' />
                    <figcaption>ÇELİK GRUBU</figcaption>
                </figure>

                <figure className="gallery-image">
                    <img className='imagega' src={Resim9} alt='sdasdda' />
                    <figcaption>ÇELİK GRUBU</figcaption>
                </figure>
                <figure className="gallery-image">
                    <img className='imagega' src={Resim3} alt='sdasdda' />
                    <figcaption>ÇELİK GRUBU</figcaption>
                </figure>
                <figure className="gallery-image">
                    <img className='imagega' src={Resim4} alt='sdasdda' />
                    <figcaption>ÇELİK GRUBU</figcaption>
                </figure>
                <figure className="gallery-image">
                    <img className='imagega' src={Resim2} alt='sdasdda' />

                    <figcaption>ÇELİK GRUBU</figcaption>
                </figure>
                <figure className="gallery-image">
                    <img className='imagega' src={Resim6} alt='sdasdda' />

                    <figcaption>ÇELİK GRUBU</figcaption>
                </figure>
                <figure className="gallery-image">
                    <img style={{height:"600px"}} className='imagega' src={Resim7} alt='sdasdda' />
                    <figcaption>ÇELİK GRUBU</figcaption>
                </figure>
                <figure className="gallery-image">
                    <img className='imagega' src={Resim8} alt='sdasdda' />

                    <figcaption>ÇELİK GRUBU</figcaption>
                </figure>
                <figure className="gallery-image">
                    <img className='imagega' src={Resim1} alt='sdasdda' />
                    <figcaption>ÇELİK GRUBU</figcaption>
                </figure>
            </main>
        </>
    );
}

export default Gallery;
