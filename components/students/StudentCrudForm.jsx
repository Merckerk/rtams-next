"use client";

import ReusableInput from "@components/reusableInput/ReusableInput";
import Section from "@enums/section";
import Gender from "@enums/gender";

import { useEffect, useState, useMemo } from "react";
import ReusableDropdown from "@components/reusableDropdown/ReusableDropdown";

const StudentCrudForm = ({
  type,
  post,
  setPost,
  loading,
  handleSubmit,
  handleDelete = () => {},
}) => {
  const [errMsg, setErrMsg] = useState({
    studentNumber: "",
    nfcUID: "",
    email: "",
    name: "",
    username: "",
    password: "",
    repassword: "",
    section: "",
  });
  const [sections, setSections] = useState([]);

  const fetchSections = async () => {
    try {
      const response = await fetch("/api/sections/getAllSections", {
        cache: "no-store",
      });

      const sectionsResponse = await response.json();

      if (sectionsResponse) {
        const sectionsData = sectionsResponse.data;
        setSections(sectionsData);
      }
    } catch (error) {}
  };

  const sectionsOptions = useMemo(() => {
    return sections.map((section) => ({
      value: section._id,
      label: section.section,
    }));
  }, [sections]);

  useEffect(() => {
    fetchSections();
  }, []);

  const genderOptions = useMemo(() => {
    return Object.entries(Gender).map(([key, value]) => ({
      value: key,
      label: value,
    }));
  });

  const validateEmail = (value) => {
    const isValid = !value || /\S+@\S+\.\S+/.test(value);
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      email: isValid ? "" : "Invalid email",
    }));
    return isValid;
  };

  const validateName = (value) => {
    const isValid = !!value;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      name: isValid ? "" : "User ID is required",
    }));
    return isValid;
  };

  const validateStudentNumber = (value) => {
    const isValid = !!value;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      studentNumber: isValid ? "" : "Student Number is required",
    }));
    return isValid;
  };

  const validateUsername = (value) => {
    const isValid = !!value;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      username: isValid ? "" : "Username is required",
    }));
    return isValid;
  };

  const validatePassword = (value) => {
    const isLengthValid = value.length >= 12;
    const isCriteriaValid =
      /[a-z]/.test(value) && /[A-Z]/.test(value) && /\d/.test(value);
    const isValid = isLengthValid && isCriteriaValid;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      password: isLengthValid && isCriteriaValid ? "" : "Invalid password",
    }));
    return isValid;
  };

  const validateRepassword = (value) => {
    const isValid = !value || value === post.password;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      repassword: isValid ? "" : "Passwords do not match",
    }));
    return isValid;
  };

  const validateSection = (value) => {
    const isValid = !!value && Object.values(Section).includes(value);
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      section: isValid ? "" : "Invalid section",
    }));
    return isValid;
  };

  const validateGender = (value) => {
    const isValid = !!value && Object.values(Gender).includes(value);
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      section: isValid ? "" : "Invalid gender",
    }));
    return isValid;
  };

  const validateAudit = (value) => {
    const isValid = !!value;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      audit: isValid ? "" : "Reason to Edit is required",
    }));
    return isValid;
  };

  const convertToBase64 = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setPost({ ...post, image: reader.result });
    };
    reader.onerror = (error) => {
      console.log("Error:", error);
    };
  };

  return (
    <div className="container mx-auto mt-5 mb-8">
      <form className="max-w-2xl mx-auto flex flex-col gap-7 glassmorphism">
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900">
          {type} Student Profile
        </h1>

        <div className="form-group">
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Photo
            </span>
            {!post.image ? (
              <img
                width={100}
                height={100}
                src={"/assets/images/defaultProfilePicture.jpg"} //TODO: FIND BETTER PICTURE XD
                alt="Default Profile"
              />
            ) : (
              <img
                width={100}
                height={100}
                src={post.image}
                alt="User Profile"
              />
            )}
          </label>

          <input
            accept="image/*"
            type="file"
            id="photo"
            name="photo"
            className="form_input"
            onChange={convertToBase64}
            value={post?.photo}
          />
          {errMsg.photo ? (
            <p className="error_message">{errMsg.photo}</p>
          ) : null}
        </div>

        <ReusableInput
          label="Student Number"
          type="text"
          id="studentNumber"
          name="studentNumber"
          placeholder="Enter Student Number"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, studentNumber: e.target.value });
            validateStudentNumber(e.target.value);
          }}
          value={post?.studentNumber}
          errorMessage={errMsg.studentNumber}
          required
        />

        <ReusableInput
          label="NFC UID"
          type="text"
          id="nfcUid"
          name="nfcUid"
          placeholder="Enter NFC UID"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, nfcUID: e.target.value });
            validateStudentNumber(e.target.value);
          }}
          value={post?.nfcUID}
          errorMessage={errMsg.nfcUID}
          required
        />

        <ReusableInput
          label="Email"
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, email: e.target.value });
            validateEmail(e.target.value);
          }}
          value={post?.email}
          errorMessage={errMsg.email}
          required
        />

        <ReusableInput
          label="Name"
          type="text"
          id="name"
          name="name"
          placeholder="Enter User name"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, name: e.target.value });
            validateName(e.target.value);
          }}
          value={post?.name}
          errorMessage={errMsg.name}
          required
        />

        <ReusableInput
          label="Username"
          type="text"
          id="username"
          name="username"
          placeholder="Enter Username"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, username: e.target.value });
            validateUsername(e.target.value);
          }}
          value={post?.username}
          errorMessage={errMsg.username}
          required
        />

        <ReusableInput
          label="Password"
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, password: e.target.value });
            validatePassword(e.target.value);
          }}
          value={post?.password}
          errorMessage={errMsg.password}
          required
        />

        <ReusableInput
          label="Retype Password"
          type="password"
          id="repassword"
          name="repassword"
          placeholder="Retype Password"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, repassword: e.target.value });
            validateRepassword(e.target.value);
          }}
          value={post?.repassword}
          errorMessage={errMsg.repassword}
          required
        />

        <ReusableDropdown
          label="Section"
          id="section"
          name="section"
          options={sectionsOptions}
          value={post?.section}
          onChange={(e) => {
            setPost({ ...post, section: e.target.value });
          }}
          placeholder="Select Section"
        />

        <ReusableDropdown
          label="Gender"
          id="gender"
          name="gender"
          options={genderOptions}
          value={post?.gender}
          onChange={(e) => {
            setPost({ ...post, gender: e.target.value });
          }}
          placeholder="Select Gender"
        />

        <ReusableInput
          label="Mobile number"
          type="text"
          id="mobile number"
          name="mobile number"
          placeholder="Enter mobile number"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, mobileNumber: e.target.value });
          }}
          value={post?.mobileNumber}
        />

        <ReusableInput
          label="Place of birth"
          type="text"
          id="place of birth"
          name="place of birth"
          placeholder="Enter place of birth"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, placeOfBirth: e.target.value });
          }}
          value={post?.placeOfBirth}
        />

        <ReusableInput
          label="Residential address"
          type="text"
          id="residential address"
          name="residential address"
          placeholder="Enter residential address"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, residentialAddress: e.target.value });
          }}
          value={post?.residentialAddress}
        />

        <ReusableInput
          label="Permanent address"
          type="text"
          id="permanent address"
          name="permanent address"
          placeholder="Enter permanent address"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, permanentAddress: e.target.value });
          }}
          value={post?.permanentAddress}
        />

        <ReusableInput
          label="Name of spouse"
          type="text"
          id="name of spouse"
          name="name of spouse"
          placeholder="Enter name of spouse"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, nameOfSpouse: e.target.value });
          }}
          value={post?.nameOfSpouse}
        />

        {type == "Edit" ? (
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Reson for Edit:
            </span>
            <textarea
              id="audit"
              name="audit"
              placeholder="Your reason for editing values here..."
              className="form_input"
              onChange={(e) => {
                setPost({ ...post, audit: e.target.value });
                validateAudit(e.target.value);
              }}
              value={post?.audit}
            />
            {errMsg.audit ? (
              <p className="error_message">{errMsg.audit}</p>
            ) : null}
          </label>
        ) : null}

        <button className="black_btn" disabled={loading} onClick={handleSubmit}>
          {loading ? "Processing" : `${type} Student`}
        </button>
        {type == "Edit" ? (
          <button className="red_btn" disabled={loading} onClick={handleDelete}>
            {loading ? "Processing" : "Delete Student"}
          </button>
        ) : null}
      </form>
    </div>
  );
};

export default StudentCrudForm;
