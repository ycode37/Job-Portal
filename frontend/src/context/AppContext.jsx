import { createContext, use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../assets/assets";
import { jobs } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setuser] = useState(false);
  const [employer, setemployer] = useState(false);
  const [admin, setadmin] = useState(false);
  const [categoriesData, setcategoriesData] = useState([]);
  const [jobsData, setjobsData] = useState([]);
  const [query, setquery] = useState("");
  const [isJobapplied, setisJobapplied] = useState(false);
  const [savedJobs, setsavedJobs] = useState([]);
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
  const savedJob = (job) => {
    setsavedJobs((prev) => {
      const exists = prev.find((item) => item._id === job._id);
      if (exists) {
        return prev;
      } else {
        toast.success("Job Saved Successfully");

        return [...prev, job];
      }
    });
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
    isJobapplied,
    setisJobapplied,
    savedJobs,
    setsavedJobs,
    savedJob,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
