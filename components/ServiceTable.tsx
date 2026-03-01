"use client";

import { Service } from "@/types/service";
import { deleteService, refreshService } from "@/app/actions/serviceActions";

export default function ServiceTable({ services }: { services: Service[] }) {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Latency</th>
          <th>Last Checked</th>
          <th>Health Score</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {services.map((s) => (
          <tr key={s.id} className="text-center border-t">
            <td>{s.name}</td>
            <td>{s.status}</td>
            <td>{s.latencyMs} ms</td>
            <td>{s.lastCheckedAt}</td>
            <td>{s.healthScore}</td>
            <td className="space-x-2">
              <button
                className="bg-green-500 text-white px-2"
                onClick={() => refreshService(s.id)}
              >
                Refresh
              </button>
              <button
                className="bg-red-500 text-white px-2"
                onClick={() => deleteService(s.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}