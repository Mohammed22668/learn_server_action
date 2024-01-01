import CreateProject from "@/components/project/CreateProject";
import GetAllProject from "@/components/project/GetAllProject";
import React from "react";

const Project = () => {
  return (
    <div className="flex min-h-screen flex-col items-center  p-10 border border-slate-900">
      <CreateProject />

      <br />

      <GetAllProject />
    </div>
  );
};

export default Project;
