(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ShopifyAJAX {
        static async request(endpoint, data = null, method = 'GET', log = false) {
            const config = {
                method: method,
                credentials: 'same-origin',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            };
            const url = _URL(endpoint, data);
            const response = await fetch(url.toString(), config);
            if (log)
                console.log(response);
            const result = await response.json();
            if (log)
                console.log('%cResult', 'font-weight: bold;', result);
            if (!response.ok) {
                return {
                    error: true,
                    ...result
                };
            }
            return result;
        }
        static post(endpoint, data, log = false) {
            return ShopifyAJAX.request(endpoint, data, 'POST', log);
        }
        static get(endpoint, data = null, log = false) {
            return ShopifyAJAX.request(endpoint, data, 'GET', log);
        }
    }
    const _URL = (url, ...parameters) => {
        let base = window.location.origin + '/';
        if (parameters.length && parameters.slice(0, 1).every((str) => (str ? str.toString().includes('http') : false))) {
            base = parameters.slice(0, 1).join('').replace(/\/$/, '') + '/';
            parameters.shift();
        }
        parameters = parameters.map(_createParams);
        if (url.includes('http')) {
            base = '';
        }
        const joiner = url.includes('?') ? '&' : '?';
        parameters = parameters.length ? joiner + parameters.map((v) => v.toString().replace(/^[&?]/, '')).join('&') : '';
        return new window.URL(base + url.replace(/^\//, '') + parameters);
    };
    const _baseType = (v) => toString.call(v).replace(/.*\s(\w+)\]/, '$1');
    const _createParams = (iterable) => {
        if (!iterable)
            return '';
        if (typeof iterable === 'string' || iterable instanceof String || typeof iterable === 'number' || iterable instanceof Number) {
            return String(iterable);
        }
        if (iterable instanceof FormData) {
            return new URLSearchParams(iterable).toString();
        }
        if (Array.isArray(iterable) || (iterable && _baseType(iterable) !== 'Object')) {
            iterable = Array.from(iterable);
            try {
                iterable = Object.fromEntries(iterable);
            }
            catch (e) {
                // do nothing
            }
        }
        const getPairs = (obj, keys = []) => Object.entries(obj).reduce((pairs, [key, value]) => {
            if (typeof value === 'object') {
                pairs.push(...getPairs(value, [...keys, key]));
            }
            else {
                pairs.push([[...keys, key], value]);
            }
            return pairs;
        }, []);
        return getPairs(iterable)
            .map(([[key0, ...keysRest], value]) => `${key0}${keysRest.map((a) => `[${a}]`).join('')}=${value}`)
            .join('&');
    };
    exports.default = ShopifyAJAX;
});
