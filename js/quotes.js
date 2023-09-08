const quotes = [
  {
    quote: "모든 것에는 아름다움이 있지만 모든 사람이 그것을 보는 것은 아니다.",
    author: "공자",
  },
  {
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    author: "괴테",
  },
  {
    quote:
      "화려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며, 자신의 행동에 쏟아붓는 사랑의 정도이다. ",
    author: "마더 테레사",
  },
  {
    quote: "에너지는 영원한 기쁨이다",
    author: "윌리엄 블레이크",
  },
  {
    quote: "실패하는 것은 곧 성공으로 한 발짝 더 나아가는 것이다.",
    author: "메리 케이 애쉬",
  },
  {
    quote: "행복은 성취의 기쁨과 창조적 노력이 주는 쾌감 속에 있다.",
    author: "프랭클린 D. 루스벨트",
  },
  {
    quote: "가장 현명한 사람은 자신만의 방향을 따른다.",
    author: "에우리피데스",
  },
  {
    quote: "그 여정이 바로 보상이다.",
    author: "스티브 잡스",
  },
  {
    quote: "혁신은 리더와 추종자를 구분합니다.",
    author: "스티브 잡스",
  },
  {
    quote: "리더십이란, 리더가 없는 상황에서도 그 영향력이 지속되도록 하는 것",
    author: "셰릴 샌드버그",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
