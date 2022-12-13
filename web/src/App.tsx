import React, {useEffect, useState} from 'react'
import Item from './Item'
import axios from 'axios'

function App() {
    const [items, setItems] = useState<Item[]>([])
    const [itemInputValue, setItemInputValue] = useState('')

    const getItems = async () => {
        const serverUrl = process.env.REACT_APP_SERVER_URL
        const response = await axios.get(`${serverUrl}/api/item`)
        const items = response.data as Item[]
        setItems(items)
    }

    const saveItems = async () => {
        const serverUrl = process.env.REACT_APP_SERVER_URL
        const response = await axios.post(`${serverUrl}/api/item`, {name: itemInputValue})
        const items = response.data as Item[]
        setItems(items)
        setItemInputValue('')
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <>
            <h3>Post New Item</h3>
            <label>
                ItemName
                <input
                    type="text"
                    onChange={(e) => setItemInputValue(e.target.value)}
                    value={itemInputValue}
                />
            </label>
            <button disabled={itemInputValue === ''} onClick={saveItems}>save</button>
            <h3>Items</h3>
            {items.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </>
    )
}

export default App
