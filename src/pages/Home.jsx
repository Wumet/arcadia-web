import FeaturedProperties from "../components/FeaturedProperties";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WhatsNew from "../components/WhatsNew";
import imageUrl from "../assets/heroImage.jpg";
import Message from "../components/Message";
import Testimonials from "../components/Testimonials";
import NewLetterSub from "../components/NewsLetterSub";
import Footer from "../components/Footer";

function HomePage() {
  const properties = [
    {
      id: "1",
      propertyName: "The Azure Residence",
      location: "Old GRA, PH",
      startingPrice: "₦450,000",
      tag: "Hot Listing",
      imageUrl: imageUrl,
      detailsUrl: "./",
    },
    {
      id: "2",
      propertyName: "The Sterling Court",
      location: "GRA Phase 3, PH",
      startingPrice: "₦350,000",
      tag: "New Realese",
      imageUrl: imageUrl,
      detailsUrl: "./",
    },
    {
      id: "3",
      propertyName: "The Sterling Court",
      location: "GRA Phase 3, PH",
      startingPrice: "₦350,000",
      tag: "Available",
      imageUrl: imageUrl,
      detailsUrl: "./",
    },
  ];

  const announcements = [
    {
      id: "1",
      imageUrl: imageUrl,
      tag: "New Launch",
      title: "The Sovereign Phase II",
      cta: "Learn More",
      description:
        "Introducing our latest development in the Swiss Alps. Ten ultra-private chalets featuring panoramic glacier views and integrated wellness centers",
    },
    {
      id: "2",
      imageUrl: imageUrl,
      tag: "New Launch",
      title: "Early Access Benefit",
      cta: "Secure Access",
      description:
        "Secure your position in the Q4 global release cycle with a priority viewing pass and exclusive financing rates for verified founders.",
    },
    {
      id: "3",
      imageUrl: imageUrl,
      tag: "New Launch",
      title: "Global Market Brief",
      cta: "Secure Access",
      description:
        "Join CEO Julian V. for an exclusive quarterly webinar discussing the shifts in luxury estate trends for the coming decade.",
    },
  ];

  const testimonials = [
    {
      id: "1",
      testimony:
        "The acquisition of our Napa estate was handled with unparalleled discretion and professionalism. Arcadia truly understands the nuances of high-net-worth real estate",
      user: "Elizabeth H.",
      occupation: "Venture Capitalist",
      image: imageUrl,
    },
    {
      id: "2",
      testimony:
        "From the initial consultation to the final closing, the experience was seamless. Their architectural insight helped us see potential we would have otherwise missed.",
      user: "Marcus K.",
      occupation: "Tech Founder",
      image: imageUrl,
    },
    {
      id: "3",
      testimony:
        "The acquisition of our Napa estate was handled with unparalleled discretion and professionalism. Arcadia truly understands the nuances of high-net-worth real estate",
      user: "David R",
      occupation: "International Attorney",
      image: imageUrl,
    },
  ];

  return (
    <>
      <title>Home</title>
      <Header />
      <Hero />
      <FeaturedProperties properties={properties} />
      <WhatsNew announcements={announcements} />
      <Message />
      <Testimonials testimonials={testimonials} />
      <NewLetterSub />
      <Footer />
    </>
  );
}

export default HomePage;
