
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Unities {
    pz = "pz",
    kg = "kg"
}

export interface ProductDto {
    cover: string;
    name: string;
    price?: number;
    unity: Unities;
}

export interface ProductUde {
    cover?: string;
    name?: string;
    price?: number;
    unity?: Unities;
}

export interface IQuery {
    products(limit?: number, page?: number): Product[] | Promise<Product[]>;
    product(id: string): Product | Promise<Product>;
    users(limit?: number, page?: number): User[] | Promise<User[]>;
    whoAmI(): User | Promise<User>;
}

export interface IMutation {
    createProduct(product: ProductDto): Product | Promise<Product>;
    updateProduct(id: string, product: ProductUde): Product | Promise<Product>;
    deleteProduct(id: string): ProductDle | Promise<ProductDle>;
}

export interface Product {
    id: string;
    cover: string;
    name: string;
    unity: Unities;
    price: number;
    createDateTime?: string;
    updateDateTime?: string;
}

export interface ProductDle {
    id: string;
    message: string;
}

export interface User {
    id: string;
}
