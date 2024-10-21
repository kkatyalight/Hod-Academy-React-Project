
import "../../style.css";
import "../../text-style.css";
import "./AllNews.css";

import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import { newsArticles } from "../../data";
import NewsTemplate from "./NewsTemplate";
export default function AllNews() {
  return (
    <>
      <Header theme="dark" />
      <main className="grid side-margins">
        <p className="text-36-bold all-news-header">Новости ХОД Future Academy</p>
        <div className="all-news-wrapper">
          {newsArticles.map((info) => (
            <NewsTemplate key={info.header} {...info} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
