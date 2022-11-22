import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from './api'

import 'materialize-css/dist/css/materialize.css'
import 'material-design-icons/iconfont/material-icons.css'
import 'materialize-css/dist/js/materialize.js'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.config.globalProperties.api = api

router.beforeEach((to, from, next) => {
    if (localStorage.getItem('isLogged') != true) {
        if (to.name != "login" && to.name != "register") {
            api.get('api/me')
                .then(response => {
                    localStorage.setItem('isLogged', true)
                }).catch(error => {
                    localStorage.setItem('isLogged', false)
                    router.push('login')
                })
        }
    }
    next()
    return
})