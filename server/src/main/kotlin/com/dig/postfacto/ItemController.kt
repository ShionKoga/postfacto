package com.dig.postfacto

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/item")
class ItemController(val itemService: ItemService) {
    @GetMapping
    fun getAll(): List<Item> {
        return itemService.getAllItems()
    }

    @PostMapping
    @ResponseStatus(value = HttpStatus.CREATED)
    fun saveNewContent(@RequestBody item: Item): List<Item> {
        itemService.saveItems(item)
        return itemService.getAllItems()
    }
}