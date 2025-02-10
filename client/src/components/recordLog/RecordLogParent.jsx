import React, { useState } from "react";
import RecordSet from "../recordSet/RecordSet";
import { Heading, LightText } from "../customTypo/CustomTypo";
import { IoIosAdd, IoIosClose, IoIosArrowDown } from "react-icons/io";
import {
  useCreateSetMutation,
  useUpdateSetMutation,
  useDeleteSetMutation,
  useGetTodaysSetsQuery,
} from "../../store/SetApi.jsx";
import "./style.css";

const RecordLogParent = ({ exerciseId }) => {
  const { data, isLoading } = useGetTodaysSetsQuery(exerciseId);
  const fetchedSets = data?.sets || [];
  const [createSet] = useCreateSetMutation();
  const [updateSet] = useUpdateSetMutation();
  const [deleteSet] = useDeleteSetMutation();

  console.log(exerciseId);

  // Local state for unsaved sets (before they get an actual ID from the backend)
  const [localSets, setLocalSets] = useState([]);

  if (isLoading) return <p>Loading sets...</p>;

  // Combine fetched sets with local sets
  const sets = [...fetchedSets, ...localSets];

  // Handle set submission (creates if new, updates if existing)
  const handleSubmitSet = async (tempId, data) => {
    const existingSet = fetchedSets.find((set) => set.id === tempId);
    console.log(data);
    if (existingSet) {
      await updateSet({
        id: existingSet.id,
        data: { ...existingSet, ...data, submitted: true, collapsed: true },
      });
    } else {
      const body = {
        exerciseId,
        ...data,
        submitted: true,
        collapsed: true,
      };
      const response = await createSet(body);

      if (response?.data?.id) {
        // Replace local set and update collapsed state
        setLocalSets((prev) =>
          prev.map((set) =>
            set.id === tempId ? { ...response.data, collapsed: true } : set
          )
        );
      }
    }
  };

  // Toggle collapse state
  const toggleCollapse = async (id, collapsed) => {
    await updateSet({ id, data: { collapsed: !collapsed } });
  };

  // Add new local set (not saved yet)
  const addSet = () => {
    if (sets.some((set) => !set.submitted)) {
      alert("Please submit the current set before adding a new one.");
      return;
    }
    setLocalSets([
      ...localSets,
      { id: Date.now(), submitted: false, collapsed: false },
    ]);
  };

  // Remove a set (only if it's not submitted)
  const removeSet = async (id, submitted) => {
    if (submitted) {
      alert("You cannot remove a submitted set.");
      return;
    }

    if (fetchedSets.some((set) => set.id === id)) {
      await deleteSet(id);
    } else {
      setLocalSets((prev) => prev.filter((set) => set.id !== id));
    }
  };

  return (
    <div className="recordLog">
      <Heading>Record Logs</Heading>

      {sets.map((set, index) => (
        <div key={set.id} className="recordSetContainer">
          {set.collapsed ? (
            <div
              className="collapsedSet"
              onClick={() => toggleCollapse(set.id, set.collapsed)}
            >
              <span>Set {index + 1}</span> {/* Use index + 1 */}
              <span className="arrow">
                <IoIosArrowDown />
              </span>
            </div>
          ) : (
            <div className="setHeader">
              <RecordSet
                setId={set.id}
                onSubmit={(data) => handleSubmitSet(set.id, data)}
              />
              {!set.submitted && (
                <button
                  className="removeSetBtn"
                  onClick={() => removeSet(set.id, set.submitted)}
                >
                  <IoIosClose size={24} />
                </button>
              )}
            </div>
          )}
        </div>
      ))}

      <LightText
        className="light-text"
        style={{ color: "#0785fc" }}
        onClick={addSet}
      >
        Add Set <IoIosAdd />
      </LightText>
    </div>
  );
};

export default RecordLogParent;
