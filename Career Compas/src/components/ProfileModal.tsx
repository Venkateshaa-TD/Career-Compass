// ...existing code...


import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/context/AuthContext";

const ProfileModal = ({ user, onClose }) => {
  const { login } = useAuth();
  const [editing, setEditing] = useState(false);
  const [formValues, setFormValues] = useState({
    name: user?.name || "",
    photoUrl: user?.photoUrl || "",
    email: user?.email || "",
    academic_class: user?.academic_class || "",
    custom_class: user?.custom_class || "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleEditClick = () => setEditing(true);

  const handleSaveClick = async () => {
    setLoading(true);
    // Save to Supabase
    await supabase
      .from("users_profile")
      .update({
        name: formValues.name,
        academic_class: formValues.academic_class,
        custom_class: formValues.custom_class,
      })
      .eq("id", user.id);
    // Update AuthContext
    login({ ...user, ...formValues });
    setEditing(false);
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 min-w-[300px] shadow-lg relative">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>×</button>
        <h2 className="text-lg font-bold mb-4">Profile</h2>
        <div className="mb-4 flex items-center space-x-3">
          {formValues.photoUrl ? (
            <img src={formValues.photoUrl} alt="Avatar" className="h-12 w-12 rounded-full object-cover" />
          ) : (
            <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold uppercase">
              {formValues.name.charAt(0)}
            </div>
          )}
        </div>
        <div className="space-y-2">
          <div>
            <label>Name:</label>
            {editing ? (
              <input name="name" value={formValues.name} onChange={handleChange} className="border rounded p-1 w-full" />
            ) : (
              <span className="ml-2 font-medium">{formValues.name}</span>
            )}
          </div>
          <div>
            <label>Email:</label>
            <span className="ml-2 font-medium">{formValues.email}</span>
          </div>
          <div>
            <label>Academic Class:</label>
            {editing ? (
              <input name="academic_class" value={formValues.academic_class} onChange={handleChange} className="border rounded p-1 w-full" placeholder="e.g. Science, Commerce, Arts, Vocational" />
            ) : (
              <span className="ml-2 font-medium">{formValues.academic_class}</span>
            )}
          </div>
          <div>
            <label>Custom Class:</label>
            {editing ? (
              <input name="custom_class" value={formValues.custom_class} onChange={handleChange} className="border rounded p-1 w-full" placeholder="e.g. Humanities, Skill-based, etc." />
            ) : (
              <span className="ml-2 font-medium">{formValues.custom_class}</span>
            )}
          </div>
        </div>
        <div className="mt-4 flex justify-end space-x-3">
          {editing ? (
            <button className="bg-primary text-white px-4 py-1 rounded" onClick={handleSaveClick} disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </button>
          ) : (
            <button className="bg-gray-200 px-4 py-1 rounded" onClick={handleEditClick}>
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
