import { ZeactElement, ZeactNodeList } from '../shared/ZeactType'
import ZeactRoot from './ZeactRoot'

type Root = {
    render(children: any): any;
    renderSubtreeIntoContainer(
        children: ZeactNodeList,
        parentComponent?: any,
    ): void
};

// 从 DOM 结点创建 reactRoot 结点, 即 返回一个 ReactRoot 实例
function createRootFromDOMContainer(container: HTMLElement, forceHydrate: boolean) {
    
    let rootSibling;

    // 删除传的所有进来的子结点
    while ((rootSibling = container.lastChild)) {
        container.removeChild(rootSibling);
    }

    const isConcurrent = false
    return new ZeactRoot(container, isConcurrent, false)
}

// 将虚拟 dom 节点合法化 并且 装入container中
function renderSubtreeIntoContainer(parentComponent: HTMLElement | null, children: ZeactElement, container: any) {
    // let root: Root = (container._reactRootContainer);
    let root = (container._reactRootContainer);

    // 是否存在根结点 如 !root 表示尚未初始化根结点，即首次渲染
    if (!root) {
        console.log('未初始化根结点')
        root = container._reactRootContainer = createRootFromDOMContainer(
            container,
            false
        )

        // 初始化, fiber 调度 mount 不需要批量更新
        // unbatchedUpdates(() => {
            if (parentComponent != null) {

            } else {
                root.render(children)
            }
        // })

    } else {
        // 已经初始化根结点

    }
}

function render(element: ZeactElement, container: HTMLElement) {

    return renderSubtreeIntoContainer(
        null,
        element,
        container
    )
}

const ZeactDOM = {
    render,
}

export default ZeactDOM