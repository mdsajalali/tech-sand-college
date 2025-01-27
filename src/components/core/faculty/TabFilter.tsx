import { TabFilterProps } from "@/types";

export default function TabFilter({ tabs, activeTab, setActiveTab }: TabFilterProps) {
  return (
    <div className="mb-4 flex flex-wrap w-full md:justify-start justify-center  gap-4">
      {tabs.map((tab: string) => (
        <button
          key={tab}
          className={`rounded px-4 py-2 ${
            activeTab === tab ? "bg-primary text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
