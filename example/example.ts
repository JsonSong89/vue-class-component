import Vue from 'vue'
import App from './App.vue'
import  MixinApp from './MixinApp.vue'

// mount
new Vue({
    el: '#app',
    // render: h => h(MixinApp, {  uncomment this line and test with mixin version
    render: h => h(App, {
        props: {propMessage: 'World'}
    })
})
