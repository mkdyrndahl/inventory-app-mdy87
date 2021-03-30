
export function getInventory()  {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/inventoryMDy87`)
    .then(response => response.json())
}

export function addToCart(item) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}`,   
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"sku" : item.sku, "name": item.name, "price": item.price, "quantity": item.quantity})
    })
    .then(response => response.json())
}

export async function deleteItem(sku){
    /*const deleteData = JSON.stringify({"sku": sku})
    return fetch(`${process.env.REACT_APP_API_BASE_URL}`,
    {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"sku" : item.sku, "name": item.name, "price": item.price, "quantity": item.quantity})
    })
    .then(response => response.json())*/
}
