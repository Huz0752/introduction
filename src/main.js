import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

const i18n = createI18n({
    locale: 'zh',
    fallbackLocale: 'en',
    messages: {
        en: {
            name: "WU JUN-YI",
            welcome: "Welcome!",
            title: "WU JUN-YI's personal website",
            navbar: ["Homepage", "Left Sidebar", "Right Sidebar", "CONTACT ME"]
        },
        zh: {
            name: "伍竣義",
            welcome: "歡迎!",
            title: "伍竣義的個人網站",
            navbar: ["主頁", "測試", "測試2", "聯絡我"]
        },
    },
});

const app = createApp(App)
app.use(i18n)
app.mount('#app')
