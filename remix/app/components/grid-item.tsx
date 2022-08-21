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
      className="lg:absolute lg:top-0 lg:bottom-0 lg:right-0  lg:w-8/12 overflow-hidden rounded-r-xl"
    />
  )
}

const GridItemTitle = ({ text }) => {
  if (!text) {
    return null
  }
  return (
    <div className="w-60 lg:text-left text-center m-auto">
      <h2 className="text-lg font-text font-bold">{text}</h2>
    </div>
  )
}

export const GridItem = ({ cell }) => {
  console.log({ cell })
  if (!cell.item) {
    return null
  }
  return cell.layout.colspan === 3 ? (
    <Link to={cell?.item?.path} prefetch="intent">
      <div className="flex relative lg:flex-row flex-col">
        <GridItemImage
          image={cell.item?.variants && cell.item.variants[0].images[0]}
        />
        <GridItemImage image={cell.item.image?.content?.images[0]} />
        <div className="flex flex-col justify-evenly lg:w-128  px-5  h-80 p-5 rounded-xl w-full lg:items-start items-center">
          <GridItemTitle
            text={cell.item.title?.content.text || cell?.item?.name}
          />
        </div>
      </div>
    </Link>
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
