import React from 'react';
import { Upload } from 'lucide-react';

const EditorPanel = ({ emailConfig, onInputChange, onImageUpload }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={emailConfig.title}
          onChange={onInputChange}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Content
        </label>
        <textarea
          name="content"
          value={emailConfig.content}
          onChange={onInputChange}
          rows={6}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Footer
        </label>
        <input
          type="text"
          name="footer"
          value={emailConfig.footer}
          onChange={onInputChange}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Image Upload
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onImageUpload(e.target.files[0])}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            <Upload className="w-8 h-8 text-gray-400" />
            <span className="mt-2 text-sm text-gray-600">
              Click to upload image
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default EditorPanel;