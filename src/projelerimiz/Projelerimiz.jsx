import React, { useState } from 'react';
import "./projelerimiz.css";
import Footer from '../Foterr';
import resim1 from "../resim/İCCSESBARİYERİ.jpg";
import resim120 from "../resim/İCCSESBARİYERİ2.jpg";
import resim121 from "../resim/İCCSESBARİYERİ3.jpg";
import resim2 from "../resim/İBBYOLMÜDÜRLÜĞÜ.jpg";
import resim3 from "../resim/İBBYOLMÜDÜRLÜĞÜ4.jpg";
import resim4 from "../resim/İBBYOLMÜDÜRLÜĞÜ3.jpg";

import resim66 from "../resim/ibbkartal2.JPG";
import resim6 from "../resim/ibbkartal3.jpg";
import resim7 from "../resim/ibbkartal1.jpg";
import resim8 from "../resim/AİLESAGLIK.jpg";
import resim9 from "../resim/AİLESAGLIK2.jpg";
import resim10 from "../resim/AİLESAĞLIK4.jpg";

const Projelerimiz = () => {
  const [karayolu, setkarayolu] = useState("den");
  const [karayolu_text, setkarayolu_text] = useState("acıklamaaaaa")
  const [open, setopen] = useState("projec_closed");
  const [open1, setopen1] = useState("projec_closed1");
  const [open2, setopen2] = useState("projec_closed2");
  const [open3, setopen3] = useState("projec_closed3");
  function closed() {
    setopen("projec_closed")
  };

  function closed1() {
    setopen1("projec_closed")
  };
  function closed2() {
    setopen2("projec_closed")
  };
  function closed3() {
    setopen3("projec_closed")
  };
  const tıklandı1 = () => {
    setopen("")
    setkarayolu("İCA YSS SES BARİYERİ")
    setkarayolu_text("PROJESİ")
  }
  const tıklandı2 = () => {
    setopen1("")
    setkarayolu("İBB MALTEPE YOL BAKIM MÜDÜRLÜĞÜ")
    setkarayolu_text("PROJESİ")
  }
  const tıklandı3 = () => {
    setopen2("")
    setkarayolu("İBB KARTAL KAFE")
    setkarayolu_text("PROJESİ")
  }
  const tıklandı4 = () => {
    setopen3("")
    setkarayolu("SULTANGAZİ AİLE SAĞLIK MERKEZİ")
    setkarayolu_text("PROJESİ")
  }

  return (
    <>
      <div className='projeler_container'>
        <div className='projeler_başlık'>
          <h1 style={{ color: "rgba(81, 81, 206, 0.982)" }}>PROJELERİMİZ</h1>
          <hr style={{ color: "green", width: "90%", margin: "13px" }} />
          <div className='proje_alan'>
            <div style={{ cursor: "pointer" }} onClick={() => { tıklandı1() }} class="card_proje card_proje_image" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <span onClick={() => { tıklandı1() }} className='imgg'></span>
              <div onClick={() => { tıklandı1() }} class="card-front">
                <p onClick={() => { tıklandı1() }} class="title">İCA YSS SES BARİYERİ</p>
                <p onClick={() => { tıklandı1() }} class="subtitle">PROJESİ</p>
              </div>
            </div>

            <div style={{ cursor: "pointer" }} onClick={() => { tıklandı2() }} class="card_proje card_proje_image" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <span onClick={() => { tıklandı2() }} className='imgg'></span>
              <div onClick={() => { tıklandı2() }} class="card-front">
                <p onClick={() => { tıklandı2() }} class="title">İBB MALTEPE YOL BAKIM MÜDÜRLÜĞÜ</p>
                <p onClick={() => { tıklandı2() }} class="subtitle">PROJESİ</p>
              </div>
            </div>

            <div style={{ cursor: "pointer" }} onClick={() => { tıklandı3() }} class="card_proje" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <span onClick={() => { tıklandı3() }} className='imgg'></span>
              <div onClick={() => { tıklandı3() }} class="card-front">
                <p onClick={() => { tıklandı3() }} class="title">İBB KARTAL KAFE</p>
                <p onClick={() => { tıklandı3() }} class="subtitle">PROJESİ</p>
              </div>
            </div>

            <div style={{ cursor: "pointer" }} onClick={() => { tıklandı4() }} class="card_proje" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <span onClick={() => { tıklandı4() }} className='imgg'></span>
              <div onClick={() => { tıklandı4() }} class="card-front">
                <p onClick={() => { tıklandı4() }} class="title">SULTANGAZİ AİLE SAĞLIK MERKEZİ</p>
                <p onClick={() => { tıklandı4() }} class="subtitle">PROJESİ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`projec_container ${open}`} >
        <span className='x' onClick={() => { closed() }} style={{ cursor: "pointer", zIndex: "660" }}>X</span>
        <div className='projec_detail_container'>
          <div className='projec_image'>
            <div className='image__'>
              <img src={resim1} alt="YETİŞMETAL" />
              <img src={resim120} alt="YETİŞMETAL" />
              <img src={resim121} alt="YETİŞMETAL" />
            </div>
          </div>
          <div className='projec_detail'>
            <div className='new_detail'>
              <h1>{karayolu}</h1>
              <br />
              <hr />
              <br />
              <p>{`${karayolu_text}`}
              </p>
              <br />
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className={`projec_container1 ${open1}`} >
        <span className='x1' onClick={() => { closed1() }} style={{ cursor: "pointer", zIndex: "660" }}>X</span>
        <div className='projec_detail_container'>
          <div className='projec_image'>
            <div className='image__'>
              <img src={resim4} alt="YETİŞMETAL" />
              <img style={{objectFit:"initial"}} src={resim2} alt="YETİŞMETAL" />
              <img style={{objectFit:"inherit"}} src={resim3} alt="YETİŞMETAL" />
            </div>
          </div>
          <div className='projec_detail'>
            <div className='new_detail'>
              <h1>{karayolu}</h1>
              <br />
              <hr />
              <br />
              <p>{`${karayolu_text}`}
              </p>
              <br />
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className={`projec_container2 ${open2}`} >
        <span className='x2' onClick={() => { closed2() }} style={{ cursor: "pointer", zIndex: "660" }}>X</span>
        <div className='projec_detail_container'>
          <div className='projec_image'>
            <div className='image__'>
              <img style={{objectFit:"inherit"}} src={resim66} alt="YETİŞMETAL" />
              <img src={resim6} alt="YETİŞMETAL" />
              <img src={resim7} alt="YETİŞMETAL" />
            </div>
          </div>
          <div className='projec_detail'>
            <div className='new_detail'>
              <h1>{karayolu}</h1>
              <br />
              <hr />
              <br />
              <p>{`${karayolu_text}`}
              </p>
              <br />
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className={`projec_container3 ${open3}`} >
        <span className='x3' onClick={() => { closed3() }} style={{ cursor: "pointer", zIndex: "660" }}>X</span>
        <div className='projec_detail_container'>
          <div className='projec_image'>
            <div className='image__'>
              <img style={{objectFit:"inherit"}} src={resim8} alt="YETİŞMETAL" />
              <img style={{objectFit:"inherit"}} src={resim9} alt="YETİŞMETAL" />
              <img style={{objectFit:"inherit"}} src={resim10} alt="YETİŞMETAL" />
            </div>
          </div>
          <div className='projec_detail'>
            <div className='new_detail'>
              <h1>{karayolu}</h1>
              <br />
              <hr />
              <br />
              <p>{`${karayolu_text}`}
              </p>
              <br />
              <hr />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projelerimiz