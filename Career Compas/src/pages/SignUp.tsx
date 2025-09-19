import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    academicClass: "",
    customClass: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.gender ||
      !formData.age ||
      !formData.academicClass ||
      (formData.academicClass === "other" && !formData.customClass)
    ) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
      });
      setLoading(false);
      return;
    }
    if (formData.password.length < 6) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Password must be at least 6 characters",
      });
      setLoading(false);
      return;
    }
    // Register user with Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });
    if (error || !data.user) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error ? error.message : "Signup failed.",
      });
      setLoading(false);
      return;
    }
    // Insert profile data into users_profile table
    const { error: profileError } = await supabase.from('users_profile').insert([
      {
        id: data.user.id,
        name: formData.name,
        gender: formData.gender,
        age: parseInt(formData.age, 10),
        academic_class: formData.academicClass,
        custom_class: formData.customClass,
      }
    ]);
    if (profileError) {
      toast({
        variant: "destructive",
        title: "Error",
        description: profileError.message,
      });
      setLoading(false);
      return;
    }
    toast({
      title: "Success",
      description: "Account created successfully! Please sign in.",
    });
    setLoading(false);
    navigate("/signin");
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Career Guidance Hub
          </h1>
          <p className="text-muted-foreground mt-2">
            Join thousands of students finding their perfect career path
          </p>
        </div>
        <Card className="shadow-lg">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl font-semibold">Create Account</CardTitle>
            <CardDescription>
              Start your journey towards a successful career
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password (min 6 characters)"
                  value={formData.password}
                  onChange={(e) => updateField("password", e.target.value)}
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select onValueChange={(value) => updateField("gender", value)} value={formData.gender}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  value={formData.age}
                  onChange={(e) => updateField("age", e.target.value)}
                  className="h-11"
                  min="13"
                  max="100"
                />
              </div>
              {/* Academic class/status select + optional input */}
              <div className="space-y-2">
                <Label htmlFor="academicClass">Current Class / Status</Label>
                <Select
                  onValueChange={(value) => updateField("academicClass", value)}
                  value={formData.academicClass}
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select your class/status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12th-pursuing">Pursuing 12th</SelectItem>
                    <SelectItem value="12th-completed">12th Completed</SelectItem>
                    <SelectItem value="10th-completed">10th Completed</SelectItem>
                    <SelectItem value="other">Other (specify below)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {formData.academicClass === "other" && (
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Please specify your class or academic status"
                    value={formData.customClass}
                    onChange={e => updateField("customClass", e.target.value)}
                    className="h-11"
                  />
                </div>
              )}
              <Button type="submit" className="w-full h-11 mt-6" size="lg" disabled={loading}>
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    Creating...
                  </span>
                ) : (
                  'Create Account'
                )}
              </Button>
              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
