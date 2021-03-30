import React, {useState, useEffect} from 'react'
import {getInventory, addToCart, deleteItem} from '../../Services/inventoryService'
import InventoryList from '../InventoryList/InventoryList'

function DivContainer(){
    const [inv, setInv] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        getInventory().then(inventory=>setInv(inventory))
    },[])

    const addItemToCart = sku => {
        addToCart(sku).then(cartItems=>setCart(cartItems))
    }

    const deleteItemFromCart = sku => {
        deleteItem(sku).then(cartItems=>setCart(cartItems))
    }

    return(
        <div className="container">
            <div className="row justify=content-md-center">
                <div className="col col-lg-2">
                    <InventoryList items={inv} /*addItem={addItemToCart} deleteItem={deleteItemFromCart}*/ />
                    {/* Cart goes here */}
                </div>
            </div>
        </div>
    )
}

export default DivContainer