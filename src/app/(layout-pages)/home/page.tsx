import { AboutSection } from '@/src/components/AboutSection';
import { BroadcastSection } from '@/src/components/BroadcastSection';
import { FeaturesCardView } from '@/src/components/featuresCardView';
import { HowItWorks } from '@/src/components/HowItWork';
import { NewBookSection } from '@/src/components/NewBookSection';
import { TradeSection } from '@/src/components/TradeSection';
import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            <FeaturesCardView />

            <TradeSection />
            <BroadcastSection />
            <HowItWorks />

            <AboutSection />
            <NewBookSection />
        </>
    );
};

export default Home;
