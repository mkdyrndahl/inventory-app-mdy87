import React from 'react'

function Item(props)    {
    return (
        <tr>
            <th scope="row">{props.item.sku}</th>
            <td>{props.item.name}</td>
            <td>{props.item.price}</td>
            <td>{props.item.quantity}</td>
            {/* <td><button className="btn btn-sm btn-primary" type="button" onClick={()=> addItem(props.item.sku)}>Add</button></td>
            <td><button className="btn btn-sm btn-warning" type="button" onClick={()=> removeItem(props.item.sku)}>Remove</button></td> */}
        </tr>
    )

    
}

export default Item