import { getProduct } from "@/api/admin/products";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import MainLayout from "@/layouts/MainLayout";
import { TProducts } from "@/types/products";
import {
  ChevronLeftIcon,
  CreditCardIcon,
  MapPinIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { getDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type TCarts = TProducts & {
  amount: number;
  color: string;
};

const Payment = () => {
  const [carts, setCarts] = useState<TCarts[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      const cartLocal = JSON.parse(localStorage.getItem("item") || "[]");
      const data: any = await Promise.all(
        cartLocal.map(async (cart: TCarts) => {
          const { data } = await getProduct(cart.id);

          return {
            ...data,
            amount: cart.amount,
            color: cart.color,
          };
        })
      );

      setCarts(data);
    };

    fetchData();
  }, []);

  return (
    <MainLayout>
      <Link href="/">
        <button className="fixed top-0 left-0 m-4 text-custom-red bg-white p-2 rounded-full shadow-custom-shadow">
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
      </Link>

      <Container className="py-6 space-y-6">
        <h2 className="font-bold text-2xl text-center">รายการที่สั่งซื้อ</h2>

        <div className="bg-white rounded-3xl shadow-custom-shadow p-6 space-y-4">
          <h3 className="text-xl font-bold">คำสั่งซื้อของฉัน</h3>

          <div className="space-y-2">
            <h4 className="text-lg font-bold">ที่อยู่สำหรับจัดส่ง</h4>
            <div className="flex flex-row space-x-2">
              <div>
                <MapPinIcon className="w-8 h-8 text-custom-red" />
              </div>
              <div>
                69/45 ถนนเพลินพิทักษ์ ตำบลทับเที่ยง อำเภอเมือง จังหวัดตรัง 92000
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg">standingup shop</h4>
            {carts?.map((cart: TCarts) => (
              <div key={cart.id} className="flex flex-row space-x-4">
                <div>
                  <div className="relative w-24 h-24">
                    <Image
                      src={cart.image}
                      alt=""
                      fill={true}
                      className="rounded-2xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <h3 className="font-bold">{cart.name}</h3>
                    <p>{cart.description.slice(0, 50)}</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div>${cart.price * cart.amount}</div>
                    <div>x{cart.amount}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr />
          <div className="space-y-2">
            <h4 className="font-bold text-lg">การจัดส่ง</h4>
            <div className="flex flex-row justify-between items-center space-x-2">
              <div className="flex flex-row space-x-2">
                <div>
                  <ShoppingCartIcon className="w-8 h-8 text-custom-dark-orange" />
                </div>
                <div>
                  <div className="font-semibold">
                    PROUDVERRR - ขนส่งในประเทศ{" "}
                  </div>
                  <div className="text-gray-400">
                    ได้รับสินค้าภายในวันที่ 17 ก.ค. 66
                  </div>
                </div>
              </div>
              <div>$2</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-custom-shadow p-6 space-y-4">
          <h3 className="text-xl font-bold">ช่องทางการชำระเงิน</h3>

          <div className="flex flex-row justify-between items-center space-x-2">
            <div className="flex flex-row space-x-2">
              <div>
                <CreditCardIcon className="w-8 h-8 text-custom-dark-orange" />
              </div>
              <div>
                <div className="font-semibold">0452323XXXX</div>
                <div>ปริญ จินตนาการ</div>
              </div>
            </div>
            <div>
              <button className="w-4 h-4 bg-custom-red ring-2 ring-offset-2 ring-custom-red rounded-full"></button>
            </div>
          </div>
        </div>

        <div className="fixed rounded-t-3xl bg-white"></div>
      </Container>

      {/* <div className="pb-12 sm:pb-16 lg:pb-24">
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
                      <tr className="text-center">
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
                <div className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
                  <header className="flex flex-col justify-center items-center">
                    <div className="relative w-full h-64">
                      <Image
                        fill={true}
                        src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
                        alt="front credit card"
                        className="object-contain"
                      />
                      <div className="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12">
                        <p
                          className="number mb-5 sm:text-xl"
                          x-text="cardNumber !== '' ? cardNumber : '0000 0000 0000 0000'"
                        />
                        <div className="flex flex-row justify-between">
                          <p x-text="cardholder !== '' ? cardholder : 'Card holder'" />
                          <div className=""></div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8  sm:bottom-24 right-0 sm:px-12">
                        <div className="border border-white w-16 h-9 flex justify-center items-center">
                          <p x-text="securityCode !== '' ? securityCode : 'code'" />
                        </div>
                      </div>
                    </div>
                    <ul className="flex">
                      <li className="mx-2">
                        <div className="relative w-14 aspect-video">
                          <Image
                            src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                            alt=""
                            fill={true}
                            className="object-contain"
                          />
                        </div>
                      </li>
                      <li className="ml-5">
                        <div className="relative w-16 aspect-video">
                          <Image
                            fill={true}
                            className="object-contain"
                            src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                            alt=""
                          />
                        </div>
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
                          <select className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none">
                            <option value="" selected={true}>
                              MM
                            </option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
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
                      <button className="submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                        ชำระเงิน
                      </button>
                    </Link>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </MainLayout>
  );
};

export default Payment;
