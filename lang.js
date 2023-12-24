import translations from "./translations.js";

const body = document.body;

const languageSelector = document.querySelector("select");
const or = document.getElementById('or');
const news = document.getElementById('news');

languageSelector.addEventListener('change', (event) => {

    setLanguage(event.target.value)
    localStorage.setItem("lang", event.target.value)
    newsAnimation()
    if (event.target.value === "ar") {
        if (['/index.html', '/'].includes(document.location.pathname)) {
            news.style.animationName = "tickerar"
            news.style.paddingRight = '100%'

        }
        if (['/contacter-nous.html'].includes(document.location.pathname)) {
            or.classList.remove('ou-bien')
            or.classList.add('ou-bien-ar')
        }

    } else {
        if (['/index.html', '/'].includes(document.location.pathname)) {
            news.style.animationName = "ticker"
            news.style.paddingLeft = '100%'
        }
        if (['/contacter-nous.html'].includes(document.location.pathname)) {
            or.classList.add('ou-bien')
            or.classList.remove('ou-bien-ar')
            console.log('has')
        }
    }

})

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(localStorage.getItem("lang") || "fr")
})

const setLanguage = (language) => {
    const elements = document.querySelectorAll('[data-i18n]')
    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-i18n")
        element.textContent = translations[language][translationKey]
    })
    document.dir = language === "ar" ? "rtl" : "ltr";
    newsAnimation()
}

const lang = document.getElementById('lang-selector');
const currentLang = localStorage.getItem('lang') || 'fr';

const langs = [
    { label: "Français", key: "fr" },
    { label: "العربية", key: "ar" },
    { label: "English", key: "en" },
]

for (let i = 0; i < langs.length; i++) {
    const op = document.createElement('option');
    op.textContent = langs[i].label;
    op.value = langs[i].key;
    if (currentLang === langs[i].key) op.selected = true;
    lang.appendChild(op)
}

function newsAnimation() {
    if (!['/index.html', '/'].includes(document.location.pathname)) return;
    if (currentLang === 'ar') {
        news.style.animationName = "tickerar"
        news.style.paddingRight = '100%'
    } else {
        news.style.animationName = "ticker"
        news.style.paddingLeft = '100%'

    }
    console.log('haa')
}

newsAnimation()


function orLine() {
    if (!['/contacter-nous.html'].includes(document.location.pathname)) return;
    if (currentLang === 'ar') {
        or.classList.remove('ou-bien')
        or.classList.add('ou-bien-ar')
    } else {
        or.classList.remove('ou-bien-ar')
        or.classList.add('ou-bien')
    }
}
orLine()
