"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { addService } from "@/app/actions/serviceActions";

export default function AddServiceForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <form
      action={(formData) => {
        startTransition(async () => {
          await addService(formData);
          router.refresh();
        });
      }}
      className="flex gap-2"
    >
      <input
        name="name"
        className="border p-2"
        placeholder="Service Name"
        required
      />
      <input
        name="url"
        className="border p-2"
        placeholder="URL"
        required
      />

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-500 text-white px-4"
      >
        {isPending ? "Adding..." : "Add"}
      </button>
    </form>
  );
}