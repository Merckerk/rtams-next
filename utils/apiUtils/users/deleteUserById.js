export const deleteUser = async (userId) => {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: "DELETE",
      });
  
      return response.ok;
    } catch (error) {
      console.error('Error deleting the user', error);
      return false;
    }
  };
  