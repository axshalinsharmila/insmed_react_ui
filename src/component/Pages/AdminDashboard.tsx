
"use client";
import { useState } from "react";
import { Button } from "primereact/button";
import StudyModal from "../modal/StudyModal";
import StudyMapping from "../reusable/StudyMapping";
import RuleBookMapping from "../reusable/RuleBookMapping";

const AdminDashboard: React.FC = () => {

  const [studySetupshow, setStudySetupshow] = useState<Boolean>(true)


  return (
    <>
     <StudyModal/>
      <br />
      <div className="flex justify-center  p-4 space-x-10">
        <Button
          label="Study Setup - mapping"
          className={`p-button-raised p-button-text rounded-xl lg:px-10 px-4 py-2 lg:w-1/3 ${studySetupshow ? 'bg-blue-950 text-white' : ''}`}
          onClick={()=>setStudySetupshow(true)}
        />
        <Button
          label="Rule Book - mapping"
          className={`p-button-raised p-button-text rounded-xl lg:px-10 px-4 py-2 lg:w-1/3 ${!studySetupshow ? 'bg-blue-950 text-white' : ''}`}
          onClick={()=>setStudySetupshow(false)}
        />
      </div>
      <br />
      <br />
    {studySetupshow ? <StudyMapping/> : <RuleBookMapping/>}
    </>
  );
};
export default AdminDashboard;
