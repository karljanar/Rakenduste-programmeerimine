package com.example.demov3.service;


import com.example.demov3.model.Category;
import com.example.demov3.model.Item;
import com.example.demov3.repository.CategoryRepository;
import com.example.demov3.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;


    public List<Item> getCategories(){
        return categoryRepository.findAll();
    }

    public void saveCategory(Item category) {
        categoryRepository.save(category);
    }

    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }


//    public void patchItem(Item price, Long id) {
//        itemRepository.update(price, id);
//    }

    //delete
    //edit
    //view one item

    //andmebaas

    // kategooria osas
}
