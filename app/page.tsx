import { getServices } from "@/lib/storage";
import { refreshAllServices } from "@/app/actions/serviceActions";
import ServiceTable from "@/components/ServiceTable";
import AddServiceForm from "@/components/AddServiceForm";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  await refreshAllServices(); // 🔥 recompute health each request

  const services = getServices();

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">API Reliability Dashboard</h1>
      <AddServiceForm />
      <ServiceTable services={services} />
    </main>
  );
}