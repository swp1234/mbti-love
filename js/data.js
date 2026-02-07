// MBTI Love Compatibility Test - Data

const QUESTIONS = [
    { text: "처음 만난 사람과의 데이트에서 나는?", options: [
        { text: "먼저 대화를 시작하고 분위기를 이끈다 😄", dim: "EI", val: "E" },
        { text: "상대방이 먼저 말을 걸 때까지 기다린다 😊", dim: "EI", val: "I" }
    ]},
    { text: "연인과의 데이트 계획을 세울 때", options: [
        { text: "즉흥적으로 그때그때 정한다 🎲", dim: "JP", val: "P" },
        { text: "미리 계획을 세우고 준비한다 📋", dim: "JP", val: "J" }
    ]},
    { text: "연인이 힘들어할 때 나는", options: [
        { text: "논리적으로 해결책을 제시한다 🧠", dim: "TF", val: "T" },
        { text: "먼저 공감하고 감정을 위로한다 💕", dim: "TF", val: "F" }
    ]},
    { text: "이상적인 데이트는?", options: [
        { text: "함께 깊은 대화를 나누는 시간 💬", dim: "SN", val: "N" },
        { text: "함께 활동하며 즐기는 시간 🏃", dim: "SN", val: "S" }
    ]},
    { text: "연애에서 가장 중요한 것은?", options: [
        { text: "서로의 미래 비전과 가치관 공유 🔮", dim: "SN", val: "N" },
        { text: "현재 순간의 행복과 즐거움 🌈", dim: "SN", val: "S" }
    ]},
    { text: "갈등이 생겼을 때 나는", options: [
        { text: "바로 해결하려고 대화를 시도한다 🗣️", dim: "EI", val: "E" },
        { text: "혼자 생각한 후 대화한다 🤔", dim: "EI", val: "I" }
    ]},
    { text: "연인에게 사랑을 표현하는 방식은?", options: [
        { text: '말로 자주 "사랑해"라고 표현한다 💖', dim: "TF", val: "F" },
        { text: "행동으로 조용히 증명한다 🛠️", dim: "TF", val: "T" }
    ]},
    { text: "연인과의 관계에서 나는", options: [
        { text: "규칙적이고 안정적인 관계를 선호한다 🏠", dim: "JP", val: "J" },
        { text: "자유롭고 유연한 관계를 선호한다 🦋", dim: "JP", val: "P" }
    ]},
    { text: "연애할 때 나의 결정 방식은?", options: [
        { text: "논리적으로 판단하고 결정한다 📊", dim: "TF", val: "T" },
        { text: "감정과 직관을 따른다 ✨", dim: "TF", val: "F" }
    ]},
    { text: "연인과 함께하고 싶은 활동은?", options: [
        { text: "깊이 있는 주제로 대화하기 📚", dim: "SN", val: "N" },
        { text: "함께 무언가를 체험하기 🎨", dim: "SN", val: "S" }
    ]},
    { text: "연인 선택의 기준은?", options: [
        { text: "조건과 미래를 분석해서 결정한다 🔍", dim: "TF", val: "T" },
        { text: "감정과 느낌으로 결정한다 💓", dim: "TF", val: "F" }
    ]},
    { text: "데이트 스타일은?", options: [
        { text: "계획대로 움직이는 것이 편하다 📅", dim: "JP", val: "J" },
        { text: "그때그때 상황에 맞춰 움직인다 🌊", dim: "JP", val: "P" }
    ]}
];

