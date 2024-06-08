import Footer from "@/components/navigations/Footer";
import Header from "@/components/navigations/Header";

interface GeneralTemplateProps {
  children: React.ReactNode;
}

export default function GeneralTemplate({ children }: GeneralTemplateProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
