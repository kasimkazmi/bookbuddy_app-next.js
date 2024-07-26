import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const ForthSection = () => {
  return (
    <div className=" bg-S4BG flex-col py-14 border ">
      <div className="flex justify-center items-center font-bold pt-6 pb-14">
        <h1 className="text-center text-5xl">About Section</h1>
      </div>
      <div className="grid container space-x-11 justify-between grid-cols-1 lg:grid-col md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Establish :2024</CardTitle>
            <CardDescription>
              Book Buddy Ltd. is a lorem ipsum dolor sit amet, consectetur
              adipiscing elit. It began as a sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. In 8765, Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="mr-5" size={"lg"}>
              Learn More
            </Button>
          </CardContent>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Right side of About Session</CardTitle>
          </CardHeader>
          <CardContent>
            <Button
            // onClick={form.handleSubmit(onSubmit)}
            >
              Learn More
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
