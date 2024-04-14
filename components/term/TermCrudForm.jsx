"use client";

import ReusableInput from "@components/reusableInput/ReusableInput";
import { useState, Suspense } from "react";

import React from "react";

const TermCrudForm = ({
  type,
  post,
  setPost,
  loading,
  handleSubmit,
  handleDelete = () => {},
}) => {
  const [errMsg, setErrMsg] = useState({
    term: "",
    audit: "",
  });

  const checkForEmptyValue = (value, param) => {
    const isValid = !!value;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      [param]: isValid ? "" : "This field cannot be empty",
    }));
    return isValid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isTermValid = checkForEmptyValue(post?.term, "term");
    let isAuditValid = true;

    if(type === "Edit"){
        isAuditValid = checkForEmptyValue(post?.audit, "audit");
    }

    if(!isTermValid || !isAuditValid){
        console.log("Please fill all inputs");
        return;
    }
    handleSubmit(e);
  };

  const onDelete = () => {
    checkForEmptyValue(post?.audit, "audit");
    handleDelete();
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto mt-5 mb-8">
        <form className="max-w-2xl mb-8 mx-auto flex flex-col gap-7 glassmorphism" onSubmit={handleFormSubmit}>
          <h1 className="text-3xl font-satoshi font-semibold text-gray-900">
            {type} Term
          </h1>

          <ReusableInput
            label="Term"
            type="text"
            id="term"
            name="term"
            placeholder="Enter Term"
            className="form_input"
            onChange={(e) => {
              setPost({ ...post, term: e.target.value });
              checkForEmptyValue(e.target.value, "term");
            }}
            value={post?.term}
            errorMessage={errMsg.term}
            required
          />

          {type == "Edit" ? (
            <label>
              <span className="font-satoshi font-semibold text-base text-gray-700">
                Reason to Edit or Delete:
              </span>
              <textarea
                id="audit"
                name="audit"
                placeholder="Your reason for editing/deleting here..."
                className="form_input"
                onChange={(e) => {
                  setPost({ ...post, audit: e.target.value });
                  checkForEmptyValue(e.target.value, "audit");
                }}
                value={post?.audit}
              />
              {errMsg.audit ? (
                <p className="error_message">{errMsg.audit}</p>
              ) : null}
            </label>
          ) : null}

            <button className="black_btn" disabled={loading}>
              {loading ? "Processing" : `${type} Term`}
            </button>
            {type == "Edit" ? (
              <button
                className="red_btn"
                disabled={loading}
                onClick={onDelete}
              >
                {loading ? "Processing" : "Delete Term"}
              </button>
            ) : null}
        </form>
      </div>
    </Suspense>
  );
};

export default TermCrudForm;