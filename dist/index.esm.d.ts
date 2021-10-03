declare class ShopifyAJAX {
    static request(endpoint: ShopifyAJAX.Endpoint, data?: ShopifyAJAX.Data, method?: ShopifyAJAX.Method, log?: boolean): Promise<any>;
    static post(endpoint: ShopifyAJAX.POSTEndpoint, data: ShopifyAJAX.Data, log?: boolean): Promise<any>;
    static get(endpoint: ShopifyAJAX.GETEndpoint, data?: ShopifyAJAX.Data, log?: boolean): Promise<any>;
}
declare namespace ShopifyAJAX {
    type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
    type UnionToOvlds<U> = UnionToIntersection<U extends any ? (f: U) => void : never>;
    type PopUnion<U> = UnionToOvlds<U> extends (a: infer A) => void ? A : never;
    type UnionConcat<U extends string, Sep extends string> = PopUnion<U> extends infer SELF ? SELF extends string ? Exclude<U, SELF> extends never ? SELF : `${UnionConcat<Exclude<U, SELF>, Sep>}${Sep}${SELF}` | UnionConcat<Exclude<U, SELF>, Sep> | SELF : never : never;
    export type Method = 'GET' | 'POST';
    export type Endpoint = '/cart/add.js' | '/cart.js' | '/cart/update.js' | '/cart/change.js' | '/cart/clear.js' | `/products/${string}.js` | '/recommendations/products.json' | '/recommendations/products' | '/search/suggest.json' | '/search/suggest';
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
    export {};
}
export default ShopifyAJAX;
