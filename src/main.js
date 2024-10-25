import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'

const i18n = createI18n({
    locale: 'zh',
    fallbackLocale: 'en',
    messages: {
        en: {
            name: "WU JUN-YI",
            welcome: "Welcome!",
            title: "WU JUN-YI's personal website",
            navbar: ["Homepage", "Left Sidebar", "Right Sidebar", "CONTACT ME"],
            footer: {
                contact: "Contact Me",
                lastUpdate: "Last Update: 2024.10.26",
                social: "Social Media",
                resume: "Resume",
            }
        },
        zh: {
            name: "伍竣義",
            welcome: "歡迎!",
            title: "伍竣義的個人網站",
            navbar: ["主頁", "測試", "測試2", "聯絡我"],
            footer: {
                contact: "聯絡我",
                lastUpdate: "最近更新: 2024.10.26",
                social: "社群媒體",
                resume: "履歷",
            }
        },
    },
});

library.add(fas)
library.add(fab)
library.add(far)

const app = createApp(App)
app.use(i18n)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
