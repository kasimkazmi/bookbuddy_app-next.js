import Header from '@/src/views/landingpage/headersection';
import Footer from '@/src/views/landingpage/footersection';

export const metadata = {
    title: 'BazmBooks',
    description: 'Discover, share, and trade your favorite books.'
};

export default function LayoutPagesLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col bg-S5BG text-textColor">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
