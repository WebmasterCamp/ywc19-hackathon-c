import Hero from "@/components/Home/Hero";
import ProductList from "@/components/Home/ProductList";
import MainLayout from "@/layouts/MainLayout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
export default function Home() {
  const { t } = useTranslation("common");

  return (
    <MainLayout>
      <Hero />
      <ProductList />
    </MainLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
