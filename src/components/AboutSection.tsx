import { Button } from './ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from './ui/card';

export const AboutSection = () => {
    return (
        <div className=" bg-S4BG flex-col pb-20 pt-10">
            <div className="flex justify-center items-center font-bold pb-14"></div>
            <div className="grid container space-x-11 justify-between grid-cols-1 lg:grid-col md:grid-cols-2">
                <div>
                    <CardHeader>
                        <CardTitle className=" text-8xl font-serif">
                            {' '}
                            Discover the Joy of Reading
                        </CardTitle>
                        <CardDescription className="text-lg pt-4">
                            At BookBuddy, we believe that reading is not just a
                            pastime, but a transformative experience. Whether
                            you're a voracious reader or a casual bookworm, our
                            platform offers a diverse selection of titles,
                            personalized recommendations, and a thriving
                            community of fellow book lovers.
                        </CardDescription>
                    </CardHeader>
                </div>
                <div className="">
                    <CardHeader>
                        <CardTitle className=" text-5xl font-serif">
                            Join the Community
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Button className="mr-5" size={'lg'}>
                            Join Now
                        </Button>

                        <CardDescription className="text-lg">
                            Immerse yourself in a world of literary wonders and
                            let BookBuddy be your guide to discovering new
                            favorites and connecting with fellow readers.
                        </CardDescription>
                    </CardContent>
                </div>
            </div>
        </div>
    );
};
