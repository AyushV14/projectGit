const whatorder = document.getElementById('whatorder');
const menu = document.getElementById('menu');
const order = document.getElementById('order');
const orderdish = document.getElementById('orderdish');
const writeorder = document.getElementById('writeorder');

function showMenu() {
    whatorder.innerHTML = 'Let\'s take a look at our Menu';
    setTimeout(() => {
        menu.style.display = 'block';
        order.style.display = 'block';
    }, 1000);
}

function checkOrder(event) {
    event.preventDefault();
    const dish = orderdish.value.toLowerCase();
    writeorder.innerHTML = `You have ordered: ${dish}`;
    processOrder(dish);
}

function orderplace(dish) {
    return new Promise(function(resolve, reject) {
        if (['coffee', 'pizza', 'burger', 'tea', 'milkshake', 'cold drink'].includes(dish)) {
            resolve('Order is placed');
        } else {
            reject(`We don't serve ${dish}`);
        }
    });
}

function orderprocessing(dish) {
    return new Promise(function(resolve) {
        document.getElementById('processingorder').innerHTML = 'Order is being processed';
        setTimeout(() => {
            resolve(`${dish} is served`);
        }, 2000);
    });
}

async function processOrder(dish) {
    try {
        let thisorder = await orderplace(dish);
        const ordering = document.getElementById('orderplace');
        ordering.innerHTML = thisorder;

        let processedorder = await orderprocessing(dish);
        const serving = document.getElementById('serveorder');
        serving.innerHTML = processedorder;
    } catch (error) {
        writeorder.innerHTML = error;
    }
}





