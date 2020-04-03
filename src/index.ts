import Zeact from './zeact'
import ZeactDOM from './zeact-dom'

// <div name="zorro">hello, world</div>

let App = Zeact.createElement('div', {
    name: 'zorro',
}, 'hello, world', Zeact.createElement('span', {
    name: 'san'
}, ' I am Zeact', Zeact.createElement('span', {
    name: 'zi'
}, ' I am Zi')))

// let App = Zeact.createElement('div', {
//     name: 'zorro',
// }, 'hello, world');

ZeactDOM.render(App, document.getElementById('root') as HTMLDivElement);