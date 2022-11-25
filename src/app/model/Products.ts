import {Category} from './Category';

export class Products {
  id: number;
  name: string;
  price: number;
  description: string;
  manufacture: string;
  availableQuantity: number;
  image: string;
  category: Category;

  constructor(id: number, name: string, price: number, description: string, manufacture: string, availableQuantity: number, image: string, category: Category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.manufacture = manufacture;
    this.availableQuantity = availableQuantity;
    this.image = image;
    this.category = category;
  }
}
