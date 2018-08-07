import './css/index.less';
import './css/index.scss';

console.log(1);
const fn = () => {
    console.log(222);
}
fn();

let imgSrc = require('./images/002.jpg');
let img = new Image();
img.src = imgSrc;
$('#app').append(img);