'use client';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/src/components/ui/card';

import { useForm, Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodType } from 'zod';
import { Input } from './ui/input';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from '@/src/components/ui/select';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/src/components/ui/form';
import { Button } from '@/src/components/ui/button';

export const TradeSection = () => {
    const bookSchema: ZodType<any, any, any> = z.object({
        // Define your schema here
        bookTitle: z.string().min(1, 'Book name is required'),
        author: z.string().min(1, 'Author name is required'),
        condition: z.string().min(1, 'Invalid condition selected'),
        radius: z.string().min(1, 'Invalid radius selected')
    });

    const form = useForm({
        resolver: zodResolver(bookSchema),
        defaultValues: {
            bookTitle: '',
            author: '',
            condition: '',
            radius: ''
        }
    });

    return (
        <section className="bg-S4BG pt-10 pb-16   ">
            <div className="flex justify-center items-center font-bold pb-14"></div>
            <div className="grid container justify-center  grid-cols-1 md:grid-cols-2 lg:grid-cols">
                <div className=" ">
                    <CardHeader>
                        <CardTitle className="text-center py-2 font-serif   font-bold text-7xl">
                            Unlock the Power of BookBuddy's Trade
                        </CardTitle>
                        <CardDescription className="text-center py-3 font-sans text-lg">
                            Trade your books with fellow readers in your area.
                            Fill out the details below to find and connect with
                            potential trading partners. Specify the books you
                            are offering and those you are looking for, and set
                            your preferred trading radius.
                        </CardDescription>
                    </CardHeader>

                    <div className="px-4 py-2 justify-between flex gap-4">
                        <Button
                            className="bg-S3BG text-white py-2 px-4 rounded-2xl hover:bg-S4BG hover:text-white transition-colors duration-300"
                            onClick={() =>
                                form.handleSubmit((data) => {
                                    console.log(data);
                                })
                            }
                        >
                            Start Trading
                        </Button>

                        <Button
                            className="bg-S3BG text-white py-2 px-4 rounded-2xl hover:bg-S4BG hover:text-white transition-colors duration-300"
                            onClick={() =>
                                form.handleSubmit((data) => {
                                    console.log(data);
                                })
                            }
                        >
                            Explore Trade
                        </Button>
                    </div>
                </div>
                <div className=" "></div>
            </div>
        </section>
    );
};
