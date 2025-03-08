"use client";
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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  asunto: z.string().min(2).max(50),
  mensaje: z.string().min(2).max(50),
});
function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      asunto: "",
      mensaje: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 w-[90%] mx-auto pb-6"
      >
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:col-span-2">
          <div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="rounded-3xl mx-auto placeholder:font-semibold placeholder:text-sm py-5 px-4"
                      placeholder="Nombre"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="rounded-3xl  mx-auto placeholder:font-semibold placeholder:text-sm py-5 px-4"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="md:col-span-2 md:pt-5">
          <FormField
            control={form.control}
            name="asunto"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="rounded-3xl mx-auto placeholder:font-semibold placeholder:text-sm py-5 px-4 md:col-span-2"
                    placeholder="Asunto"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="md:col-span-2 md:py-5">
          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="rounded-3xl  min-h-[13rem] mx-auto placeholder:font-semibold placeholder:text-sm py-5 px-4 md:col-span-2 "
                    placeholder="Mensaje"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="rounded-3xl py-5 md:w-[43%] lg:w-[30%] xl:w-[25%] 2xl:w-[20%]"
          type="submit"
        >
          Enviar solicitud
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
