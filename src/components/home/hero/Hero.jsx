import "./Hero.scss"; // SCSS faylini import qilish
import Business from "../../../assets/images/business2.jpeg";
import Marketing from "../../../assets/images/marketing.webp";
import Seo from "../../../assets/images/seo.jpg";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { RiTeamFill } from "react-icons/ri";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import Video from "../../../assets/videos/video-bg.mp4";

const Hero = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <div className="hero">
        <video className="video-bg" autoPlay loop muted>
          <source src={Video} />
        </video>
        <div className="container">
          <h1>BIZ SIZGA YORDAM BERISHIMIZ MUMKUNLIGIDAN HURSANDMIZ</h1>
          <p>
            Siz istagan sifatli xizmatlarimz, o'z manzilingizni qoldring va biz
            siz bilan te orada bog'lanamiz
          </p>
          <div className="request">
            <a href="#Footer">So'rov yuborish</a>
            <div className="scroll-arrow">
              <FaArrowDown />
            </div>
          </div>
        </div>
      </div>
      <section className="business">
        <div className="container flex">
          <div>
            <h1>
              Biznesingiz veb-sayt bilan yaxshiroq ishlashiga imkon bering
            </h1>
            <p>
              Tez rivojlanayotgan raqamli davrda veb-saytsiz biznes kompassiz
              kemaga o'xshaydi. Kichik mahalliy korxona yoki startap bo'lasizmi,
              biznes veb-saytiga ega bo'lish endi hashamat emas, balki strategik
              majburiyatdir. Brend hikoyangizni aytib bering va qisqa vaqt
              ichida potentsial mijozlar bilan bog'laning.
            </p>
            <div className="link-contact">
              <a href="https://t.me/sardorbek_sidikov1">Telegram</a>
              <a href="tel:+998906287742">Call</a>
            </div>
          </div>
          <div className="img">
            <img src={Business} alt="business" />
          </div>
        </div>
      </section>
      <section className="other">
        <div className="container flex2">
          <div className="left">
            <img src={Marketing} alt="marketing" />
          </div>
          <div className="right">
            <h1>Raqamli marketing</h1>
            <p>
              Biznes veb-sayt paketlarimiz yordamida biznes salohiyatingizni
              maksimal darajada oshirish uchun sizga raqamli marketingda yordam
              beramiz. Turli platformalardan trafikni ko'paytirish orqali biz
              biznesingiz o'sishini rag'batlantirish uchun ko'proq daromad
              olishga yordam beramiz.
            </p>
          </div>
        </div>
      </section>
      <section className="other">
        <div className="container flex3">
          <div className="left">
            <h1>Qidiruv tizimini optimallashtirish</h1>
            <p>
              Qidiruv tizimini optimallashtirish bo'yicha bizning tajribamiz
              veb-saytingizga trafikni nafaqat pulli marketing orqali, balki
              organik ravishda olib borishga yordam beradi. Ushbu yondashuv uzoq
              muddatda biznes veb-saytingizga ko'proq tashrif buyuruvchilarni
              bepul olib keladi.
            </p>
          </div>
          <div className="right">
            <img src={Seo} alt="seo" />
          </div>
        </div>
      </section>
      <section className="card">
        <div className="container">
          <h1>Biznes imtiyozlari</h1>
          <div className="cards">
            <div className="cards-description">
              <AiOutlineGlobal />
              <h3>Global kirish</h3>
              <p>
                Veb-sayt sizning biznesingizga global auditoriyaga kirishga,
                geografik to'siqlarni yo'q qilishga va potentsial mijozlar
                bazasini kengaytirishga imkon beradi. Biznesingizni
                rivojlantiring va katta orzu qiling.
              </p>
            </div>
            <div className="cards-description">
              <MdManageAccounts />

              <h3>Professionallik</h3>
              <p>
                Yaxshi ishlab chiqilgan veb-sayt biznesingizning ishonchliligini
                oshiradi. U virtual do'kon sifatida xizmat qiladi, mahsulot yoki
                xizmatlarni namoyish etadi va professionallikni namoyish etadi.
              </p>
            </div>
            <div className="cards-description">
              <CiHeart />

              <h3>24/7 foydalanish imkoniyati</h3>
              <p>
                Jismoniy do'kondan farqli o'laroq, sizning veb-saytingiz 24/7
                kun davomida ochiq bo'lib, mijozlarga biznesingiz haqida
                ma'lumot olish va istalgan vaqtda so'rov yuborish imkoniyatini
                beradi.
              </p>
            </div>
            <div className="cards-description">
              <RiTeamFill />
              <h3>Mijozlarni jalb qilish</h3>
              <p>
                Aloqa shakllari, jonli chat va fikr-mulohaza shakllari kabi
                xususiyatlar orqali veb-sayt mijozlaringiz bilan
                to'g'ridan-to'g'ri muloqotni osonlashtiradi, hamkorlikni
                kuchaytiradi va munosabatlarni o'rnatadi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="heading">
        <div className="container">
          <h1>
            Professional veb-saytingizni oling Biznesingizni professional
            veb-sayt bilan yaxshilang va o'z potentsiallaringizni oching
          </h1>
          <p>
            Biznesingizni professional veb-sayt bilan yaxshilang va o'z
            potentsiallaringizni oching
          </p>
        </div>
      </section>

      {showBackToTop && (
        <div className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </main>
  );
};

export default Hero;
