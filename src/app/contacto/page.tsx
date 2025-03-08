import BreadcrumbComponent from "@/components/breadcrumbComponent";
import ContactForm from "@/components/contactForm";
import React from "react";

function Page() {
  return (
    <div>
      <BreadcrumbComponent title="Contacto" className="ml-4 mt-5 2xl:ml-36" />
      <div className="min-h-[20rem] w-[90%] bg-white rounded-lg mx-auto mt-7 mb-8 2xl:mb-16 md:w-[95%] 2xl:w-[85%] ">
        <h1 className="text-xl font-semibold pt-5 mb-5 pl-5 md:pl-8 lg:pl-11 xl:pl-15 2xl:pl-20 lg:text-2xl">
          ¿Cómo podemos ayudarte?
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default Page;
