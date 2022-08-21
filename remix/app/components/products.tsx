import { componentContent } from '../crystallize/utils/componentContent'
import { Image } from '@crystallize/react-image'
import { Link } from 'remix'
import { BookQuery } from '~/crystallize/queries/book.generated'

interface ProductsProps {
  products: BookQuery['books']
}

export const Products = ({ products }: ProductsProps) => {
  return (
    <div className="mt-20">
      <p className="text-lg font-semibold mb-10">Our books</p>
      <div className="flex items-start flex-wrap lg:gap-1 gap-5">
        {products?.children?.map((book, index) =>
          !componentContent(book?.bundle?.content, 'BooleanContent')?.value &&
          book.bundle ? (
            <Link
              to={componentContent(book, 'Product').path}
              prefetch="intent"
              className="flex flex-col lg:h-106 p-5 lg:w-80"
              key={index}
            >
              <div className="group relative">
                <Image
                  className="object-cover w-full"
                  {...componentContent(book, 'Product')?.defaultVariant
                    .firstImage}
                  sizes="(max-width: 1024px) 100vw, 400px"
                />

                <div className="absolute bg-background5 top-0 w-full flex flex-col justify-center items-start opacity-0 h-0 group-hover:opacity-95 group-hover:h-4/5 duration-500">
                  <h2 className="text-lg text-background5 font-text font-bold p-4 bg-background1 opacity-100">
                    {componentContent(book, 'Product')?.name}
                  </h2>
                  <p className="text-background5 bg-background1 p-4">
                    ${componentContent(book, 'Product')?.defaultVariant.price}
                  </p>
                </div>
              </div>
            </Link>
          ) : null,
        )}
      </div>
    </div>
  )
}
