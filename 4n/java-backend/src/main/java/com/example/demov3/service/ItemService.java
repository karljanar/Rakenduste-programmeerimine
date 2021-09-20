package com.example.demov3.service;


import com.example.demov3.model.Item;
import com.example.demov3.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    @Autowired
    ItemRepository itemRepository;


    public List<Item> getItems(){
        return itemRepository.findAll();
    }

    public void saveItem(Item item) {
        itemRepository.save(item);
    }

    public void deleteItem(Long id){
        itemRepository.deleteById(id);
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
