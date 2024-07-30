import { ProductCarousel } from "./ProductCarousel";
import { Button } from "./ui/button";

export const FirstSection = () => {
  return (
    <section className="bg-S1BG items-center flex flex-col gap-8 pt-12 pb-20">
      <h1 className="text-4xl font-bold">Welcome to your Happy Place</h1>
      <p className="text-2xl ">
        Shop brand new books at least 50% off* list prices every day
      </p>

      <section className="flex gap-6 py-6 justify-center">
        <Button variant={"secondary"}> Learn more </Button>
        <Button> Shop now </Button>
      </section>
      <ProductCarousel />
    </section>
  );
};
