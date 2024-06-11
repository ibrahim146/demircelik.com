import React from 'react';
import "./galerimiz.css";
import Galerimiz2 from '../galerimiz/Galerimiz2';
import Galerimiz1 from '../galerimiz/Galerimiz1';
import resim2 from "../resim/AİLESAGLIK.jpg";
import resim22 from "../galeriimage/galeriimage15.jpeg";
import resim23 from "../galeriimage/galeriimage16.jpeg";
import resim24 from "../galeriimage/galeriimage17.jpeg";
import resim3 from "../resim/ibbkartal1.jpg";
import resim4 from "../resim/resim4.jpg";
import resim5 from "../galeriimage/galeriimage6.jpeg";
import resim1 from "../resim/resim (5).jpg";
import resimm1 from "../resim/resim (6).jpg";
import resimm2 from "../resim/resim (7).jpg";
import resimm333 from "../galeriimage/galeriimage4.jpeg";
import resimm3333 from "../galeriimage/galeriimage5.jpeg";
import resimm4 from "../resim/resim (9).jpg";
import resimm5 from "../galeriimage/galeriimage.jpeg";
import resimm6 from "../galeriimage/galeriimage13.jpeg";
import resimmm6 from "../galeriimage/galeriimage14.jpeg";
import resimm7 from "../resim/resim (13).jpg";
import resimm8 from "../resim/resim (14).jpg";
import resimm9 from "../resim/resim (15).jpg";
import resimm12 from "../galeriimage/galeriimage2.jpeg";
import resimm10 from "../resim/resim (17).jpg";
import resimm11 from "../resim/resim (18).jpg";
import Galeri_video from './galeri-video/Galeri_video';
import Foterr from '../Foterr';

const Galerimiz = () => {
  return (
    <>
      <div className='wrapper-container'>
        <div className="wrapper-images">
          <div className="images-line">
            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resimm1} alt="ofisgrubu" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line">
              <div className="img"><img width="100%" height="100%" src={resim2} alt="çelik-konstrüksiyon-ve-ferforje-grubu" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" style={{ backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)" }}>
              <div className="img"><img width="100%" height="100%" src={resim3} alt="çelik-konstrüksiyon-ve-ferforje-grubu" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resim4} alt="ofisgrubu" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" >
              <div className="img" ><img width="100%" height="100%" src={resim5} alt="yetismetal" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" >
              <div className="img" ><img width="100%" height="100%" src={resimm12} alt="çelik-konstrüksiyon-ve-ferforje-grubu" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line">
              <div className="img" ><img width="100%" height="100%" src={resimm2} alt="yetismetal" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" style={{ backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)" }}>
              <div className="img" ><img width="100%" height="100%" src={resimm333} alt="yetismetal" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
          </div>
          <div className="images-line">
            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resimm4} alt="yetismetal" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resimm5} alt="ofisgrubu" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resimmm6} alt="çelik-konstrüksiyon-ve-ferforje-grubu" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line">
              <div className="img"><img width="100%" height="100%" src={resimm7} alt="yetismetal" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" style={{ backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)" }}>
              <div className="img"><img width="100%" height="100%" src={resimm8} alt="ofisgrubu" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resimm9} alt="yetismetal" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line">
              <div className="img"><img width="100%" height="100%" src={resimm10} alt="yetismetal" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" style={{ backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)" }}>
              <div className="img"><img width="100%" height="100%" src={resimm11} alt="ofisgrubu" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
          </div>
          <div className="images-line">
            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resimm12} alt="çelik-konstrüksiyon-ve-ferforje-grubu" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line">
              <div className="img"><img width="100%" height="100%" src={resimm3333} alt="yetismetal" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resimm6} alt="ofisgrubu" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" >
              <div className="img" ><img width="100%" height="100%" src={resim1} alt="yetismetal" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resim22} alt="yetismetal" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resim23} alt="çelik-konstrüksiyon-ve-ferforje-grubu" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resim24} alt="çelik-konstrüksiyon-ve-ferforje-grubu" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
          </div>
          <div className="images-line" id='mobile'>
            <div className="line" id='mobile' >
              <div className="img"><img width="100%" height="100%" src={resimm4} alt="yetismetal" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line">
              <div className="img"><img width="100%" height="100%" src={resimm5} alt="ofisgrubu" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line">
              <div className="img"><img width="100%" height="100%" src={resimm6} alt="çelik-konstrüksiyon-ve-ferforje-grubu" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line">
              <div className="img"><img width="100%" height="100%" src={resimm7} alt="ofisgrubu" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" style={{ backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)" }}>
              <div className="img"><img width="100%" height="100%" src={resimm8} alt="yetismetal" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resimm9} alt="ofisgrubu" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line">
              <div className="img"><img width="100%" height="100%" src={resimm10} alt="yetismetal" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" style={{ backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)" }}>
              <div className="img"><img width="100%" height="100%" src={resimm11} alt="ofisgrubu" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
          </div>
        </div>
      </div>
      <Galerimiz2 />
      <Galerimiz1 />
      <Galeri_video />
      <Foterr />
    </>
  );
}
export default Galerimiz;
