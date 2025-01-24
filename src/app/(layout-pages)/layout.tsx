import Header from "@/src/views/landingpage/headersection"
import Footer from "@/src/views/landingpage/footersection"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div style={{
          // position: "fixed",
          // top: 0,
          // width: "100%",
          // zIndex: 500,
        }}>
      <Header
      />
        </div>
      <div >{children}</div> {/* Adjust paddingTop as needed */}
      <Footer />
    </>
  );
}