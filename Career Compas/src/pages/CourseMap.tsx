import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { courseMap } from "@/data/courseMap";

const CourseMap = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-primary">Course-to-Career Path Mapping</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseMap.map((item) => (
            <Card key={item.course} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{item.course}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <span className="font-semibold">Industries:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.industries.map((ind) => (
                      <Badge key={ind} className="bg-blue-100 text-blue-800">{ind}</Badge>
                    ))}
                  </div>
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Jobs:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.jobs.map((job) => (
                      <Badge key={job} className="bg-green-100 text-green-800">{job}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-semibold">Higher Studies:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.higherStudies.map((hs) => (
                      <Badge key={hs} className="bg-purple-100 text-purple-800">{hs}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseMap;
