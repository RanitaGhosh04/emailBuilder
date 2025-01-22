import { useState, useEffect } from 'react';
import { emailService } from '../services/api';

export const useEmailBuilder = () => {
  const [emailConfig, setEmailConfig] = useState({
    title: '',
    content: '',
    imageUrl: '',
    footer: ''
  });
  const [htmlContent, setHtmlContent] = useState('');
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    fetchEmailLayout();
  }, []);

  const fetchEmailLayout = async () => {
    try {
      const html = await emailService.getEmailLayout();
      setHtmlContent(html);
    } catch (err) {
      console.error('Error fetching layout:', err);
    }
  };

  const handleInputChange = (e) => {
    setEmailConfig({
      ...emailConfig,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const data = await emailService.uploadImage(formData);
      setEmailConfig({
        ...emailConfig,
        imageUrl: data.imageUrl
      });
    } catch (err) {
      console.error('Error uploading image:', err);
    }
  };

  const handleSaveTemplate = async () => {
    try {
      await emailService.saveTemplate(emailConfig);
      alert('Template saved successfully!');
    } catch (err) {
      console.error('Error saving template:', err);
    }
  };

  const handleDownload = async () => {
    try {
      const blob = await emailService.downloadTemplate(emailConfig);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'email-template.html';
      a.click();
    } catch (err) {
      console.error('Error downloading template:', err);
    }
  };

  return {
    emailConfig,
    previewMode,
    setPreviewMode,
    handleInputChange,
    handleImageUpload,
    handleSaveTemplate,
    handleDownload
  };
};