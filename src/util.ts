import Vue, {ComponentOptions} from 'vue'
import {$decoratorQueue} from './component'
import {VueClass, VClass} from './declarations'

export const noop = () => {
}

export function Mixin<A>(parent: VClass<A>): VClass<A>
export function Mixin<A, B>(parent: VClass<A>, trait: VClass<B>): VClass<A & B>
export function Mixin<A, B, C>(parent: VClass<A>, trait: VClass<B>, trait1: VClass<C>): VClass<A & B & C>
export function Mixin<A, B, C, D>(parent: VClass<A>, trait: VClass<B>, trait1: VClass<C>, trait3: VClass<D>): VClass<A & B & C & D>
export function Mixin<T>(parent: VClass<Vue>, ...traits: VClass<Vue>[]): VClass<T>
export function Mixin<T>(parent: VClass<T>, ...traits: (typeof Vue)[]): VueClass & T {
	return parent.extend({mixins: traits}) as any
}

export function createDecorator(factory: (options: ComponentOptions<Vue>, key: string) => void): (target: Vue, key: string) => void
export function createDecorator(factory: (options: ComponentOptions<Vue>, key: string, index: number) => void): (target: Vue, key: string, index: number) => void
export function createDecorator(factory: (options: ComponentOptions<Vue>, key: string, index: number) => void): (target: Vue, key: string, index: any) => void {
	return (_, key, index) => {
		if (typeof index !== 'number') {
			index = undefined
		}
		$decoratorQueue.push(options => factory(options, key, index))
	}
}

export function warn(message: string): void {
	if (typeof console !== 'undefined') {
		console.warn('[vue-class-component] ' + message)
	}
}
