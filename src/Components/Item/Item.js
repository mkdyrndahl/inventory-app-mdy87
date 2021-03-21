import React from 'react'

function Item(props)    {
    return (
        <tr>
            <th scope="row">{props.Item.sku}</th>
            <td>{props.Item.name}</td>
            <td>{props.Item.price}</td>
            <td>{props.Item.quantity}</td>
            <td><button className="btn btn-sm btn-primary" type="button" onClick={()=> addItem(props.Item.sku)}>Add</button></td>
            <td><button className="btn btn-sm btn-warning" type="button" onClick={()=> removeItem(props.item.sku)}>Remove</button></td>
        </tr>
    )

    export default Item
}