const STYLES = {
    ENFP: { title: "열정적인 불꽃", emoji: "🔥", color: "#e74c3c", desc: "사랑에 빠지면 온 세상이 분홍빛! 연인에게 끊임없이 새로운 경험을 선물하고, 즉흥적인 데이트를 즐깁니다.", keywords: ["첫눈에 반함", "깜짝 이벤트", "자유로운 연애"], idealType: "깊이 있는 대화 + 모험을 즐기는 사람", tip: "장기 관계에서는 안정감을 주는 노력이 필요합니다." },
    INFJ: { title: "신비로운 영혼", emoji: "🌙", color: "#9b59b6", desc: "겉으로는 조용하지만 내면에는 뜨거운 열정이 숨어 있습니다. 영혼의 교감을 원하며, 연인의 감정을 직관적으로 알아챕니다.", keywords: ["깊은 교감", "이상적 사랑", "헌신적"], idealType: "진실된 대화 + 가치관을 존중하는 사람", tip: "완벽한 사랑은 없지만, 함께 성장하는 사랑은 있습니다." },
    ENFJ: { title: "따뜻한 리더", emoji: "☀️", color: "#f39c12", desc: "연인의 성장과 행복을 진심으로 바라며 언제나 응원합니다. 타고난 리더십으로 관계를 이끌어갑니다.", keywords: ["돌봄", "헌신", "공감 능력"], idealType: "진심을 알아주는 + 함께 성장하는 사람", tip: "자신의 감정도 솔직하게 표현하세요." },
    INFP: { title: "꿈꾸는 낭만주의자", emoji: "🌸", color: "#e91e63", desc: "동화 같은 사랑을 꿈꾸며, 사랑에 빠지면 온 마음을 다해 사랑합니다. 진실된 관계에서 빛을 발합니다.", keywords: ["로맨틱", "진실한 사랑", "충성"], idealType: "감수성을 이해 + 함께 꿈꾸는 사람", tip: "현실 속 작은 행복도 소중히 여기세요." },
    ENTJ: { title: "강인한 전략가", emoji: "👑", color: "#2c3e50", desc: "연애에도 목표와 계획이 있습니다. 미래를 함께 그리며 성장하기를 원합니다.", keywords: ["목표 지향", "리더십", "솔직"], idealType: "독립적 + 함께 목표를 이루는 사람", tip: "비효율적인 낭만도 때로는 필요합니다." },
    INTJ: { title: "독립적인 전략가", emoji: "🧠", color: "#34495e", desc: "한번 마음을 열면 평생 함께할 파트너로 여깁니다. 서로의 독립성을 존중하는 성숙한 관계를 원합니다.", keywords: ["깊은 신뢰", "독립적", "완벽주의"], idealType: "지적 호기심 + 독립적인 사람", tip: "감정 표현을 더 자주 하면 관계가 따뜻해집니다." },
    ENTP: { title: "창의적인 도전자", emoji: "💡", color: "#e67e22", desc: "연애를 재미있는 게임처럼 여기며, 상대방과의 지적 교류를 즐깁니다. 새로운 경험을 선호합니다.", keywords: ["지적 자극", "토론", "유머"], idealType: "지적 대화 + 유머 감각 있는 사람", tip: "연인의 감정을 상하게 하지 않도록 주의하세요." },
    INTP: { title: "논리적인 사색가", emoji: "🔬", color: "#3498db", desc: "사랑을 논리적으로 분석하며, 행동으로 증명합니다. 지적 호기심을 공유하는 파트너를 소중히 여깁니다.", keywords: ["지적 교류", "독립적", "분석적"], idealType: "독립적 + 혼자 시간을 이해해주는 사람", tip: '"사랑해"라는 말 한마디가 관계를 따뜻하게 만듭니다.' },
    ESFP: { title: "자유로운 엔터테이너", emoji: "🎉", color: "#1abc9c", desc: "연인과의 모든 순간을 축제처럼 만듭니다. 스킨십으로 애정을 표현하며, 연인을 즐겁게 하는 데 타고난 재능이 있습니다.", keywords: ["즐거움", "즉흥", "스킨십"], idealType: "함께 즐길 수 있는 + 밝은 사람", tip: "진지한 대화와 장기 계획도 필요합니다." },
    ISFP: { title: "부드러운 예술가", emoji: "🎨", color: "#8e44ad", desc: "말보다 행동으로, 논리보다 감성으로 사랑합니다. 작은 선물, 손편지로 마음을 전합니다.", keywords: ["감성적", "자유로운", "행동으로 증명"], idealType: "감성을 이해 + 강요하지 않는 사람", tip: "마음속 말을 더 자주 표현하세요." },
    ESFJ: { title: "따뜻한 돌봄이", emoji: "🤗", color: "#27ae60", desc: "연인을 가족처럼 아끼며, 기념일을 챙기고 주변과의 조화를 원합니다.", keywords: ["헌신", "안정", "돌봄"], idealType: "진심을 알아주는 + 가정적인 사람", tip: "완벽한 연인이 되려 하지 마세요." },
    ISFJ: { title: "헌신적인 수호자", emoji: "🛡️", color: "#16a085", desc: "말없이 연인을 지켜주고 작은 것까지 챙겨주는 헌신적인 사랑을 합니다.", keywords: ["조용한 사랑", "안정", "섬세"], idealType: "신뢰 + 헌신을 알아주는 사람", tip: "희생만 하지 말고, 자신의 욕구도 표현하세요." },
    ESTP: { title: "대담한 모험가", emoji: "🏄", color: "#d35400", desc: "스릴 넘치는 데이트를 즐기며, 순간의 감정에 충실합니다.", keywords: ["활동적", "즉흥", "감각적"], idealType: "모험을 함께 + 에너지 넘치는 사람", tip: "미래 계획도 함께 세워보세요." },
    ISTP: { title: "자유로운 장인", emoji: "🔧", color: "#7f8c8d", desc: "실질적인 도움으로 사랑을 증명합니다. 혼자만의 시간이 필요하며, 속박을 싫어합니다.", keywords: ["독립적", "실용적", "행동 증명"], idealType: "독립적 + 간섭하지 않는 사람", tip: "감정 표현을 조금 더 하세요." },
    ESTJ: { title: "책임감 있는 리더", emoji: "📊", color: "#2980b9", desc: "연애에도 규칙과 계획이 있습니다. 책임감 있게 연인을 대하며 안정적인 사랑을 추구합니다.", keywords: ["안정", "책임감", "계획적"], idealType: "책임감 + 가정적인 사람", tip: "즉흥적인 로맨스도 필요합니다." },
    ISTJ: { title: "신뢰할 수 있는 보호자", emoji: "📚", color: "#1a5276", desc: "약속을 반드시 지키며, 평생 함께할 파트너를 찾습니다. 전통적인 데이트를 소중히 여깁니다.", keywords: ["충성", "안정", "행동 증명"], idealType: "신뢰 + 전통적 가치관 공유하는 사람", tip: "감정 표현을 조금 더 하세요." }
};

