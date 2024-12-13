"use client";
import React, { useState, useEffect } from 'react';

export default function Portfolio() {

  const [summaryInput, setSummaryInput] = useState('');
  const [summary, setSummary] = useState('');
  const [summaryTaskId, setSummaryTaskId] = useState(null);
  
  const [inputText, setInputText] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [text2imageLoading, setText2imageLoading] = useState(false);
  const [captionLoading, setCaptionLoading] = useState(false);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [taskId, setTaskId] = useState(null);
  const [manualTaskId, setManualTaskId] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); // For image upload
  const [caption, setCaption] = useState(''); // For generated caption
  const [captionTaskId, setCaptionTaskId] = useState(null); // Task ID for caption generation
  const [imageSrc, setImageSrc] = useState(null); // For displaying the uploaded image

  const [copySuccess, setCopySuccess] = useState(false);
  return (
      <div class="container">
        {/* Text to Image Section */}
        <div className="feature-card">
          <h2>Text to Image Generator</h2>
          <div className="input-area">
            <form>
              <textarea
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text to generate image"
                required
                disabled={text2imageLoading} // Disable input when loading
                rows={3}
                cols={60}
                className="text-input"
              />
              <button className="button-primary" type="submit" disabled={text2imageLoading}>
                {text2imageLoading ? 'Generating...' : 'Generate Image'}
              </button>
            </form>
          </div>

          <h2>Fetch Image by Task ID</h2>
          <div className="input-area">
            <form >
              <input
                className="manual-taskid-input" 
                type="text"
                value={manualTaskId}
                onChange={(e) => setManualTaskId(e.target.value)}
                placeholder="Enter task ID"
                required
                disabled={text2imageLoading}
              />
              <button className="button-primary" type="submit" disabled={text2imageLoading}>
                Fetch Image
              </button>
            </form>
          </div>

          {imageUrl && (
            <div className="result-area">
            <img src={imageUrl} alt="Generated" className="generated-image" />
            </div>
          )}
        </div>
      
        {/* Image Caption Section */}
        <div className="feature-card">
          <h2>Image Caption Generator</h2>
          <div className="input-area">
            <form >
              <div className="file-upload-container"> 
                <input
                  type="file"
                  id="file-upload"
                  accept="image/*"
                
                  className="file-input"
                  required
                  disabled={captionLoading}
                />
                <label htmlFor="file-upload" className="file-upload-label">
                  <div className="upload-content">
                    <span className="upload-icon">📁</span>
                    <span className="upload-text">Choose File or Drag & Drop</span>
                  </div>
                </label>
              </div>
              <button className="button-primary" type="submit" disabled={captionLoading}>
                {captionLoading ? 'Generating...' : 'Generate Caption'}
              </button>
            </form>
          </div>
          {imageSrc && (
            <div className="result-area">
              <img src={imageSrc} alt="Selected" className="preview-image" />
              {caption && <p className="caption-text">{caption}</p>}
            </div>
          )}
        </div>  

        {/* Summary Generator Section */}
        <div className="feature-card">
          <h2>Summary Generator</h2>
          <div className="input-area">
            <form>
              <textarea
                value={summaryInput}
                onChange={(e) => setSummaryInput(e.target.value)}
                placeholder="Enter text to summarize"
                required
                disabled={summaryLoading}
                className="text-input"
              />
              <button className="button-primary" type="submit" disabled={summaryLoading}>
                {summaryLoading ? 'Generating...' : 'Generate Summary'}
              </button>
            </form>
          </div>
          {summary && (
            <div className="result-area">
              <p className="summary-text">{summary}</p>
            </div>
          )}
          
        </div>  
      </div>
  );
}