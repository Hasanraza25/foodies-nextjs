"use client"
import React from "react";
import { useFormState } from "react-dom";

const MealFormSubmission = () => {
  const { pending } = useFormState();
  return <button disabled={pending}>

    {pending ? 'Submitting...' :'Share Meal'}
  </button>;
};

export default MealFormSubmission;
