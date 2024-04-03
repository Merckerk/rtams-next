"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import AdminCrudForm from "@components/adminUsers/AdminCrudForm";
import toast from "react-hot-toast";
import ClasslistCrudForm from "@components/classlist/classlistCrudForm";

const UpdateClassList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const classlistId = searchParams.get("classlistid");
  const [post, setPost] = useState({
    user: "",
    sectionCode: "",
    subjectCode: "",
    subjectDescription: "",
    term: "",
    schedule: "",
    audit: "",
    students: [],
  });

  const [faculties, setFaculties] = useState([]);
  const [students, setStudents] = useState([]);
  const [editedStudentsList, setEditedStudentsList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const [facultyResponse, studentsResponse, classlistResponse] =
        await Promise.all([
          fetch("/api/users/getFacultyIdAndName", { cache: "no-store" }),
          fetch("/api/students/getStudentsByIdNameSection", {
            cache: "no-store",
          }),
          fetch(`/api/classlist/${classlistId}`),
        ]);

      const facultyData = await facultyResponse.json();
      const studentsData = await studentsResponse.json();
      const classlistData = await classlistResponse.json();

      if (facultyData) {
        setFaculties(facultyData);
      } else {
      }

      if (studentsData) {
        setStudents(studentsData);
      } else {
      }

      if (classlistData && classlistData.data) {
        const classlistDetails = classlistData.data;
        setPost({
          user: classlistDetails.user,
          sectionCode: classlistDetails.sectionCode,
          subjectCode: classlistDetails.subjectCode,
          subjectDescription: classlistDetails.subjectDescription,
          term: classlistDetails.term,
          schedule: classlistDetails.schedule,
          audit: "",
          students: classlistDetails.students,
        });
        setEditedStudentsList(classlistDetails.students);
      } else {
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const validityCheck = (action) => {
    if (action == "Edit") {
      return !!(
        post.sectionCode &&
        post.subjectCode &&
        post.subjectDescription &&
        post.term
      );
    } else if (action == "Delete") {
      return !!post.audit;
    }
  };

  const onUpdateClassList = async (e) => {
    e.preventDefault();
    if (!validityCheck("Edit")) {
      toast.error("Please fill in all the fields!");
      return;
    }
    try {
      setIsLoading(true);
      const {
        user,
        sectionCode,
        subjectCode,
        subjectDescription,
        term,
        schedule,
      } = post;

      const postValues = {
        user,
        sectionCode,
        subjectCode,
        subjectDescription,
        term,
        schedule,
        audit: post.audit,
        students: editedStudentsList,
      };

      const response = await fetch(`/api/classlist/${classlistId}`, {
        method: "PATCH",
        body: JSON.stringify(postValues),
      });

      const data = await response.json();
      const success = data.success;

      if (success) {
        toast.success("Successfully edited a classlist!");
        router.push("/classlists");
      } else {
        toast.error("Error updating data.");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onDeleteClasslist = async () => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this classlist?"
    );
    if (hasConfirmed) {
      if (!validityCheck("Delete")) {
        toast.error("Please fill in the audit field!");
        return;
      }
      try {
        setIsLoading(true);
        const response = await fetch(`/api/classlist/${classlistId}`, {
          method: "DELETE",
          body: JSON.stringify({ audit: post?.audit }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          console.log("Classlist deleted");
          router.push("/classlists");
        } else {
          console.log("Error deleting class list:", data.error || "Unknown error");
        }
      } catch (error) {
        console.log("Error deleting class list", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    console.log("post:", post);
  }, [post]);

  useEffect(() => {
    console.log("editedStudentsList:", editedStudentsList);
  }, [editedStudentsList]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClasslistCrudForm
        type="Edit"
        post={post}
        setPost={setPost}
        loading={isLoading}
        handleSubmit={onUpdateClassList}
        handleDelete={onDeleteClasslist}
        faculties={faculties}
        students={students}
        editedStudentsList={editedStudentsList}
        setEditedStudentsList={setEditedStudentsList}
      />
    </Suspense>
  );
};

export default UpdateClassList;
