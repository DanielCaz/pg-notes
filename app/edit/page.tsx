import FormNote from "@/components/ui/formNote";
import { getNote } from "@/lib/actions";
import { notFound } from "next/navigation";

const EditNote = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  if (!searchParams.id) notFound();

  const note = await getNote(searchParams.id.toString());
  if (!note) notFound();

  return (
    <main className="grid place-content-center px-8 pt-16">
      <FormNote note={note} />
    </main>
  );
};

export default EditNote;
