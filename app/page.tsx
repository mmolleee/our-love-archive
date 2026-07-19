"use client";

import { useState } from "react";

const memories = [
  { date: "2023. 06. 17", title: "우리의 첫 만남", text: "어색하게 웃던 그날, 이상하게 오래 기억에 남았어.", place: "성수의 작은 카페", image: "https://images.unsplash.com/photo-1518057111178-44a106bad636?auto=format&fit=crop&w=900&q=85" },
  { date: "2023. 08. 05", title: "첫 번째 여름", text: "뜨거운 햇살보다 네가 더 눈부셨던 날.", place: "양평, 강가에서", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85" },
  { date: "2024. 02. 14", title: "우리의 첫 발렌타인", text: "서툴지만 진심을 담아 준비했던 작은 선물.", place: "집 앞 골목길", image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=900&q=85" },
];

export default function Home() {
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("오늘도 네 편이야.");
  const messages = ["오늘도 네 편이야.", "네가 있어서 참 다행이야.", "우리의 다음 장면도 기대돼."];

  return (
    <main>
      <nav className="nav"><span className="mark">♡</span><span>OURS / ARCHIVE</span><a href="#timeline">기록 보기 ↓</a></nav>
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow">A little archive of us · 2023 — now</p><h1>우리가 함께 만든<br /><em>작은 우주</em></h1><p className="intro">평범한 하루들이 모여 특별한 이야기가 되었어.<br />이곳은 우리가 사랑한 순간들을 모아두는 작은 기록관이야.</p><a className="button" href="#timeline">우리의 시간 펼쳐보기 <span>↗</span></a></div>
        <div className="hero-art"><div className="sun" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-word">you & me<br /><small>always, somehow</small></div><span className="tiny t1">✦</span><span className="tiny t2">✿</span></div>
      </section>
      <section className="stats"><div><strong>1,129</strong><span>함께한 날</span></div><div><strong>∞</strong><span>서로의 편</span></div><div><strong>01</strong><span>우리의 이야기</span></div></section>
      <section id="timeline" className="section"><div className="section-head"><p className="eyebrow">Chapter one · memories</p><h2>우리의 시간은<br /><em>이렇게 시작됐어.</em></h2><p className="side-note">날짜를 따라 천천히 걸어보자.<br />우리에게는 아직 담아둘 장면이 많으니까.</p></div>
        <div className="timeline">{memories.map((item, i) => <article className={`memory ${i % 2 ? "reverse" : ""}`} key={item.date}><div className="photo-wrap"><img src={item.image} alt={item.title} /><span className="photo-no">0{i + 1}</span></div><div className="memory-copy"><p className="date">{item.date}</p><h3>{item.title}</h3><p>{item.text}</p><span className="place">⌖ {item.place}</span></div></article>)}</div>
      </section>
      <section className="letter"><div className="letter-top"><span>FROM, YOUR PERSON</span><span>FOR, MY FAVORITE</span></div><div className="letter-body"><p className="eyebrow">A note for you</p><h2>사랑한다는 말보다<br /><em>더 좋은 말이 있을까?</em></h2><p>너와 함께라서 아무렇지 않은 하루도 특별해져. 앞으로도 거창한 약속보다는 오늘처럼 맛있는 걸 먹고, 많이 웃고, 서로의 이야기를 들어주고 싶어.</p><button className="text-button" onClick={() => setOpen(!open)}>{open ? "편지 닫기 ↑" : "끝까지 읽기 ↓"}</button>{open && <div className="hidden-note">우리, 앞으로도 지금처럼 천천히 오래 사랑하자.<br />내가 많이 아끼고, 많이 좋아해. ♡</div>}</div></section>
      <section className="today"><p className="eyebrow">Today&apos;s little message</p><h2>{message}</h2><button className={`heart ${liked ? "active" : ""}`} onClick={() => { setLiked(!liked); setMessage(messages[(messages.indexOf(message) + 1) % messages.length]); }}>{liked ? "♥" : "♡"}</button><p className="hint">마음을 눌러봐</p></section>
      <footer><span>OURS / ARCHIVE</span><span>made with all my heart · 2026</span><span>♡</span></footer>
    </main>
  );
}
