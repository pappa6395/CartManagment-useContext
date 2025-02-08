import { useCart } from "@/context/CartContext";
import { IProduct } from "@/type";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
import { Plus, ShoppingBag } from "lucide-react";
  

const ProductCard = ({ products }: {products: IProduct[]}) => {

  const { addToCart } = useCart();

  return (
    <div className="p-4 gap-6 grid grid-cols-2 md:grid-cols-4 mx-auto">
        { products ? (
            products.map((item, index) => {
                return (
                    <Card key={index} className="w-56 flex flex-col justify-between">
                        <CardHeader>
                            <Image 
                                src={item.image}
                                alt={item.title}
                                width={250}
                                height={300}
                                className="aspect-square"
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="truncate">{item.title}</CardTitle>
                            <CardDescription className="pt-2 line-clamp-3">{item.description}</CardDescription>
                            <div className="flex items-center mt-2 gap-2 text-sm">
                                <span>฿{item.price}</span>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                            <button 
                                onClick={() => addToCart(item)} 
                                className="bg-blue-500 text-white px-4 py-2 gap-1 rounded-lg flex items-center">
                                <Plus className="size-4"/>
                                <span className="text-sm">Add to Cart</span>
                            </button>
                        </CardFooter>
                    </Card>
                )
            })
        ) : (
            <p>No product found</p>
        )}
            
    </div>
  );
};

export default ProductCard;