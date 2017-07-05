import Vue, { ComponentOptions } from 'vue'
import { VueClass, VClass } from './declarations'
import { componentFactory, $internalHooks } from './component'

export { createDecorator, Mixin } from './util'

function Component<U extends Vue>(options: ComponentOptions<U>): <V extends VueClass | VClass<U>>(target: V) => V
function Component<U extends Vue, V extends VueClass | VClass<U>>(target: V): V
function Component<V extends VueClass, U extends Vue>(options: ComponentOptions<U> | V): any {
	if (typeof options === 'function') {
		return componentFactory(options)
	}
	return function (Component: V) {
		return componentFactory(Component, options)
	}
}

namespace Component {
	export function registerHooks(keys: string[]): void {
		$internalHooks.push(...keys)
	}
}

export default Component
