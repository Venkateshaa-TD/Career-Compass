import { colleges } from "@/data/colleges";
import { useState, useMemo } from "react";

const CollegeFilters = ({ filters, setFilters }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by name or location"
        value={filters.search}
        onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
        className="p-2 border rounded"
      />
      <select
        value={filters.type}
        onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
        className="p-2 border rounded"
      >
        <option value="">All Types</option>
        <option value="Private">Private</option>
        <option value="Government">Government</option>
      </select>
      {/* Add more filters here if needed */}
    </div>
  );
};

const Colleges = () => {
  const [filters, setFilters] = useState({
    search: "",
    type: "",
  });

  const filteredColleges = useMemo(() => {
    return colleges.filter((college) => {
      const matchesSearch =
        college.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        college.location.toLowerCase().includes(filters.search.toLowerCase());

      const matchesType = !filters.type || college.type === filters.type;

      return matchesSearch && matchesType;
    });
  }, [filters]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Top Colleges in India</h1>

      <CollegeFilters filters={filters} setFilters={setFilters} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map((college) => (
          <div
            key={college.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-1">{college.name}</h2>
            <p className="text-sm text-gray-600 mb-1">
              {college.location}, {college.state}
            </p>
            <p className="text-sm mb-1">Type: {college.type}</p>
            <p className="text-sm mb-1">Ranking: #{college.ranking}</p>
            <p className="text-sm mb-1">
              Specializations: {college.specialization.join(", ")}
            </p>
            <p className="text-sm mb-1">Fees: {college.fees}</p>
            <p className="text-sm">Rating: {college.rating} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
