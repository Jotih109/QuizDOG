# QuizDOG 🐶

O **QuizDOG** é um jogo interativo e divertido onde os jogadores testam seus conhecimentos adivinhando a raça de cães a partir de fotos aleatórias fornecidas pela [Dog CEO API](https://dog.ceo/dog-api/).

---

## 🚀 Funcionalidades

- **Dois Modos de Jogo**:
  - **Múltipla Escolha**: Escolha entre 4 opções dinâmicas de raças.
  - **Modo Digitação**: Digite o nome da raça com tolerância inteligente de acentuação, maiúsculas/minúsculas e variações de nome.
- **Painel de Estatísticas**:
  - Placar de Acertos e Erros.
  - Contador de Combos (Streak 🔥).
  - Recorde Pessoal (Salvo no `localStorage`).
- **Sistema de Dicas (Hint 💡)**:
  - Elimina 2 opções erradas no modo múltipla escolha ou revela dicas no modo digitação.
- **Efeitos Sonoros e Visuais**:
  - Sons sintetizados em tempo real via **Web Audio API** (sem arquivos externos).
  - Animação de **Confetes** ao acertar.
  - Transições suaves e Skeleton Loader no carregamento das fotos.
- **Tema Claro / Escuro (Dark Mode)** com persistência de preferências.
- **Totalmente Responsivo**: Layout otimizado para celulares, tablets e computadores.

---

## 📁 Estrutura de Arquivos

```text
QuizDOG/
├── index.html               # Estrutura HTML5 semântica e SEO
├── assets/
│   ├── css/
│   │   └── style.css        # Sistema de design, variáveis CSS e temas
│   ├── js/
│   │   ├── app.js           # Lógica do jogo e integração com a Dog CEO API
│   │   └── sounds.js        # Efeitos sonoros com Web Audio API
│   └── images/
│       └── cao.png          # Ícone do projeto / Favicon
└── README.md                # Documentação do projeto
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** & **CSS3** (Flexbox, CSS Grid, Variáveis CSS, Glassmorphism).
- **JavaScript ES6+** (Fetch API, Web Audio API, HTML5 Canvas).
- **Dog CEO REST API** (`https://dog.ceo/api/breeds/`).
- **Google Fonts** (`Fredoka` & `Plus Jakarta Sans`).

---

## 👨‍💻 Autor

Desenvolvido com 💖 por **João Vitor Lamim dos Santos**.
