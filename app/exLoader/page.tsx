"use client";

import { useState } from "react";

export default function EXLoader() {
  const [selectedFile, setSelectedFile] = useState<string>("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFile(e.target.value); // กำหนดค่าไฟล์ PDF ตาม option ที่เลือก
  };

  return (
    <>
      <form className="max-w-sm mx-auto">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          ตารางการเรียน - การสอน IT411 - 441 DEK65
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedFile}
          onChange={handleSelectChange}
        >
          <option value="" disabled>
            เลือกปี - เทอมการสอน
          </option>
          <option value="a" disabled>
            ปีที่ 1 เทอม 1 [On Work]
          </option>
          <option value="a" disabled>
            ปีที่ 1 เทอม 2 [On Work]
          </option>
          <option value="a" disabled>
            ปีที่ 2 เทอม 1 [On Work]
          </option>
          <option value="a" disabled>
            ปีที่ 2 เทอม 2 [On Work]
          </option>
          <option value="a" disabled>
            ปีที่ 3 เทอม 1 [On Work]
          </option>
          <option value="TreeTermTwo.pdf">ปีที่ 3 เทอม 2 (วิชาเลือก หัวข้อพิเศษ)</option>
          <option value="TreeTermTwo2.pdf">ปีที่ 3 เทอม 2 (วิชาเลือก ถ่ายรูป) [On Work]</option>
        </select>
      </form>

      {selectedFile && (
        <div className="mt-4">
          <iframe
            src={`/pdf/${selectedFile}`}
            width="100%"
            height="600px"
            className="border rounded"
            title="PDF Viewer"
          ></iframe>
        </div>
      )}
    </>
  );
}
