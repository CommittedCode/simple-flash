export const fetchGroups = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/groups"); // Replace with your backend API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch groups");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
