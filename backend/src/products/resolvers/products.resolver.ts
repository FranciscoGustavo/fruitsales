import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from '../services/products.service';
import { GqlAuthGuard } from '../../auth/guards/gql-auth.guard';
import { ProductDto, ProductUde } from '../../graphql';

@Resolver('Products')
export class ProductsResolver {

  constructor (
    private service: ProductsService,
  ) {}

  @Query('products')
  @UseGuards(GqlAuthGuard)
  async getAllProducts(
    @Args('limit') limit: number,
    @Args('page') page: number,
  ): Promise<any> {
    limit = limit ? limit : 20;
    page = page ? page : 1;
    try {
      const products = await this.service.getAllProducts({ limit, page });
      return products;
      
    } catch (error) {
      
    }
  }

  @Query('product')
  async getProduct(@Args('id') productId: string): Promise<any> {
    try {
      const product = await this.service.getProduct(productId);
      return product;
    } catch (error) {
      
    }
  }

  @Mutation('createProduct')
  async createProduct(@Args('product') product: ProductDto): Promise<any> {
    try {
      console.log('PARAMETROS', product);
      
      const createdProduct = await this.service.createProduct(product);
      return createdProduct;
    } catch (error) {
      console.log(error.message)
    }
  }

  @Mutation('updateProduct')
  async updateProduct(
    @Args('id') productId: string,
    @Args('product') product: ProductUde
  ): Promise<any> {
    try {
      const updatedProduct = await this.service.updateProduct(productId, product);
      return updatedProduct;
    } catch (error) {
      console.log(error.message)
      console.log(error.stack)
    }
  }

  @Mutation('deleteProduct')
  async deleteProduct(@Args('id') productId: string): Promise<void> {
    try {
      const deletedProduct = await this.service.deleteProduct(productId);
      return deletedProduct;
    } catch (error) {
      
    }
  }

}
