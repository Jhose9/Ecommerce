import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
const formSchema = z.object({
  valoracion: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  nombre: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

function ProductReviews() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      valoracion: "",
      nombre: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="bg-white w-[90%] rounded-2xl mx-auto my-5 md:w-[95%] ">
      <div className="w-[90%] mx-auto py-6 md:w-[95%]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="valoracion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:content-['*'] after:text-red-500 font-semibold">
                    Tu valoración
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none rounded-3xl h-[13rem]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:content-['*'] after:text-red-500 font-semibold">
                    Nombre
                  </FormLabel>
                  <FormControl>
                    <Input className="rounded-3xl h-[3rem]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:content-['*'] after:text-red-500 font-semibold">
                    Correo Electronico
                  </FormLabel>
                  <FormControl>
                    <Input className="rounded-3xl h-[3rem]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="rounded-full px-5" type="submit">
              Enviar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default ProductReviews;
