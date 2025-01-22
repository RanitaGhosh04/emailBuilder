import React from 'react';

const PreviewPanel = ({ emailConfig }) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Preview</h2>
      </div>
      <div className="bg-white border rounded-lg p-4">
        <h3 className="text-xl font-bold mb-4">{emailConfig.title}</h3>
        {emailConfig.imageUrl && (
          <img
            src={emailConfig.imageUrl}
            alt="Email content"
            className="w-full h-48 object-cover mb-4 rounded"
          />
        )}
        <p className="mb-4 whitespace-pre-wrap">{emailConfig.content}</p>
        <p className="text-sm text-gray-600">{emailConfig.footer}</p>
      </div>
    </div>
  );
};

export default PreviewPanel;