/**
 * This app is same as App.vue , just use Mixin redone it
 * */
import Vue from 'vue'
import Component, {Mixin} from '../lib/index'
@Component({
    props: {
        propMessage: String
    }
})
class HelloClass extends Vue {
    propMessage: String
    // use prop values for initial data
    helloMsg: string = 'Hello, ' + this.propMessage
}

@Component
class NumberClass extends Vue {
    // inital data
    msg: number = 123

    // computed
    get computedMsg() {
        return 'computed ' + this.msg
    }
}
@Component
export default class MixinApp extends Mixin(HelloClass, NumberClass) {
    // lifecycle hook
    mounted() {
        this.greet()
    }

    // method
    greet() {
        alert('greeting: ' + this.msg)
    }
}
