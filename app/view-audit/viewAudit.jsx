"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import InfoDisplay from "@components/infoDisplay/infoDisplay";

const ViewAudit = () => {
  const searchParams = useSearchParams();
  const auditId = searchParams.get("auditid");

  const [audit, setAudit] = useState({
    target: "",
    description: "",
    oldData: {},
    newData: {},
    changeMade: "",
  });

  const getAuditDetails = async () => {
    try {
      const response = await fetch(`api/audits/${auditId}`);
      const data = await response.json();
      const success = data.success;

      if (success) {
        const auditData = data.data;
        setAudit({
          target: auditData.target,
          description: auditData.description,
          oldData: auditData.oldData,
          newData: auditData.newData,
          changeMade: auditData.changeMade,
        });
      }
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };

  const formatToString = (obj) => {
    let result = "";

    if (obj) {
      for (const [key, value] of Object.entries(obj)) {
        let stringValue = JSON.stringify(value);
        if (stringValue.length > 50) {
          stringValue = stringValue.substring(0, 50) + "...";
        }
        result += `${key}: ${stringValue}\n`;
      }
      return result.trim();
    } else {
      return "No Data";
    }
  };

  useEffect(() => {
    getAuditDetails();
  }, []);

  return (
    <div className="container mx-auto mt-5 mb-8">
      <div className="max-w-2xl mx-auto flex flex-col gap-7 glassmorphism">
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900">
          Audit Details
        </h1>

        <InfoDisplay label="Target" value={audit.target} />
        <InfoDisplay label="Description" value={audit.description} />
        <InfoDisplay label="Old Data" value={formatToString(audit?.oldData)} />
        <InfoDisplay label="New Data" value={formatToString(audit?.newData)} />
        <InfoDisplay label="Date and Time" value={audit.changeMade} />
      </div>
    </div>
  );
};

export default ViewAudit;
