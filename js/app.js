// MBTI Love Compatibility Test - App Logic

// Initialize i18n with error handling
(async function initI18n() {
    try {
        await i18n.loadTranslations(i18n.getCurrentLanguage());
        i18n.updateUI();
    } catch (e) {
        console.warn('i18n load failed:', e.message);
    }

    const langToggle = document.getElementById('lang-toggle');
    const langMenu = document.getElementById('lang-menu');
    const langOptions = document.querySelectorAll('.lang-option');
    const langOptionActive = document.querySelector(`[data-lang="${i18n.getCurrentLanguage()}"]`);
    if (langOptionActive) langOptionActive.classList.add('active');

    if (langToggle && langMenu) {
        langToggle.addEventListener('click', () => langMenu.classList.toggle('hidden'));
    }

    document.addEventListener('click', (e) => {
        if (langMenu && !e.target.closest('.language-selector')) langMenu.classList.add('hidden');
    });

    langOptions.forEach(opt => {
        opt.addEventListener('click', async () => {
            const lang = opt.getAttribute('data-lang');
            if (lang) {
                try {
                    await i18n.setLanguage(lang);
                } catch (e) {
                    console.warn('Language change failed:', e.message);
                }
                langOptions.forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
                if (langMenu) langMenu.classList.add('hidden');
            }
        });
    });
})();

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
        // GA4: 테스트 시작
        if (typeof gtag === 'function') {
            gtag('event', 'test_start', {
                app_name: 'mbti-love',
                test_type: 'mbti_love',
                content_type: 'test'
            });
        }
    }

    function showQuestion() {
        const q = QUESTIONS[currentQ];
        const total = QUESTIONS.length;
        document.getElementById('progress-fill').style.width = `${(currentQ / total) * 100}%`;
        document.getElementById('progress-text').textContent = `${currentQ + 1} / ${total}`;
        document.getElementById('q-text').textContent = q.text;
        i18n.updateUI();

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

        // GA4: 테스트 완료
        if (typeof gtag === 'function') {
            gtag('event', 'test_complete', {
                app_name: 'mbti-love',
                test_type: 'mbti_love',
                result_type: myType
            });
        }
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

    // Share - 향상된 버전
    function getShareText() {
        const style = STYLES[myType];
        const top = MBTI_TYPES.filter(t => t !== myType)
            .map(t => ({ type: t, score: calcCompat(myType, t) }))
            .sort((a, b) => b.score - a.score)[0];

        return {
            title: i18n.t('share.inviteText').replace('{type}', myType).replace('{emoji}', style.emoji).replace('{score}', top.score),
            shortText: `💕 ${myType} - ${style.title} ${style.emoji}`,
            fullText: `💕 내 연애 스타일은 "${style.title}" ${style.emoji}\nMBTI: ${myType}\n\n${STYLES[top.type].emoji} ${top.type}랑 ${top.score}% 궁합!\n\n너는 어떤 스타일? 👇\nhttps://dopabrain.com/mbti-love/\n\n#MBTI연애 #궁합테스트 #연애스타일`,
            url: 'https://dopabrain.com/mbti-love/'
        };
    }

    function shareResult() {
        const shareData = getShareText();
        const shareModal = document.getElementById('share-modal');
        shareModal.classList.remove('hidden');

        gtag('event', 'share_modal_open', { test_type: 'mbti_love' });
    }

    // 공유 버튼 이벤트
    function setupShareButtons() {
        const shareModal = document.getElementById('share-modal');
        const shareClose = document.getElementById('share-close');
        const shareData = getShareText();

        // 모달 닫기
        shareClose.addEventListener('click', () => {
            shareModal.classList.add('hidden');
        });
        shareModal.addEventListener('click', (e) => {
            if (e.target === shareModal) shareModal.classList.add('hidden');
        });

        // 트위터 공유
        document.getElementById('share-twitter')?.addEventListener('click', () => {
            const text = encodeURIComponent(shareData.title);
            const url = `https://x.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareData.url)}`;
            window.open(url, '_blank', 'width=550,height=420');
            gtag('event', 'share', { method: 'twitter', test_type: 'mbti_love' });
        });

        // 페이스북 공유
        document.getElementById('share-facebook')?.addEventListener('click', () => {
            const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`;
            window.open(url, '_blank', 'width=550,height=420');
            gtag('event', 'share', { method: 'facebook', test_type: 'mbti_love' });
        });

        // 카카오톡 공유 (URL만 공유)
        document.getElementById('share-kakaotalk')?.addEventListener('click', () => {
            navigator.clipboard.writeText(shareData.url).then(() => {
                alert(i18n.t('share.copied'));
            }).catch(() => {});
            gtag('event', 'share', { method: 'kakaotalk', test_type: 'mbti_love' });
        });

        // 링크 복사
        document.getElementById('share-copy')?.addEventListener('click', () => {
            navigator.clipboard.writeText(`${shareData.title}\n${shareData.url}`).then(() => {
                alert(i18n.t('share.copied'));
            }).catch(() => {});
            gtag('event', 'share', { method: 'copy', test_type: 'mbti_love' });
        });

        // 네이티브 공유
        document.getElementById('share-native')?.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: shareData.title,
                    text: shareData.fullText,
                    url: shareData.url
                }).then(() => {
                    gtag('event', 'share', { method: 'native', test_type: 'mbti_love' });
                }).catch(() => {});
            } else {
                alert(i18n.t('share.copied'));
            }
        });
    }

    // Generate & save image
    function saveImage() {
        generateShareImage(() => {
            const canvas = document.getElementById('share-canvas');
            const link = document.createElement('a');
            link.download = `MBTI연애_${myType}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            gtag('event', 'save_image', { test_type: 'mbti_love' });
        });
    }

    function generateShareImage(callback) {
        const canvas = document.getElementById('share-canvas');
        const ctx = canvas.getContext('2d');
        const w = 1080, h = 1080;
        const style = STYLES[myType];

        canvas.width = w;
        canvas.height = h;

        // BG
        const grad = ctx.createLinearGradient(0, 0, w, h);
        grad.addColorStop(0, style.color); grad.addColorStop(1, '#0a0a1e');
        ctx.fillStyle = grad; ctx.fillRect(0, 0, w, h);

        // Pattern - decorative circles
        ctx.fillStyle = 'rgba(255,255,255,0.02)';
        for (let i = 0; i < 40; i++) {
            ctx.beginPath();
            ctx.arc(Math.random()*w, Math.random()*h, Math.random()*60+10, 0, Math.PI*2);
            ctx.fill();
        }

        // Hearts pattern
        ctx.fillStyle = 'rgba(255,255,255,0.01)';
        for (let i = 0; i < 20; i++) {
            const x = Math.random()*w;
            const y = Math.random()*h;
            ctx.fillText('💕', x, y);
        }

        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.font = '32px sans-serif';
        ctx.fillText('나의 MBTI 연애 스타일은', w/2, 140);

        ctx.font = '130px serif'; ctx.fillStyle = '#fff'; ctx.fillText(style.emoji, w/2, 320);
        ctx.fillStyle = '#fff'; ctx.font = 'bold 80px sans-serif';
        ctx.fillText(myType, w/2, 440);
        ctx.font = 'bold 48px sans-serif'; ctx.fillText(`"${style.title}"`, w/2, 530);

        const top = MBTI_TYPES.filter(t => t !== myType)
            .map(t => ({ type: t, score: calcCompat(myType, t) }))
            .sort((a, b) => b.score - a.score)[0];
        ctx.fillStyle = 'rgba(255,255,255,0.8)'; ctx.font = 'bold 36px sans-serif';
        ctx.fillText(`💕 최고 궁합: ${top.type}`, w/2, 630);
        ctx.font = '32px sans-serif'; ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fillText(`${top.score}% 궁합`, w/2, 680);

        // Divider
        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(w*0.15, 720);
        ctx.lineTo(w*0.85, 720);
        ctx.stroke();

        ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.font = '28px sans-serif';
        ctx.fillText('너는 어떤 스타일? 👇', w/2, 820);
        ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.font = '26px sans-serif';
        ctx.fillText('MBTI 연애 궁합 테스트', w/2, 870);

        ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '22px sans-serif';
        ctx.fillText('🔥 DopaBrain', w/2, 1020);

        if (callback) callback();
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

    // 공유 버튼 초기화
    setupShareButtons();

    if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
})();
