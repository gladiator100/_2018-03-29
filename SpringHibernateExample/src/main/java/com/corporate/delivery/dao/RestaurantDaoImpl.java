package com.corporate.delivery.dao;
 
import java.util.List;

import org.hibernate.Criteria;
import org.springframework.stereotype.Repository;

import com.corporate.delivery.model.Restaurant;
 
@Repository("restaurantDao")
public class RestaurantDaoImpl extends AbstractDao<Integer, Restaurant> implements RestaurantDao {
 
    public Restaurant findById(int id) {
        return getByKey(id);
    }
 
   @SuppressWarnings("unchecked")
    public List<Restaurant> getAll() {
	   Restaurant r = (Restaurant) this.getSession().get(Restaurant.class, new Integer(1));
	   
	   
        Criteria criteria = createEntityCriteria();
        return (List<Restaurant>) criteria.list();
    }
 
  }