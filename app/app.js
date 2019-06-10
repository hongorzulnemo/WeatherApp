import Vue from 'nativescript-vue';
import app from './components/app';

new Vue({

    template: `
        <Frame>
            <app />
        </Frame>`,

    components: {
       app
    }
}).$start();