// Compatibility calculation
function calcCompat(t1, t2) {
    // Known high-compatibility pairs
    const SPECIAL = {
        'ENFP-INFJ': 95, 'INFJ-ENFP': 95, 'INFJ-ENTP': 90, 'ENTP-INFJ': 90,
        'ENFJ-INFP': 92, 'INFP-ENFJ': 92, 'ENTJ-INTP': 85, 'INTP-ENTJ': 85,
        'ENFP-INTJ': 88, 'INTJ-ENFP': 88, 'INFP-ENTJ': 88, 'ENTJ-INFP': 88,
        'ENFJ-ISFP': 88, 'ISFP-ENFJ': 88, 'ESFP-ISTJ': 78, 'ISTJ-ESFP': 78,
        'ESTP-ISFJ': 78, 'ISFJ-ESTP': 78, 'ESFJ-ISTP': 75, 'ISTP-ESFJ': 75
    };
    const key = t1 + '-' + t2;
    if (SPECIAL[key]) return SPECIAL[key];
    if (t1 === t2) return 70;

    let score = 40;
    // E/I: different = complement bonus
    if (t1[0] !== t2[0]) score += 12; else score += 8;
    // S/N: same intuition types bond
    if (t1[1] !== t2[1]) score += 8; else score += (t1[1] === 'N' ? 12 : 6);
    // T/F: different = balance
    if (t1[2] !== t2[2]) score += 14; else score += 8;
    // J/P: different = complement
    if (t1[3] !== t2[3]) score += 10; else score += 6;

    return Math.min(score, 94);
}

