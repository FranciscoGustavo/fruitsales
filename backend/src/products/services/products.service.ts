import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../models/products.entity';
import { ProductDto, ProductUde } from '../../graphql';

type GetProducts = {
  limit: number,
  page: number
}

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product) private productsRepo: Repository<Product>,
  ) {}

  async getAllProducts(query: GetProducts): Promise<any> {
    const { limit: take, page } = query;
    const skip = (page - 1) * take;

    const products = await this.productsRepo.find({ 
      take,
      skip,
    });
    return products;
  }

  async getProduct(productId: string): Promise<any> {
    const product = await this.productsRepo.findOne(productId);
    return product;
  }

  async createProduct(product: ProductDto): Promise<any> {
    const data = await this.productsRepo.create();
    data.cover = product.cover;
    data.name = product.name;
    data.unity = product.unity;

    const createdProduct = await this.productsRepo.save(data);
    return createdProduct;
  }

  async updateProduct(productId: string,  product: ProductUde): Promise<any> {
    const update = await this.productsRepo.update({ id: productId }, { ...product });
    if (update.affected === 1){
      const updatedProduct = await this.productsRepo.findOne(productId);
      return updatedProduct;
    }
  }

  async deleteProduct(productId: string): Promise<any> {
    const deletedProduct = await this.productsRepo.delete(productId);
    if (deletedProduct.affected === 1) {
      return {
        id: productId,
        message: 'product deleted',
      };
    }
  }

}
