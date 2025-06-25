'use client';
import { useState } from 'react';
import { Button } from '@/src/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/src/components/ui/form';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/src/components/ui/card';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from '@/src/components/ui/tabs';
import { Input } from '@/src/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodType } from 'zod';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/src/components/ui/dialog';
import BackButton from '@/src/components/ui/backButton';

const Signup = () => {
    const [isForgotPassVisible, setIsForgotPassVisible] = useState(false);
    const zodType: ZodType<any, any, any> = z
        .object({
            email: z.string().email('Invalid email Address'),
            username: z
                .string()
                .min(1, 'Username is required')
                .max(20, 'Username must not exceed 20 characters'),
            usernameOrEmail: z.union([
                z
                    .string()
                    .min(1, 'Username is required')
                    .max(20, 'Username must not exceed 20 characters')
                    .regex(/^[a-zA-Z0-9_]+$/, 'Invalid username format'),
                z.string().email()
            ]),
            password: z
                .string()
                .min(6, 'Password must be at least 6 characters long'),
            confirmPassword: z
                .string()
                .min(6, 'Password must be at least 6 characters')
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: 'Passwords do not match',
            path: ['confirmPassword']
        });

    const form = useForm({
        resolver: zodResolver(zodType),
        defaultValues: {
            email: '',
            username: '',
            usernameOrEmail: '',
            password: '',
            confirmPassword: ''
        }
    });

    const onSubmit = (data: any) => {
        console.log(data);
        // Call API or perform other actions here
    };

    return (
        <section className="flex w-full h-screen bg-S1BG justify-center items-center py-10">
            <div className="w-full max-w-md">
                <BackButton
                variant='filled'
                    text="Back to Home"
                    className="flex justify-between items-center mb-4"
                />
                <Tabs defaultValue="left" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="left">Signup</TabsTrigger>
                        <TabsTrigger value="right">Register</TabsTrigger>
                    </TabsList>
                    <TabsContent value="left">
                        <Card>
                            <CardHeader className="content-center">
                                <CardTitle className="p-4">Sign In</CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-2 grid gap-4">
                                <div className="grid grid-cols-2 gap-6">
                                    <Button variant="facebook">Facebook</Button>
                                    <Button variant="google">Google</Button>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-background px-2 text-muted-foreground">
                                            Or continue with
                                        </span>
                                    </div>
                                </div>

                                <Form {...form}>
                                    <FormField
                                        name="usernameOrEmail"
                                        render={({
                                            field,
                                            fieldState,
                                            formState
                                        }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Username or email address *
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id="usernameOrEmail"
                                                        required
                                                        placeholder="Enter Username or Email"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        name="password"
                                        render={({
                                            field,
                                            fieldState,
                                            formState
                                        }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Password *
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id="password"
                                                        required
                                                        placeholder="Enter Password"
                                                        {...form.register(
                                                            'password'
                                                        )}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </Form>

                                <Dialog>
                                    <DialogTrigger>
                                        <Button variant="link">
                                            Forgot Password?
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-md">
                                        <DialogHeader>
                                            <DialogTitle className="text-center py-2">
                                                Forgot your password?
                                            </DialogTitle>
                                            <DialogDescription className="p-2">
                                                Please fill in your email below
                                                and we'll send you a link to
                                                reset your password.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="flex items-center space-x-2">
                                            <div className="grid flex-1 gap-2">
                                                <Input
                                                    id="link"
                                                    placeholder="Email Address*"
                                                />
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <DialogClose asChild>
                                                <Button
                                                    type="submit"
                                                    size="sm"
                                                    className="px-2"
                                                >
                                                    Reset Password
                                                </Button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </CardContent>
                            <CardFooter className="justify-center">
                                <Button
                                    type="submit"
                                    onClick={form.handleSubmit(onSubmit)}
                                >
                                    Sign in
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    {/* Create Account Section */}
                    <TabsContent value="right">
                        <Card>
                            <CardHeader className="content-center">
                                <CardTitle className="py-2">
                                    Create An Account
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-2">
                                <Form {...form}>
                                    <FormField
                                        name="current"
                                        render={({
                                            field,
                                            fieldState,
                                            formState
                                        }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id="name"
                                                        type="name"
                                                        required
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        name="username"
                                        render={({
                                            field,
                                            fieldState,
                                            formState
                                        }) => (
                                            <FormItem>
                                                <FormLabel>Username</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id="username"
                                                        type="username"
                                                        required
                                                        {...form.register(
                                                            'username'
                                                        )}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        name="password"
                                        render={({
                                            field,
                                            fieldState,
                                            formState
                                        }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    New password
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id="password"
                                                        type="password"
                                                        required
                                                        {...form.register(
                                                            'password'
                                                        )}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        name="confirmPassword"
                                        render={({
                                            field,
                                            fieldState,
                                            formState
                                        }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Confirm new password
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id="confirmPassword"
                                                        type="password"
                                                        required
                                                        {...form.register(
                                                            'confirmPassword'
                                                        )}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </Form>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    type="submit"
                                    onClick={form.handleSubmit(onSubmit)}
                                >
                                    Create Account
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default Signup;
