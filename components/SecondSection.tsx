"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

export const SecondSection = () => {
  const bookSchema: ZodType<any, any, any> = z.object({
    // Define your schema here
    bookTitle: z.string().min(1, "Book name is required"),
    author: z.string().min(1, "Author name is required"),
    condition: z.string().min(1, "Invalid condition selected"),
    radius: z.string().min(1, "Invalid radius selected"),
  });

  const form = useForm({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      bookTitle: "",
      author: "",
      condition: "",
      radius: "",
    },
  });
  const onSubmit = (data: any) => {
    try {
      // Validate data against the schema
      const validatedData = bookSchema.parse(data);
      console.log(validatedData, "Data passed");
      // Call API or perform other actions with validated data here
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        console.error(error.errors);
        // Optionally, transform and display these errors in your UI
      } else {
        // Handle unexpected errors
        console.error("An unexpected error occurred", error);
      }
    }
  };
  return (
    <section className="bg-S4BG py-14   ">
      <div className="grid container justify-center  grid-cols-1 md:grid-cols-2 lg:grid-cols">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>Initiate a Book Trade</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <FormField
                name="bookTitle"
                render={({ field, fieldState, formState }) => (
                  <FormItem>
                    <FormLabel>Book Titile *</FormLabel>
                    <FormControl>
                      <Input
                        id="bookTitle"
                        required
                        placeholder="Enter Book Name "
                        {...field}
                      />
                    </FormControl>
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
              <FormField
                name="author"
                control={form.control}
                render={({ field, fieldState, formState }) => (
                  <FormItem>
                    <FormLabel>Author *</FormLabel>
                    <FormControl>
                      <Input
                        id="author"
                        required
                        placeholder="Enter Book Author "
                        {...field}
                      />
                    </FormControl>
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />

              <FormField
                name="condition"
                render={({ field, fieldState, formState }) => (
                  <FormItem>
                    <FormLabel>Book Condition *</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger className="w[180px] mt-3">
                          <SelectValue placeholder="Book Condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup id="condition" aria-required>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="like-new">Like New</SelectItem>
                            <SelectItem value="good">Good</SelectItem>
                            <SelectItem value="fair">Fair</SelectItem>
                            <SelectItem value="acceptable">
                              Acceptable
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />

              <FormField
                name="radius"
                render={({ field, fieldState, formState }) => (
                  <FormItem>
                    <FormLabel>Choose Radius *</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger className="w[180px] mt-3">
                          <SelectValue placeholder="Trade Radius:" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup id="radius" aria-required>
                            <SelectItem value="mile5">5 miles</SelectItem>
                            <SelectItem value="mile10">10 miles</SelectItem>
                            <SelectItem value="mile20">20 miles</SelectItem>
                            <SelectItem value="mile50">50 miles</SelectItem>
                            <SelectItem value="mile100">100 miles</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="mt-4"
                onClick={form.handleSubmit(onSubmit)}
              >
                Initial Request
              </Button>
            </Form>
          </CardContent>
        </Card>
        <div className=" ">
          <Card>
            <CardHeader>
              <CardTitle className="text-center py-2">Book Exchange</CardTitle>
              <CardDescription className="text-center py-3">
                Trade your books with fellow readers in your area. Fill out the
                details below to find and connect with potential trading
                partners. Specify the books you are offering and those you are
                looking for, and set your preferred trading radius.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};
