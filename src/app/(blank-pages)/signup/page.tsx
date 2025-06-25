'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    signInWithPopup,
    sendPasswordResetEmail,
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    GoogleAuthProvider
} from 'firebase/auth';
import { auth, facebookProvider, googleProvider } from '@/src/firebase';

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
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/src/components/ui/form';
import { Input } from '@/src/components/ui/input';
import { Button } from '@/src/components/ui/button';
import BackButton from '@/src/components/ui/backButton';

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

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z
    .object({
        usernameOrEmail: z.string().min(1, 'Username or email required'),
        password: z.string().min(6, 'Password must be at least 6 characters'),
        confirmPassword: z.string().min(6, 'Confirm your password')
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'Passwords do not match'
    });

export default function Signup() {
    const router = useRouter();
    const [feedback, setFeedback] = useState<{
        message: string;
        type: 'success' | 'error';
    } | null>(null);

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            usernameOrEmail: '',
            password: '',
            confirmPassword: ''
        }
    });

    const handleSubmit = async (data: any) => {
        try {
            await createUserWithEmailAndPassword(
                auth,
                data.usernameOrEmail,
                data.password
            );
            setFeedback({
                message: 'Account created successfully!',
                type: 'success'
            });
            router.push('/dashboard');
        } catch (error: any) {
            setFeedback({
                message: error.message || 'Signup failed',
                type: 'error'
            });
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            setFeedback({ message: 'Signed in with Google!', type: 'success' });
            router.push('/dashboard');
        } catch (error: any) {
            setFeedback({
                message: error.message || 'Google sign-in failed',
                type: 'error'
            });
        }
    };

    const handleFacebookLogin = async () => {
        try {
            await signInWithPopup(auth, facebookProvider);
            setFeedback({
                message: 'Signed in with Facebook!',
                type: 'success'
            });
            router.push('/dashboard');
        } catch (error: any) {
            setFeedback({
                message: error.message || 'Facebook sign-in failed',
                type: 'error'
            });
        }
    };

    const handleForgotPassword = async () => {
        try {
            const email = form.getValues('usernameOrEmail');
            await sendPasswordResetEmail(auth, email);
            setFeedback({
                message: 'Password reset email sent!',
                type: 'success'
            });
        } catch (error: any) {
            setFeedback({
                message: error.message || 'Reset failed',
                type: 'error'
            });
        }
    };

    return (
        <section className="flex min-h-screen justify-center items-center bg-S1BG p-6">
            <div className="w-full max-w-md">
                <BackButton text="Back to Home" className="mb-4" />
                {feedback && (
                    <div
                        className={`p-3 mb-4 text-sm rounded-md ${feedback.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                    >
                        {feedback.message}
                    </div>
                )}

                <Tabs defaultValue="signup">
                    <TabsList className="grid grid-cols-2">
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                        <TabsTrigger value="login">Login</TabsTrigger>
                    </TabsList>

                    {/* Sign Up */}
                    <TabsContent value="signup">
                        <Card>
                            <CardHeader>
                                <CardTitle>Create Account</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Form {...form}>
                                    <FormField
                                        name="usernameOrEmail"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        required
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="password"
                                                        {...field}
                                                        required
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        name="confirmPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Confirm Password
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="password"
                                                        {...field}
                                                        required
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
                                    className="w-full"
                                    onClick={form.handleSubmit(handleSubmit)}
                                >
                                    Sign Up
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    {/* Login */}
                    <TabsContent value="login">
                        <Card>
                            <CardHeader>
                                <CardTitle>Sign In</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <Button
                                        variant="facebook"
                                        onClick={handleFacebookLogin}
                                    >
                                        Facebook
                                    </Button>
                                    <Button
                                        variant="google"
                                        onClick={handleGoogleLogin}
                                    >
                                        Google
                                    </Button>
                                </div>

                                <Form {...form}>
                                    <FormField
                                        name="usernameOrEmail"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        required
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="password"
                                                        {...field}
                                                        required
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </Form>

                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button
                                            variant="link"
                                            className="text-sm text-purple-600"
                                        >
                                            Forgot Password?
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>
                                                Reset Password
                                            </DialogTitle>
                                            <DialogDescription>
                                                Enter your email and we'll send
                                                you reset instructions.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <DialogFooter>
                                            <DialogClose asChild>
                                                <Button
                                                    onClick={
                                                        handleForgotPassword
                                                    }
                                                >
                                                    Send Reset Email
                                                </Button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className="w-full"
                                    onClick={form.handleSubmit(handleSubmit)}
                                >
                                    Sign In
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
