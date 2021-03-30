import React from 'react'

function Item(props)    {
    return (
        <tr>
            <th scope="row">{props.sku}</th>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.quantity}</td>
            {/* <td><button className="btn btn-sm btn-primary" type="button" onClick={()=> addItem(props.item.sku)}>Add</button></td>
            <td><button className="btn btn-sm btn-warning" type="button" onClick={()=> removeItem(props.item.sku)}>Remove</button></td> */}
        </tr>
    )

    
}

export default Item