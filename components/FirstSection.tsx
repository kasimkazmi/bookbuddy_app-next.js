import { ProductCarousel } from "./ProductCarousel";
import { SwitchTab } from "./SwitchTab";
import { Button } from "./ui/button";

export const FirstSection = () => {
  return (
    <section
      className="      
      border border-red-500 
 ml-auto mr-auto padding-container  items-center flex flex-col gap-8
  py-20 pl-16 text-center
    "
    >
      <h1 className="text-4xl font-bold">Welcom to your Happy Place</h1>
      <p className="text-2xl ">
        Shop brand new books at least 50% off* list prices every day
      </p>

      <section className="flex gap-6 py-6 justify-center">
        <Button variant={"secondary"}> Learn more </Button>
        <Button> Shop now </Button>
      </section>
      <SwitchTab />
      <ProductCarousel />
    </section>
  );
};
