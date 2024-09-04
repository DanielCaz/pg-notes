import { Button } from "@/components/ui/button";
import ButtonDelete from "@/components/ui/buttonDelete";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { deleteNote, getNotes } from "@/lib/actions";
import Link from "next/link";

export default async function Home() {
  const notes = await getNotes();

  return (
    <main className="flex flex-wrap justify-center gap-12 pt-16">
      {notes.map((note) => (
        <Card key={note.id}>
          <CardHeader>
            <CardTitle>{note.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{note.body}</p>
          </CardContent>
          <CardFooter className="flex justify-end gap-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">Delete</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    Are you sure you want to delete this note?
                  </DialogTitle>
                  <DialogDescription>
                    This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <form action={deleteNote} className="ml-auto" method="dialog">
                  <input type="hidden" name="id" value={note.id} />
                  <ButtonDelete>Confirm</ButtonDelete>
                </form>
              </DialogContent>
            </Dialog>
            <Button variant="secondary" asChild>
              <Link href={`/edit?id=${note.id}`}>Edit</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </main>
  );
}
