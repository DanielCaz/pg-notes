"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { createNote, updateNote } from "@/lib/actions";
import { Note } from "@prisma/client";

const formSchema = z.object({
  title: z.string().min(1).max(100),
  body: z.string().min(1).max(500),
});

type Props = {
  note?: Note;
};

const FormNote = ({ note }: Props) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: note?.title ?? "",
      body: note?.body ?? "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (note) {
      await updateNote({
        id: note.id,
        ...values,
      });
    } else {
      await createNote(values);
    }
    router.replace("/");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-8 rounded-md p-8 shadow-md"
      >
        <h2 className="text-xl font-semibold">
          {note ? "Edit Note" : "Create Note"}
        </h2>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} autoComplete="off" />
              </FormControl>
              <FormDescription>
                The title of the note. Max 100 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Body</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormDescription>
                The body of the note. Max 500 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default FormNote;
