// MBTI Love Compatibility Test - Data

const QUESTIONS = [
    { textKey: "q1", options: [
        { textKey: "q1a", dim: "EI", val: "E" },
        { textKey: "q1b", dim: "EI", val: "I" }
    ]},
    { textKey: "q2", options: [
        { textKey: "q2a", dim: "JP", val: "P" },
        { textKey: "q2b", dim: "JP", val: "J" }
    ]},
    { textKey: "q3", options: [
        { textKey: "q3a", dim: "TF", val: "T" },
        { textKey: "q3b", dim: "TF", val: "F" }
    ]},
    { textKey: "q4", options: [
        { textKey: "q4a", dim: "SN", val: "N" },
        { textKey: "q4b", dim: "SN", val: "S" }
    ]},
    { textKey: "q5", options: [
        { textKey: "q5a", dim: "SN", val: "N" },
        { textKey: "q5b", dim: "SN", val: "S" }
    ]},
    { textKey: "q6", options: [
        { textKey: "q6a", dim: "EI", val: "E" },
        { textKey: "q6b", dim: "EI", val: "I" }
    ]},
    { textKey: "q7", options: [
        { textKey: "q7a", dim: "TF", val: "F" },
        { textKey: "q7b", dim: "TF", val: "T" }
    ]},
    { textKey: "q8", options: [
        { textKey: "q8a", dim: "JP", val: "J" },
        { textKey: "q8b", dim: "JP", val: "P" }
    ]},
    { textKey: "q9", options: [
        { textKey: "q9a", dim: "TF", val: "T" },
        { textKey: "q9b", dim: "TF", val: "F" }
    ]},
    { textKey: "q10", options: [
        { textKey: "q10a", dim: "SN", val: "N" },
        { textKey: "q10b", dim: "SN", val: "S" }
    ]},
    { textKey: "q11", options: [
        { textKey: "q11a", dim: "TF", val: "T" },
        { textKey: "q11b", dim: "TF", val: "F" }
    ]},
    { textKey: "q12", options: [
        { textKey: "q12a", dim: "JP", val: "J" },
        { textKey: "q12b", dim: "JP", val: "P" }
    ]}
];

const STYLES = {
    ENFP: { titleKey: "style.ENFP.title", emoji: "🔥", color: "#e74c3c", descKey: "style.ENFP.desc", keywordsKey: "style.ENFP.keywords", idealTypeKey: "style.ENFP.idealType", tipKey: "style.ENFP.tip" },
    INFJ: { titleKey: "style.INFJ.title", emoji: "🌙", color: "#9b59b6", descKey: "style.INFJ.desc", keywordsKey: "style.INFJ.keywords", idealTypeKey: "style.INFJ.idealType", tipKey: "style.INFJ.tip" },
    ENFJ: { titleKey: "style.ENFJ.title", emoji: "☀️", color: "#f39c12", descKey: "style.ENFJ.desc", keywordsKey: "style.ENFJ.keywords", idealTypeKey: "style.ENFJ.idealType", tipKey: "style.ENFJ.tip" },
    INFP: { titleKey: "style.INFP.title", emoji: "🌸", color: "#e91e63", descKey: "style.INFP.desc", keywordsKey: "style.INFP.keywords", idealTypeKey: "style.INFP.idealType", tipKey: "style.INFP.tip" },
    ENTJ: { titleKey: "style.ENTJ.title", emoji: "👑", color: "#2c3e50", descKey: "style.ENTJ.desc", keywordsKey: "style.ENTJ.keywords", idealTypeKey: "style.ENTJ.idealType", tipKey: "style.ENTJ.tip" },
    INTJ: { titleKey: "style.INTJ.title", emoji: "🧠", color: "#34495e", descKey: "style.INTJ.desc", keywordsKey: "style.INTJ.keywords", idealTypeKey: "style.INTJ.idealType", tipKey: "style.INTJ.tip" },
    ENTP: { titleKey: "style.ENTP.title", emoji: "💡", color: "#e67e22", descKey: "style.ENTP.desc", keywordsKey: "style.ENTP.keywords", idealTypeKey: "style.ENTP.idealType", tipKey: "style.ENTP.tip" },
    INTP: { titleKey: "style.INTP.title", emoji: "🔬", color: "#3498db", descKey: "style.INTP.desc", keywordsKey: "style.INTP.keywords", idealTypeKey: "style.INTP.idealType", tipKey: "style.INTP.tip" },
    ESFP: { titleKey: "style.ESFP.title", emoji: "🎉", color: "#1abc9c", descKey: "style.ESFP.desc", keywordsKey: "style.ESFP.keywords", idealTypeKey: "style.ESFP.idealType", tipKey: "style.ESFP.tip" },
    ISFP: { titleKey: "style.ISFP.title", emoji: "🎨", color: "#8e44ad", descKey: "style.ISFP.desc", keywordsKey: "style.ISFP.keywords", idealTypeKey: "style.ISFP.idealType", tipKey: "style.ISFP.tip" },
    ESFJ: { titleKey: "style.ESFJ.title", emoji: "🤗", color: "#27ae60", descKey: "style.ESFJ.desc", keywordsKey: "style.ESFJ.keywords", idealTypeKey: "style.ESFJ.idealType", tipKey: "style.ESFJ.tip" },
    ISFJ: { titleKey: "style.ISFJ.title", emoji: "🛡️", color: "#16a085", descKey: "style.ISFJ.desc", keywordsKey: "style.ISFJ.keywords", idealTypeKey: "style.ISFJ.idealType", tipKey: "style.ISFJ.tip" },
    ESTP: { titleKey: "style.ESTP.title", emoji: "🏄", color: "#d35400", descKey: "style.ESTP.desc", keywordsKey: "style.ESTP.keywords", idealTypeKey: "style.ESTP.idealType", tipKey: "style.ESTP.tip" },
    ISTP: { titleKey: "style.ISTP.title", emoji: "🔧", color: "#7f8c8d", descKey: "style.ISTP.desc", keywordsKey: "style.ISTP.keywords", idealTypeKey: "style.ISTP.idealType", tipKey: "style.ISTP.tip" },
    ESTJ: { titleKey: "style.ESTJ.title", emoji: "📊", color: "#2980b9", descKey: "style.ESTJ.desc", keywordsKey: "style.ESTJ.keywords", idealTypeKey: "style.ESTJ.idealType", tipKey: "style.ESTJ.tip" },
    ISTJ: { titleKey: "style.ISTJ.title", emoji: "📚", color: "#1a5276", descKey: "style.ISTJ.desc", keywordsKey: "style.ISTJ.keywords", idealTypeKey: "style.ISTJ.idealType", tipKey: "style.ISTJ.tip" }
};

