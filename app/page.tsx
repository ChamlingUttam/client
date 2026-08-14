import Image from "next/image"
import ProductList from "./components/ProductList"


const page = () => {
  return (
    <div className="">
    <div className="relative aspect-[3/1] mb-12">
      <Image src="/featured.png" alt="content" fill/>
    </div>
    <ProductList/>
    </div>
  )
}

export default page
