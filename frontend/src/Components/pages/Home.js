import  React, { useState } from 'react';
import Footer from "../Footer";
import GoodReads from 'react-goodreads';
import "../../App.css";
import Main from "../Main";
import { Button } from "../Button";
import { useTranslation } from "react-i18next";
import bookfest from "../Images/bookfest.jpg";
import bestseller from "../Images/best.png";
import top3 from "../Images/TOP.jpg";
import Books from './Books';
import * as fs from 'fs';
import Papa from "papaparse";
const allowedExtensions = ["csv"];

function Home() {
 
  const data_books = [];
  const { t } = useTranslation();

  return (
    <>
      <Main />
      <div className="event ">
        <h1>{t("join_festival")}</h1>
        <img className="img1 mtop40" src={bookfest} alt="bookfest" />
      </div>
      <div className="buton-event mtop40">
        <Button buttonStyle="btn--outline_red" url="/outdoor">
          {" "}
          {t("vezi_evenimentul")}
        </Button>
      </div>
      <div className="top_box">
        <h1>{t("top_alegeri")}</h1>
        <img className="img3 mtop40 mbot40" src={top3} alt="TOP" />
        <br></br>

        <div className="buton-event">
          {" "}
          <Button buttonStyle="btn--outline_red" url="/profil">
            {" "}
            {t("top_alegeri")}
          </Button>
        </div>
      </div>
      <div className="bestseller_box">
        <img className="img2 mtop40 mbot40" src={bestseller} alt="bestseller" />
        <br></br>

        <div className="buton-event">
          {" "}
          <Button buttonStyle="btn--outline_red" url="/bestsellers">
            {" "}
            {t("descopera_bestseller")}
          </Button>
        </div>
      </div>
      <div className="allbooks_box">
         {/* <img className="img2 mtop40 mbot40" src={bestseller} alt="bestseller" /> 
        <br></br> */}
        <Books />
        {/* <header className="App-header">
       
        <
        </header> */}
        
        <div className="buton-event mtop40" >
          {" "}
          <Button buttonStyle="btn--outline_red" url="/books">
            {" "}
            {t("descopera_toate_cartile")}
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
