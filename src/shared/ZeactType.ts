export type ZeactElement = {
    $$typeof: Symbol | number;
    key: null | string;
    type: string;
    props: {
        children ?: string | Array<object | string>;
    };
    _source ?: {};
    _self ?: {};
}

export type ZeactEmpty = null | void | boolean;

export type ZeactNodeList = ZeactEmpty | any;