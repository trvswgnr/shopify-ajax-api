import 'isomorphic-fetch';
import 'regenerator-runtime';
import ShopifyAJAX from '../index.esm';

const tests: { [key: string]: any } = {};

tests.newUrl = {
	name: 'new URL class compatible with original',
	actual: ShopifyAJAX.URL('/cart.js?foo=bar&hello=world').toString(),
	expected: new URL('http://localhost/cart.js?foo=bar&hello=world').toString()
};

const url = new URL('https://test.com/');
tests.newUrl2 = {
	name: 'new URL class with base url compatible with original',
	actual: ShopifyAJAX.URL('/foo?bar=baz&hello=world', url).toString(),
	expected: new window.URL('/foo?bar=baz&hello=world', url).toString()
};

tests.newUrl3 = {
	name: 'new URL class with base url and params compatible with original',
	actual: ShopifyAJAX.URL('/foo', { bar: 'baz', hello: 'world' }).toString(),
	expected: new URL('/foo?bar=baz&hello=world', 'http://localhost').toString()
};

// run tests
for (const [, { name, actual, expected }] of Object.entries(tests)) {
	it(name + '', () => expect(JSON.stringify(actual)).toBe(JSON.stringify(expected)));
}
