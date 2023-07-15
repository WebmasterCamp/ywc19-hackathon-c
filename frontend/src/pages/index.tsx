import Hero from "@/components/Home/Hero";
import Product from "@/components/Home/Product";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Product button={true} />
    </MainLayout>
  );
}
