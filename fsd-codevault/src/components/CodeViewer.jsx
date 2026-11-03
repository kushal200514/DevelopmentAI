import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-json';
import { Download, Maximize2, Minimize2, FileCode, Check } from 'lucide-react';
import { CopyButton } from './CopyButton';

export function CodeViewer({ files = [], onShowToast }) {
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const activeFile = files[activeFileIndex] || files[0];

  useEffect(() => {
    Prism.highlightAll();
  }, [activeFileIndex, activeFile, files]);

  if (!activeFile) return null;

  const lines = activeFile.completeCode.split('\n');

  const handleDownload = () => {
    const blob = new Blob([activeFile.completeCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = activeFile.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    if (onShowToast) onShowToast(`Downloaded ${activeFile.filename}`);
  };

  const getPrismLang = (lang) => {
    switch (lang?.toLowerCase()) {
      case 'html': return 'markup';
      case 'css': return 'css';
      case 'javascript':
      case 'js': return 'javascript';
      case 'jsx': return 'jsx';
      case 'json': return 'json';
      default: return 'javascript';
    }
  };

  const codeGrammar = Prism.languages[getPrismLang(activeFile.language)] || Prism.languages.javascript;
  const highlightedHtml = Prism.highlight(activeFile.completeCode, codeGrammar, getPrismLang(activeFile.language));

  return (
    <div className={`code-viewer-container ${isFullScreen ? 'fixed inset-0 z-50 m-0 rounded-none h-screen' : ''}`}
      style={isFullScreen ? {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        borderRadius: 0,
        margin: 0,
        height: '100vh',
        maxHeight: '100vh'
      } : {}}
    >
      <div className="code-viewer-header">
        <div className="file-tabs-list">
          {files.map((file, idx) => (
            <button
              key={file.filename}
              onClick={() => setActiveFileIndex(idx)}
              className={`file-tab ${activeFileIndex === idx ? 'active' : ''}`}
              type="button"
            >
              <FileCode size={14} />
              <span>{file.filename}</span>
              <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>({file.language})</span>
            </button>
          ))}
        </div>

        <div className="code-actions-group">
          <CopyButton
            text={activeFile.completeCode}
            label="Copy Code"
            onCopySuccess={onShowToast}
          />

          <button
            onClick={handleDownload}
            className="btn-secondary"
            title={`Download ${activeFile.filename}`}
            type="button"
          >
            <Download size={14} />
            <span className="hidden sm:inline">Download</span>
          </button>

          <button
            onClick={() => setIsFullScreen(!isFullScreen)}
            className="btn-secondary"
            title={isFullScreen ? "Exit Fullscreen" : "Fullscreen Viewer"}
            type="button"
          >
            {isFullScreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          </button>
        </div>
      </div>

      {activeFile.description && (
        <div style={{
          padding: '8px 18px',
          background: 'rgba(59, 130, 246, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          fontSize: '0.82rem',
          color: '#93c5fd',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span><b>File Purpose:</b> {activeFile.description}</span>
        </div>
      )}

      <div className="code-wrapper" style={isFullScreen ? { maxHeight: 'calc(100vh - 90px)' } : {}}>
        <div className="line-numbers-col">
          {lines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <div className="code-content-col">
          <pre style={{ margin: 0, padding: 0, background: 'none' }}>
            <code
              className={`language-${getPrismLang(activeFile.language)}`}
              dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            />
          </pre>
        </div>
      </div>
    </div>
  );
}

