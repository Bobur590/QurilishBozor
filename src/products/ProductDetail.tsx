import React from "react";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";
import img from "../assets/images/img.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";

interface Product {
  title: string;
  price: number;
  description: string;
  seller: string;
  image: string;
}

interface RelatedProduct {
  title: string;
  price: number;
  image: string;
}

const product: Product = {
  title: "Wooden Planks",
  price: 150,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  seller: "John Doe",
  image: img,
};

const relatedProducts: RelatedProduct[] = [
  { title: "Bricks", price: 200, image: image1 },
  { title: "Cordless Drill", price: 120, image: image2 },
  { title: "Concrete Blocks", price: 180, image: image3 },
  { title: "Ladder", price: 75, image: image4 },
  { title: "Bricks", price: 200, image: image1 },
  { title: "Cordless Drill", price: 120, image: image2 },
  { title: "Concrete Blocks", price: 180, image: image3 },
  { title: "Ladder", price: 75, image: image4 },
  { title: "Bricks", price: 200, image: image1 },
  { title: "Cordless Drill", price: 120, image: image2 },
  { title: "Concrete Blocks", price: 180, image: image3 },
  { title: "Ladder", price: 75, image: image4 },
  { title: "Bricks", price: 200, image: image1 },
  { title: "Cordless Drill", price: 120, image: image2 },
  { title: "Concrete Blocks", price: 180, image: image3 },
  { title: "Ladder", price: 75, image: image4 },
];

const ProductDetail: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1920px] mx-auto px-4 py-4">
        <Button
          variant="ghost"
          className="flex items-center text-gray-700 hover:text-gray-900"
        >
          <ArrowLeft className="h-10 w-10" />
        </Button>

        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          <div className="w-full lg:w-1/2 flex items-center bg-[#eeeeee] rounded-2xl">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-h-[400px] object-contain rounded-lg"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-2xl font-semibold text-orange-500 mt-2">
              ${product.price}
            </p>

            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-700">Description</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-700">Seller</h2>
              <p className="text-gray-600 mt-2">{product.seller}</p>
            </div>

            <Button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-full">
              Contact Seller
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto p-4">
        <h2 className="text-2xl font-bold text-gray-800">Related Products</h2>
        <div className="mt-4 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-9 gap-4">
          {relatedProducts.map((related, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#eeeeee] rounded-lg shadow-sm overflow-hidden">
                <img
                  src={related.image}
                  alt={related.title}
                  className="w-full h-20 sm:h-32 object-contain p-1"
                />
              </div>
              <h3 className="mt-2 text-sm font-semibold text-gray-700">
                {related.title}
              </h3>
              <p className="text-orange-500 font-medium">${related.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;