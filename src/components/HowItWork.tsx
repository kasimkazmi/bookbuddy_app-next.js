import {
    FaUserEdit,
    FaBookOpen,
    FaComments,
    FaExchangeAlt
} from 'react-icons/fa';
import { Card } from './ui/card';

export const HowItWorks = () => {
    return (
        <section id='HowItWorks' className="flex justify-center bg-S5BG items-center py-10 px-6 sm:px-20">
            <div className="bg-S1BG text-center font-sans text-textColo p-10 max-w-6xl w-full rounded-lg">
                <h4 className="uppercase text-2xl tracking-widest text-textColo">
                    How It Works
                </h4>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                    Simple Steps to Start Your Reading Journey
                </h2>
                <p className="mt-4  text-textColo text-base sm:text-lg max-w-2xl mx-auto">
                    Follow these easy steps to dive into a world of books,
                    connect with fellow readers, and enhance your reading
                    experience.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                    <StepCard
                        icon={<FaUserEdit className="text-xl" />}
                        title="Create Your Profile"
                        description="Sign up and set up your profile to start connecting with other readers."
                    />
                    <StepCard
                        icon={<FaBookOpen className="text-xl" />}
                        title="Get Personalized Recommendations"
                        description="Receive book suggestions tailored to your reading preferences."
                    />
                    <StepCard
                        icon={<FaComments className="text-xl" />}
                        title="Join Discussions"
                        description="Participate in book discussions and share your thoughts with the community."
                    />
                </div>
            </div>
        </section>
    );
};

const StepCard = ({
    icon,
    title,
    description
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) => (
    <Card
        className="cursor-pointer
    bg-background
    flex flex-col items-center p-6 transition-colors duration-300"
    >
        <div className="w-12 h-12 flex justify-center bg-background items-center rounded-full border-8 animation-float">
            {icon}
        </div>
        <h4 className="mt-4 text-lg  font-semibold ">{title}</h4>
        <p className="mt-2 text-center  font-sans">{description}</p>
    </Card>
);
