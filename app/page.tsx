import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoachDemo from "@/components/CoachDemo";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoachDemo />
        <Testimonials />
        <section id="book" className="mx-auto max-w-2xl px-6 py-16">
          <BookingForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
