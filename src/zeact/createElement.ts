import { ZEACT_ELEMENT_TYPE } from '../shared/index';

// 保留属性
const RESERVED_PROPS = {
    key: true,
    ref: true,
    _self: true,
    _source: true
}

const hasOwnProperty = Object.prototype.hasOwnProperty;

// const TEXT_ELEMENT: string = 'TEXT';

// // 创建文本结点
// function createTextElement(value: any) {
//     return createElement(TEXT_ELEMENT, { nodeValue: value })
// }


// function $createElement(type: string, _props: any, ...children: any) {
//     // 浅拷贝
//     const props = Object.assign({}, _props)

//     // 将 props.children 和 children 进行合并
//     const hasChildren = children.length > 0;
//     const mergedChildren = hasChildren ? [].concat(...children) : []
//     props.children = mergedChildren;

//     return { type, props }
// }

const ZeactElement = function (type: string, key: string | null, props: object) {
    const element = {
        $$typeof: ZEACT_ELEMENT_TYPE,
        type: type,
        key: key,
        // ref: ref,
        props: props
    }

    return element
}


/**
 * 创建 并 返回 一个被赋予类型的 ZeactElement 对象
 * @param el 
 * @param props 
 * @param children 
 */
function createElement(type: string, config: any, ...children: any) {
    console.log(children)
    let propName;

    type Props = {
        children ?:  Array<Object | string>;
    }

    const props:Props = {};

    let key = null;

    // 处理 props,
    if (config != null) {
        if (config.key) {
            key = '' + config.key
        }

        for (propName in config) {
            // 非保留属性 加入 props
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName]
            }
        }
    }

    // 处理 child
    const childrenLength = arguments.length - 2;
    if (childrenLength == 1) {
        props.children = children[0]
    } else if (childrenLength > 1) {
        const childArray = Array(childrenLength);
        for (let i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2]
        }
        props.children = childArray
    }

    // TODO: 处理 type

    const instance = ZeactElement(
        type,
        key,
        props
    )
    console.log(instance)

    return instance
}

export default createElement