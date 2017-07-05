import Vue, {ComponentOptions, FunctionalComponentOptions} from 'vue'

export type VueClass = { new (): Vue } & typeof Vue

export type VClass<T> = {
	new(): T
	extend(option: ComponentOptions<Vue> | FunctionalComponentOptions): typeof Vue
}