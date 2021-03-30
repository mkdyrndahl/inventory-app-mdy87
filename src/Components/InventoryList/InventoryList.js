import React from 'react'
import Item from '../Item/Item'

function InventoryList(props)   {
    return(
        <div className="col-md-6">
            <table className="table-light">
                <thead>
                    <tr>
                        <th scope="col">SKU</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        {/*<th scope="col">Add to Cart</th>
                        <th scope="col">Remove from Cart</th>*/}
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item) => <Item key={item.sku} Item={item} sku={item.sku} name={item.name} price={item.price} quantity={item.quantity} /*addItem={props.addItem} removeItem={props.removeItem}*/ />)}
                </tbody>
            </table>
        </div>
    )
    
}

export default InventoryList