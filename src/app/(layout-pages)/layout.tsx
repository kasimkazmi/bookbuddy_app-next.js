import Header from '@/src/views/landingpage/headersection';
import Footer from '@/src/views/landingpage/footersection';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    );
}
