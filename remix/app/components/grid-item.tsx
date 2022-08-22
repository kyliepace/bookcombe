import { Image } from '@crystallize/react-image'
import { Link } from 'remix'

const Price = ({ variants }) => {
  if (!variants) {
    return null
  }
  return <p className="mt-4">${variants[0].price}</p>
}

const GridItemImage = ({ image }) => {
  if (!image) {
    return null
  }
  return (
    <Image
      {...image}
      loading="lazy"
      sizes="(max-width: 700px) 300px, 500px"
      className="basis-1/2"
    />
  )
}

const GridItemTitle = ({ text }) => {
  if (!text) {
    return null
  }
  return (
    <div className="w-120">
      <h2 className="text-2xl font-text font-bold">{text}</h2>
    </div>
  )
}

const GridItemDescription = ({ text }) => {
  if (!text) {
    return null
  }
  return (
    <div className="">
      <h2 className="text-lg font-text">{text}</h2>
    </div>
  )
}

export const GridItem = ({ cell }) => {
  if (!cell.item) {
    return null
  }
  console.log('items: ', cell.item.items?.content?.items)
  return cell.layout.colspan === 3 ? (
    <div className="flex ">
      <GridItemImage
        image={cell.item?.variants && cell.item.variants[0].images[0]}
      />
      <GridItemImage image={cell.item.image?.content?.images[0]} />
      <div className=" lg:w-128  px-5  h-80 p-5 rounded-xl ">
        <GridItemTitle text={cell.item.title?.content?.text} />
        <GridItemDescription
          text={cell.item.description?.content?.plainText[0]}
        />
      </div>
    </div>
  ) : (
    <Link to={cell.item.path} prefetch="intent">
      <div className="flex flex-col px-5 py-7 rounded-xl lg:h-106 h-full">
        <div className="flex justify-between items-start"></div>
        <GridItemImage
          image={cell.item?.variants && cell.item.variants[0].images[0]}
        />
        <GridItemImage image={cell.item.image?.content?.images[0]} />

        <GridItemTitle
          text={cell.item.title?.content?.text || cell.item?.name}
        />
      </div>
    </Link>
  )
}