function getCompatLevel(score) {
    if (score >= 95) return { label: "천생연분", emoji: "💖", cls: "soulmate" };
    if (score >= 80) return { label: "최고의 파트너", emoji: "💕", cls: "perfect" };
    if (score >= 65) return { label: "좋은 궁합", emoji: "💛", cls: "great" };
    if (score >= 50) return { label: "보통 궁합", emoji: "💚", cls: "good" };
    if (score >= 30) return { label: "노력 필요", emoji: "💙", cls: "effort" };
    return { label: "어려운 관계", emoji: "💜", cls: "difficult" };
}

function getCompatDesc(t1, t2, score) {
    if (score >= 90) return "서로의 부족한 부분을 완벽하게 채워주는 이상적인 조합입니다.";
    if (score >= 80) return "깊은 이해와 존중으로 함께 성장하는 관계입니다.";
    if (score >= 65) return "서로 다른 매력으로 흥미로운 관계를 만들 수 있습니다.";
    if (score >= 50) return "노력하면 좋은 관계를 만들 수 있지만 이해가 필요합니다.";
    if (score >= 30) return "가치관과 소통 방식의 차이를 극복해야 합니다.";
    return "정반대 성향이라 많은 노력과 이해가 필요한 관계입니다.";
}

const MBTI_TYPES = Object.keys(STYLES);

