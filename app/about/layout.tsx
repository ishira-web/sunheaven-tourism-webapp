import Header from "@/components/nexoneComponents/Header"
import Footer from "@/components/nexoneComponents/Footer"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </>
  )
}
