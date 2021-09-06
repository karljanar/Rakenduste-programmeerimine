package com.example.demov3.controller;

import com.example.demov3.model.Item;
import com.example.demov3.service.CategoryService;
import com.example.demov3.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryService;
    @GetMapping ("category")
    public List<Item> getCategory() {
        return categoryService.getCategories();
    }

    @PostMapping("category")
    public String postItems(@RequestBody Item category ) {
        categoryService.saveCategory(category);
        return "working " + category.getName();
    }

//    @PatchMapping("items")
//    public String patchItems(@RequestBody Item price, @RequestBody Long id ) {
//        itemService.patchItem(price, id);
//        return "Updated ";
//    }

    @DeleteMapping("category/{id}")
    public String deleteCategory(@PathVariable("id") Long id){
        categoryService.deleteCategory(id);
        return "Removed ";
    }
}
