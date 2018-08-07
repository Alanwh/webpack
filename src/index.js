import './css/index.less';
import './css/index.scss';

console.log(1333);
const fn = () => {
    console.log(14444);
}
fn();

let imgSrc = require('./images/002.jpg');
let img = new Image();
img.src = imgSrc;
$('#app').append(img);

// 开启热更新
if (module.hot) {
    module.hot.accept((err) => {
        if (err) {
            console.error('Cannot apply HMR update.', err);
        }
    });
}
     