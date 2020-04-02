import Zeact from './zeact'

let App = 'hello world';

// <div name="hello">hello, <span> world</span></div>
// let VNode = Zeact.createElement{
//     type: 'div',
//     props: {
//         name: 'hello,',
//         children: ['span', ]
//     },
// }

Zeact.render(App, document.getElementById('root') as HTMLDivElement);