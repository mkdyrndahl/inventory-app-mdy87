import React, {useState, useEffect} from 'react'
import {getInventory, addToCart, deleteItem} from '../../Services/inventoryService'
import InventoryList from '../InventoryList/InventoryList'

function DivContainer(){
    const [items, setInventory] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        getInventory().then(json=>setInventory(json))
    },[])

    const addItemToCart = sku => {
        addToCart(sku).then(json=>setCart(json))
    }

    const deleteItemFromCart = sku => {
        deleteItem(sku).then(json=>setCart(json))
    }

    return(
        <div className="container">
            <div className="row justify=content-md-center">
                <div className="col col-lg-2">
                    <InventoryList items={items} addItem={addItemToCart} deleteItem={deleteItemFromCart} />
                </div>
            </div>
        </div>
    )
}

export default DivContainer