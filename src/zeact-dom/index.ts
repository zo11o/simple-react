import { ZeactElement } from '../shared/ZeactType'

type Root = {
    render(children: any) : any
};

// 将虚拟 dom 节点合法化 并且 装入container中
function renderSubtreeIntoContainer(parentComponent, children, container) {
    let root: Root = container._reactRootContainer;

    if (!root) {
        
    }
}

function render(element: ZeactElement, dom: HTMLElement) {
    // dom.innerHTML = element

    return renderSubtreeIntoContainer(

    )
}

const ZeactDOM = {
    render,
}

export default ZeactDOM