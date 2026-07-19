"use client";

import { useState } from "react";

const memories = [
  {
    date: "2026. 03. 24",
    title: "우리의 첫 만남",
    text: "어색하게 웃던 그날, 이상하게 오래 기억에 남았어.",
    place: "압구정의 와인바",
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
   {
    date: "2026. 03. 27",
    title: "우리의 세 번째 만남",
    text: "밤안개가 도시를 감싸던, 우리만의 조용한 밤.",
    place: "일산, 밤 안개 속 차 안",
    image:
      "/생귤탱귤.jpg",
  },
   {
    date: "2026. 03. 30",
    title: "우리의 네 번째 만남",
    text: "점심의 설렘이 새벽까지 이어졌던 하루.",
    place: "서울, 하루 종일 함께",
    image:
      "/백장미.jpg",
  },
];

export default function Home() {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
  const [birthdayOpen, setBirthdayOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("오늘도 네 편이야.");

  const correctPassword = "0324";

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

  const unlockPage = () => {
    if (password === correctPassword) {
      setIsUnlocked(true);
    } else {
      alert("비밀번호가 맞지 않아.");
    }
  };

  const changeMessage = () => {
    const currentIndex = messages.indexOf(message);
    const nextIndex = (currentIndex + 1) % messages.length;

    setLiked(!liked);
    setMessage(messages[nextIndex]);
  };

  if (!isUnlocked) {
    return (
      <main className="lock-screen">
        <div className="lock-card">
          <div className="lock-heart">♡</div>

          <p className="eyebrow">OURS / PRIVATE ARCHIVE</p>

          <h1>
            우리의 작은 우주
            <br />
            <em>비밀번호를 입력해줘</em>
          </h1>

          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                unlockPage();
              }
            }}
          />

          <button className="button" onClick={unlockPage}>
            들어가기 <span>↗</span>
          </button>

          <p className="lock-hint">우리만 아는 숫자를 입력해줘</p>
        </div>
      </main>
    );
  }

  if (!showArchive) {
    return (
      <main className="letter-intro-screen">
        <div className="letter-intro-card">
          <p className="eyebrow">A special letter for you</p>

          <div className="intro-envelope">
            <span className="intro-envelope-heart">♡</span>
          </div>

          <h1>
            생일 편지
            <br />
            <em>열어볼래?</em>
          </h1>

          <p>
            오늘은 너를 위해
            <br />
            특별히 준비한 편지가 있어.
          </p>

          <button
            className="button"
            onClick={() => setShowArchive(true)}
          >
            편지 읽기 <span>↗</span>
          </button>
        </div>
      </main>
    );
  }

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
          <strong>{String(memories.length).padStart(2, "0")}</strong>
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
          <span>FOR, MY FAVOURITE</span>
        </div>

        <div className="letter-body">
          <p className="eyebrow">A note for you</p>

          <h2>
            사랑한다는 말보다
            <br />
            <em>더 좋은 말이 있을까?</em>
          </h2>

          <p>
            너와 함께라서 아무렇지 않은 하루도 특별해져. 
            같은 마음으로, 같은 미래를 바라보고 있어서 너무나 행복해. 
            매일 매일 너와 함께 하루를 쌓아가고 싶어. 
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

      <section className="birthday-letter" id="birthday">
        <div className="birthday-inner">
          <p className="eyebrow">A birthday letter · just for you</p>

          <h2>
            오늘은 네가 태어난
            <br />
            <em>가장 특별한 날</em>
          </h2>

          <p className="birthday-subtitle">
            봉투를 눌러서 내 마음을 열어봐.
          </p>

          <button
            className={`envelope ${birthdayOpen ? "opened" : ""}`}
            onClick={() => setBirthdayOpen(!birthdayOpen)}
          >
            <span className="envelope-flap" />
            <span className="envelope-heart">♡</span>
            <span className="envelope-label">
              FOR MY FAVOURITE PERSON
            </span>
          </button>

          {birthdayOpen && (
            <div className="birthday-message">
<p>자기야, 생일 정말 축하해.</p>

<p>
  내가 자기의 오늘을 직접 곁에서 축하해 주지 못하는 게 많이 아쉽지만,
  멀리 있는 만큼 더 많이 생각하고 더 진심으로 축하하고 있어.
</p>

<p>
  자기를 만나고 나서 평범했던 하루들이 더 따뜻해졌고,
  누군가의 행복을 이렇게 진심으로 바라게 된 것도 처음인 것 같아.
</p>

<p>
  오늘 하루만큼은 자기가 얼마나 소중하고 사랑받는 사람인지
  마음껏 느꼈으면 좋겠어.
  그리고 앞으로 맞이할 생일에는 지금보다 더 가까운 곳에서,
  가장 먼저 축하해 주는 사람이 되고 싶어.
</p>

<p>내 삶에 와줘서 정말 고마워.</p>
              <strong>많이 사랑해. ♡</strong>
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