// Helper to get localized style data
function getStyle(type) {
    const s = STYLES[type];
    return {
        title: i18n.t(s.titleKey),
        emoji: s.emoji,
        color: s.color,
        desc: i18n.t(s.descKey),
        keywords: i18n.t(s.keywordsKey),
        idealType: i18n.t(s.idealTypeKey),
        tip: i18n.t(s.tipKey)
    };
}

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
    if (t1[0] !== t2[0]) score += 12; else score += 8;
    if (t1[1] !== t2[1]) score += 8; else score += (t1[1] === 'N' ? 12 : 6);
    if (t1[2] !== t2[2]) score += 14; else score += 8;
    if (t1[3] !== t2[3]) score += 10; else score += 6;

    return Math.min(score, 94);
}

function getCompatLevel(score) {
    if (score >= 95) return { labelKey: "compat.soulmate", emoji: "💖", cls: "soulmate" };
    if (score >= 80) return { labelKey: "compat.perfect", emoji: "💕", cls: "perfect" };
    if (score >= 65) return { labelKey: "compat.great", emoji: "💛", cls: "great" };
    if (score >= 50) return { labelKey: "compat.good", emoji: "💚", cls: "good" };
    if (score >= 30) return { labelKey: "compat.effort", emoji: "💙", cls: "effort" };
    return { labelKey: "compat.difficult", emoji: "💜", cls: "difficult" };
}

function getCompatDesc(t1, t2, score) {
    if (score >= 90) return i18n.t("compat.desc90");
    if (score >= 80) return i18n.t("compat.desc80");
    if (score >= 65) return i18n.t("compat.desc65");
    if (score >= 50) return i18n.t("compat.desc50");
    if (score >= 30) return i18n.t("compat.desc30");
    return i18n.t("compat.desc0");
}

const MBTI_TYPES = Object.keys(STYLES);

// Premium content per type — keys reference locale files
const PREMIUM = {};
MBTI_TYPES.forEach(type => {
    PREMIUM[type] = {
        pattern: {
            earlyKey: `premium.data.${type}.patternEarly`,
            midKey: `premium.data.${type}.patternMid`,
            longKey: `premium.data.${type}.patternLong`
        },
        tipsKey: `premium.data.${type}.tips`,
        datesKey: `premium.data.${type}.dates`
    };
});
