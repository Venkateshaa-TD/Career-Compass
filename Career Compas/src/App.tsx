import Header from "@/components/Header";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Result from "./pages/Result";
import Colleges from "./pages/Colleges";
import CourseMap from "./pages/CourseMap";
import TakeTest from "./pages/TakeTest";
import NotFound from "./pages/NotFound";
import { useAuth } from "@/context/AuthContext";
import Timeline from "./pages/Timeline";
import ChatWithAI from "./pages/ChatWithAI";
const queryClient = new QueryClient();

const App = () => {
  const { user } = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header user={user} />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signin" element={user ? <Index /> : <SignIn />} />
            <Route path="/signup" element={user ? <Index /> : <SignUp />} />
            <Route path="/chat" element={<ChatWithAI />} />
            {/* Protected routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/take-test"
              element={
                <ProtectedRoute>
                  <TakeTest />
                </ProtectedRoute>
              }
            />
            <Route
              path="/result"
              element={
                <ProtectedRoute>
                  <Result />
                </ProtectedRoute>
              }
            />
            <Route
              path="/colleges"
              element={
                <ProtectedRoute>
                  <Colleges />
                </ProtectedRoute>
              }
            />
            <Route
              path="/course-map"
              element={
                <ProtectedRoute>
                  <CourseMap />
                </ProtectedRoute>
              }
            />
            <Route
              path="/timeline"
              element={
                <ProtectedRoute>
                  <Timeline />
                </ProtectedRoute>
              }
            />
            {/* Catch all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
