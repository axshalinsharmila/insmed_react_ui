"use client";
import { useState } from "react";
import Select from "./Select"

import FileUpload from "./FileUpload";
import toast, { Toaster } from "react-hot-toast";
import { studyCategory } from "../../data/data";
import { Button } from "primereact/button";

const StudyMapping = ()=>{

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
    
      const handleSelectChange = (
        e: React.ChangeEvent<HTMLSelectElement>,
        type: string
      ) => {
        console.log("SELECTED", e.target.value, e, selectedCategory, type);
        if (type == "category") {
          setSelectedCategory(e.target.value);
        }
        if (type == "study") {
          setSelectedStudyID(e.target.value);
        }
        if (type == "deviation") {
          setSelectedOption(e.target.value);
        }
      };
    
      const handleFilesUploaded = (files: File[]) => {
        // Handle uploaded files here
        setFiles(files);
        console.log(files);
      };
    
      const handleUpload = () => {
        const fileExtension = files[0].name.split(".").pop();
    
        console.log(files, fileExtension);
        if (fileExtension == "xlsx" || "xls") {
          toast.success("File Uploaded successfully");
        } else {
          toast.error("File Not uploaded");
        }
      };

    return (
<>
<div className="flex justify-center lg:px-40  px-5">
        <div className="box-border rounded-2xl p-5 bg-gray-100 w-full ">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="w-full md:px-10 py-5">
                <Select
                  options={studyCategory}
                  label="Choose Study Category"
                  value={selectedCategory}
                  onChange={(e) => handleSelectChange(e, "category")}
                />
              </div>

              <div className="flex md:py-4 w-full items-center justify-center ">
                <FileUpload onFilesUploaded={handleFilesUploaded} />
              </div>
              <div className=" py-5 flex justify-center">
                <Button
                  onClick={handleUpload}
                  label="Upload"
                  className="bg-blue-950 w-1/2 text-white py-2 px-10 rounded-md shadow hover:bg-blue-950"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6  gap-4 items-center ">
              <div className="md:col-start-3 md:col-span-2 md:px-10">
                <Select
                  options={options}
                  label="Map Study ID column"
                  value={selectedStudyID}
                  onChange={(e) => handleSelectChange(e, "study")}
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
                <div key={field.id} className="md:px-10">
                  <Select
                    options={options}
                    label={field.label}
                    value={selectedOption}
                    onChange={(e) => handleSelectChange(e, "deviation")}
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
    )
}
export default StudyMapping;