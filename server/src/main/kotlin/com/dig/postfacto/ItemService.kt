package com.dig.postfacto

import org.springframework.stereotype.Service

interface ItemService {
    fun getAllItems(): List<Item>
    fun saveItems(item: Item)
}

@Service
class DefaultItemService(val itemRepository: ItemRepository): ItemService {
    override fun getAllItems(): List<Item> {
        return itemRepository.findAll()
    }

    override fun saveItems(item: Item) {
        itemRepository.save(item)
    }
}
