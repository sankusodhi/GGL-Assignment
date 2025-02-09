
export const submitUser = async (user: User) => {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!response || !response.ok) {
      throw new Error(`Failed to submit user. Status: ${response?.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting user:', error);
    throw new Error('Failed to submit user');
  }
};
export const fetchUsers = async () => {
  try {
    const response = await fetch('/api/users');
    if (!response || !response.ok) {
      throw new Error(`Failed to fetch users. Status: ${response?.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
};
