import { getServices } from "@/lib/storage";
import ServiceTable from "@/components/ServiceTable";
import AddServiceForm from "@/components/AddServiceForm";
import { refreshAllServices } from "@/app/actions/serviceActions";

export default function Dashboard() {
  const services = getServices();

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">API Reliability Dashboard</h1>

      <form action={refreshAllServices}>
        <button className="bg-purple-600 text-white px-4 py-2">
          Refresh All
        </button>
      </form>

      <AddServiceForm />
      <ServiceTable services={services} />
    </main>
  );
}