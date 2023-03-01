import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../configs/contextData";
import BannerCategory from "../banner/BannerCategory";
import Category from "./Category";

const Categories = () => {
    const { products } = useData();
    const { category } = useParams();
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        if (!products) return;
        if (category) {
            const filter = products.filter(
                (item) => item.category === category,
            );
            setCategories(filter);
        }
    }, [category, products]);

    if (!categories) return;

    return (
        <div className="flex py-16">
            <BannerCategory />
            <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {categories.map((category) => (
                    <Category key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
};

export default Categories;
