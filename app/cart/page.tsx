"use client"
import { ArrowRight, Cross, Trash } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import ShippingForm from '../components/ShippingForm'
import PaymentForm from '../components/PaymentForm'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { removeCart } from '../store/cartSlice'


type PaymentFormData = {
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

const steps = [
    {
        id:1,
        title:"Shopping Cart"
    },
      {
        id:2,
        title:"Shipping Address"
    },
      {
        id:3,
        title:"Payment method"
    },
]


//tempory items

// const cartITems = [
//      {
//     id: 1,
//     name: "Adidas CoreFit T-Shirt",
//     shortDescription:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     price: 39.9,
//     sizes: ["s", "m", "l", "xl", "xxl"],
//     colors: ["gray", "purple", "green"],
//     images: {
//       gray: "/products/1g.png",
//       purple: "/products/1p.png",
//       green: "/products/1gr.png",
//     },
//     quantity:1,
//     selectedSize:"m",
//     selectedColor:"green"
//   },
//   {
//     id: 2,
//     name: "Puma Ultra Warm Zip",
//     shortDescription:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     price: 59.9,
//     sizes: ["s", "m", "l", "xl"],
//     colors: ["gray", "green"],
//     images: { gray: "/products/2g.png", green: "/products/2gr.png" }, quantity:1,
//     selectedSize:"m",
//     selectedColor:"green"
//   },
  
//   {
//     id: 3,
//     name: "Nike Air Essentials Pullover",
//     shortDescription:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     price: 69.9,
//     sizes: ["s", "m", "l"],
//     colors: ["green", "blue", "black"],
//     images: {
//       green: "/products/3gr.png",
//       blue: "/products/3b.png",
//       black: "/products/3bl.png",
//     },
//      quantity:1,
//     selectedSize:"m",
//     selectedColor:"green"
//   }
// ]
const page = () => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const [shippingForm,setShippingForm] = useState(null)

    const activeStep = parseInt(searchParams.get("step") || "1")

    const [paymentForm, setPaymentForm] =
  useState<PaymentFormData | null>(null);

 const carts = useSelector((store: RootState) => store.cart.items)
const dispatch = useDispatch<AppDispatch>()

  const [deleteitems,setDeleteItems]= useState<number | null>(null)

  
  return (
    <div className='flex flex-col gap-8 items-center justify-center mt-12'>
        <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {
                steps.map((step)=>(
                    <div className={`flex items-center gap-2 border-b-2 pb-2 ${step.id === activeStep ? "border-gray-800":"border-gray-200"}`} key={step.id}>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${step.id===activeStep ? "bg-gray-800":"bg-gray-200"}`}>
                            {step.id}
                        </div>
                        <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-400"
              }`}
            >
                        {step.title}
                        </p>
                    </div>
                ))
            }

        </div>
        <div className='w-full flex flex-col lg:flex-row gap-16'>
          {/** left section */}
          <div className="w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {activeStep ===1 ? (
            carts.map((item)=>(
              <div className='flex justify-between' key={item.id}>
                <div className='flex gap-8'>
                  <div className='relative w-32 h-32 overflow-hidden  bg-gray-50 rounded-lg'>
                    <Image src={item.images[item.selectedColor]} alt='images' fill className='object-contain'/>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-xs text-gray-500">
                        Size: {item.selectedSize}
                      </p>
                      <p className="text-xs text-gray-500">
                        Color: {item.selectedColor}
                      </p>
                    </div>
                    <p className="font-medium">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button className='text-red-600'>
                  <Trash
                  onClick={()=>setDeleteItems(item.id)}
                  />
                </button>
              </div>
            ))
          ):
          activeStep===2?(<ShippingForm onContinue={()=>router.push("/cart?step=3",{scroll:false})} setShippingForm={setShippingForm}/>):
          activeStep ===3 && shippingForm ? (<PaymentForm  setPaymentForm={setPaymentForm}
    onContinue={() => {
      // Place order here
      console.log("Payment:", paymentForm);
    }}/> ):( <p>please fill the shipping form to continue.</p>)

        }
          </div>
          {/**right payment section */}
           <div className="w-full lg:w-5/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8 ">
           <h2 className='font-semibold '>Cart Details</h2>
           <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-2 mt-4 text-gray-400 text-sm'>
              <p>Subtotal</p>
              <p>Discount(10%)</p>
              <p>Shipping Fee</p>
            </div>
            <div  className='flex flex-col gap-2 mt-4 font-semibold text-sm  '>
              <p>$123</p>
              <p>$2</p>
              <p>$1</p>
            </div>
           </div>
             <hr className='border-gray-400 mt-2 ' />
            <div className="flex justify-between mt-2">
              <p className="text-gray-800 font-semibold">Total</p>
              <p className="font-semibold text-sm">
                $123
              </p>
            </div>
         {activeStep ===1 &&
           <button className='w-full mt-2  text-white bg-gray-800 rounded-lg flex items-center justify-center py-1.5 '
           onClick={()=>router.push("/cart?step=2",{scroll:false})}
           >
            continue
           <span><ArrowRight width={18} height={18} /></span>

            </button>
         }
            </div>
        </div>

        {
          deleteitems !==null && (
           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
  <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">

    
    <button
      onClick={() => setDeleteItems(null)}
      className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
    >
      <Cross size={18} />
    </button>

    {/* Icon */}
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
      <Trash className="text-red-500" size={25} />
    </div>

    {/* Content */}
    <div className="mt-4 text-center">
      <h1 className="text-xl font-semibold text-gray-800">
        Remove item?
      </h1>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        Are you sure you want to remove this item from your cart?
        This action cannot be undone.
      </p>
    </div>

    {/* Buttons */}
    <div className="mt-7 flex gap-3">

      <button
        onClick={() => setDeleteItems(null)}
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
      >
        Cancel
      </button>

      <button
        onClick={() => {
          if (deleteitems !== null) {
            dispatch(removeCart(deleteitems));
            setDeleteItems(null);
          }
        }}
        className="flex-1 rounded-lg bg-red-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-600 active:scale-95"
      >
        Remove
      </button>

    </div>

  </div>
</div>
          )
        }
        
    </div>
  )
}

export default page
