class ShopifyAJAX {
	static async request(endpoint: ShopifyAJAX.Endpoint, data: ShopifyAJAX.Data = null, method: ShopifyAJAX.Method = 'GET', log = false) {
		const config: RequestInit = {
			method: method,
			credentials: 'same-origin',
			headers: {
				'X-Requested-With': 'XMLHttpRequest'
			}
		};

		const url = _URL(endpoint, data);

		const response = await fetch(url.toString(), config);
		if (log) console.log(response);

		const result = await response.json();
		if (log) console.log('%cResult', 'font-weight: bold;', result);

		if (!response.ok) {
			return {
				error: true,
				...result
			};
		}

		return result;
	}

	static post(endpoint: ShopifyAJAX.POSTEndpoint, data: ShopifyAJAX.Data, log = false) {
		return ShopifyAJAX.request(endpoint, data, 'POST', log);
	}

	static get(endpoint: ShopifyAJAX.GETEndpoint, data: ShopifyAJAX.Data = null, log = false) {
		return ShopifyAJAX.request(endpoint, data, 'GET', log);
	}
}

const _URL = (url: string, ...parameters: any) => {
	let base = window.location.origin + '/';
	if (parameters.length && parameters.slice(0, 1).every((str: string) => (str ? str.toString().includes('http') : false))) {
		base = parameters.slice(0, 1).join('').replace(/\/$/, '') + '/';
		parameters.shift();
	}
	parameters = parameters.map(_createParams);
	if (url.includes('http')) {
		base = '';
	}
	const joiner = url.includes('?') ? '&' : '?';
	parameters = parameters.length ? joiner + parameters.map((v: any) => v.toString().replace(/^[&?]/, '')).join('&') : '';
	return new window.URL(base + url.replace(/^\//, '') + parameters);
};

const _baseType = (v: unknown) => toString.call(v).replace(/.*\s(\w+)\]/, '$1');

const _createParams = (iterable: any): string => {
	if (!iterable) return '';
	if (typeof iterable === 'string' || iterable instanceof String || typeof iterable === 'number' || iterable instanceof Number) {
		return String(iterable);
	}
	if (iterable instanceof FormData) {
		return new URLSearchParams(iterable as any).toString();
	}
	if (Array.isArray(iterable) || (iterable && _baseType(iterable) !== 'Object')) {
		iterable = Array.from(iterable);
		try {
			iterable = Object.fromEntries(iterable);
		} catch (e) {
			// do nothing
		}
	}
	const getPairs = (obj: { [key: string]: unknown }, keys: string[] = []) =>
		Object.entries(obj).reduce((pairs: any[], [key, value]: any) => {
			if (typeof value === 'object') {
				pairs.push(...getPairs(value, [...keys, key]));
			} else {
				pairs.push([[...keys, key], value]);
			}
			return pairs;
		}, []);
	return getPairs(iterable)
		.map(([[key0, ...keysRest], value]) => `${key0}${keysRest.map((a: any) => `[${a}]`).join('')}=${value}`)
		.join('&');
};

namespace ShopifyAJAX {
	type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
	type UnionToOvlds<U> = UnionToIntersection<U extends any ? (f: U) => void : never>;
	type PopUnion<U> = UnionToOvlds<U> extends (a: infer A) => void ? A : never;
	type UnionConcat<U extends string, Sep extends string> = PopUnion<U> extends infer SELF
		? SELF extends string
			? Exclude<U, SELF> extends never
				? SELF
				: `${UnionConcat<Exclude<U, SELF>, Sep>}${Sep}${SELF}` | UnionConcat<Exclude<U, SELF>, Sep> | SELF
			: never
		: never;

	export type Method = 'GET' | 'POST';

	export type Endpoint =
		| '/cart/add.js'
		| '/cart.js'
		| '/cart/update.js'
		| '/cart/change.js'
		| '/cart/clear.js'
		| `/products/${string}.js`
		| '/recommendations/products.json'
		| '/recommendations/products'
		| '/search/suggest.json'
		| '/search/suggest';

	export type POSTEndpoint = '/cart/add.js' | '/cart/update.js' | '/cart/change.js' | '/cart/clear.js';

	export type GETEndpoint = '/cart.js' | `/products/${string}.js` | '/recommendations/products.json' | '/recommendations/products' | '/search/suggest.json' | '/search/suggest';

	interface Item {
		quantity: number;
		id: string;
		selling_plan?: number;
		properties?: {
			[key: string]: any;
		};
	}

	type Fields = 'product' | 'page' | 'article' | 'collection';

	interface DataObj {
		items?: Item[];
		quantity?: number;
		id?: string;
		line?: number;
		product_id?: string;
		limit?: number;
		section_id?: string;
		q?: string;
		resources?: {
			type: UnionConcat<Fields, ','>;
			limit?: number;
			options?: {
				unavailable_products?: 'show' | 'hide' | 'last';
				fields?: string;
			};
		};
	}

	export type Data = DataObj | FormData | null;
}

export default ShopifyAJAX;
