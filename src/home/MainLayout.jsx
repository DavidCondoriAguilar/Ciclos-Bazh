import { CardImg } from "../components/CardImg";
import FirstSection from "./FirstSection";

export default function MainLayout() {
  return (
    <>
      <FirstSection/>
      <section className="grid grid-cols-2">
        <CardImg number="01" logo="images/facebook.jpg" />
        <CardImg number="02" logo="images/instagram.jpg" />
        <CardImg number="03" logo="images/linkedin.jpg" />
        <CardImg number="04" logo="images/facebook.jpg" />
      </section>
    </>
  );
}
