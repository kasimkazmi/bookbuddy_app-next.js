import IMAGES from '../constants/images';
import { Button } from './ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from './ui/card';
import { CirclePlay, Heading } from 'lucide-react';

export const BroadcastSection = () => {
    return (
        <section className="bg-S4BG flex-col pt-10 pb-20">
            <div className="flex justify-center items-center font-bold pb-14">
                <h1 className="text-center italic font-serif text-5xl">
                    Connecting Readers
                </h1>
            </div>
            <div className="grid gap-8 container md:grid-cols-3">
                {/* Share Card */}
                <Card className="flex flex-col items-center">
                    <img
                        src={IMAGES.share}
                        alt="Share"
                        className="w-full h-80  object-cover rounded-t-lg"
                    />
                    <CardHeader className="w-full text-left">
                        <CardTitle className="text-4xl font-serif  font-bold mt-4">
                            Share
                        </CardTitle>
                        <CardDescription className="italic font-serif text-lg text-zinc-400">
                            Discuss
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex gap-4 w-full items-center pb-6">
                        <Button variant="default" className="w-32">
                            Start Sharing
                        </Button>
                        <Button variant="outline" className="w-32">
                            Join Discussion
                        </Button>
                    </CardContent>
                </Card>

                {/* Discover Card */}
                <Card className="flex flex-col items-center">
                    <img
                        src={IMAGES.discover}
                        alt="Discover"
                        className="w-full h-80  object-cover rounded-t-lg"
                    />
                    <CardHeader className="w-full text-left">
                        <CardTitle className="text-4xl font-serif  font-bold mt-4">
                            Discover
                        </CardTitle>
                        <CardDescription className="italic font-serif text-lg text-zinc-400">
                            Explore
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex gap-4 w-full items-center pb-6">
                        <Button variant="default" className="w-32">
                            Find Stories
                        </Button>
                        <Button variant="outline" className="w-32">
                            Browse Rooms
                        </Button>
                    </CardContent>
                </Card>

                {/* Explore Card */}
                <Card className="flex flex-col items-center">
                    <img
                        src={IMAGES.explore}
                        alt="Explore"
                        className="w-full h-80  object-cover rounded-t-lg"
                    />
                    <CardHeader className="w-full text-left">
                        <CardTitle className="text-4xl font-serif  font-bold mt-4">
                            Explore
                        </CardTitle>
                        <CardDescription className="italic font-serif text-lg text-zinc-400">
                            Engage
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex gap-4 w-full items-center pb-6">
                        <Button variant="default" className="w-32">
                            Join Now
                        </Button>
                        <Button variant="outline" className="w-32">
                            See Events
                        </Button>
                    </CardContent>
                </Card>
            </div>
            {/* <div className="grid container justify-between md:grid-cols-2  lg:grid-cols">
                <Card variant={'variantBorder'} className=" sm:w-96   h-70 ">
                    <CardHeader>
                        <CardTitle className="text-4xl pb-10 font-bold">
                            Get Started with our Brodcast Rooms
                        </CardTitle>
                        <CardDescription className="text-base font-semibold italic">
                            Be a listner OR Story - Teller
                        </CardDescription>
                        <div className="bordershadow-lg rounded-lg pt-10">
                            <Button
                                icon={CirclePlay}
                                type="submit"
                                variant={'play'}
                            >
                                <p className="px-1 ">Listen to Live Session</p>
                            </Button>
                        </div>
                    </CardHeader>
                </Card>

                <div className=" ">
                    <Card className="">
                        <CardHeader>
                            <CardTitle>
                                Right side of Brodcast Session
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Button
                                type="submit"
                                variant={'play'}
                                className="mt-4"
                                // onClick={form.handleSubmit(onSubmit)}
                            >
                                Initial Request
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div> */}
        </section>
    );
};
