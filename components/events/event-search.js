import { useRef } from "react";
import Button from "../ui/button";

function EventSearch({ onSearch }) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = +yearInputRef.current.value; // Convert to number
    const selectedMonth = +monthInputRef.current.value - 1; // Convert to number and adjust for 0-based month

    onSearch(selectedYear, selectedMonth);
  }

  return (
    <form
      className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto mt-8 space-y-4"
      onSubmit={submitHandler}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Year Selection */}
        <div className="flex flex-col">
          <label htmlFor="year" className="mb-2 text-gray-700 font-medium">
            Year
          </label>
          <select
            ref={yearInputRef}
            id="year"
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>

        {/* Month Selection */}
        <div className="flex flex-col">
          <label htmlFor="month" className="mb-2 text-gray-700 font-medium">
            Month
          </label>
          <select
            ref={monthInputRef}
            id="month"
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-right">
        <Button type="submit">Find Events</Button>
      </div>
    </form>
  );
}

export default EventSearch;
