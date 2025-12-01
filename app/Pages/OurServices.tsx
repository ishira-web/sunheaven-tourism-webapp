import ServiceCard from "@/components/nexoneComponents/serviceCard";


export default function OurServices() {
  const services = [
    {
      title: "Airport Transfers",
      description:
        "Seamless,private transfers from Bandaranayaka International Airport to any destination in Sri Lanka 24/7 comfort and reliability.",
      imageSrc: "/poster1.jpg", 
      imageAlt: "Airport Transfers",
    },
    {
      title: "Day Tours",
      description:
        "Enjoy Sri Lanka's best attractions in one day adventures packed with culture,nature and flavour.",
      imageSrc: "/poster2.jpg",
      imageAlt: "Day Tours",
    },
    {
      title: "Long Tours",
      description:
        "From the misty hills to golden coastsm , explore Sri Lanka over several unforgettable days.",
      imageSrc: "/poster3.jpg",
      imageAlt: "Long Tours",
    },
    {
      title: "Custom Tours",
      description:
        "Personalized itineraries designed around your interests,you dream it ,we make it happen.",
      imageSrc: "/poster4.jpg",
      imageAlt: "Custom Tours",
    },
  ];

  return (
    <section className="w-full py-16 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-poppins text-3xl font-bold text-amber-600 sm:text-4xl dark:text-amber-600">
            Our Services
          </h2>
          <p className="mt-4 font-poppins text-lg text-zinc-800 dark:text-zinc-400">
            Discover what we have to offer
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}