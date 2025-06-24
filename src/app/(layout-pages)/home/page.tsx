import { AboutSection } from '@/src/components/AboutSection';
import { BroadcastSection } from '@/src/components/BroadcastSection';
import { HowItWorks } from '@/src/components/HowItWork';
import { NewBookSection } from '@/src/components/NewBookSection';
import { TradeSection } from '@/src/components/TradeSection';
import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            <HowItWorks />
            <TradeSection />
            <BroadcastSection />
            <AboutSection />
            <NewBookSection />
        </>
    );
};

export default Home;
