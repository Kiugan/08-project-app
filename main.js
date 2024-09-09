import { ShopApp } from './src/shop-app/shop-app';
import './style.css'
import javascriptLogo from '/javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
    <div>
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
const element = document.querySelector('.grid-shop');
ShopApp( element );
