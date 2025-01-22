import React from 'react';
import EditorPanel from './EditorPanel';
import PreviewPanel from './PreviewPanel';
import  {useEmailBuilder} from '../hooks/useEmailBuilder';

const EmailBuilder = () => {
  const {
    emailConfig,
    previewMode,
    setPreviewMode,
    handleInputChange,
    handleImageUpload,
    handleSaveTemplate,
    handleDownload
  } = useEmailBuilder();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6">Email Builder</h1>
          
          <div className="grid grid-cols-2 gap-6">
            <EditorPanel
              emailConfig={emailConfig}
              onInputChange={handleInputChange}
              onImageUpload={handleImageUpload}
            />
            <PreviewPanel
              emailConfig={emailConfig}
              previewMode={previewMode}
              onTogglePreview={() => setPreviewMode(!previewMode)}
            />
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <button
              onClick={handleSaveTemplate}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save Template
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Download HTML
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailBuilder;