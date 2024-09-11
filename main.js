import { ShopApp } from './src/shop-app/shop-app';
import './style.css'
import javascriptLogo from '/javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
    <aside>
    </aside>
    <div class="grid-product>
        <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
        </a>
        <h1>Hello Shop-App!</h1>
        <div class="grid-shop">
            
        </div>
    </div>
`
const element1 = document.querySelector('.grid-shop');
const element2 = document.querySelector('aside');
ShopApp( element1, element2);
