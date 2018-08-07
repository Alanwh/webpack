const fn = (str) => console.log(str);
fn('base page');

$('body').append('<div>from jquery<div>');
console.log(R.add(7)(2));

// 开启热更新
if (module.hot) {
    module.hot.accept((err) => {
        if (err) {
            console.error('Cannot apply HMR update.', err);
        }
    });
}
