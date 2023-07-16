import { getProduct } from "@/api/admin/products";
import Button from "@/components/Button";
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
      <button
        onClick={() => history.back()}
        className="fixed top-0 left-0 m-4 text-custom-red bg-white p-2 rounded-full shadow-custom-shadow"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

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

        <div className="fixed bottom-0 left-0 w-full rounded-t-3xl bg-white px-4 py-6 flex flex-row gap-2 justify-end">
          <div className="text-right">
            ยอดรวมทั้งหมด <br />{" "}
            <span className="font-bold text-lg">${57}</span>
          </div>
          <Link href="/">
            <Button
              text={"ยืนยันคำสั่งซื้อ"}
              color={"primary"}
              size={"md"}
              icon={<CreditCardIcon className="w-8 h-8" />}
            />
          </Link>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Payment;
