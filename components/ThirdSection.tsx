import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CirclePlay, Heading } from "lucide-react";

export const ThirdSection = () => {
  return (
    <section className="bg-S3BG flex-col py-8">
      <div className="flex justify-center items-center font-bold pt-6 pb-14">
        <h1 className="text-center text-5xl">Broadcast section</h1>
      </div>

      <div className="grid container justify-between md:grid-cols-2  lg:grid-cols">
        <Card variant={"variantBorder"} className=" sm:w-96   h-70 ">
          <CardHeader>
            <CardTitle className="text-4xl pb-10 font-bold">
              Get Started with our Brodcast Rooms
            </CardTitle>
            <CardDescription className="text-base font-semibold italic">
              Be a listner OR Story - Teller
            </CardDescription>
            <div className="bordershadow-lg rounded-lg pt-10">
              <Button icon={CirclePlay} type="submit" variant={"play"}>
                <p className="px-1 ">Listen to Live Session</p>
              </Button>
            </div>
          </CardHeader>
        </Card>

        <div className=" ">
          <Card className="">
            <CardHeader>
              <CardTitle>Right side of Brodcast Session</CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                type="submit"
                variant={"play"}
                className="mt-4"
                // onClick={form.handleSubmit(onSubmit)}
              >
                Initial Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
