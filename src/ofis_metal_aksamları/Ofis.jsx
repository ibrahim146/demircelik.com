import { useEffect, useState } from 'react';
import Ofisanasayfa from './ofis_anasayfa/Ofisanasayfa';
import { Orta } from '../Orta';
import Alttaraf1 from '../Alttaraf1';
import Foterr from '../Foterr';
import Alttaraf2 from '../Alttaraf2';

function Carusel() {
  const [activeIndex, setActiveIndex] = useState(0);
  let intervalId;

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(intervalId);
    };
  }, [activeIndex]);

  // Zamanlayıcıyı başlatan işlev
  function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 15000);
  }

  // prewslide işlevini güncelle
  function prewslide() {
    if (activeIndex === 0) {
      setActiveIndex(2);
    } else {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
    startTimer();
  }

  // nextslide işlevini güncelle
  function netxslide() {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    startTimer();
  }

  return (
    <>
      <div className='slides'>
        <div className={`slide ${activeIndex === 0 ? 'active' : ''}`}>
          <div className='slidecontainer'>
            <div className='content' style={{ color: "rgba(81, 81, 206, 0.81)" }}>
              <h1 id="demotext"><span style={{ verticalAlign: "inherit" }}><span style={{ verticalAlign: "inherit" }}>ofis grubu</span></span></h1>
              <p id="demotext"><span style={{ verticalAlign: "inherit" }}><span style={{ verticalAlign: "inherit" }}>Ofis metal üretimi, genellikle metal levha, çubuk, boru ve profillerin işlenmesini içerir. Bu işlemler arasında kesme, bükme, delme, kaynak gibi birçok işlem bulunmaktadır. Bunların yanı sıra, metal üretimi için gerekli olan çeşitli malzemelerin hazırlanması ve işlenmesi de önemlidir. Bu malzemeler arasında demir cevheri, alaşımlar, katkı maddeleri ve kaplama maddeleri bulunmaktadır.</span></span></p>
              <button className="continue-application">
                <div>
                  <div className="pencil"></div>
                  <div className="folder">
                    <div className="top">
                      <svg viewBox="0 0 24 27">
                        <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                      </svg>
                    </div>
                    <div className="paper"></div>
                  </div>
                </div>
                <a href="#demirgrubu" >incele</a>
              </button>
            </div>
          </div>
        </div>

        <div className={`slide ${activeIndex === 1 ? 'active' : ''}`}>
          <div className='slidecontainer'>
            <div className='content' style={{ color: "rgba(81, 81, 206, 0.81)" }}>
              <h1 id="demotext"><span style={{ verticalAlign: "inherit" }}><span style={{ verticalAlign: "inherit" }}>ofis grubu</span></span></h1>
              <p id="demotext"><span style={{ verticalAlign: "inherit" }}><span style={{ verticalAlign: "inherit" }}>Ofis metal üretimi, genellikle metal levha, çubuk, boru ve profillerin işlenmesini içerir. Bu işlemler arasında kesme, bükme, delme, kaynak gibi birçok işlem bulunmaktadır. Bunların yanı sıra, metal üretimi için gerekli olan çeşitli malzemelerin hazırlanması ve işlenmesi de önemlidir. Bu malzemeler arasında demir cevheri, alaşımlar, katkı maddeleri ve kaplama maddeleri bulunmaktadır.</span></span></p>
              <button className="continue-application">
                <div>
                  <div className="pencil"></div>
                  <div className="folder">
                    <div className="top">
                      <svg viewBox="0 0 24 27">
                        <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                      </svg>
                    </div>
                    <div className="paper"></div>
                  </div>
                </div>
                <a href="#demirgrubu" >incele</a>
              </button>
            </div>
          </div>
        </div>

        <div className={`slide ${activeIndex === 2 ? 'active' : ''}`}>
          <div className='slidecontainer'>
            <div className='content' style={{ color: "rgba(81, 81, 206, 0.81)" }}>
              <h1 id="demotext"><span style={{ verticalAlign: "inherit" }}><span style={{ verticalAlign: "inherit" }}>ATÖLYEMİZ </span></span></h1>
              <p id="demotext"><span style={{ verticalAlign: "inherit" }}><span style={{ verticalAlign: "inherit" }}>Uzun yıllardır işlettigimiz çelik konstrüksiyon atölyemizi bu performans deneyimi kazanmış ve farklı kalitede hizmet sunmuş Bu atölye, çelik malzeme tasarımı, bölümleme, kurulum ve montaj gibi yapılarda bulunmaktadır. Çeşitli inşaat projeleri için güvenilir ve dayanıklı çelik yapılar üretmekteyiz. Çelik konstrüksiyon alanında güvenilir bir ortak olarak tanınmamızı sağlamış ve gelecekte de inşaat sektöründe önemli projelere imza atmayı sürdürmemizi sağlayacak.</span></span></p>
              <button className="continue-application">
                <div>
                  <div className="pencil"></div>
                  <div className="folder">
                    <div className="top">
                      <svg viewBox="0 0 24 27">
                        <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                      </svg>
                    </div>
                    <div className="paper"></div>
                  </div>
                </div>
                <a href="#ikigrubu" >incele</a>
              </button>
            </div>
          </div>
        </div>
        <div className='control'>
          <div className='prew' onClick={(() => { prewslide() })}>
            <i className='fa fa-arrow-left'></i>
          </div>
          <div className='next' onClick={(() => { netxslide() })}>
            <i className='fa fa-arrow-right'></i>
          </div>
        </div>
      </div>
      <Orta />
      <Ofisanasayfa />
      <Alttaraf1 />
      <Alttaraf2 />
      <Foterr />
    </>
  );
}
export default Carusel;
