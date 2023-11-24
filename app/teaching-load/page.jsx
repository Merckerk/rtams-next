"use client";

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const TeachingLoad = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get("userid");
  
  return (
    <div>TeachingLoad</div>
  )
}

export default TeachingLoad