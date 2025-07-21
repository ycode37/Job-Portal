import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../assets/assets";
import { jobs } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setuser] = useState(false);
  const [employer, setemployer] = useState(false);
  const [admin, setadmin] = useState(false);
  const [categoriesData, setcategoriesData] = useState([]);
  const [jobsData, setjobsData] = useState([]);
  const [query, setquery] = useState("");
  const fetchCategories = () => {
    setcategoriesData(categories);
  };

  useEffect(() => {
    fetchCategories();
    fetchJobs();
  }, []);
  const fetchJobs = () => {
    setjobsData(jobs);
  };
  const value = {
    navigate,
    user,
    setuser,
    employer,
    setemployer,
    admin,
    setadmin,
    categoriesData,
    setcategoriesData,
    jobsData,
    setjobsData,
    query,
    setquery,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
