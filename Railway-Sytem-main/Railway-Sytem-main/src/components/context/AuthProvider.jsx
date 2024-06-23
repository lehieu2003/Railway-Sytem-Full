import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  console.log({
    user,
    isLoading,
  });
  const auth = getAuth();
  const logout = () => {
    auth.signOut();
  };
  useEffect(() => {
    setIsLoading(true);
    const unsubcribed = auth.onIdTokenChanged((user) => {
      console.log("[From AuthProvider]", { user });
      if (user?.uid) {
        setUser(user);
        if (user.accessToken !== localStorage.getItem("accessToken")) {
          localStorage.setItem("accessToken", user.accessToken);
        }
        setIsLoading(false);
        return;
      }

      // reset user info
      console.log("reset");
      setUser({});
      localStorage.clear();
      setIsLoading(false);
    });

    // reset user info
    console.log("reset");
    setIsLoading(false);
    setUser({});
    localStorage.clear();

    return () => {
      unsubcribed();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
