const cabinets = [
    "empty",
    "empty",
    "empty"
]

const orders = {}

function genHexString(len) {
    const hex = '0123456789ABCDEF';
    let output = '';
    for (let i = 0; i < len; ++i) {
        output += hex.charAt(Math.floor(Math.random() * hex.length));
    }
    return output;
}

function add_order(order){
    const key=genHexString(7)
    orders[key] = order
    return key
}

function get_latest_order_id(){
    // TODO get latest unfilled order
    const id = 0
    return id
}

module.exports = {cabinets,orders,get_latest_order_id}