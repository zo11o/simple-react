import {createContainer} from '../zeact-reconciler/index'
import { ZeactNodeList } from '../shared/ZeactType';

// function ReactRoot (
//     container: HTMLElement,
//     isConcurrent: boolean,
//     hydrate: boolean,
// ) {
//     const root = createContainer(container, isConcurrent, hydrate);
//     this._internalRoot = root;
// }

interface ReactWorkBase {
    _callbacks: Function | null,
    _didCommit: boolean,
    // public _onCommit?: ,

}

class ReactWork{

    _callbacks: number;
    _didCommit: boolean;

    constructor() {
        
    }
}

export default class ZeactRoot {
    public _internalRoot: boolean;

    constructor(container: HTMLElement, isConcurrent: boolean, hydrate: boolean) {
        const root = createContainer(container, isConcurrent, hydrate);
        this._internalRoot = true;
    }

    render(children: ZeactNodeList, callback?: () =>{} ) {
        const root = this._internalRoot
        // const work = new ReactWork()

        updateContainer()
    }
}

