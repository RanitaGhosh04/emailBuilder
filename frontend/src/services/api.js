const API_BASE_URL = 'https://emailbuilderback.onrender.com';

export const emailService = {
  getEmailLayout: async () => {
    const response = await fetch(`${API_BASE_URL}/getEmailLayout`);
    return response.text();
  },

  uploadImage: async (formData) => {
    const response = await fetch(`${API_BASE_URL}/uploadImage`, {
      method: 'POST',
      body: formData
    });
    return response.json();
  },

  saveTemplate: async (emailConfig) => {
    const response = await fetch(`${API_BASE_URL}/uploadEmailConfig`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailConfig)
    });
    return response.json();
  },

  downloadTemplate: async (emailConfig) => {
    const response = await fetch(`${API_BASE_URL}/renderAndDownloadTemplate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailConfig)
    });
    return response.blob();
  }
}
