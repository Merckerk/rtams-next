"use client";

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

import Section from "@enums/section";
import Course from "@enums/course";

const AttendanceMetrics = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // const sections = [
  //   { value: "section1", label: "Section 1" },
  //   { value: "section2", label: "Section 2" },
  // ];

  // const courses = [
  //   { value: "course1", label: "Course 1" },
  //   { value: "course2", label: "Course 2" },
  // ];

  const sections = Object.entries(Section).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const courses = Object.entries(Course).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  useEffect(() => {
    console.log(
      Object.entries(Section).map(([key, value]) => ({
        value: key,
        label: value,
      }))
    );
  }, []);

  return (
    <div className="container mx-auto mt-5 mb-8">
      <div className="max-w-2xl mx-auto flex flex-col gap-7 glassmorphism p-6">
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900 pb-7">
          Attendance Metrics
        </h1>

        <div className="flex gap-4 mb-4 items-center">
          <label className="block text-gray-700 text-sm font-bold mb-2 w-32">
            Select Date:
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MM/dd/yyyy"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-4 mb-4 items-center">
            <label className="block text-gray-700 text-sm font-bold mb-2 w-60">
              Select Section:
            </label>
            <Select
              options={sections}
              value={selectedSection}
              onChange={(option) => setSelectedSection(option)}
              isSearchable
              className="w-80"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-4 mb-4 items-center">
            <label className="block text-gray-700 text-sm font-bold mb-2 w-60">
              Select Course:
            </label>
            <Select
              options={courses}
              value={selectedCourse}
              onChange={(option) => setSelectedCourse(option)}
              isSearchable
              className="w-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceMetrics;
