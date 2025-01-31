import { useState } from "react";
import Select from "../reusable/Select";

import FileUpload from "../reusable/FileUpload";
import {studyCategory} from "../../data/data"
import StudyModal from "../modal/StudyModal"

const AdminDashboard: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedStudyID, setSelectedStudyID] = useState<string>("");

  const [files, setFiles] = useState<File[]>([]);

  const options = [
    { label: "Select Categary", value: "" },
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Orange", value: "orange" },
  ];

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, type:string) => {
  
    console.log("SELECTED", e.target.value,e, selectedCategory ,type)
    if(type == "category"){
      setSelectedCategory(e.target.value)
    }
    if(type == "study"){
      setSelectedStudyID(e.target.value)
    }
    if(type == "deviation"){
      setSelectedOption(e.target.value);
    }
  };

  const handleFilesUploaded = (files: File[]) => {
    // Handle uploaded files here
    setFiles(files)
    console.log(files);
    
  };

  const handleUpload = ()=>{
    const fileExtension = files[0].name.split(".").pop();

    console.log(files,fileExtension);
    if(fileExtension == "xlsx"){
      alert("File Uploaded successfully")
    }else{
      alert("File Not uploaded")
    }
    
    
  }

  return (
    <>
   <StudyModal/>
      <br />
      <div className="bg bg-gray-300  shadow-md px-2 py-2 text-center">
        <p>Study Setup - mapping</p>
      </div>
      <br />
      <br />
      <div className="flex justify-center  md:px-20 px-5">
        <div className="box-border rounded-md p-5 bg-gray-100 w-full ">
        
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="w-full">
                <Select
                  options={studyCategory}
                  label="Choose Study Category"
                  value={selectedCategory}
                  onChange={(e)=>handleSelectChange(e, "category")}
                />
              </div>

              <div className="w-full md:py-4 ">
                <div className="flex justify-center ">
                 

                  <div className="flex w-full items-center justify-center ">
                    <FileUpload onFilesUploaded={handleFilesUploaded}/>
                   
                  </div>
                </div>
              </div>
              <div className=" py-5 flex justify-center">
                <button
                onClick={handleUpload}
                  type="button"
                  className="bg-blue-600  text-white py-2 px-10 rounded-md shadow hover:bg-blue-700"
                >
                  Upload
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4  gap-4 items-center">
              <div className="md:col-start-2 md:col-span-2">
                <Select
                  options={options}
                  label="Map Study ID column"
                  value={selectedStudyID}
                  onChange={(e)=>handleSelectChange(e, "study")}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Map Study ID column", id: "study-id" },
                { label: "Map Subject ID column", id: "subject-id" },
                { label: "Map Deviation ID column", id: "deviation-id" },
                { label: "Map Description column", id: "description" },
                {
                  label: "Map Deviation Category column",
                  id: "deviation-category",
                },
                {
                  label: "Map Deviation Subcategory column",
                  id: "deviation-subcategory",
                },
                // { label: "Map Subject Visit column", id: "subject-visit" },
              ].map((field) => (
                <div key={field.id}>
                  <Select
                    options={options}
                    label={field.label}
                    value={selectedOption}
                    onChange={(e)=>handleSelectChange(e, "deviation")}
                  />
                  {/* <label
                    className="block font-medium text-gray-700 mb-2"
                    htmlFor={field.id}
                  >
                    {field.label}
                  </label>
                  <select
                    id={field.id}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">{field.label}</option>
                
                  </select> */}
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-8 rounded-md shadow hover:bg-blue-700"
              >
                Initiate Process
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default AdminDashboard;
