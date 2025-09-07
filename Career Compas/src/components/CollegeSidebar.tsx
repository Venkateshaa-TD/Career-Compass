import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MapPin, Star } from "lucide-react";
import { colleges, College } from "@/data/colleges";

const CollegeSidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("ranking");
  const [filterType, setFilterType] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredAndSortedColleges = colleges
    .filter(college => {
      const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           college.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === "all" || college.type.toLowerCase() === filterType;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case "name":
          comparison = a.name.localeCompare(b.name);
          break;
        case "ranking":
          comparison = a.ranking - b.ranking;
          break;
        case "rating":
          comparison = b.rating - a.rating;
          break;
        default:
          comparison = a.ranking - b.ranking;
      }
      
      return sortOrder === "desc" ? -comparison : comparison;
    });

  return (
    <div className="w-80 border-l bg-muted/20 p-4 h-full overflow-y-auto">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Colleges in India
          </h3>
          
          {/* Search */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search colleges..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="government">Government</SelectItem>
                <SelectItem value="private">Private</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ranking">Ranking</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2 mb-4">
            <Button
              variant={sortOrder === "asc" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortOrder("asc")}
            >
              Ascending
            </Button>
            <Button
              variant={sortOrder === "desc" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortOrder("desc")}
            >
              Descending
            </Button>
          </div>
        </div>

        {/* College List */}
        <div className="space-y-3">
          {filteredAndSortedColleges.map((college) => (
            <Card key={college.id} className="text-sm">
              <CardContent className="p-3">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h4 className="font-medium text-sm leading-tight">{college.name}</h4>
                    <Badge variant="secondary" className="text-xs">
                      #{college.ranking}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {college.location}, {college.state}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{college.rating}</span>
                    </div>
                    <Badge variant={college.type === "Government" ? "secondary" : "outline"} className="text-xs">
                      {college.type}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {college.specialization.slice(0, 2).map((spec, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                    {college.specialization.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{college.specialization.length - 2}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="text-xs font-medium text-primary">
                    {college.fees}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredAndSortedColleges.length === 0 && (
          <div className="text-center text-muted-foreground py-8">
            <p>No colleges found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegeSidebar;