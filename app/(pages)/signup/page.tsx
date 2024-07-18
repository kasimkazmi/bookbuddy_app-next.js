"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

const Signup = () => {
  const [isForgotPassVisible, setIsForgotPassVisible] = useState(false);

  const zodType: ZodType<any, any, any> = z.object({
    // Define your schema here
    email: z.string().email("Invalid email Address"),
    username: z
      .string()
      .min(1, "Username is required")
      .max(20, "Username must not be exced 20 characters "),
    usernameOrEmail: z.union([
      z
        .string()
        .min(1, "Username is required")
        .max(20, "Username must not be exced 20 characters ")
        .regex(/^[a-zA-Z0-9_]+$/, "invalid username format"),
      z.string().email(),
    ]),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
    //   .refine((data, { parent }) => data === parent.password, {
    //     message: "Passwords do not match",
    //   }),
  });

  const form = useForm({
    resolver: zodResolver(zodType),
    defaultValues: {
      email: "",
      username: "",
      usernameOrEmail: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Call API or perform other actions here
  };

  return (
    <div className="flex justify-center items-center py-10">
      <Tabs defaultValue="left" className="w-[500px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="left">Signup</TabsTrigger>
          <TabsTrigger value="right">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="left">
          <Card>
            <CardHeader className="contenr-center">
              <CardTitle className="p-4">Login</CardTitle>
              <CardDescription>Subtitle</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Form {...form}>
                <FormField
                  name="usernameOrEmail"
                  render={({ field, fieldState, formState }) => (
                    <FormItem>
                      <FormLabel>Username or email address *</FormLabel>
                      <FormControl>
                        <Input
                          id="usernameOrEmail"
                          required
                          placeholder="Enter Username or Email "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="password"
                  render={({ field, fieldState, formState }) => (
                    <FormItem>
                      <FormLabel>Password *</FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          required
                          placeholder="Enter Password"
                          {...form.register("password")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Form>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant={"link"}> Forgot Password ?</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader className="">
                    <DialogTitle className="text-center py-2">
                      Forgot your password?
                    </DialogTitle>
                    <DialogDescription className="p-2">
                      Please fill in your email below and we'll send you a link
                      to reset your password.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="sr-only">
                        Link
                      </Label>

                      <Input id="link" placeholder="email" />
                    </div>
                  </div>
                  <DialogFooter className="">
                    <DialogClose asChild>
                      <Button type="submit" size="sm" className="px-3">
                        Reset
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
            <CardFooter>
              <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
                Save
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* //Create Account Section  */}
        <TabsContent value="right">
          <Card>
            <CardHeader className="contenr-center">
              <CardTitle className="py-2">Register</CardTitle>
              <CardDescription>Subtitle.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Form {...form}>
                <FormField
                  name="current"
                  render={({ field, fieldState, formState }) => (
                    <FormItem>
                      <FormLabel>Name </FormLabel>
                      <FormControl>
                        <Input id="name" type="name" required {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="username"
                  render={({ field, fieldState, formState }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          id="username"
                          type="username"
                          required
                          {...form.register("username")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="password"
                  render={({ field, fieldState, formState }) => (
                    <FormItem>
                      <FormLabel>New password</FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          type="pasword"
                          required
                          {...form.register("password")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="confrimPassword"
                  render={({ field, fieldState, formState }) => (
                    <FormItem>
                      <FormLabel>New password</FormLabel>
                      <FormControl>
                        <Input
                          id="confirmPassword"
                          type="confirmPasword"
                          required
                          {...form.register("confirmPassword")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Form>
            </CardContent>
            <CardFooter>
              <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
                Save
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Signup;