// Premium content per type
const PREMIUM = {
    ENFP: { pattern: { early: "열정적 접근, 이벤트 많음", mid: "안정 찾지만 권태 느낌", long: "미래 계획, 자유 필요" }, tips: ["장기 비전 공유", "독립성 유지", "감정 표현 조절", "깊은 대화 중요", "약속 지키기"], dates: ["즉흥 여행", "새 레스토랑 탐방", "페스티벌/공연", "액티비티", "조용한 카페"] },
    INFJ: { pattern: { early: "신중 접근, 깊은 대화", mid: "완전히 마음 열고 헌신", long: "평생 파트너" }, tips: ["현실적 기대", "감정 표현 용기", "경계 설정", "즉흥성 허용", "자기 돌봄"], dates: ["카페 깊은 대화", "미술관", "자연 산책", "영화+토론", "함께 독서"] },
    ENFJ: { pattern: { early: "적극적 관심, 배려", mid: "헌신적 돌봄", long: "가정 꿈꿈" }, tips: ["자기 감정 표현", "완벽 강박 내려놓기", "상대 자율성 존중", "갈등 회피 금지", "자기 시간 갖기"], dates: ["함께 봉사", "맛집 탐방", "문화 행사", "깊은 대화", "커플 클래스"] },
    INFP: { pattern: { early: "수줍은 접근, 마음속 설렘", mid: "온 마음 다해 사랑", long: "영혼의 짝" }, tips: ["현실 수용", "감정 표현 연습", "이상형 고집 내려놓기", "작은 행복 감사", "상대방 있는 그대로 수용"], dates: ["공원 산책", "전시회", "편지 교환", "영화 관람", "카페 글쓰기"] },
    ENTJ: { pattern: { early: "목표 설정, 적극 접근", mid: "함께 성장 계획", long: "팀으로서 관계" }, tips: ["감정에도 투자", "비효율 허용", "상대 페이스 존중", "칭찬 자주", "여유 갖기"], dates: ["목표 세미나", "와인 디너", "등산", "전략 게임", "여행 계획"] },
    INTJ: { pattern: { early: "관찰 후 신중 접근", mid: "신뢰 구축 후 마음 열기", long: "평생 파트너" }, tips: ["감정 표현 연습", "즉흥 순간 즐기기", "완벽 기대 내려놓기", "작은 애정 표현", "상대 감정 공감"], dates: ["박물관", "지적 토론 카페", "보드게임", "다큐 관람", "별 관측"] },
    ENTP: { pattern: { early: "재미있게 접근, 지적 매력", mid: "새로움 추구", long: "파트너와 모험" }, tips: ["감정도 중요", "논쟁 조절", "약속 지키기", "안정감 제공", "깊은 대화 연습"], dates: ["새로운 맛집", "즉흥 여행", "토론 카페", "탈출 게임", "페스티벌"] },
    INTP: { pattern: { early: "천천히 분석적 접근", mid: "지적 유대감", long: "편안한 동반자" }, tips: ["사랑해 말하기", "감정 인정", "함께 시간 늘리기", "기념일 챙기기", "스킨십 연습"], dates: ["과학관", "코딩 함께", "보드게임", "다큐 토론", "천체 관측"] },
    ESFP: { pattern: { early: "적극적, 재미 중시", mid: "매일 축제", long: "현재 즐김" }, tips: ["미래 계획 세우기", "진지한 대화", "약속 시간 지키기", "저축 함께", "갈등 회피 금지"], dates: ["파티", "놀이공원", "콘서트", "맛집 투어", "해변"] },
    ISFP: { pattern: { early: "조용한 관심, 행동 표현", mid: "깊은 애정", long: "편안한 동반자" }, tips: ["말로 표현하기", "의견 말하기", "갈등 회피 금지", "미래 계획 함께", "자기 주장 연습"], dates: ["미술관", "자연 산책", "카페", "공방 체험", "사진 촬영"] },
    ESFJ: { pattern: { early: "적극 관심, 챙김", mid: "가족처럼 돌봄", long: "안정적 가정" }, tips: ["자기 감정 우선", "완벽 강박 내려놓기", "간섭 줄이기", "상대 방식 존중", "자기 시간 갖기"], dates: ["가족 모임", "기념일 디너", "쇼핑", "요리 함께", "홈파티"] },
    ISFJ: { pattern: { early: "조용한 관심, 섬세 배려", mid: "헌신적 지지", long: "평생 수호자" }, tips: ["자기 욕구 표현", "변화 수용", "과도한 희생 주의", "새로운 시도", "감정 표현 연습"], dates: ["집 데이트", "조용한 레스토랑", "공원 산책", "영화 관람", "함께 요리"] },
    ESTP: { pattern: { early: "대담한 접근, 스릴", mid: "모험 연속", long: "현재 중시" }, tips: ["감정 교류 시간", "미래 대화", "약속 지키기", "진지함 보여주기", "상대 페이스 배려"], dates: ["번지점프", "스포츠", "드라이브", "새 레스토랑", "여행"] },
    ISTP: { pattern: { early: "무심한 듯 관심", mid: "실질적 도움", long: "편안한 동반자" }, tips: ["감정 표현 연습", "함께 시간 늘리기", "기념일 챙기기", "대화 시간 갖기", "애정 표현 늘리기"], dates: ["DIY 프로젝트", "드라이브", "낚시", "공구 쇼핑", "캠핑"] },
    ESTJ: { pattern: { early: "계획적 접근", mid: "안정 추구", long: "가정 꿈꿈" }, tips: ["유연성 키우기", "감정 공감 연습", "즉흥 허용", "칭찬 자주", "상대 방식 존중"], dates: ["고급 레스토랑", "골프", "문화 행사", "계획된 여행", "커플 운동"] },
    ISTJ: { pattern: { early: "신중 접근, 관찰", mid: "신뢰 쌓기", long: "평생 파트너" }, tips: ["감정 말하기", "변화 수용", "새로운 시도", "로맨틱 연습", "유연한 태도"], dates: ["조용한 레스토랑", "박물관", "등산", "집 데이트", "도서관 데이트"] }
};
