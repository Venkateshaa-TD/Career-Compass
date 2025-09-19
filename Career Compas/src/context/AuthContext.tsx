import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";


interface User {
  id: string;
  email: string;
  name?: string;
  age?: number;
  gender?: string;
  academic_class?: string;
  custom_class?: string;
}


interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // On mount, check for Supabase session
  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data.session && data.session.user) {
        // Fetch full profile from users_profile
        const { data: profile } = await supabase
          .from('users_profile')
          .select('name, age, gender, academic_class, custom_class')
          .eq('id', data.session.user.id)
          .single();
        setUser({
          id: data.session.user.id,
          email: data.session.user.email ?? '',
          name: profile?.name,
          age: profile?.age,
          gender: profile?.gender,
          academic_class: profile?.academic_class,
          custom_class: profile?.custom_class,
        });
      } else {
        setUser(null);
      }
    };
    getSession();

    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session && session.user) {
        // Fetch full profile from users_profile
        supabase
          .from('users_profile')
          .select('name, age, gender, academic_class, custom_class')
          .eq('id', session.user.id)
          .single()
          .then(({ data: profile }) => {
            setUser({
              id: session.user.id,
              email: session.user.email ?? '',
              name: profile?.name,
              age: profile?.age,
              gender: profile?.gender,
              academic_class: profile?.academic_class,
              custom_class: profile?.custom_class,
            });
          });
      } else {
        setUser(null);
      }
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
