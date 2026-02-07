// MBTI Love Compatibility Test - App Logic
(function () {
    'use strict';

    let currentQ = 0;
    let answers = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    let myType = '';
    let partnerType = '';

    const introScreen = document.getElementById('intro-screen');
    const questionScreen = document.getElementById('question-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const resultScreen = document.getElementById('result-screen');
    const compatScreen = document.getElementById('compat-screen');
    const adOverlay = document.getElementById('ad-overlay');

    function show(screen) {
        [introScreen, questionScreen, loadingScreen, resultScreen, compatScreen].forEach(s => {
            s.classList.add('hidden'); s.classList.remove('active');
        });
        screen.classList.remove('hidden'); screen.classList.add('active');
    }

    // Start
    function startTest() {
        currentQ = 0;
        answers = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        show(questionScreen);
        showQuestion();
        gtag('event', 'test_start', { test_type: 'mbti_love' });
    }

    function showQuestion() {
        const q = QUESTIONS[currentQ];
        const total = QUESTIONS.length;
        document.getElementById('progress-fill').style.width = `${(currentQ / total) * 100}%`;
        document.getElementById('progress-text').textContent = `${currentQ + 1} / ${total}`;
        document.getElementById('q-text').textContent = q.text;

        const opts = document.getElementById('q-options');
        const shuffled = Math.random() > 0.5 ? q.options : [...q.options].reverse();
        opts.innerHTML = shuffled.map((o, i) => `
            <button class="option-btn" data-dim="${o.dim}" data-val="${o.val}" style="animation-delay:${i*0.1}s">${o.text}</button>
        `).join('');

        const card = document.getElementById('question-card');
        card.classList.remove('slide-in'); void card.offsetWidth; card.classList.add('slide-in');

        opts.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', () => selectOption(btn));
        });
    }

    function selectOption(btn) {
        document.querySelectorAll('.option-btn').forEach(o => o.disabled = true);
        btn.classList.add('selected');
        answers[btn.dataset.val]++;

        setTimeout(() => {
            currentQ++;
            if (currentQ < QUESTIONS.length) showQuestion();
            else showLoading();
        }, 350);
    }

    function showLoading() {
        show(loadingScreen);
        const fill = document.getElementById('loading-fill');
        let p = 0;
        const iv = setInterval(() => {
            p += Math.random() * 18 + 5;
            if (p >= 100) { p = 100; clearInterval(iv); setTimeout(showResult, 300); }
            fill.style.width = `${p}%`;
        }, 180);
    }

    function showResult() {
        // Calculate MBTI type
        const ei = answers.E >= answers.I ? 'E' : 'I';
        const sn = answers.N >= answers.S ? 'N' : 'S';
        const tf = answers.F >= answers.T ? 'F' : 'T';
        const jp = answers.J >= answers.P ? 'J' : 'P';
        myType = ei + sn + tf + jp;

        const style = STYLES[myType];
        show(resultScreen);

        document.getElementById('r-type').textContent = myType;
        document.getElementById('r-type').style.color = style.color;
        document.getElementById('r-emoji').textContent = style.emoji;
        document.getElementById('r-title').textContent = `"${style.title}"`;
        document.getElementById('r-desc').textContent = style.desc;
        document.getElementById('r-keywords').innerHTML = style.keywords.map(k => `<span class="keyword">${k}</span>`).join('');
        document.getElementById('r-ideal').textContent = style.idealType;
        document.getElementById('r-tip').textContent = style.tip;

        // Top 3 matches
        const matches = MBTI_TYPES.filter(t => t !== myType)
            .map(t => ({ type: t, score: calcCompat(myType, t) }))
            .sort((a, b) => b.score - a.score);

        document.getElementById('r-top3').innerHTML = matches.slice(0, 3).map((m, i) => {
            const s = STYLES[m.type];
            const lvl = getCompatLevel(m.score);
            return `<div class="match-item">
                <span class="match-rank">${i + 1}위</span>
                <span class="match-emoji">${s.emoji}</span>
                <span class="match-info"><strong>${m.type}</strong> ${s.title}</span>
                <span class="match-score" style="color:${s.color}">${m.score}%</span>
            </div>`;
        }).join('');

        // Bottom 2
        document.getElementById('r-bottom2').innerHTML = matches.slice(-2).reverse().map(m => {
            const s = STYLES[m.type];
            return `<div class="match-item caution">
                <span class="match-emoji">${s.emoji}</span>
                <span class="match-info"><strong>${m.type}</strong> ${s.title}</span>
                <span class="match-score">${m.score}%</span>
            </div>`;
        }).join('');

        // Premium hidden
        document.getElementById('premium-result').classList.add('hidden');

        gtag('event', 'test_complete', { test_type: 'mbti_love', result: myType });
        resultScreen.scrollTop = 0;
    }

    // Compat check
    function showCompatCheck() {
        show(compatScreen);
        renderCompatGrid();
    }

    function renderCompatGrid() {
        const grid = document.getElementById('compat-grid');
        grid.innerHTML = MBTI_TYPES.map(t => {
            const s = STYLES[t];
            const active = t === partnerType ? 'active' : '';
            return `<button class="compat-type-btn ${active}" data-type="${t}" style="--tc:${s.color}">${s.emoji}<br><small>${t}</small></button>`;
        }).join('');

        grid.querySelectorAll('.compat-type-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                partnerType = btn.dataset.type;
                renderCompatGrid();
                showCompatResult();
            });
        });
    }

    function showCompatResult() {
        const el = document.getElementById('compat-result-area');
        if (!partnerType) { el.innerHTML = ''; return; }

        const score = calcCompat(myType, partnerType);
        const level = getCompatLevel(score);
        const desc = getCompatDesc(myType, partnerType, score);
        const s1 = STYLES[myType], s2 = STYLES[partnerType];

        el.innerHTML = `
            <div class="compat-result-card">
                <div class="compat-pair">
                    <div class="compat-person"><span>${s1.emoji}</span><strong>${myType}</strong></div>
                    <div class="compat-heart">${level.emoji}</div>
                    <div class="compat-person"><span>${s2.emoji}</span><strong>${partnerType}</strong></div>
                </div>
                <div class="compat-score-big">${score}%</div>
                <div class="compat-level ${level.cls}">${level.label}</div>
                <p class="compat-desc">${desc}</p>
            </div>
        `;
        el.scrollIntoView({ behavior: 'smooth' });
    }

    // Share
    function shareResult() {
        const style = STYLES[myType];
        const top = MBTI_TYPES.filter(t => t !== myType)
            .map(t => ({ type: t, score: calcCompat(myType, t) }))
            .sort((a, b) => b.score - a.score)[0];
        const url = 'https://swp1234.github.io/mbti-love/';

        const text = `💕 내 연애 스타일은 "${style.title}" ${style.emoji}\nMBTI: ${myType}\n\n${STYLES[top.type].emoji} ${top.type}랑 ${top.score}% 궁합!\n\n너는 어떤 스타일? 👇\n${url}\n\n#MBTI연애 #궁합테스트 #연애스타일`;

        gtag('event', 'share', { method: 'native', test_type: 'mbti_love' });

        if (navigator.share) {
            navigator.share({ title: `나의 MBTI 연애 스타일: ${style.title}`, text, url }).catch(() => {});
        } else {
            navigator.clipboard.writeText(text).then(() => alert('결과가 복사되었습니다! 💕')).catch(() => {});
        }
    }

    // Save image
    function saveImage() {
        const canvas = document.getElementById('share-canvas');
        const ctx = canvas.getContext('2d');
        const w = 1080, h = 1080;
        const style = STYLES[myType];

        // BG
        const grad = ctx.createLinearGradient(0, 0, w, h);
        grad.addColorStop(0, style.color); grad.addColorStop(1, '#0a0a1e');
        ctx.fillStyle = grad; ctx.fillRect(0, 0, w, h);

        // Pattern
        ctx.fillStyle = 'rgba(255,255,255,0.02)';
        for (let i = 0; i < 30; i++) { ctx.beginPath(); ctx.arc(Math.random()*w, Math.random()*h, Math.random()*50+10, 0, Math.PI*2); ctx.fill(); }

        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.font = '30px sans-serif';
        ctx.fillText('나의 MBTI 연애 스타일은', w/2, 160);

        ctx.font = '120px serif'; ctx.fillText(style.emoji, w/2, 330);
        ctx.fillStyle = '#fff'; ctx.font = 'bold 72px sans-serif';
        ctx.fillText(myType, w/2, 450);
        ctx.font = 'bold 44px sans-serif'; ctx.fillText(`"${style.title}"`, w/2, 530);

        const top = MBTI_TYPES.filter(t => t !== myType)
            .map(t => ({ type: t, score: calcCompat(myType, t) }))
            .sort((a, b) => b.score - a.score)[0];
        ctx.fillStyle = 'rgba(255,255,255,0.7)'; ctx.font = '32px sans-serif';
        ctx.fillText(`💕 최고 궁합: ${top.type} (${top.score}%)`, w/2, 650);

        ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.font = '26px sans-serif';
        ctx.fillText('너는 어떤 스타일? 👉 MBTI 연애 궁합 테스트', w/2, 900);
        ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '20px sans-serif';
        ctx.fillText('🔥 FireTools', w/2, 1010);

        const link = document.createElement('a');
        link.download = `MBTI연애_${myType}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        gtag('event', 'save_image', { test_type: 'mbti_love' });
    }

    // Premium
    function showPremium() {
        adOverlay.classList.remove('hidden');
        const cd = document.getElementById('ad-countdown');
        const cb = document.getElementById('btn-close-ad');
        let c = 5; cb.classList.add('hidden'); cd.textContent = c;
        const iv = setInterval(() => { c--; cd.textContent = c; if (c <= 0) { clearInterval(iv); cb.classList.remove('hidden'); } }, 1000);
        cb.onclick = () => { adOverlay.classList.add('hidden'); displayPremium(); };
        gtag('event', 'premium_click', { test_type: 'mbti_love' });
    }

    function displayPremium() {
        const p = PREMIUM[myType];
        const el = document.getElementById('premium-result');
        const content = document.getElementById('premium-content');

        content.innerHTML = `
            <div class="prem-section"><h4>📊 연애 패턴 분석</h4>
                <div class="pattern-timeline">
                    <div class="pattern-item"><span class="pattern-label">초반 (1~3개월)</span><p>${p.pattern.early}</p></div>
                    <div class="pattern-item"><span class="pattern-label">중반 (3~12개월)</span><p>${p.pattern.mid}</p></div>
                    <div class="pattern-item"><span class="pattern-label">장기 (1년+)</span><p>${p.pattern.long}</p></div>
                </div>
            </div>
            <div class="prem-section"><h4>💡 연애 성공 팁 5가지</h4>
                <ul>${p.tips.map(t => `<li>${t}</li>`).join('')}</ul>
            </div>
            <div class="prem-section"><h4>🎯 추천 데이트 코스</h4>
                <ul>${p.dates.map(d => `<li>${d}</li>`).join('')}</ul>
            </div>
        `;
        el.classList.remove('hidden');
        el.scrollIntoView({ behavior: 'smooth' });
        gtag('event', 'premium_view', { test_type: 'mbti_love' });
    }

    // Events
    document.getElementById('btn-start').addEventListener('click', startTest);
    document.getElementById('btn-share').addEventListener('click', shareResult);
    document.getElementById('btn-save-image').addEventListener('click', saveImage);
    document.getElementById('btn-premium').addEventListener('click', showPremium);
    document.getElementById('btn-compat').addEventListener('click', showCompatCheck);
    document.getElementById('btn-compat-back').addEventListener('click', () => show(resultScreen));
    document.getElementById('btn-retry').addEventListener('click', () => {
        document.getElementById('premium-result').classList.add('hidden');
        show(introScreen);
    });

    if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
})();
