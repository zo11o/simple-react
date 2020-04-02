import createElement from './createElement'

const Zeact = {
    render,
    createElement,
}

function render(element: any, dom: HTMLDivElement): void {
    dom.innerHTML = element
}

export default Zeact