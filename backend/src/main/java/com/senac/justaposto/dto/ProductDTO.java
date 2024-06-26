package com.senac.justaposto.dto;

import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import com.senac.justaposto.entities.Category;
import com.senac.justaposto.entities.Product;

public class ProductDTO {

	private Long id;
	
	@Size(min = 3, max = 80, message = "O nome precisa ter de 3 a 80 caracteres.")
	@NotBlank(message = "Campo obrigatório!")
	private String name;
	
	@Size(min = 10, message = "A descrição precisa ter no mínimo 1 caracteres")
	@NotBlank(message = "Campo obrigatório!")
	private String description;
	
	@NotNull(message = "Campo obrigatório!")
	@Positive(message = "O preço deve ser positivo.")
	private Double price;	
	
	private String imgUrl;
	
	@NotEmpty(message = "Deve ter pelo menos uma categoria.")
	private List<CategoryDTO> categories = new ArrayList<>();
	
	public ProductDTO(Long id, String name, String description, Double price, String imgUrl) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.imgUrl = imgUrl;
	}
	
	public ProductDTO(Product entity) {
		id = entity.getId();
		name = entity.getName();
		description =  entity.getDescription();
		price =  entity.getPrice();
		imgUrl =  entity.getImgUrl();
		for(Category cat : entity.getCategories()) {
			categories.add(new CategoryDTO(cat));
		}
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getDescription() {
		return description;
	}

	public Double getPrice() {
		return price;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public List<CategoryDTO> getCategories() {
		return categories;
	}
	
}