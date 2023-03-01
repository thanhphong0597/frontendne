import React from "react";
import { useData } from "../../configs/contextData";
import ProductItem from "./ProductItem";

const ProductList = ({ slide }) => {
    const { products } = useData();
    if (!products) return;
    return (
        <div className="grid gap-4 p-4 grid-flow-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-flow-dense">
            {slide
                ? products
                      .slice(0, slide)
                      .map((product) => (
                          <ProductItem key={product.id} product={product} />
                      ))
                : products.map((product) => (
                      <ProductItem key={product.id} product={product} />
                  ))}
        </div>
    );
};

export default ProductList;
