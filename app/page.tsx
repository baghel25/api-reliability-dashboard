import { getServices } from "@/lib/storage";
import ServiceTable from "@/components/ServiceTable";
import AddServiceForm from "@/components/AddServiceForm";

export default function Dashboard() {
  const services = getServices();

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">API Reliability Dashboard</h1>
      <AddServiceForm />
      <ServiceTable services={services} />
    </main>
  );
}