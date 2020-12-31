
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

export interface IMutation {
    login(username: string, password: string): Token | Promise<Token>;
    singup(username: string, password: string): User | Promise<User>;
    createProduct(product: ProductDto): Product | Promise<Product>;
    updateProduct(id: string, product: ProductUde): Product | Promise<Product>;
    deleteProduct(id: string): ProductDle | Promise<ProductDle>;
}

export interface Token {
    id: string;
    access_token: string;
}

export interface User {
    username: string;
    password: string;
    id: string;
}

export interface IQuery {
    products(limit?: number, page?: number): Product[] | Promise<Product[]>;
    product(id: string): Product | Promise<Product>;
    users(limit?: number, page?: number): User[] | Promise<User[]>;
    whoAmI(): User | Promise<User>;
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
