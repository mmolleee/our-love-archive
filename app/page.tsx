"use client";

import { useState } from "react";

const memories = [
  {
    date: "2026. 03. 24",
    title: "우리의 첫 만남",
    text: "어색하게 웃던 그날, 이상하게 오래 기억에 남았어.",
    place: "압구정 사브 서울",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl34NbXNEpIQ3CZpv8z7g3PKL8W9uZngUg9v_a5gX3oj85ldp-mV2KhqEDytaFMyMfJkO_T6RlGpXaqU_wdgkfoct3LmDlj26VeBvE49JXyQpZzTbUbv-BrZ3tPrrOLRUtHePML=s680-w680-h510-rw",
  },
  {
    date: "2026. 03. 26",
    title: "우리의 두 번째 만남",
    text: "어느 날보다 가장 떨렸던 날.",
    place: "한남동, 뱅샤에서",
    image:
      "https://ugc-images.catchtable.co.kr/shop/manager/images/3d01888fe9f541d2b462930d94877bc9",
  },
];

export default function Home() {
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("오늘도 네 편이야.");

  const startDate = new Date("2026-03-24T00:00:00");

  const daysTogether =
    Math.floor(
      (Date.now() - startDate.getTime()) / (1000 * 60 * 60 * 24),
    ) + 1;

  const messages = [
    "오늘도 네 편이야.",
    "네가 있어서 참 다행이야.",
    "우리의 다음 장면도 기대돼.",
  ];

  const changeMessage = () => {
    const currentIndex = messages.indexOf(message);
    const nextIndex = (currentIndex + 1) % messages.length;

    setLiked(!liked);
    setMessage(messages[nextIndex]);
  };

  return (
    <main>
      <nav className="nav">
        <span className="mark">♡</span>
        <span>OURS / ARCHIVE</span>
        <a href="#timeline">기록 보기 ↓</a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">A little archive of us · 2026 — now</p>

          <h1>
            우리가 함께 만든
            <br />
            <em>작은 우주</em>
          </h1>

          <p className="intro">
            평범한 하루들이 모여 특별한 이야기가 되었어.
            <br />
            이곳은 우리가 사랑한 순간들을 모아두는 작은 기록관이야.
          </p>

          <a className="button" href="#timeline">
            우리의 시간 펼쳐보기 <span>↗</span>
          </a>
        </div>

        <div className="hero-art">
          <div className="sun" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="orbit-word">
            you & me
            <br />
            <small>always, somehow</small>
          </div>

          <span className="tiny t1">✦</span>
          <span className="tiny t2">✿</span>
        </div>
      </section>

      <section className="stats">
        <div>
          <strong>{daysTogether.toLocaleString()}</strong>
          <span>함께한 날</span>
        </div>

        <div>
          <strong>∞</strong>
          <span>서로의 편</span>
        </div>

        <div>
          <strong>{memories.length.toString().padStart(2, "0")}</strong>
          <span>우리의 이야기</span>
        </div>
      </section>

      <section id="timeline" className="section">
        <div className="section-head">
          <p className="eyebrow">Chapter one · memories</p>

          <h2>
            우리의 시간은
            <br />
            <em>이렇게 시작됐어.</em>
          </h2>

          <p className="side-note">
            날짜를 따라 천천히 걸어보자.
            <br />
            우리에게는 아직 담아둘 장면이 많으니까.
          </p>
        </div>

        <div className="timeline">
          {memories.map((item, index) => (
            <article
              className={`memory ${index % 2 ? "reverse" : ""}`}
              key={item.date}
            >
              <div className="photo-wrap">
                <img src={item.image} alt={item.title} />
                <span className="photo-no">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="memory-copy">
                <p className="date">{item.date}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="place">⌖ {item.place}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="letter">
        <div className="letter-top">
          <span>FROM, YOUR PERSON</span>
          <span>FOR, MY FAVORITE</span>
        </div>

        <div className="letter-body">
          <p className="eyebrow">A note for you</p>

          <h2>
            사랑한다는 말보다
            <br />
            <em>더 좋은 말이 있을까?</em>
          </h2>

          <p>
            너와 함께라서 아무렇지 않은 하루도 특별해져. 앞으로도 거창한
            약속보다는 오늘처럼 맛있는 걸 먹고, 많이 웃고, 서로의 이야기를
            들어주고 싶어.
          </p>

          <button
            className="text-button"
            onClick={() => setOpen(!open)}
          >
            {open ? "편지 닫기 ↑" : "끝까지 읽기 ↓"}
          </button>

          {open && (
            <div className="hidden-note">
              우리, 앞으로도 지금처럼 천천히 오래 사랑하자.
              <br />
              내가 많이 아끼고, 많이 사랑해. ♡
            </div>
          )}
        </div>
      </section>

      <section className="today">
        <p className="eyebrow">Today&apos;s little message</p>

        <h2>{message}</h2>

        <button
          className={`heart ${liked ? "active" : ""}`}
          onClick={changeMessage}
          aria-label="오늘의 메시지 바꾸기"
        >
          {liked ? "♥" : "♡"}
        </button>

        <p className="hint">마음을 눌러봐</p>
      </section>

      <footer>
        <span>OURS / ARCHIVE</span>
        <span>made with all my heart · 2026</span>
        <span>♡</span>
      </footer>
    </main>
  );
}
