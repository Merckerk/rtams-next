"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

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

  useEffect(() => {
    getAuditDetails();
  }, []);

  return (
    <div className="container mx-auto mt-5 mb-8">
      <div className="max-w-2xl mx-auto flex flex-col gap-7 glassmorphism">
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900">
          Audit Details
        </h1>

        <div class="glassmorphism-wrapper bg-white rounded-xl border border-gray-200 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] p-5">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            {audit.target}
          </span>
          <span className="font-satoshi text-base text-gray-900">Target:</span>
        </div>

        <span className="font-satoshi font-semibold text-base text-gray-700">
          Target:
        </span>
        <span className="font-satoshi font-semibold text-base text-gray-700">
          Target:
        </span>
        <span className="font-satoshi font-semibold text-base text-gray-700">
          Target:
        </span>
        <span className="font-satoshi font-semibold text-base text-gray-700">
          Target:
        </span>
      </div>
    </div>
  );
};

export default ViewAudit;
