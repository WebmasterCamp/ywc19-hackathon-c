import MainLayout from "@/layouts/MainLayout";
import Product from "@/components/Home/Product";
import Container from "@/components/Container";

import Link from "next/link";

const ProductPage = () => {
  return (
    <MainLayout>
      <Product />
      <Container className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <div className="mt-1">
            <input
              type="tel"
              name="amount"
              id="amount"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="0"
              defaultValue={0}
            />
          </div>
        </div>
        <div>
          <Link href="/payment">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Buy !
            </button>
          </Link>
        </div>
      </Container>
    </MainLayout>
  );
};

export default ProductPage;
