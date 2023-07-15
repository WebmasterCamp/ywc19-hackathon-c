import Hero from "@/components/Home/Hero";
import Product from "@/components/Home/Product";
import MainLayout from "@/layouts/MainLayout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <MainLayout>
      <Hero />
      {t("greeting")}
      <Product button={true} />
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
