"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { addService } from "@/app/actions/serviceActions";

export default function AddServiceForm() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        startTransition(async () => {
          await addService(name, url);

          setName("");
          setUrl("");

          router.refresh(); // 🔥 This re-fetches services and updates table
        });
      }}
      className="flex gap-2"
    >
      <input
        className="border p-2"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="border p-2"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
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