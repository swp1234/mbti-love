(function () {
  'use strict';

  const SUPPORTED = ['ko', 'en', 'zh', 'hi', 'ru', 'ja', 'es', 'pt', 'id', 'tr', 'de', 'fr'];
  const CARD_MODES = ['playful', 'playful', 'playful', 'playful', 'connect', 'connect', 'connect', 'connect', 'repair', 'repair', 'repair', 'repair'];
  const FAVORITES_KEY = 'mbtiLoveDeckFavorites';

  const COPY = {
    ko: {
      skip: '본문으로 건너뛰기', language: '언어', eyebrow: '테스트 다음에, 실제 대화 한 장', title: 'MBTI 커플 대화 카드',
      subtitle: '정답도 점수도 없습니다. 한 장씩 뽑고, 서로의 답을 고치지 말고 들어보세요.', metaCards: '12장', metaPrivate: '답변 저장 안 함', metaFree: '무료',
      typeLabel: '가져온 MBTI', chooseKicker: '오늘의 분위기', chooseTitle: '어떤 대화를 원하나요?',
      modeAll: '모두 섞기', modeAllDesc: '12장을 골고루', modePlayful: '가볍게', modePlayfulDesc: '웃고 상상하기',
      modeConnect: '더 가까이', modeConnectDesc: '필요와 마음 듣기', modeRepair: '관계 회복', modeRepairDesc: '천천히 다시 연결',
      readyLabel: '준비됨', coverText: '한 장을 뽑아 대화를 시작하세요', draw: '첫 카드 뽑기', next: '다음 카드',
      favorite: '저장', saved: '저장됨', copy: '복사', share: '공유', restart: '카드 다시 섞기', savedCount: '저장 {count}',
      savedKicker: '다시 꺼내볼 질문', savedTitle: '저장한 카드', print: '인쇄', savedEmpty: '마음에 남는 질문을 저장하면 이 기기에만 보관됩니다.',
      guideKicker: '카드를 잘 쓰는 법', guideTitle: '대답보다 듣는 방식이 더 중요해요',
      guideOneTitle: '건너뛰어도 됩니다', guideOneText: '지금 맞지 않는 질문에는 답하지 않아도 됩니다.',
      guideTwoTitle: '고치지 말고 요약하세요', guideTwoText: '조언하기 전에 “내가 들은 건…”으로 확인해 보세요.',
      guideThreeTitle: '한 번에 한 장만', guideThreeText: '속도를 늦추고 답할 시간을 똑같이 나누세요.',
      boundaryTitle: '이 덱의 경계', boundaryText: 'MBTI는 대화의 출발점일 뿐, 관계의 적합성이나 상대의 의도를 판정하지 않습니다. 강요·위협·폭력·감시가 있거나 안전하지 않다면 회복 질문으로 직접 해결하려 하지 말고 신뢰할 수 있는 지원과 지역의 전문 도움을 우선하세요.',
      testKicker: '아직 내 유형이 궁금하다면', testTitle: 'MBTI 연애 스타일을 먼저 확인하세요', testText: '테스트 결과는 카드의 정답이 아니라, 서로 다른 선호를 말해 보는 출발점입니다.', testAction: '무료 테스트 열기',
      home: 'DopaBrain 홈', privacy: '개인정보처리방침', copied: '질문을 복사했습니다', shared: '공유할 내용을 복사했습니다', sessionDone: '선택한 카드를 모두 확인했어요', removed: '저장에서 삭제했습니다',
      modeNames: { playful: '가볍게', connect: '더 가까이', repair: '관계 회복' },
      notes: { playful: '한 사람당 1분씩, 떠오르는 첫 답을 가볍게 나눠보세요.', connect: '한 사람이 답하는 동안 다른 사람은 해결책보다 궁금한 점 하나만 물어보세요.', repair: '관찰 가능한 한 장면만 말하고, 누가 옳은지 결정하려 하지 마세요.' },
      cards: [
        '이번 주에 당신을 웃게 만든 아주 작은 일은 무엇이었나요?',
        '의무 없이 세 시간이 생긴다면 우리 둘이 무엇을 하고 싶나요?',
        '나와 보낸 평범한 순간 중 다시 재생하고 싶은 장면은 무엇인가요?',
        '지금 부담 없이 즐거울 것 같은 저비용 데이트는 무엇인가요?',
        '내가 당신을 가장 잘 이해한다고 느끼는 순간은 언제인가요?',
        '이번 주에는 어떤 방식의 애정 표현을 가장 편하게 받을 수 있나요?',
        '겉으로 보이는 것보다 요즘 더 많은 에너지를 쓰게 하는 일은 무엇인가요?',
        '우리 관계에서 앞으로도 꼭 지키고 싶은 한 가지는 무엇인가요?',
        '최근 긴장 속에서도 둘 다 사실이라고 동의할 수 있는 부분은 무엇인가요?',
        '이 대화를 더 안전하고 천천히 느끼게 하려면 무엇이 도움이 될까요?',
        '오늘 내가 할 수 있는 작고 구체적인 회복 행동이 있나요?',
        '지금 멈추고 구체적인 시간을 정해 다시 이야기하면 좋을 주제는 무엇인가요?'
      ]
    },
    en: {
      skip: 'Skip to the deck', language: 'Language', eyebrow: 'AFTER THE TEST, ONE REAL CONVERSATION', title: 'MBTI Couple Conversation Deck',
      subtitle: 'No right answers and no score. Draw one card, then listen without correcting each other.', metaCards: '12 cards', metaPrivate: 'No answers stored', metaFree: 'Free',
      typeLabel: 'MBTI carried in', chooseKicker: 'TODAY’S MOOD', chooseTitle: 'What kind of conversation do you want?',
      modeAll: 'Mix them all', modeAllDesc: 'All 12 cards', modePlayful: 'Playful', modePlayfulDesc: 'Laugh and imagine',
      modeConnect: 'Feel closer', modeConnectDesc: 'Hear needs and feelings', modeRepair: 'Repair', modeRepairDesc: 'Reconnect slowly',
      readyLabel: 'Ready', coverText: 'Draw one card to start a conversation', draw: 'Draw the first card', next: 'Next card',
      favorite: 'Save', saved: 'Saved', copy: 'Copy', share: 'Share', restart: 'Shuffle again', savedCount: '{count} saved',
      savedKicker: 'QUESTIONS WORTH RETURNING TO', savedTitle: 'Saved cards', print: 'Print', savedEmpty: 'Save a question to keep its card number on this device only.',
      guideKicker: 'HOW TO USE THE DECK', guideTitle: 'How you listen matters more than the answer',
      guideOneTitle: 'Skipping is allowed', guideOneText: 'Neither person has to answer a question that does not feel right now.',
      guideTwoTitle: 'Summarize before fixing', guideTwoText: 'Before advice, try: “What I heard was…”',
      guideThreeTitle: 'One card at a time', guideThreeText: 'Slow down and give each person equal time to answer.',
      boundaryTitle: 'What this deck cannot do', boundaryText: 'MBTI is only a conversation starter. It cannot judge compatibility or another person’s intentions. If there is coercion, threats, violence, monitoring, or you feel unsafe, do not use repair prompts to solve it directly; prioritize trusted support and appropriate local professional help.',
      testKicker: 'CURIOUS ABOUT YOUR TYPE?', testTitle: 'Check your MBTI love style first', testText: 'A test result is not the answer to a card. It is simply a way to name different preferences.', testAction: 'Open the free test',
      home: 'DopaBrain home', privacy: 'Privacy', copied: 'Question copied', shared: 'Share text copied', sessionDone: 'You reached the end of this deck', removed: 'Removed from saved cards',
      modeNames: { playful: 'Playful', connect: 'Feel closer', repair: 'Repair' },
      notes: { playful: 'Take one minute each and share the first answer that comes to mind.', connect: 'While one person answers, ask one curious question before offering a solution.', repair: 'Name one observable moment and avoid deciding who is the better or worse person.' },
      cards: [
        'What tiny thing made you smile this week?',
        'If we had three free hours and no obligations, what would you choose for us to do?',
        'Which ordinary moment with me would you replay?',
        'What low-cost date would feel fun right now?',
        'When do you feel most understood by me?',
        'What kind of affection feels easiest to receive this week?',
        'What has been taking more energy than it looks lately?',
        'What is one thing you want us to protect in our relationship?',
        'What part of our recent tension can we both agree on as a fact?',
        'What would help this conversation feel safer and slower?',
        'Is there one small, concrete repair I can offer today?',
        'What should we pause and revisit at a specific time?'
      ]
    },
    zh: {
      skip: '跳到卡牌', language: '语言', eyebrow: '测试之后，开始一次真实对话', title: 'MBTI情侣对话卡',
      subtitle: '没有标准答案，也没有分数。一次抽一张，倾听时不要纠正对方。', metaCards: '12张卡', metaPrivate: '不保存回答', metaFree: '免费',
      typeLabel: '带入的MBTI', chooseKicker: '今天的氛围', chooseTitle: '你们想进行哪种对话？',
      modeAll: '全部混合', modeAllDesc: '使用全部12张', modePlayful: '轻松聊', modePlayfulDesc: '欢笑与想象',
      modeConnect: '更靠近', modeConnectDesc: '听见需要与感受', modeRepair: '修复关系', modeRepairDesc: '慢慢重新连接',
      readyLabel: '已准备', coverText: '抽一张卡开始对话', draw: '抽第一张', next: '下一张',
      favorite: '收藏', saved: '已收藏', copy: '复制', share: '分享', restart: '重新洗牌', savedCount: '已收藏{count}张',
      savedKicker: '值得再次讨论的问题', savedTitle: '收藏的卡', print: '打印', savedEmpty: '收藏的问题编号只会保存在这台设备上。',
      guideKicker: '使用方法', guideTitle: '倾听的方式比答案更重要',
      guideOneTitle: '可以跳过', guideOneText: '任何人都不必回答此刻不合适的问题。',
      guideTwoTitle: '先复述，再建议', guideTwoText: '给建议前，试着说：“我听到的是……”',
      guideThreeTitle: '一次一张', guideThreeText: '放慢速度，给双方同样的回答时间。',
      boundaryTitle: '这套卡的边界', boundaryText: 'MBTI只是对话起点，不能判断关系是否合适或对方的意图。如果存在强迫、威胁、暴力、监控或你感到不安全，不要试图用修复问题直接解决；请优先寻求可信赖的支持和当地合适的专业帮助。',
      testKicker: '想知道自己的类型？', testTitle: '先看看你的MBTI恋爱风格', testText: '测试结果不是卡牌的标准答案，只是表达不同偏好的起点。', testAction: '打开免费测试',
      home: 'DopaBrain首页', privacy: '隐私政策', copied: '问题已复制', shared: '分享内容已复制', sessionDone: '这组卡已经抽完', removed: '已取消收藏',
      modeNames: { playful: '轻松聊', connect: '更靠近', repair: '修复关系' },
      notes: { playful: '每人用一分钟，说出最先想到的答案。', connect: '一人回答时，另一人先问一个好奇的问题，再提出建议。', repair: '只描述一个可观察的场景，不急着判断谁对谁错。' },
      cards: [
        '这周有什么很小的事让你笑了？',
        '如果我们有三个小时完全没安排，你想和我做什么？',
        '你想重播我们之间哪个平凡的瞬间？',
        '现在什么低成本约会会让你觉得有趣？',
        '什么时候你最觉得我理解你？',
        '这周你最容易接受哪种表达爱意的方式？',
        '最近什么事情消耗的精力比表面看起来更多？',
        '你最想保护我们关系中的哪一件事？',
        '对于最近的紧张，我们能共同同意的事实是什么？',
        '怎样做能让这次对话感觉更安全、更慢一点？',
        '今天我能做一个什么具体的小修复？',
        '什么话题适合现在暂停，并约定具体时间再谈？'
      ]
    },
    hi: {
      skip: 'कार्ड डेक पर जाएँ', language: 'भाषा', eyebrow: 'टेस्ट के बाद, एक असली बातचीत', title: 'MBTI कपल कन्वर्सेशन डेक',
      subtitle: 'कोई सही जवाब या स्कोर नहीं। एक कार्ड चुनें और एक-दूसरे को सुधारे बिना सुनें।', metaCards: '12 कार्ड', metaPrivate: 'जवाब सेव नहीं होते', metaFree: 'मुफ़्त',
      typeLabel: 'साथ आया MBTI', chooseKicker: 'आज का मूड', chooseTitle: 'आप कैसी बातचीत चाहते हैं?',
      modeAll: 'सब मिलाएँ', modeAllDesc: 'सभी 12 कार्ड', modePlayful: 'हल्का-फुल्का', modePlayfulDesc: 'हँसें और कल्पना करें',
      modeConnect: 'और करीब', modeConnectDesc: 'ज़रूरतें और भावनाएँ सुनें', modeRepair: 'रिश्ता सुधारें', modeRepairDesc: 'धीरे फिर जुड़ें',
      readyLabel: 'तैयार', coverText: 'बातचीत शुरू करने के लिए एक कार्ड चुनें', draw: 'पहला कार्ड चुनें', next: 'अगला कार्ड',
      favorite: 'सेव', saved: 'सेव हुआ', copy: 'कॉपी', share: 'शेयर', restart: 'फिर से मिलाएँ', savedCount: '{count} सेव',
      savedKicker: 'फिर पूछने लायक सवाल', savedTitle: 'सेव किए कार्ड', print: 'प्रिंट', savedEmpty: 'सवाल सेव करने पर केवल उसका कार्ड नंबर इसी डिवाइस में रहता है।',
      guideKicker: 'डेक कैसे उपयोग करें', guideTitle: 'जवाब से ज़्यादा मायने सुनने के तरीके का है',
      guideOneTitle: 'छोड़ना ठीक है', guideOneText: 'जो सवाल अभी ठीक न लगे उसका जवाब देना ज़रूरी नहीं।',
      guideTwoTitle: 'सुधारने से पहले दोहराएँ', guideTwoText: 'सलाह से पहले कहें: “मैंने यह सुना…”',
      guideThreeTitle: 'एक बार में एक कार्ड', guideThreeText: 'धीरे चलें और दोनों को बराबर समय दें।',
      boundaryTitle: 'इस डेक की सीमा', boundaryText: 'MBTI केवल बातचीत की शुरुआत है; यह अनुकूलता या किसी की नीयत तय नहीं करता। ज़बरदस्ती, धमकी, हिंसा, निगरानी या असुरक्षा हो तो रिपेयर सवालों से सीधे हल न करें; भरोसेमंद सहायता और उचित स्थानीय पेशेवर मदद को प्राथमिकता दें।',
      testKicker: 'अपना प्रकार जानना है?', testTitle: 'पहले अपनी MBTI लव स्टाइल देखें', testText: 'टेस्ट परिणाम कार्ड का सही जवाब नहीं, अलग पसंदों को नाम देने की शुरुआत है।', testAction: 'मुफ़्त टेस्ट खोलें',
      home: 'DopaBrain होम', privacy: 'गोपनीयता', copied: 'सवाल कॉपी हुआ', shared: 'शेयर टेक्स्ट कॉपी हुआ', sessionDone: 'इस डेक के सभी कार्ड पूरे हुए', removed: 'सेव से हटाया',
      modeNames: { playful: 'हल्का-फुल्का', connect: 'और करीब', repair: 'रिश्ता सुधारें' },
      notes: { playful: 'हर व्यक्ति एक मिनट में मन में आया पहला जवाब बताए।', connect: 'एक व्यक्ति के जवाब के दौरान समाधान से पहले एक जिज्ञासु सवाल पूछें।', repair: 'एक दिख सकने वाली घटना बताएँ और यह तय न करें कि कौन बेहतर या बदतर है।' },
      cards: [
        'इस हफ्ते किस छोटी-सी बात ने आपको मुस्कुराया?',
        'अगर हमारे पास बिना किसी काम के तीन घंटे हों, तो आप हमारे लिए क्या चुनेंगे?',
        'मेरे साथ बिताया कौन-सा साधारण पल आप फिर जीना चाहेंगे?',
        'अभी कौन-सी कम खर्च वाली डेट मज़ेदार लगेगी?',
        'आपको कब लगता है कि मैं आपको सबसे अच्छी तरह समझता/समझती हूँ?',
        'इस हफ्ते किस तरह का प्यार पाना सबसे सहज लगेगा?',
        'हाल में कौन-सी चीज़ दिखने से ज़्यादा ऊर्जा ले रही है?',
        'हमारे रिश्ते में आप किस एक चीज़ को सुरक्षित रखना चाहते हैं?',
        'हाल की तनातनी में कौन-सा तथ्य हम दोनों मान सकते हैं?',
        'इस बातचीत को अधिक सुरक्षित और धीमा बनाने में क्या मदद करेगा?',
        'आज मैं सुधार के लिए कौन-सा छोटा और ठोस कदम उठा सकता/सकती हूँ?',
        'किस विषय को अभी रोककर किसी तय समय पर फिर उठाना चाहिए?'
      ]
    },
    ru: {
      skip: 'Перейти к колоде', language: 'Язык', eyebrow: 'ПОСЛЕ ТЕСТА — ОДИН НАСТОЯЩИЙ РАЗГОВОР', title: 'Колода вопросов для пары MBTI',
      subtitle: 'Здесь нет правильных ответов и баллов. Тяните по одной карте и слушайте, не исправляя друг друга.', metaCards: '12 карт', metaPrivate: 'Ответы не сохраняются', metaFree: 'Бесплатно',
      typeLabel: 'Ваш MBTI', chooseKicker: 'НАСТРОЕНИЕ СЕГОДНЯ', chooseTitle: 'Какой разговор вам нужен?',
      modeAll: 'Смешать все', modeAllDesc: 'Все 12 карт', modePlayful: 'Легко', modePlayfulDesc: 'Смеяться и мечтать',
      modeConnect: 'Стать ближе', modeConnectDesc: 'Услышать чувства и нужды', modeRepair: 'Восстановить связь', modeRepairDesc: 'Сближаться медленно',
      readyLabel: 'Готово', coverText: 'Вытяните карту, чтобы начать разговор', draw: 'Вытянуть первую карту', next: 'Следующая карта',
      favorite: 'Сохранить', saved: 'Сохранено', copy: 'Копировать', share: 'Поделиться', restart: 'Перемешать снова', savedCount: 'Сохранено: {count}',
      savedKicker: 'ВОПРОСЫ, К КОТОРЫМ СТОИТ ВЕРНУТЬСЯ', savedTitle: 'Сохранённые карты', print: 'Печать', savedEmpty: 'Сохраните вопрос — на этом устройстве останется только номер карты.',
      guideKicker: 'КАК ПОЛЬЗОВАТЬСЯ', guideTitle: 'То, как вы слушаете, важнее ответа',
      guideOneTitle: 'Можно пропустить', guideOneText: 'Необязательно отвечать на вопрос, который сейчас не подходит.',
      guideTwoTitle: 'Сначала перескажите', guideTwoText: 'До совета попробуйте: «Я услышал(а), что…»',
      guideThreeTitle: 'По одной карте', guideThreeText: 'Не спешите и дайте обоим одинаковое время.',
      boundaryTitle: 'Границы этой колоды', boundaryText: 'MBTI — лишь начало разговора. Он не определяет совместимость или намерения человека. При принуждении, угрозах, насилии, слежке или чувстве опасности не пытайтесь решать это вопросами о примирении; сначала обратитесь за поддержкой к тем, кому доверяете, и к подходящей местной профессиональной помощи.',
      testKicker: 'ИНТЕРЕСЕН ВАШ ТИП?', testTitle: 'Сначала узнайте свой стиль любви MBTI', testText: 'Результат теста — не ответ на карту, а способ назвать разные предпочтения.', testAction: 'Открыть бесплатный тест',
      home: 'Главная DopaBrain', privacy: 'Конфиденциальность', copied: 'Вопрос скопирован', shared: 'Текст для отправки скопирован', sessionDone: 'Вы дошли до конца колоды', removed: 'Удалено из сохранённых',
      modeNames: { playful: 'Легко', connect: 'Стать ближе', repair: 'Восстановить связь' },
      notes: { playful: 'Пусть каждый за минуту назовёт первый пришедший в голову ответ.', connect: 'Пока один отвечает, задайте один уточняющий вопрос до предложений и решений.', repair: 'Назовите одну наблюдаемую ситуацию и не решайте, кто лучше или хуже.' },
      cards: [
        'Какая мелочь заставила вас улыбнуться на этой неделе?',
        'Если бы у нас было три свободных часа без дел, что бы вы выбрали для нас?',
        'Какой обычный момент со мной вы хотели бы повторить?',
        'Какое недорогое свидание сейчас показалось бы весёлым?',
        'Когда вы чувствуете, что я лучше всего вас понимаю?',
        'Какие проявления любви легче всего принимать на этой неделе?',
        'Что в последнее время отнимает больше сил, чем кажется?',
        'Что одно вы хотите обязательно беречь в наших отношениях?',
        'Какой факт о недавнем напряжении мы оба можем признать?',
        'Что сделает этот разговор безопаснее и медленнее?',
        'Какой небольшой и конкретный шаг к примирению я могу сделать сегодня?',
        'Какую тему стоит отложить и вернуться к ней в точное время?'
      ]
    },
    ja: {
      skip: 'カードへ移動', language: '言語', eyebrow: 'テストの次は、実際の会話を一枚', title: 'MBTIカップル会話カード',
      subtitle: '正解も点数もありません。一枚ずつ引き、お互いの答えを直さずに聴いてみましょう。', metaCards: '12枚', metaPrivate: '回答は保存しません', metaFree: '無料',
      typeLabel: '引き継いだMBTI', chooseKicker: '今日の雰囲気', chooseTitle: 'どんな会話をしたいですか？',
      modeAll: '全部混ぜる', modeAllDesc: '12枚すべて', modePlayful: '気軽に', modePlayfulDesc: '笑って想像する',
      modeConnect: 'もっと近く', modeConnectDesc: '気持ちと必要を聴く', modeRepair: '関係を修復', modeRepairDesc: 'ゆっくり再接続',
      readyLabel: '準備完了', coverText: '一枚引いて会話を始めましょう', draw: '最初のカードを引く', next: '次のカード',
      favorite: '保存', saved: '保存済み', copy: 'コピー', share: '共有', restart: 'もう一度混ぜる', savedCount: '保存 {count}',
      savedKicker: 'また話したい質問', savedTitle: '保存したカード', print: '印刷', savedEmpty: '残したい質問を保存すると、この端末にカード番号だけを保管します。',
      guideKicker: 'カードの使い方', guideTitle: '答えより、聴き方が大切です',
      guideOneTitle: '飛ばして大丈夫', guideOneText: '今は合わない質問に答える必要はありません。',
      guideTwoTitle: '直す前に要約する', guideTwoText: '助言の前に「私が聞いたのは…」と確認しましょう。',
      guideThreeTitle: '一度に一枚', guideThreeText: 'ゆっくり進め、同じ長さの回答時間を取りましょう。',
      boundaryTitle: 'このカードの限界', boundaryText: 'MBTIは会話のきっかけであり、相性や相手の意図を判定するものではありません。強要、脅し、暴力、監視がある、または安全でないと感じる場合、修復質問だけで直接解決しようとせず、信頼できる支援と地域の適切な専門的援助を優先してください。',
      testKicker: '自分のタイプが気になる？', testTitle: '先にMBTI恋愛スタイルを確認', testText: 'テスト結果はカードの正解ではなく、違う好みを話す出発点です。', testAction: '無料テストを開く',
      home: 'DopaBrainホーム', privacy: 'プライバシー', copied: '質問をコピーしました', shared: '共有文をコピーしました', sessionDone: 'このカードをすべて見ました', removed: '保存から削除しました',
      modeNames: { playful: '気軽に', connect: 'もっと近く', repair: '関係を修復' },
      notes: { playful: '一人1分で、最初に浮かんだ答えを気軽に話しましょう。', connect: '一人が答える間、解決策を出す前に好奇心から一つ質問しましょう。', repair: '観察できる一場面だけを話し、どちらが正しいかを決めないでください。' },
      cards: [
        '今週、あなたを笑顔にした小さなことは何ですか？',
        '予定のない自由な3時間があったら、二人で何をしたいですか？',
        '私との何気ない瞬間で、もう一度再生したい場面は？',
        '今ならどんな低予算デートが楽しそうですか？',
        '私に一番理解されていると感じるのはいつですか？',
        '今週、どんな愛情表現なら受け取りやすいですか？',
        '最近、見た目以上にエネルギーを使っていることは？',
        '私たちの関係で、これからも守りたいことは一つ何ですか？',
        '最近の緊張について、二人とも事実だと認められる部分は？',
        'この会話をもっと安全でゆっくりにするには何が役立ちますか？',
        '今日、私にできる小さく具体的な修復行動はありますか？',
        '今はいったん止め、具体的な時間を決めて話し直したい話題は？'
      ]
    },
    es: {
      skip: 'Ir a las cartas', language: 'Idioma', eyebrow: 'DESPUÉS DEL TEST, UNA CONVERSACIÓN REAL', title: 'Cartas de conversación MBTI para parejas',
      subtitle: 'No hay respuestas correctas ni puntuación. Saquen una carta y escuchen sin corregirse.', metaCards: '12 cartas', metaPrivate: 'Sin guardar respuestas', metaFree: 'Gratis',
      typeLabel: 'MBTI incluido', chooseKicker: 'EL AMBIENTE DE HOY', chooseTitle: '¿Qué tipo de conversación quieren?',
      modeAll: 'Mezclar todas', modeAllDesc: 'Las 12 cartas', modePlayful: 'Ligera', modePlayfulDesc: 'Reír e imaginar',
      modeConnect: 'Más cerca', modeConnectDesc: 'Escuchar necesidades y emociones', modeRepair: 'Reparar', modeRepairDesc: 'Reconectar despacio',
      readyLabel: 'Lista', coverText: 'Saca una carta para empezar a conversar', draw: 'Sacar la primera carta', next: 'Siguiente carta',
      favorite: 'Guardar', saved: 'Guardada', copy: 'Copiar', share: 'Compartir', restart: 'Mezclar de nuevo', savedCount: '{count} guardadas',
      savedKicker: 'PREGUNTAS PARA RETOMAR', savedTitle: 'Cartas guardadas', print: 'Imprimir', savedEmpty: 'Guarda una pregunta: solo su número queda en este dispositivo.',
      guideKicker: 'CÓMO USARLAS', guideTitle: 'La forma de escuchar importa más que la respuesta',
      guideOneTitle: 'Se puede pasar', guideOneText: 'Nadie tiene que responder una pregunta que hoy no se sienta bien.',
      guideTwoTitle: 'Resume antes de arreglar', guideTwoText: 'Antes de aconsejar, prueba: “Lo que escuché fue…”',
      guideThreeTitle: 'Una carta cada vez', guideThreeText: 'Vayan despacio y den el mismo tiempo a cada persona.',
      boundaryTitle: 'Los límites de estas cartas', boundaryText: 'El MBTI solo inicia una conversación; no determina compatibilidad ni intenciones. Si hay coacción, amenazas, violencia, vigilancia o no te sientes a salvo, no intentes resolverlo directamente con preguntas de reparación; prioriza apoyo de confianza y ayuda profesional local adecuada.',
      testKicker: '¿TE DA CURIOSIDAD TU TIPO?', testTitle: 'Mira primero tu estilo amoroso MBTI', testText: 'El resultado no es la respuesta correcta: solo ayuda a nombrar preferencias diferentes.', testAction: 'Abrir el test gratis',
      home: 'Inicio DopaBrain', privacy: 'Privacidad', copied: 'Pregunta copiada', shared: 'Texto para compartir copiado', sessionDone: 'Llegaron al final de estas cartas', removed: 'Eliminada de guardadas',
      modeNames: { playful: 'Ligera', connect: 'Más cerca', repair: 'Reparar' },
      notes: { playful: 'Tomen un minuto cada uno y compartan la primera respuesta que aparezca.', connect: 'Mientras uno responde, haz una pregunta curiosa antes de ofrecer soluciones.', repair: 'Nombra un momento observable sin decidir quién es mejor o peor.' },
      cards: [
        '¿Qué cosa pequeña te hizo sonreír esta semana?',
        'Si tuviéramos tres horas libres y sin obligaciones, ¿qué elegirías hacer juntos?',
        '¿Qué momento cotidiano conmigo volverías a vivir?',
        '¿Qué cita de bajo costo sería divertida ahora?',
        '¿Cuándo sientes que te comprendo mejor?',
        '¿Qué tipo de cariño te resulta más fácil recibir esta semana?',
        '¿Qué te está quitando más energía de la que parece últimamente?',
        '¿Qué cosa quieres que protejamos en nuestra relación?',
        '¿En qué hecho de nuestra tensión reciente podemos coincidir?',
        '¿Qué ayudaría a que esta conversación se sienta más segura y pausada?',
        '¿Hay una reparación pequeña y concreta que pueda ofrecer hoy?',
        '¿Qué tema deberíamos pausar y retomar a una hora específica?'
      ]
    },
    pt: {
      skip: 'Ir para o baralho', language: 'Idioma', eyebrow: 'DEPOIS DO TESTE, UMA CONVERSA REAL', title: 'Cartas de conversa MBTI para casais',
      subtitle: 'Sem respostas certas e sem pontuação. Tirem uma carta e escutem sem corrigir um ao outro.', metaCards: '12 cartas', metaPrivate: 'Respostas não são salvas', metaFree: 'Grátis',
      typeLabel: 'MBTI trazido', chooseKicker: 'CLIMA DE HOJE', chooseTitle: 'Que tipo de conversa vocês querem?',
      modeAll: 'Misturar todas', modeAllDesc: 'As 12 cartas', modePlayful: 'Leve', modePlayfulDesc: 'Rir e imaginar',
      modeConnect: 'Mais perto', modeConnectDesc: 'Ouvir necessidades e sentimentos', modeRepair: 'Reparar', modeRepairDesc: 'Reconectar devagar',
      readyLabel: 'Pronto', coverText: 'Tire uma carta para começar a conversa', draw: 'Tirar a primeira carta', next: 'Próxima carta',
      favorite: 'Salvar', saved: 'Salva', copy: 'Copiar', share: 'Compartilhar', restart: 'Embaralhar de novo', savedCount: '{count} salvas',
      savedKicker: 'PERGUNTAS PARA RETOMAR', savedTitle: 'Cartas salvas', print: 'Imprimir', savedEmpty: 'Salve uma pergunta; apenas o número da carta fica neste aparelho.',
      guideKicker: 'COMO USAR', guideTitle: 'A forma de ouvir importa mais que a resposta',
      guideOneTitle: 'Pode pular', guideOneText: 'Ninguém precisa responder algo que não pareça certo agora.',
      guideTwoTitle: 'Resuma antes de resolver', guideTwoText: 'Antes de aconselhar, tente: “O que eu ouvi foi…”',
      guideThreeTitle: 'Uma carta por vez', guideThreeText: 'Vá devagar e dê o mesmo tempo a cada pessoa.',
      boundaryTitle: 'Limites deste baralho', boundaryText: 'O MBTI é apenas um começo de conversa; não determina compatibilidade nem intenções. Se houver coerção, ameaças, violência, vigilância ou insegurança, não tente resolver diretamente com perguntas de reparo; priorize apoio confiável e ajuda profissional local adequada.',
      testKicker: 'QUER SABER SEU TIPO?', testTitle: 'Veja primeiro seu estilo de amor MBTI', testText: 'O resultado não é a resposta da carta; é só um jeito de nomear preferências diferentes.', testAction: 'Abrir teste grátis',
      home: 'Início DopaBrain', privacy: 'Privacidade', copied: 'Pergunta copiada', shared: 'Texto de compartilhamento copiado', sessionDone: 'Vocês chegaram ao fim do baralho', removed: 'Removida das salvas',
      modeNames: { playful: 'Leve', connect: 'Mais perto', repair: 'Reparar' },
      notes: { playful: 'Cada pessoa tem um minuto para dizer a primeira resposta que vier.', connect: 'Enquanto um responde, faça uma pergunta curiosa antes de oferecer soluções.', repair: 'Cite um momento observável sem decidir quem é melhor ou pior.' },
      cards: [
        'Que pequena coisa fez você sorrir esta semana?',
        'Se tivéssemos três horas livres e sem obrigações, o que escolheria fazer juntos?',
        'Que momento comum comigo você gostaria de repetir?',
        'Que encontro barato pareceria divertido agora?',
        'Quando você se sente mais compreendido por mim?',
        'Que tipo de carinho é mais fácil receber esta semana?',
        'O que tem consumido mais energia do que parece ultimamente?',
        'O que você quer que a gente proteja em nosso relacionamento?',
        'Em qual fato sobre nossa tensão recente podemos concordar?',
        'O que ajudaria esta conversa a parecer mais segura e lenta?',
        'Existe um reparo pequeno e concreto que eu possa oferecer hoje?',
        'Que assunto devemos pausar e retomar em um horário específico?'
      ]
    },
    id: {
      skip: 'Lewati ke kartu', language: 'Bahasa', eyebrow: 'SETELAH TES, SATU PERCAKAPAN NYATA', title: 'Kartu Percakapan Pasangan MBTI',
      subtitle: 'Tidak ada jawaban benar atau skor. Ambil satu kartu lalu dengarkan tanpa saling mengoreksi.', metaCards: '12 kartu', metaPrivate: 'Jawaban tidak disimpan', metaFree: 'Gratis',
      typeLabel: 'MBTI yang dibawa', chooseKicker: 'SUASANA HARI INI', chooseTitle: 'Percakapan seperti apa yang kalian inginkan?',
      modeAll: 'Campur semua', modeAllDesc: 'Semua 12 kartu', modePlayful: 'Santai', modePlayfulDesc: 'Tertawa dan berimajinasi',
      modeConnect: 'Lebih dekat', modeConnectDesc: 'Dengar kebutuhan dan perasaan', modeRepair: 'Memperbaiki', modeRepairDesc: 'Terhubung kembali perlahan',
      readyLabel: 'Siap', coverText: 'Ambil satu kartu untuk memulai percakapan', draw: 'Ambil kartu pertama', next: 'Kartu berikutnya',
      favorite: 'Simpan', saved: 'Tersimpan', copy: 'Salin', share: 'Bagikan', restart: 'Kocok lagi', savedCount: '{count} tersimpan',
      savedKicker: 'PERTANYAAN UNTUK DIBUKA LAGI', savedTitle: 'Kartu tersimpan', print: 'Cetak', savedEmpty: 'Simpan pertanyaan; hanya nomor kartunya yang disimpan di perangkat ini.',
      guideKicker: 'CARA MENGGUNAKAN', guideTitle: 'Cara mendengar lebih penting daripada jawabannya',
      guideOneTitle: 'Boleh dilewati', guideOneText: 'Tidak ada yang harus menjawab pertanyaan yang belum terasa tepat.',
      guideTwoTitle: 'Rangkum sebelum memperbaiki', guideTwoText: 'Sebelum memberi saran, coba: “Yang kudengar adalah…”',
      guideThreeTitle: 'Satu kartu saja', guideThreeText: 'Pelankan tempo dan beri waktu yang sama untuk menjawab.',
      boundaryTitle: 'Batas kartu ini', boundaryText: 'MBTI hanya pembuka percakapan, bukan penentu kecocokan atau niat seseorang. Jika ada paksaan, ancaman, kekerasan, pengawasan, atau rasa tidak aman, jangan mencoba menyelesaikannya langsung dengan pertanyaan perbaikan; utamakan dukungan tepercaya dan bantuan profesional lokal yang sesuai.',
      testKicker: 'PENASARAN DENGAN TIPEmu?', testTitle: 'Cek gaya cinta MBTI lebih dulu', testText: 'Hasil tes bukan jawaban kartu, hanya awal untuk menamai preferensi yang berbeda.', testAction: 'Buka tes gratis',
      home: 'Beranda DopaBrain', privacy: 'Privasi', copied: 'Pertanyaan disalin', shared: 'Teks berbagi disalin', sessionDone: 'Kalian sudah mencapai akhir kartu', removed: 'Dihapus dari simpanan',
      modeNames: { playful: 'Santai', connect: 'Lebih dekat', repair: 'Memperbaiki' },
      notes: { playful: 'Ambil satu menit per orang dan bagikan jawaban pertama yang muncul.', connect: 'Saat satu orang menjawab, ajukan satu pertanyaan penasaran sebelum memberi solusi.', repair: 'Sebutkan satu kejadian yang bisa diamati tanpa menentukan siapa lebih baik atau buruk.' },
      cards: [
        'Hal kecil apa yang membuatmu tersenyum minggu ini?',
        'Jika kita punya tiga jam kosong tanpa kewajiban, apa yang ingin kamu lakukan bersama?',
        'Momen biasa bersamaku mana yang ingin kamu putar ulang?',
        'Kencan murah apa yang terasa menyenangkan sekarang?',
        'Kapan kamu merasa paling kupahami?',
        'Bentuk kasih sayang apa yang paling mudah kamu terima minggu ini?',
        'Apa yang akhir-akhir ini menghabiskan lebih banyak energi daripada kelihatannya?',
        'Apa satu hal yang ingin kamu lindungi dalam hubungan kita?',
        'Fakta apa tentang ketegangan baru-baru ini yang bisa kita sepakati?',
        'Apa yang membantu percakapan ini terasa lebih aman dan lambat?',
        'Adakah satu perbaikan kecil dan konkret yang bisa kutawarkan hari ini?',
        'Topik apa yang sebaiknya dijeda dan dibahas lagi pada waktu tertentu?'
      ]
    },
    tr: {
      skip: 'Kartlara geç', language: 'Dil', eyebrow: 'TESTTEN SONRA, GERÇEK BİR SOHBET', title: 'MBTI Çift Sohbet Kartları',
      subtitle: 'Doğru cevap ve puan yok. Bir kart çekin, birbirinizi düzeltmeden dinleyin.', metaCards: '12 kart', metaPrivate: 'Cevaplar kaydedilmez', metaFree: 'Ücretsiz',
      typeLabel: 'Taşınan MBTI', chooseKicker: 'BUGÜNÜN HAVASI', chooseTitle: 'Nasıl bir sohbet istiyorsunuz?',
      modeAll: 'Hepsini karıştır', modeAllDesc: '12 kartın tamamı', modePlayful: 'Eğlenceli', modePlayfulDesc: 'Gül ve hayal et',
      modeConnect: 'Yakınlaş', modeConnectDesc: 'İhtiyaçları ve duyguları duy', modeRepair: 'Onar', modeRepairDesc: 'Yavaşça yeniden bağlan',
      readyLabel: 'Hazır', coverText: 'Sohbete başlamak için bir kart çekin', draw: 'İlk kartı çek', next: 'Sonraki kart',
      favorite: 'Kaydet', saved: 'Kaydedildi', copy: 'Kopyala', share: 'Paylaş', restart: 'Yeniden karıştır', savedCount: '{count} kayıtlı',
      savedKicker: 'GERİ DÖNÜLECEK SORULAR', savedTitle: 'Kaydedilen kartlar', print: 'Yazdır', savedEmpty: 'Bir soruyu kaydedince yalnızca kart numarası bu cihazda tutulur.',
      guideKicker: 'NASIL KULLANILIR', guideTitle: 'Nasıl dinlediğiniz cevaptan daha önemlidir',
      guideOneTitle: 'Geçmek serbest', guideOneText: 'Şu an doğru gelmeyen bir soruyu kimse cevaplamak zorunda değil.',
      guideTwoTitle: 'Çözmeden önce özetle', guideTwoText: 'Tavsiyeden önce “Duyduğum şu…” demeyi dene.',
      guideThreeTitle: 'Her seferinde bir kart', guideThreeText: 'Yavaşlayın ve iki kişiye de eşit süre verin.',
      boundaryTitle: 'Bu kartların sınırı', boundaryText: 'MBTI yalnızca sohbet başlatır; uyumu veya birinin niyetini belirlemez. Zorlama, tehdit, şiddet, izleme ya da güvensizlik varsa bunu onarım sorularıyla doğrudan çözmeye çalışmayın; güvenilir destek ve uygun yerel profesyonel yardımı önceliklendirin.',
      testKicker: 'TİPİNİ MERAK MI EDİYORSUN?', testTitle: 'Önce MBTI aşk stiline bak', testText: 'Test sonucu kartın doğru cevabı değil, farklı tercihleri adlandırma başlangıcıdır.', testAction: 'Ücretsiz testi aç',
      home: 'DopaBrain ana sayfa', privacy: 'Gizlilik', copied: 'Soru kopyalandı', shared: 'Paylaşım metni kopyalandı', sessionDone: 'Kartların sonuna geldiniz', removed: 'Kayıtlardan kaldırıldı',
      modeNames: { playful: 'Eğlenceli', connect: 'Yakınlaş', repair: 'Onar' },
      notes: { playful: 'Kişi başı bir dakika ayırın ve akla gelen ilk cevabı paylaşın.', connect: 'Biri cevap verirken çözüm önermeden önce meraklı bir soru sorun.', repair: 'Gözlenebilir tek bir anı söyleyin; kimin daha iyi ya da kötü olduğuna karar vermeyin.' },
      cards: [
        'Bu hafta seni gülümseten küçük şey neydi?',
        'Hiçbir zorunluluğumuz olmadan üç saatimiz olsa birlikte ne yapmayı seçerdin?',
        'Benimle yaşadığın hangi sıradan anı yeniden yaşamak isterdin?',
        'Şu anda hangi düşük bütçeli buluşma eğlenceli gelirdi?',
        'Seni en iyi ne zaman anladığımı hissediyorsun?',
        'Bu hafta hangi sevgi biçimini almak sana en kolay geliyor?',
        'Son zamanlarda göründüğünden daha fazla enerjini alan şey ne?',
        'İlişkimizde korumamızı istediğin bir şey ne?',
        'Son gerilimimizde ikimizin de kabul edebileceği gerçek nedir?',
        'Bu sohbeti daha güvenli ve yavaş hissettirecek ne olurdu?',
        'Bugün sunabileceğim küçük ve somut bir onarım var mı?',
        'Hangi konuyu şimdi durdurup belirli bir zamanda yeniden konuşmalıyız?'
      ]
    },
    de: {
      skip: 'Zum Kartendeck', language: 'Sprache', eyebrow: 'NACH DEM TEST: EIN ECHTES GESPRÄCH', title: 'MBTI-Gesprächskarten für Paare',
      subtitle: 'Keine richtigen Antworten, keine Punktzahl. Zieht eine Karte und hört zu, ohne euch zu korrigieren.', metaCards: '12 Karten', metaPrivate: 'Keine Antworten gespeichert', metaFree: 'Kostenlos',
      typeLabel: 'Übernommener MBTI', chooseKicker: 'HEUTIGE STIMMUNG', chooseTitle: 'Welche Art Gespräch möchtet ihr?',
      modeAll: 'Alle mischen', modeAllDesc: 'Alle 12 Karten', modePlayful: 'Locker', modePlayfulDesc: 'Lachen und vorstellen',
      modeConnect: 'Näher fühlen', modeConnectDesc: 'Bedürfnisse und Gefühle hören', modeRepair: 'Reparieren', modeRepairDesc: 'Langsam neu verbinden',
      readyLabel: 'Bereit', coverText: 'Zieht eine Karte und beginnt das Gespräch', draw: 'Erste Karte ziehen', next: 'Nächste Karte',
      favorite: 'Speichern', saved: 'Gespeichert', copy: 'Kopieren', share: 'Teilen', restart: 'Neu mischen', savedCount: '{count} gespeichert',
      savedKicker: 'FRAGEN ZUM WIEDERAUFNEHMEN', savedTitle: 'Gespeicherte Karten', print: 'Drucken', savedEmpty: 'Speichere eine Frage; nur ihre Kartennummer bleibt auf diesem Gerät.',
      guideKicker: 'SO NUTZT IHR DIE KARTEN', guideTitle: 'Wie ihr zuhört, ist wichtiger als die Antwort',
      guideOneTitle: 'Überspringen ist erlaubt', guideOneText: 'Niemand muss eine Frage beantworten, die gerade nicht passt.',
      guideTwoTitle: 'Erst zusammenfassen', guideTwoText: 'Vor einem Rat: „Was ich gehört habe, ist …“',
      guideThreeTitle: 'Eine Karte nach der anderen', guideThreeText: 'Nehmt Tempo heraus und gebt beiden gleich viel Zeit.',
      boundaryTitle: 'Grenzen dieses Decks', boundaryText: 'MBTI ist nur ein Gesprächseinstieg und beurteilt weder Kompatibilität noch Absichten. Bei Zwang, Drohungen, Gewalt, Überwachung oder Unsicherheit versucht nicht, dies direkt mit Reparaturfragen zu lösen; priorisiert vertrauenswürdige Unterstützung und passende professionelle Hilfe vor Ort.',
      testKicker: 'NEUGIERIG AUF DEINEN TYP?', testTitle: 'Prüfe zuerst deinen MBTI-Liebesstil', testText: 'Ein Testergebnis ist nicht die richtige Kartenantwort, sondern ein Startpunkt für verschiedene Vorlieben.', testAction: 'Kostenlosen Test öffnen',
      home: 'DopaBrain Start', privacy: 'Datenschutz', copied: 'Frage kopiert', shared: 'Text zum Teilen kopiert', sessionDone: 'Ihr seid am Ende des Decks', removed: 'Aus Gespeichert entfernt',
      modeNames: { playful: 'Locker', connect: 'Näher fühlen', repair: 'Reparieren' },
      notes: { playful: 'Nehmt je eine Minute und teilt die erste Antwort, die euch einfällt.', connect: 'Während eine Person antwortet, stellt vor einer Lösung eine neugierige Frage.', repair: 'Nennt einen beobachtbaren Moment, ohne zu entscheiden, wer besser oder schlechter ist.' },
      cards: [
        'Welche Kleinigkeit hat dich diese Woche lächeln lassen?',
        'Wenn wir drei freie Stunden ohne Pflichten hätten, was würdest du für uns auswählen?',
        'Welchen alltäglichen Moment mit mir würdest du gern wiederholen?',
        'Welches günstige Date würde sich gerade schön anfühlen?',
        'Wann fühlst du dich von mir am besten verstanden?',
        'Welche Art von Zuneigung kannst du diese Woche am leichtesten annehmen?',
        'Was kostet dich zuletzt mehr Energie, als es von außen aussieht?',
        'Was möchtest du in unserer Beziehung unbedingt bewahren?',
        'Auf welche Tatsache unserer letzten Spannung können wir uns beide einigen?',
        'Was würde dieses Gespräch sicherer und langsamer machen?',
        'Kann ich heute eine kleine, konkrete Wiedergutmachung anbieten?',
        'Welches Thema sollten wir pausieren und zu einer festen Zeit wieder aufnehmen?'
      ]
    },
    fr: {
      skip: 'Aller aux cartes', language: 'Langue', eyebrow: 'APRÈS LE TEST, UNE VRAIE CONVERSATION', title: 'Cartes de conversation MBTI en couple',
      subtitle: 'Ni bonne réponse ni score. Tirez une carte et écoutez sans corriger l’autre.', metaCards: '12 cartes', metaPrivate: 'Aucune réponse enregistrée', metaFree: 'Gratuit',
      typeLabel: 'MBTI transmis', chooseKicker: 'L’AMBIANCE DU JOUR', chooseTitle: 'Quel type de conversation souhaitez-vous ?',
      modeAll: 'Tout mélanger', modeAllDesc: 'Les 12 cartes', modePlayful: 'Légère', modePlayfulDesc: 'Rire et imaginer',
      modeConnect: 'Se rapprocher', modeConnectDesc: 'Entendre besoins et émotions', modeRepair: 'Réparer', modeRepairDesc: 'Se reconnecter doucement',
      readyLabel: 'Prête', coverText: 'Tirez une carte pour commencer', draw: 'Tirer la première carte', next: 'Carte suivante',
      favorite: 'Garder', saved: 'Gardée', copy: 'Copier', share: 'Partager', restart: 'Remélanger', savedCount: '{count} gardées',
      savedKicker: 'QUESTIONS À REPRENDRE', savedTitle: 'Cartes gardées', print: 'Imprimer', savedEmpty: 'Gardez une question : seul son numéro reste sur cet appareil.',
      guideKicker: 'MODE D’EMPLOI', guideTitle: 'La manière d’écouter compte plus que la réponse',
      guideOneTitle: 'On peut passer', guideOneText: 'Personne ne doit répondre à une question qui ne convient pas maintenant.',
      guideTwoTitle: 'Résumer avant de réparer', guideTwoText: 'Avant un conseil, essayez : « Ce que j’ai entendu, c’est… »',
      guideThreeTitle: 'Une carte à la fois', guideThreeText: 'Ralentissez et donnez le même temps de réponse à chacun.',
      boundaryTitle: 'Les limites de ces cartes', boundaryText: 'Le MBTI sert seulement à lancer la conversation ; il ne juge ni la compatibilité ni les intentions. En cas de contrainte, menace, violence, surveillance ou insécurité, n’essayez pas de régler cela directement avec les questions de réparation ; privilégiez un soutien de confiance et une aide professionnelle locale adaptée.',
      testKicker: 'CURIEUX DE VOTRE TYPE ?', testTitle: 'Découvrez d’abord votre style amoureux MBTI', testText: 'Le résultat n’est pas la bonne réponse à la carte, seulement un point de départ pour nommer des préférences différentes.', testAction: 'Ouvrir le test gratuit',
      home: 'Accueil DopaBrain', privacy: 'Confidentialité', copied: 'Question copiée', shared: 'Texte de partage copié', sessionDone: 'Vous avez atteint la fin des cartes', removed: 'Retirée des cartes gardées',
      modeNames: { playful: 'Légère', connect: 'Se rapprocher', repair: 'Réparer' },
      notes: { playful: 'Prenez une minute chacun et partagez la première réponse qui vient.', connect: 'Pendant que l’un répond, posez une question curieuse avant de proposer une solution.', repair: 'Nommez un moment observable sans décider qui est meilleur ou pire.' },
      cards: [
        'Quelle petite chose vous a fait sourire cette semaine ?',
        'Si nous avions trois heures libres sans obligation, que choisirais-tu de faire ensemble ?',
        'Quel moment ordinaire avec moi aimerais-tu revivre ?',
        'Quel rendez-vous peu coûteux serait amusant maintenant ?',
        'Quand te sens-tu le mieux compris(e) par moi ?',
        'Quelle forme d’affection est la plus facile à recevoir cette semaine ?',
        'Qu’est-ce qui te prend plus d’énergie qu’il n’y paraît récemment ?',
        'Quelle chose veux-tu absolument protéger dans notre relation ?',
        'Sur quel fait de notre tension récente pouvons-nous être d’accord ?',
        'Qu’est-ce qui rendrait cette conversation plus sûre et plus lente ?',
        'Puis-je offrir aujourd’hui une petite réparation concrète ?',
        'Quel sujet devrions-nous mettre en pause et reprendre à une heure précise ?'
      ]
    }
  };

  function detectLanguage() {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('lang');
    if (SUPPORTED.includes(requested)) return requested;
    const saved = localStorage.getItem('app_language');
    if (SUPPORTED.includes(saved)) return saved;
    const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(browser) ? browser : 'en';
  }

  function cleanParam(value, maxLength) {
    return String(value || '').replace(/[^a-zA-Z0-9_-]/g, '').slice(0, maxLength || 48);
  }

  const params = new URLSearchParams(window.location.search);
  const source = cleanParam(params.get('source'), 48) || 'direct';
  const mbti = /^[EI][NS][TF][JP]$/.test(String(params.get('mbti') || '').toUpperCase())
    ? String(params.get('mbti')).toUpperCase()
    : '';
  let lang = detectLanguage();
  let mode = 'all';
  let queue = [];
  let sessionSize = 12;
  let drawn = 0;
  let currentId = null;
  let favorites = loadFavorites();
  let toastTimer = null;

  const elements = {
    language: document.getElementById('language-select'),
    typeChip: document.getElementById('type-chip'),
    modeButtons: Array.from(document.querySelectorAll('.mode-btn')),
    progressLabel: document.getElementById('progress-label'),
    favoriteLabel: document.getElementById('favorite-label'),
    progressFill: document.getElementById('progress-fill'),
    card: document.getElementById('conversation-card'),
    cover: document.getElementById('card-cover'),
    face: document.getElementById('card-face'),
    number: document.getElementById('card-number'),
    mode: document.getElementById('card-mode'),
    question: document.getElementById('card-question'),
    note: document.getElementById('card-note'),
    draw: document.getElementById('draw-btn'),
    next: document.getElementById('next-btn'),
    actions: document.getElementById('card-actions'),
    favorite: document.getElementById('favorite-btn'),
    copy: document.getElementById('copy-btn'),
    share: document.getElementById('share-btn'),
    restart: document.getElementById('restart-btn'),
    savedList: document.getElementById('saved-list'),
    emptySaved: document.getElementById('empty-saved'),
    print: document.getElementById('print-btn'),
    testLinks: [document.getElementById('test-link-top'), document.getElementById('test-link-bottom')],
    ad: document.getElementById('deck-ad'),
    toast: document.getElementById('toast')
  };

  function track(name, extra) {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, Object.assign({
      event_category: 'couple_deck',
      app_name: 'mbti-love',
      content_format: 'conversation_card_deck',
      source: source,
      lang: lang,
      conversation_mode: mode,
      mbti_type: mbti,
      revenue_goal: 'daily_0_10'
    }, extra || {}));
  }

  function loadFavorites() {
    try {
      const parsed = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
      return new Set(Array.isArray(parsed) ? parsed.filter(id => Number.isInteger(id) && id >= 0 && id < 12) : []);
    } catch (_) {
      return new Set();
    }
  }

  function saveFavorites() {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(favorites)));
    } catch (_) {}
  }

  function shuffled(values) {
    const result = values.slice();
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function buildQueue() {
    const ids = COPY.en.cards.map((_, index) => index).filter(id => mode === 'all' || CARD_MODES[id] === mode);
    queue = shuffled(ids);
    sessionSize = ids.length;
    drawn = 0;
    currentId = null;
  }

  function applyTranslations() {
    const locale = COPY[lang] || COPY.en;
    document.documentElement.lang = lang;
    document.title = `${locale.title} | DopaBrain`;
    document.querySelectorAll('[data-t]').forEach(node => {
      const value = locale[node.getAttribute('data-t')];
      if (typeof value === 'string') node.textContent = value;
    });
    elements.language.value = lang;
    if (mbti) {
      elements.typeChip.textContent = `${locale.typeLabel}: ${mbti}`;
      elements.typeChip.classList.remove('hidden');
    }
    updateTestLinks();
    renderProgress();
    renderCurrent();
    renderFavorites();
    syncSeo();
  }

  function syncSeo() {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    if (source !== 'direct') url.searchParams.set('source', source);
    if (mbti) url.searchParams.set('mbti', mbti);
    window.history.replaceState({}, '', url.pathname + '?' + url.searchParams.toString());
    const alternate = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
    const canonical = document.querySelector('link[rel="canonical"]');
    const og = document.querySelector('meta[property="og:url"]');
    if (alternate && canonical) canonical.href = alternate.href;
    if (alternate && og) og.content = alternate.href;
  }

  function updateTestLinks() {
    elements.testLinks.forEach((link, index) => {
      if (!link) return;
      const url = new URL('/mbti-love/', window.location.origin);
      url.searchParams.set('lang', lang);
      url.searchParams.set('source', 'couple_deck');
      url.searchParams.set('surface', index === 0 ? 'deck_header' : 'deck_footer');
      link.href = url.pathname + url.search;
    });
  }

  function renderProgress() {
    const locale = COPY[lang] || COPY.en;
    elements.progressLabel.textContent = `${drawn} / ${sessionSize}`;
    elements.favoriteLabel.textContent = locale.savedCount.replace('{count}', String(favorites.size));
    elements.progressFill.style.width = `${sessionSize ? Math.round((drawn / sessionSize) * 100) : 0}%`;
  }

  function renderCurrent() {
    const locale = COPY[lang] || COPY.en;
    if (currentId === null) {
      elements.cover.classList.remove('hidden');
      elements.face.classList.add('hidden');
      elements.number.textContent = '01';
      elements.mode.textContent = locale.readyLabel;
      elements.actions.classList.add('hidden');
      elements.next.classList.add('hidden');
      elements.draw.classList.remove('hidden');
      elements.restart.classList.add('hidden');
      return;
    }
    const cardMode = CARD_MODES[currentId];
    elements.cover.classList.add('hidden');
    elements.face.classList.remove('hidden');
    elements.number.textContent = String(currentId + 1).padStart(2, '0');
    elements.mode.textContent = locale.modeNames[cardMode];
    elements.question.textContent = locale.cards[currentId];
    elements.note.textContent = locale.notes[cardMode];
    elements.actions.classList.remove('hidden');
    elements.draw.classList.add('hidden');
    elements.next.classList.toggle('hidden', queue.length === 0);
    elements.restart.classList.toggle('hidden', queue.length !== 0);
    renderFavoriteButton();
  }

  function renderFavoriteButton() {
    const locale = COPY[lang] || COPY.en;
    const isSaved = currentId !== null && favorites.has(currentId);
    elements.favorite.classList.toggle('is-saved', isSaved);
    elements.favorite.querySelector('span:first-child').textContent = isSaved ? '♥' : '♡';
    elements.favorite.querySelector('span:last-child').textContent = isSaved ? locale.saved : locale.favorite;
    elements.favorite.setAttribute('aria-pressed', isSaved ? 'true' : 'false');
  }

  function renderFavorites() {
    const locale = COPY[lang] || COPY.en;
    elements.savedList.textContent = '';
    Array.from(favorites).sort((a, b) => a - b).forEach(id => {
      const item = document.createElement('li');
      const index = document.createElement('span');
      index.className = 'saved-index';
      index.textContent = String(id + 1).padStart(2, '0');
      const question = document.createElement('span');
      question.className = 'saved-question';
      question.textContent = locale.cards[id];
      const remove = document.createElement('button');
      remove.className = 'saved-remove';
      remove.type = 'button';
      remove.setAttribute('aria-label', `${locale.saved} ${id + 1}`);
      remove.dataset.cardId = String(id);
      remove.textContent = '×';
      item.append(index, question, remove);
      elements.savedList.appendChild(item);
    });
    elements.emptySaved.classList.toggle('hidden', favorites.size > 0);
    elements.print.disabled = favorites.size === 0;
    renderProgress();
  }

  function drawCard() {
    if (!queue.length) return;
    currentId = queue.shift();
    drawn += 1;
    elements.card.classList.remove('card-enter');
    void elements.card.offsetWidth;
    elements.card.classList.add('card-enter');
    renderCurrent();
    renderProgress();
    track('couple_deck_card_view', {
      card_id: currentId + 1,
      card_mode: CARD_MODES[currentId],
      card_position: drawn,
      cards_remaining: queue.length
    });
    if (!queue.length) {
      track('couple_deck_session_complete', { cards_viewed: drawn, saved_count: favorites.size });
      showToast((COPY[lang] || COPY.en).sessionDone);
    }
  }

  function resetDeck(nextMode, reason) {
    mode = nextMode || mode;
    buildQueue();
    renderCurrent();
    renderProgress();
    elements.modeButtons.forEach(button => {
      const active = button.dataset.mode === mode;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    if (reason) track('couple_deck_reset', { reset_reason: reason, session_size: sessionSize });
  }

  function toggleFavorite() {
    if (currentId === null) return;
    const adding = !favorites.has(currentId);
    if (adding) favorites.add(currentId);
    else favorites.delete(currentId);
    saveFavorites();
    renderFavoriteButton();
    renderFavorites();
    track('couple_deck_favorite', { card_id: currentId + 1, card_mode: CARD_MODES[currentId], action: adding ? 'save' : 'remove', saved_count: favorites.size });
  }

  function copyText(text, successKey, eventName) {
    const done = () => {
      showToast((COPY[lang] || COPY.en)[successKey]);
      track(eventName, { card_id: currentId === null ? 0 : currentId + 1, card_mode: currentId === null ? '' : CARD_MODES[currentId] });
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  }

  function fallbackCopy(text, done) {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    try { document.execCommand('copy'); done(); } catch (_) {}
    area.remove();
  }

  function currentShareText() {
    const locale = COPY[lang] || COPY.en;
    if (currentId === null) return locale.title;
    return `${locale.title}\n${locale.modeNames[CARD_MODES[currentId]]} · ${String(currentId + 1).padStart(2, '0')}\n\n${locale.cards[currentId]}\n\nhttps://dopabrain.com/mbti-love/deck.html?lang=${encodeURIComponent(lang)}&source=deck_share`;
  }

  function shareCurrent() {
    if (currentId === null) return;
    const locale = COPY[lang] || COPY.en;
    const text = currentShareText();
    if (navigator.share) {
      navigator.share({ title: locale.title, text, url: `https://dopabrain.com/mbti-love/deck.html?lang=${encodeURIComponent(lang)}&source=deck_share` })
        .then(() => track('couple_deck_share', { method: 'native', card_id: currentId + 1, card_mode: CARD_MODES[currentId] }))
        .catch(error => {
          if (error && error.name !== 'AbortError') copyText(text, 'shared', 'couple_deck_share_copy');
        });
    } else {
      copyText(text, 'shared', 'couple_deck_share_copy');
    }
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.add('is-visible');
    toastTimer = window.setTimeout(() => elements.toast.classList.remove('is-visible'), 2200);
  }

  elements.modeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const nextMode = button.dataset.mode;
      if (!['all', 'playful', 'connect', 'repair'].includes(nextMode)) return;
      resetDeck(nextMode, 'mode_change');
      track('couple_deck_mode_select', { selected_mode: nextMode, session_size: sessionSize });
    });
  });
  elements.draw.addEventListener('click', drawCard);
  elements.next.addEventListener('click', () => {
    track('couple_deck_next', { previous_card_id: currentId === null ? 0 : currentId + 1 });
    drawCard();
  });
  elements.restart.addEventListener('click', () => resetDeck(mode, 'session_restart'));
  elements.favorite.addEventListener('click', toggleFavorite);
  elements.copy.addEventListener('click', () => {
    if (currentId !== null) copyText(currentShareText(), 'copied', 'couple_deck_copy');
  });
  elements.share.addEventListener('click', shareCurrent);
  elements.savedList.addEventListener('click', event => {
    const button = event.target.closest('.saved-remove');
    if (!button) return;
    const id = Number(button.dataset.cardId);
    if (!Number.isInteger(id)) return;
    favorites.delete(id);
    saveFavorites();
    renderFavorites();
    renderFavoriteButton();
    showToast((COPY[lang] || COPY.en).removed);
    track('couple_deck_favorite', { card_id: id + 1, card_mode: CARD_MODES[id], action: 'remove_from_list', saved_count: favorites.size });
  });
  elements.print.addEventListener('click', () => {
    track('couple_deck_print', { saved_count: favorites.size });
    window.print();
  });
  elements.testLinks.forEach((link, index) => {
    if (!link) return;
    link.addEventListener('click', () => track('couple_deck_test_click', { surface: index === 0 ? 'header' : 'footer', saved_count: favorites.size }));
  });
  elements.language.addEventListener('change', () => {
    const nextLang = elements.language.value;
    if (!SUPPORTED.includes(nextLang) || nextLang === lang) return;
    lang = nextLang;
    localStorage.setItem('app_language', lang);
    applyTranslations();
    track('couple_deck_language_change', { selected_language: lang });
  });

  function initializeAd() {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (_) {}
    let sent = false;
    const send = () => {
      if (sent) return;
      sent = true;
      track('couple_deck_ad_impression', { ad_surface: 'deck_inline' });
    };
    if ('IntersectionObserver' in window && elements.ad) {
      const observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting && entry.intersectionRatio >= 0.35)) {
          send();
          observer.disconnect();
        }
      }, { threshold: [0.35] });
      observer.observe(elements.ad);
    } else {
      send();
    }
  }

  buildQueue();
  applyTranslations();
  initializeAd();
  track('couple_deck_view', { saved_count: favorites.size, session_size: sessionSize });
})();
