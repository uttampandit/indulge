import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import GeneralHeader from "./GeneralHeader";

const DashBoard = () => {
  const { companyId } = useParams();
  console.log(companyId);

  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex w-full items-center">
        <GeneralHeader heading="Dashboard" />
      </div>

      <div className="flex grow">
        <div className="flex flex-col justify-start p-4 items-center w-1/4 bg-blue-50 m-5 rounded-lg">
          <h1 className="font-poppins m-4 text-2xl text-blue-400">
            Update Job Postings
          </h1>
          <h1 className="font-poppins m-4 text-2xl text-blue-400">
            Update Intern Postings
          </h1>
        </div>

        <div className="flex justify-center items-center grow w-3/4 bg-blue-50 m-5 rounded-lg">
          <div className="flex flex-col">
            <button
              onClick={() => navigate(`jnf`)}
              className="font-poppins m-5  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Job Postings
            </button>
            <button
              onClick={() => navigate("inf")}
              className="font-poppins m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Internship Postings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
