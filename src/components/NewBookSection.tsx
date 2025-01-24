import { ProductCarousel } from "./ProductCarousel";
import { Button } from "./ui/button";

export const NewBookSection = () => {
  return (
    <section className="bg-S1BG flex flex-col items-center gap-8 pt-12 pb-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Welcome to your Happy Place</h1>
      <p className="text-base sm:text-lg md:text-xl text-center max-w-2xl">
        Shop brand new books at least 50% off* list prices every day
      </p>

      <section className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-6 justify-center sm:w-fit max-w-4xl">
        <Button variant={"secondary"} className=" sm:w-auto">Learn more</Button>
        <Button className=" sm:w-auto">Shop now</Button>
      </section>
      <ProductCarousel />
    </section>
  );
};