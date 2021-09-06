package com.example.demov3.controller;

import com.example.demov3.model.Item;
import com.example.demov3.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ItemController {

    @Autowired
    ItemService itemService;
    @GetMapping ("items")
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @PostMapping("items")
    public String postItems(@RequestBody Item item ) {
        itemService.saveItem(item);
        return "working " + item.getName();
    }

//    @PatchMapping("items")
//    public String patchItems(@RequestBody Item price, @RequestBody Long id ) {
//        itemService.patchItem(price, id);
//        return "Updated ";
//    }

    @DeleteMapping("items/{id}")
    public String deleteItems(@PathVariable("id") Long id){
        itemService.deleteItem(id);
        return "Removed ";
    }
}
