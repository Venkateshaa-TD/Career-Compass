import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Target, Users, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <GraduationCap className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Career Compass
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Shape your future with intelligent career guidance. Take our comprehensive assessment 
              to discover your strengths and find the perfect career path.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="px-8 py-3 text-lg" asChild>
              <Link to="/signin">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg" asChild>
              <Link to="/signup">
                Create Account
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive career guidance system helps you make informed decisions about your future
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>Comprehensive Assessment</CardTitle>
              <CardDescription>
                30 carefully crafted questions across 6 major subjects to evaluate your strengths
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Physics & Mathematics</li>
                <li>• Chemistry & Programming</li>
                <li>• Accountancy & Commerce</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Target className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <CardTitle>Personalized Results</CardTitle>
              <CardDescription>
                Get detailed subject-wise scores and personalized career recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Subject-wise performance</li>
                <li>• Career recommendations</li>
                <li>• Improvement suggestions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 mx-auto mb-4 text-accent" />
              <CardTitle>College Database</CardTitle>
              <CardDescription>
                Access comprehensive information about top colleges across India
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• 20+ top institutions</li>
                <li>• Detailed college profiles</li>
                <li>• Filter & sort options</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Career Path?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of students who have found their perfect career direction through our platform
          </p>
          <Button size="lg" className="px-8 py-3 text-lg" asChild>
            <Link to="/signup">
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              "Empowering students to make informed career decisions"
            </p>
            <p className="text-xs text-muted-foreground">
              © 2024 Career Guidance Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
