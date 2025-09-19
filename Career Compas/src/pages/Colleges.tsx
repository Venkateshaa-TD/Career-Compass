
import { colleges } from "@/data/colleges";
import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const unique = (arr: string[]) => Array.from(new Set(arr)).sort();
const allStates = unique(colleges.map(c => c.state));
const allSpecs = unique(colleges.flatMap(c => c.specialization));

const Colleges = () => {
  const [search, setSearch] = useState("");
  const [state, setState] = useState("");
  const [spec, setSpec] = useState("");
  const [type, setType] = useState("Government");

  const filtered = useMemo(() => {
    return colleges.filter(c =>
      (type ? c.type === type : true) &&
      (state ? c.state === state : true) &&
      (spec ? c.specialization.includes(spec) : true) &&
      (search ?
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.location.toLowerCase().includes(search.toLowerCase())
        : true)
    );
  }, [search, state, spec, type]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-primary">Government Colleges Directory</h1>
        <div className="flex flex-wrap gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by name or city..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border rounded px-3 py-2 w-64"
          />
          <select value={state} onChange={e => setState(e.target.value)} className="border rounded px-3 py-2">
            <option value="">All States</option>
            {allStates.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={spec} onChange={e => setSpec(e.target.value)} className="border rounded px-3 py-2">
            <option value="">All Specializations</option>
            {allSpecs.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={type} onChange={e => setType(e.target.value)} className="border rounded px-3 py-2">
            <option value="Government">Government</option>
            <option value="Private">Private</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center text-muted-foreground">No colleges found.</div>
          ) : filtered.map(college => (
            <Card key={college.id} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{college.name}</CardTitle>
                <div className="text-sm text-muted-foreground">{college.location}, {college.state}</div>
              </CardHeader>
              <CardContent>
                <div className="mb-2 flex flex-wrap gap-2">
                  {college.specialization.map(s => (
                    <Badge key={s} className="bg-blue-100 text-blue-800">{s}</Badge>
                  ))}
                </div>
                <div className="mb-2 text-sm">Fees: <span className="font-semibold">{college.fees}</span></div>
                <div className="mb-2 text-sm">Ranking: <span className="font-semibold">{college.ranking}</span></div>
                <div className="mb-2 text-sm">Rating: <span className="font-semibold">{college.rating}</span></div>
                <div className="mb-2 text-xs text-muted-foreground">Type: {college.type}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colleges;
