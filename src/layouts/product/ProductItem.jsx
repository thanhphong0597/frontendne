import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product: { id, name, price } }) => {
    return (
        <div className="flex flex-col overflow-hidden border rounded-lg shadow-md hover:shadow-xl">
            <img
                src={`/img${id}.jpg`}
                alt={name}
                className="object-cover w-full h-40 rounded-t-lg"
            />
            <div className="flex flex-col flex-grow p-4">
                <div className="text-lg font-medium text-gray-900">{name}</div>
                <div className="my-2 text-gray-700">{price.toFixed(4)}vnđ</div>
                <div className="mt-auto ">
                    <Link to={`/${name}/${id}`}>
                        <button className="relative px-4 py-2 font-bold text-white bg-blue-500 rounded btn-buy hover:bg-blue-700">
                            Mua ngay
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
