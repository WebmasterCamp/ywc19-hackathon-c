import Image from "next/image"
import Link from "next/link"

const Payment = () => {
  const products = [
    {
      id: 1,
      name: 'สินค้า 1',
      quantity: 2,
      price: 100,
    },
    {
      id: 2,
      name: 'สินค้า 2',
      quantity: 1,
      price: 40,
    },
    {
      id: 3,
      name: 'สินค้า 2',
      quantity: 1,
      price: 40,
    },
    {
      id: 4,
      name: 'สินค้า 2',
      quantity: 1,
      price: 40,
    },
    {
      id: 5,
      name: 'สินค้า 2',
      quantity: 1,
      price: 40,
    },
  ]

  

  return (
      <div className="pb-12 sm:pb-16 lg:pb-24">
        <div className="relative">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden mt-6">
                  <div className="px-3 py-8 bg-white sm:p-10 sm:pb-6">
                    <div className="mt-4 flex items-baseline text-xl font-extrabold">
                      รายการที่สั่งซื้อ
                    </div>
                    <table className="min-w-full divide-y divide-gray-200 table-fixed ">
                      <thead>
                        <tr className='text-center'>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400"
                          >
                            สินค้า
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400"
                          >
                            จำนวน
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400"
                          >
                            ราคา
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">

                        {products.map((product) => (
                          <tr key={product.id}>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                {product.name}
                              </td>
                              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-center">
                                {product.quantity}
                              </td>
                              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-center">
                                {product.price}
                              </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                  </div>
                  <div className="flex justify-between px-6 pt-6 sm:p-10 sm:pt-6">
                    <div className="ml-3 text-base text-gray-700">ราคารวม</div>
                    <div className="ml-3 text-base text-gray-700">500 บาท</div>
                  </div>
                </div>

                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden mt-6">
                  
                <div
  className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white"
>
  <header className="flex flex-col justify-center items-center">
    <div
      className="relative"
    >
      <Image
        className="w-full h-auto"
        src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
        alt="front credit card"
      />
      <div className="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12">
        <p
          className="number mb-5 sm:text-xl"
          x-text="cardNumber !== '' ? cardNumber : '0000 0000 0000 0000'"
        />
        <div className="flex flex-row justify-between">
          <p x-text="cardholder !== '' ? cardholder : 'Card holder'" />
          <div className="">
          </div>
        </div>
      </div>
    </div>
    <div
      className="relative"
    >
      
      <div className="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8  sm:bottom-24 right-0 sm:px-12">
        <div className="border border-white w-16 h-9 flex justify-center items-center">
          <p x-text="securityCode !== '' ? securityCode : 'code'" />
        </div>
      </div>
    </div>
    <ul className="flex">
      
      <li className="mx-2">
        <Image
          className="w-14"
          src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
          alt=""
        />
      </li>
      <li className="ml-5">
        <Image
          className="w-7"
          src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
          alt=""
        />
      </li>
    </ul>
  </header>
  <main className="mt-4 p-4">
    <h1 className="text-xl font-semibold text-gray-700 text-center">
      Card payment
    </h1>
    <div className="">
      <div className="my-3">
        <input
          type="text"
          className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
          placeholder="Card holder"
          maxLength={22}
        />
      </div>
      <div className="my-3">
        <input
          type="text"
          className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
          placeholder="Card number"
          maxLength={19}
        />
      </div>
      <div className="my-3 flex flex-col">
        <div className="mb-2">
          <label htmlFor="" className="text-gray-700">
            Expired
          </label>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <select
            name=""
            id=""
            className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
          >
            <option value="" selected={true}>
              MM
            </option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            {/* <option value={07}>07</option>
            <option value={08}>08</option>
            <option value={09}>09</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option> */}
          </select>
          <select
            name=""
            id=""
            className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"

          >
            <option value="" selected={true}>
              YY
            </option>
            <option value={2023}>2023</option>
            <option value={2024}>2024</option>
            <option value={2025}>2025</option>
            <option value={2026}>2026</option>
          </select>
          <input
            type="text"
            className="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
            placeholder="Security code"
            maxLength={3}
          />
        </div>
      </div>
    </div>
  </main>
  <footer className="mt-6 p-4">
    <Link href="/">
    <button
      className="submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
    >
      ชำระเงิน
    </button>
    </Link>
  </footer>
</div>


                </div>

            </div>
          </div>
        </div>
      </div>
  )
}

export default Payment