"use server";

import prisma from "@/prisma";
import { Note } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const getNotes = async () => {
  return await prisma.note.findMany();
};

export const getNote = async (id: string) => {
  return await prisma.note.findUnique({ where: { id } });
};

export const deleteNote = async (formData: FormData) => {
  const id = formData.get("id")?.toString();

  await prisma.note.delete({
    where: { id },
  });
  revalidatePath("/");
};

export const createNote = async (values: Omit<Note, "id">) => {
  await prisma.note.create({
    data: values,
  });

  revalidatePath("/");
};

export const updateNote = async (values: Note) => {
  await prisma.note.update({
    where: { id: values.id },
    data: values,
  });

  revalidatePath("/");
};
