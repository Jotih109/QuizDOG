/**
 * QuizDOG - Main Application Script
 * Dynamic dog breed guessing game with Dog CEO API integration, Brazilian Portuguese translations,
 * Keyboard shortcuts, Dark/Light theme switching, and Arcade/Gamer experience.
 */

document.addEventListener('DOMContentLoaded', () => {
    // API Endpoints
    const RANDOM_DOG_API = 'https://dog.ceo/api/breeds/image/random';
    const ALL_BREEDS_API = 'https://dog.ceo/api/breeds/list/all';

    // Dicionário de tradução de raças para Português do Brasil (PT-BR)
    const BREED_TRANSLATIONS = {
        'germanshepherd': 'Pastor Alemão',
        'shepherd-german': 'Pastor Alemão',
        'shepherd-australian': 'Pastor Australiano',
        'shepherd-swiss': 'Pastor Suíço',
        
        'retriever-golden': 'Golden Retriever',
        'retriever-labrador': 'Labrador Retriever',
        'retriever-chesapeake': 'Retriever de Chesapeake',
        'retriever-flatcoated': 'Retriever de Pêlo Liso',
        'retriever-curly': 'Retriever de Pêlo Encaracolado',
        
        'poodle-toy': 'Poodle Toy',
        'poodle-miniature': 'Poodle Miniatura',
        'poodle-standard': 'Poodle Gigante',
        'poodle-medium': 'Poodle Médio',
        'poodle': 'Poodle',
        
        'bulldog-french': 'Bulldog Francês',
        'bulldog-english': 'Bulldog Inglês',
        'bulldog-boston': 'Boston Terrier',
        'bulldog': 'Bulldog',
        
        'pomeranian': 'Lulu da Pomerânia (Spitz Alemão)',
        'beagle': 'Beagle',
        'boxer': 'Boxer',
        'dachshund': 'Teckel (Salsicha)',
        'husky': 'Husky Siberiano',
        'husky-siberian': 'Husky Siberiano',
        'rottweiler': 'Rottweiler',
        'yorkshire': 'Yorkshire Terrier',
        'terrier-yorkshire': 'Yorkshire Terrier',
        'chihuahua': 'Chihuahua',
        'pug': 'Pug',
        'shihtzu': 'Shih Tzu',
        'shih-tzu': 'Shih Tzu',
        'maltese': 'Maltês',
        'doberman': 'Dobermann',
        'stbernard': 'São Bernardo',
        'saint-bernard': 'São Bernardo',
        'dane-great': 'Dogue Alemão',
        'great-dane': 'Dogue Alemão',
        'chow': 'Chow Chow',
        'akita': 'Akita',
        'samoyed': 'Samoieda',
        'pinscher-miniature': 'Pinscher Miniatura',
        'pinscher-german': 'Pinscher Alemão',
        'pinscher': 'Pinscher',
        
        'collie-border': 'Border Collie',
        'border-collie': 'Border Collie',
        'collie': 'Collie',
        'basset': 'Basset Hound',
        'basset-hound': 'Basset Hound',
        'spaniel-cocker': 'Cocker Spaniel',
        'cocker-spaniel': 'Cocker Spaniel',
        'schnauzer': 'Schnauzer',
        'schnauzer-miniature': 'Schnauzer Miniatura',
        'schnauzer-giant': 'Schnauzer Gigante',
        
        'pitbull': 'Pitbull',
        'dalmatian': 'Dálmata',
        'corgi-cardigan': 'Corgi Cardigan',
        'corgi-pembroke': 'Corgi Pembroke',
        'corgi': 'Corgi',
        'shiba': 'Shiba Inu',
        'sharpei': 'Shar Pei',
        'whippet': 'Whippet',
        'greyhound': 'Galgo (Greyhound)',
        'bloodhound': 'Bloodhound (Cão de Fila)',
        
        'mastiff': 'Mastim',
        'mastiff-bull': 'Bullmastiff',
        'mastiff-english': 'Mastim Inglês',
        'mastiff-tibetan': 'Mastim Tibetano',
        
        'terrier-bull': 'Bull Terrier',
        'terrier-fox': 'Fox Terrier',
        'terrier-jackrussell': 'Jack Russell Terrier',
        'terrier-staffordshire': 'Staffordshire Bull Terrier',
        'terrier-american': 'American Staffordshire Terrier',
        'terrier-airdale': 'Airedale Terrier',
        'terrier-boston': 'Boston Terrier',
        'terrier-scottish': 'Terrier Escocês',
        'terrier-westighland': 'West Highland White Terrier',
        'terrier-silky': 'Terrier Sedoso',
        'terrier-patterdale': 'Patterdale Terrier',
        
        'sheepdog-shetland': 'Pastor de Shetland',
        'sheepdog-english': 'Old English Sheepdog',
        
        'mountain-bernese': 'Bernese (Boiadeiro Bernês)',
        'bernese-mountain': 'Bernese (Boiadeiro Bernês)',
        'mountain-swiss': 'Grande Boiadeiro Suíço',
        
        'pekinese': 'Pequinês',
        'papillon': 'Papillon',
        'pointer-german': 'Pointer Alemão',
        'pointer': 'Pointer',
        'vizsla': 'Vizsla (Braco Húngaro)',
        'weimaraner': 'Weimaraner',
        'newfoundland': 'Terra-Nova',
        'lhasa': 'Lhasa Apso',
        'havanese': 'Havanês',
        'bichon-frise': 'Bichon Frisé',
        'afghan-hound': 'Galgo Afegão',
        'hound-afghan': 'Galgo Afegão',
        'hound-basset': 'Basset Hound',
        'hound-blood': 'Bloodhound',
        'hound-english': 'Foxhound Inglês',
        'hound-walker': 'Treeing Walker Coonhound',
        
        'borzoi': 'Borzoi (Galgo Russo)',
        'basenji': 'Basenji',
        'australian-shepherd': 'Pastor Australiano',
        'cairn': 'Cairn Terrier',
        'chesapeake': 'Chesapeake Bay Retriever',
        'clumber': 'Clumber Spaniel',
        'coonhound': 'Coonhound',
        'cotondetulear': 'Coton de Tuléar',
        'dhole': 'Dhole (Cão Selvagem)',
        'dingo': 'Dingo',
        'groenendael': 'Pastor Belga Groenendael',
        'keeshond': 'Keeshond (Spitz Holandês)',
        'komondor': 'Komondor',
        'kuvasz': 'Kuvasz',
        'malinois': 'Pastor Belga Malinois',
        'tervuren': 'Pastor Belga Tervuren',
        'malamute': 'Malamute do Alasca',
        'mexicanhairless': 'Pelado Mexicano',
        'otterhound': 'Otterhound',
        'saluki': 'Saluki (Galgo Persa)',
        'schipperke': 'Schipperke'
    };

    // DOM Elements
    const dogImage = document.getElementById('dog-image');
    const imageSkeleton = document.getElementById('image-skeleton');
    const optionsContainer = document.getElementById('options-container');
    const textInputContainer = document.getElementById('text-input-container');
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const hintButton = document.getElementById('hint-button');
    const nextButton = document.getElementById('next-button');
    const feedbackMsg = document.getElementById('feedback-msg');
    
    // Stats Elements
    const scoreCorrectEl = document.getElementById('score-correct');
    const scoreWrongEl = document.getElementById('score-wrong');
    const streakEl = document.getElementById('streak-count');
    const bestStreakEl = document.getElementById('best-streak');
    const streakPill = document.getElementById('streak-pill');
    const resetStatsBtn = document.getElementById('reset-stats');

    // Controls & Header
    const modeChoiceBtn = document.getElementById('mode-choice');
    const modeInputBtn = document.getElementById('mode-input');
    const soundToggleBtn = document.getElementById('sound-toggle');
    const themeToggleBtn = document.getElementById('theme-toggle');

    // State Variables
    let allBreedsList = [];
    let currentRawBreed = '';
    let currentFormattedBreed = '';
    let currentOptions = [];
    let currentGameMode = 'choice'; // 'choice' or 'input'
    let isAnswered = false;
    let hintUsed = false;

    // Theme state
    let currentTheme = localStorage.getItem('quizdog_theme') || 'light';

    // Scores & Stats
    let stats = {
        correct: parseInt(localStorage.getItem('quizdog_correct')) || 0,
        wrong: parseInt(localStorage.getItem('quizdog_wrong')) || 0,
        streak: parseInt(localStorage.getItem('quizdog_streak')) || 0,
        bestStreak: parseInt(localStorage.getItem('quizdog_bestStreak')) || 0
    };

    // Confetti Canvas setup
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas ? canvas.getContext('2d') : null;
    let confettiParticles = [];

    function resizeCanvas() {
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // ==========================================
    // INITIALIZATION
    // ==========================================
    function init() {
        applyTheme(currentTheme);
        updateSoundButtonIcon();
        updateStatsUI();
        setupEventListeners();
        fetchAllBreeds().then(() => {
            loadNextDog();
        });
    }

    // ==========================================
    // THEME SYSTEM
    // ==========================================
    function applyTheme(theme) {
        currentTheme = theme;
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        localStorage.setItem('quizdog_theme', theme);
        updateThemeButtonIcon();
    }

    function toggleTheme() {
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
        if (window.quizSounds) window.quizSounds.playClick();
    }

    function updateThemeButtonIcon() {
        if (!themeToggleBtn) return;
        if (currentTheme === 'dark') {
            // Sun icon (click for light)
            themeToggleBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>`;
        } else {
            // Moon icon (click for dark)
            themeToggleBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>`;
        }
    }

    function updateSoundButtonIcon() {
        if (!soundToggleBtn) return;
        const muted = window.quizSounds ? window.quizSounds.isMuted() : false;
        soundToggleBtn.innerHTML = muted
            ? '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>'
            : '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
    }

    // ==========================================
    // API & BREED FORMATTING (PT-BR)
    // ==========================================
    async function fetchAllBreeds() {
        try {
            const response = await fetch(ALL_BREEDS_API);
            const data = await response.json();
            if (data.status === 'success') {
                allBreedsList = [];
                for (const [mainBreed, subBreeds] of Object.entries(data.message)) {
                    if (subBreeds.length === 0) {
                        allBreedsList.push(mainBreed);
                    } else {
                        subBreeds.forEach(sub => {
                            allBreedsList.push(`${mainBreed}-${sub}`);
                        });
                    }
                }
            }
        } catch (error) {
            console.error('Erro ao carregar lista de raças:', error);
        }
    }

    function formatBreedName(rawBreed) {
        if (!rawBreed) return '';
        
        // 1. Direct key match in PT-BR dictionary
        if (BREED_TRANSLATIONS[rawBreed]) {
            return BREED_TRANSLATIONS[rawBreed];
        }

        // 2. Try reversed slug (e.g. "hound-afghan" -> "afghan-hound")
        const parts = rawBreed.split('-');
        if (parts.length === 2) {
            const reversedKey = `${parts[1]}-${parts[0]}`;
            if (BREED_TRANSLATIONS[reversedKey]) {
                return BREED_TRANSLATIONS[reversedKey];
            }
        }

        // 3. Try main breed key match
        if (BREED_TRANSLATIONS[parts[0]]) {
            return BREED_TRANSLATIONS[parts[0]];
        }

        // 4. Fallback formatting
        if (parts.length === 2) {
            return `${capitalize(parts[1])} ${capitalize(parts[0])}`;
        }
        return capitalize(parts[0]);
    }

    function capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    function extractBreedFromUrl(url) {
        if (!url) return '';
        const match = url.match(/\/breeds\/([^/]+)\//);
        return match ? match[1] : '';
    }

    async function loadNextDog() {
        isAnswered = false;
        hintUsed = false;
        feedbackMsg.textContent = '';
        feedbackMsg.className = 'feedback-msg';
        guessInput.value = '';
        guessInput.disabled = false;
        guessButton.disabled = false;
        hintButton.disabled = false;
        
        // Show skeleton loader
        dogImage.classList.remove('loaded');
        imageSkeleton.classList.remove('hidden');

        try {
            const response = await fetch(RANDOM_DOG_API);
            const data = await response.json();
            if (data.status === 'success') {
                const imageUrl = data.message;
                currentRawBreed = extractBreedFromUrl(imageUrl);
                currentFormattedBreed = formatBreedName(currentRawBreed);

                // Preload image
                const img = new Image();
                img.src = imageUrl;
                img.onload = () => {
                    dogImage.src = imageUrl;
                    dogImage.alt = `Cachorro da raça ${currentFormattedBreed}`;
                    imageSkeleton.classList.add('hidden');
                    dogImage.classList.add('loaded');
                };

                generateOptions();
            }
        } catch (error) {
            console.error('Erro ao carregar foto de cachorro:', error);
            feedbackMsg.textContent = 'Erro ao carregar imagem. Tentando novamente...';
            setTimeout(loadNextDog, 2000);
        }
    }

    // ==========================================
    // OPTIONS & GAMEPLAY LOGIC
    // ==========================================
    function generateOptions() {
        optionsContainer.innerHTML = '';
        currentOptions = [currentRawBreed];

        // Pick 3 distinct random wrong options (ensuring formatted names are also distinct!)
        if (allBreedsList.length > 0) {
            while (currentOptions.length < 4) {
                const randomBreed = allBreedsList[Math.floor(Math.random() * allBreedsList.length)];
                const formattedRandom = formatBreedName(randomBreed);
                const hasDuplicateFormatted = currentOptions.some(b => formatBreedName(b) === formattedRandom);

                if (!currentOptions.includes(randomBreed) && !hasDuplicateFormatted) {
                    currentOptions.push(randomBreed);
                }
            }
        }

        // Shuffle options
        currentOptions.sort(() => Math.random() - 0.5);

        // Render buttons with keyboard shortcut badges [1], [2], [3], [4]
        currentOptions.forEach((rawOption, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.dataset.breed = rawOption;
            btn.dataset.index = idx;
            btn.innerHTML = `
                <span class="key-badge">${idx + 1}</span>
                <span class="breed-text">${formatBreedName(rawOption)}</span>
            `;
            btn.addEventListener('click', () => handleOptionSelect(rawOption, btn));
            optionsContainer.appendChild(btn);
        });
    }

    function handleOptionSelect(selectedRawOption, clickedBtn) {
        if (isAnswered) return;
        isAnswered = true;

        const isCorrect = (selectedRawOption === currentRawBreed) || 
                          (formatBreedName(selectedRawOption) === currentFormattedBreed);

        const allOptionBtns = optionsContainer.querySelectorAll('.option-btn');

        allOptionBtns.forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.breed === currentRawBreed || formatBreedName(btn.dataset.breed) === currentFormattedBreed) {
                btn.classList.add('correct');
            }
        });

        if (isCorrect) {
            clickedBtn.classList.add('correct');
            processCorrectAnswer();
        } else {
            clickedBtn.classList.add('wrong');
            processWrongAnswer();
        }
    }

    function handleTextGuess() {
        if (isAnswered) return;
        const userInput = guessInput.value.trim();
        if (!userInput) return;

        isAnswered = true;
        guessInput.disabled = true;
        guessButton.disabled = true;

        const normUser = normalizeBreedString(userInput);
        const normFormatted = normalizeBreedString(currentFormattedBreed);
        const normRaw = normalizeBreedString(currentRawBreed);

        // Also check keywords in parentheses (e.g. Teckel for Teckel (Salsicha))
        const hasKeywordMatch = normFormatted.includes(normUser) && normUser.length >= 3;

        const isCorrect = (
            normUser === normFormatted || 
            normUser === normRaw || 
            hasKeywordMatch ||
            isFlexibleMatch(normUser, normRaw)
        );

        if (isCorrect) {
            processCorrectAnswer();
        } else {
            processWrongAnswer();
        }
    }

    function normalizeBreedString(str) {
        return str.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
            .replace(/[^a-z0-9]/g, ""); // Remove spaces and punctuation
    }

    function isFlexibleMatch(userStr, rawStr) {
        const parts = rawStr.split('-');
        if (parts.length === 2) {
            const reversed = parts[1] + parts[0];
            return userStr === reversed;
        }
        return false;
    }

    function processCorrectAnswer() {
        stats.correct++;
        stats.streak++;
        if (stats.streak > stats.bestStreak) {
            stats.bestStreak = stats.streak;
        }
        saveStats();
        updateStatsUI();

        feedbackMsg.textContent = `🎉 Excelente! É um ${currentFormattedBreed}!`;
        feedbackMsg.className = 'feedback-msg success-anim';

        if (stats.streak >= 3) {
            window.quizSounds.playStreak();
        } else {
            window.quizSounds.playCorrect();
        }

        triggerConfetti();

        setTimeout(() => {
            loadNextDog();
        }, 2100);
    }

    function processWrongAnswer() {
        stats.wrong++;
        stats.streak = 0;
        saveStats();
        updateStatsUI();

        feedbackMsg.textContent = `❌ Ops! Na verdade é um ${currentFormattedBreed}.`;
        feedbackMsg.className = 'feedback-msg error-anim';

        window.quizSounds.playWrong();

        setTimeout(() => {
            loadNextDog();
        }, 2500);
    }

    function handleHint() {
        if (isAnswered || hintUsed) return;
        hintUsed = true;
        hintButton.disabled = true;
        if (window.quizSounds) window.quizSounds.playClick();

        if (currentGameMode === 'choice') {
            const optionBtns = Array.from(optionsContainer.querySelectorAll('.option-btn'));
            const wrongBtns = optionBtns.filter(btn => btn.dataset.breed !== currentRawBreed && formatBreedName(btn.dataset.breed) !== currentFormattedBreed);
            wrongBtns.sort(() => Math.random() - 0.5);
            if (wrongBtns[0]) wrongBtns[0].classList.add('disabled-hint');
            if (wrongBtns[1]) wrongBtns[1].classList.add('disabled-hint');
            feedbackMsg.textContent = '💡 Dica: 2 opções incorretas foram eliminadas!';
        } else {
            const firstLetter = currentFormattedBreed.charAt(0);
            const totalChars = currentFormattedBreed.length;
            feedbackMsg.textContent = `💡 Dica: Começa com "${firstLetter}" e possui ${totalChars} letras!`;
        }
        feedbackMsg.className = 'feedback-msg hint-anim';
    }

    // ==========================================
    // STATS & STORAGE
    // ==========================================
    function saveStats() {
        localStorage.setItem('quizdog_correct', stats.correct);
        localStorage.setItem('quizdog_wrong', stats.wrong);
        localStorage.setItem('quizdog_streak', stats.streak);
        localStorage.setItem('quizdog_bestStreak', stats.bestStreak);
    }

    function updateStatsUI() {
        scoreCorrectEl.textContent = stats.correct;
        scoreWrongEl.textContent = stats.wrong;
        streakEl.textContent = stats.streak;
        bestStreakEl.textContent = stats.bestStreak;

        if (streakPill) {
            if (stats.streak >= 3) {
                streakPill.classList.add('streak-fire');
            } else {
                streakPill.classList.remove('streak-fire');
            }
        }
    }

    function resetStats() {
        if (confirm('Deseja realmente zerar sua pontuação e estatísticas?')) {
            stats = { correct: 0, wrong: 0, streak: 0, bestStreak: 0 };
            saveStats();
            updateStatsUI();
            if (window.quizSounds) window.quizSounds.playClick();
        }
    }

    // ==========================================
    // CONFETTI ANIMATION SYSTEM
    // ==========================================
    function triggerConfetti() {
        if (!ctx) return;
        confettiParticles = [];
        const colors = ['#FF5757', '#FFD166', '#06D6A0', '#118AB2', '#6366F1', '#FF9F1C'];
        
        for (let i = 0; i < 70; i++) {
            confettiParticles.push({
                x: canvas.width / 2,
                y: canvas.height / 3,
                vx: (Math.random() - 0.5) * 12,
                vy: (Math.random() - 0.7) * 12,
                size: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10,
                opacity: 1
            });
        }

        renderConfetti();
    }

    function renderConfetti() {
        if (!ctx || confettiParticles.length === 0) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confettiParticles.forEach((p, idx) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.25; // gravity
            p.rotation += p.rotationSpeed;
            p.opacity -= 0.015;

            if (p.opacity <= 0) {
                confettiParticles.splice(idx, 1);
                return;
            }

            ctx.save();
            ctx.globalAlpha = p.opacity;
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
        });

        if (confettiParticles.length > 0) {
            requestAnimationFrame(renderConfetti);
        }
    }

    // ==========================================
    // KEYBOARD SHORTCUTS & EVENT LISTENERS
    // ==========================================
    function setupEventListeners() {
        // Mode Switches
        modeChoiceBtn.addEventListener('click', () => {
            if (currentGameMode === 'choice') return;
            currentGameMode = 'choice';
            modeChoiceBtn.classList.add('active');
            modeInputBtn.classList.remove('active');
            optionsContainer.classList.remove('hidden');
            textInputContainer.classList.add('hidden');
            if (window.quizSounds) window.quizSounds.playClick();
        });

        modeInputBtn.addEventListener('click', () => {
            if (currentGameMode === 'input') return;
            currentGameMode = 'input';
            modeInputBtn.classList.add('active');
            modeChoiceBtn.classList.remove('active');
            optionsContainer.classList.add('hidden');
            textInputContainer.classList.remove('hidden');
            if (window.quizSounds) window.quizSounds.playClick();
            guessInput.focus();
        });

        // Controls
        nextButton.addEventListener('click', () => {
            if (window.quizSounds) window.quizSounds.playClick();
            loadNextDog();
        });

        hintButton.addEventListener('click', handleHint);

        guessButton.addEventListener('click', () => {
            if (window.quizSounds) window.quizSounds.playClick();
            handleTextGuess();
        });

        guessInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleTextGuess();
            }
        });

        // Theme Toggle
        themeToggleBtn.addEventListener('click', toggleTheme);

        // Sound Toggle
        soundToggleBtn.addEventListener('click', () => {
            if (window.quizSounds) {
                window.quizSounds.toggleMute();
                updateSoundButtonIcon();
                window.quizSounds.playClick();
            }
        });

        resetStatsBtn.addEventListener('click', resetStats);

        // Global Keyboard Gamer Shortcuts
        window.addEventListener('keydown', (e) => {
            const isTyping = document.activeElement === guessInput;

            // If user is actively typing in the text input, let them type normally
            if (isTyping) {
                return;
            }

            // Key 1, 2, 3, 4 for multiple choice options
            if (currentGameMode === 'choice' && ['1', '2', '3', '4'].includes(e.key)) {
                const optIndex = parseInt(e.key, 10) - 1;
                const buttons = optionsContainer.querySelectorAll('.option-btn');
                if (buttons[optIndex] && !buttons[optIndex].disabled) {
                    buttons[optIndex].click();
                }
            }

            // Key H for Hint
            if (e.key.toLowerCase() === 'h') {
                if (!hintButton.disabled) {
                    hintButton.click();
                }
            }

            // Space or N to Skip / Next dog
            if (e.key === ' ' || e.key.toLowerCase() === 'n') {
                e.preventDefault();
                nextButton.click();
            }
        });
    }

    // Start App
    init();
});
