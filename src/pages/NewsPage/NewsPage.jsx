import { useParams } from "react-router-dom";

import "../../style.css";
import "../../text-style.css";
import './NewsPage.css';

import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import {newsArticles} from '../../data.js';

export default function News() {
    const params = useParams();
    var newsIndex = newsArticles.findIndex(news => news.newsID == params.newsId);
    var curNews=newsArticles[newsIndex];
  return (
    <>
      <Header theme="dark" />
      <main className="side-margins grid news-page">
        {/* <div className="navigation">
          <a href="">Главная</a>
          <img src="img/arrow.svg" alt="" />
          <a href="">Новости</a>
        </div> */}
        <p className="text-36-bold">{curNews.header}</p>
        <p className="text-12-reg">{curNews.date}</p>
        <p className="text-18-reg text-lineh-26 ">{curNews.longText1}</p>
        <img src={curNews.imgSrc} alt={curNews.imgAlt} />
        <p className="text-18-reg text-lineh-26">{curNews.longText2}</p>
      </main>
      <Footer />
    </>
  );
}
