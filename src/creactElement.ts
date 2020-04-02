const TEXT_ELEMENT: string = 'TEXT';

// 创建文本结点
function createTextElement(value: any) {
    return createElement(TEXT_ELEMENT, { nodeValue: value })
}


function $createElement(type: string, _props: any, ...children: any) {
    // 浅拷贝
    const props = Object.assign({}, _props)

    // 将 props.children 和 children 进行合并
    const hasChildren = children.length > 0;
    const mergedChildren = hasChildren ? [].concat(...children) : []
    props.children = mergedChildren;

    return { type, props }
}

function createElement(el: string, props: any, ...children: any) {
    return $createElement(el, props || {}, ...children);
}