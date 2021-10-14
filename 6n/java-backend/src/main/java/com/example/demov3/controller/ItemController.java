package com.example.demov3.controller;

import com.example.demov3.model.Item;
import com.example.demov3.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    @Autowired
    ItemService itemService;
    @GetMapping ("items")
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @PostMapping("items")
    public void postItems(@RequestBody Item item ) {
        itemService.saveItem(item);
    }

    @DeleteMapping("delete-item/{id}")
    public List<Item> deleteItems(@PathVariable("id") Long id){
        itemService.deleteItem(id);
        return itemService.getItems();
    }

    @PostMapping("edit-item")
    public void editItem(@RequestBody Item item){
        itemService.saveItem(item);
    }

    @GetMapping("view-item/{id}")
    public Optional<Item> getOneItem(@PathVariable("id") Long id){
        return itemService.getOneItem(id);
    }



}
