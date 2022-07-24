import { componentContent } from "../crystallize/utils/componentContent";
import { FrontpageQuery } from "../crystallize/queries/frontpage.generated";
import { Image } from "@crystallize/react-image";
import { Link } from "remix";

interface ProductsProps {
  products: FrontpageQuery["books"];
}

export const Products = ({ products }: ProductsProps) => {
  console.log('products: ', products)
  return (
    <div className="mt-20">
      <p className="text-lg font-semibold mb-10">Our books</p>
      <div className="flex items-start flex-wrap lg:gap-1 gap-5">
       
        {/* {products?.children?.map((book, index) =>
          // !componentContent(book?.bundle?.content, "BooleanContent")?.value &&
          // book.bundle ? (
          //   <Link
          //     to={componentContent(book, "Product").path}
          //     prefetch="intent"
          //     className="flex flex-col bg-primary rounded-xl lg:h-106 p-5 lg:w-80"
          //     key={index}
          //   >
          //     <div>
          //       <div className="flex justify-between items-start">
          //         <div className="flex gap-1">
          //           {book?.topics?.map((topic, index) => (
          //             <div
          //               className="text-sm bg-grey px-2 py-1 rounded-2xl"
          //               key={index}
          //             >
          //               {topic.name}
          //             </div>
          //           ))}
          //         </div>
          //         <p className="self-end">
          //           ${componentContent(book, "Product")?.defaultVariant.price}
          //         </p>
          //       </div>
          //       <Image
          //         {...componentContent(book, "Product")?.defaultVariant
          //           .firstImage}
          //         sizes="(max-width: 1024px) 100vw, 400px"
          //       />
          //       <h2 className="text-3xl font-bold text-center m-auto w-40">
          //         {componentContent(book, "Product")?.name}
          //       </h2>
          //     </div>
          //   </Link>
          // ) : null
        )} */}
      </div>
    </div>
  );
};
