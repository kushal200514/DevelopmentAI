import React from 'react';
import { Bookmark, CheckCircle2, Clock, Eye, FileCode, Sparkles } from 'lucide-react';

export function ExperimentCard({
  experiment,
  onSelect,
  isBookmarked,
  onToggleBookmark,
  status, // 'not-started' | 'in-progress' | 'completed'
  onChangeStatus,
  isRevised,
  onToggleRevised
}) {
  const getCategoryClass = (cat) => {
    switch (cat) {
      case 'HTML and CSS': return 'tag-html-css';
      case 'JavaScript': return 'tag-javascript';
      case 'React': return 'tag-react';
      case 'Node.js': return 'tag-nodejs';
      case 'Express.js': return 'tag-expressjs';
      case 'MongoDB': return 'tag-mongodb';
      case 'Mongoose': return 'tag-mongoose';
      default: return 'tag-html-css';
    }
  };

  const getStatusBadge = () => {
    if (status === 'completed') {
      return (
        <span
          onClick={(e) => { e.stopPropagation(); onChangeStatus(experiment.id, 'not-started'); }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.75rem',
            padding: '3px 8px',
            borderRadius: '999px',
            background: 'rgba(16, 185, 129, 0.15)',
            color: '#34d399',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            cursor: 'pointer'
          }}
          title="Click to change status"
        >
          <CheckCircle2 size={13} /> Completed
        </span>
      );
    }
    if (status === 'in-progress') {
      return (
        <span
          onClick={(e) => { e.stopPropagation(); onChangeStatus(experiment.id, 'completed'); }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.75rem',
            padding: '3px 8px',
            borderRadius: '999px',
            background: 'rgba(245, 158, 11, 0.15)',
            color: '#fbbf24',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            cursor: 'pointer'
          }}
          title="Click to mark completed"
        >
          <Clock size={13} /> In Progress
        </span>
      );
    }
    return (
      <span
        onClick={(e) => { e.stopPropagation(); onChangeStatus(experiment.id, 'in-progress'); }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '0.75rem',
          padding: '3px 8px',
          borderRadius: '999px',
          background: 'rgba(148, 163, 184, 0.1)',
          color: 'var(--text-muted)',
          border: '1px solid var(--border-subtle)',
          cursor: 'pointer'
        }}
        title="Click to start"
      >
        Not Started
      </span>
    );
  };

  return (
    <div className="experiment-card" onClick={() => onSelect(experiment.id)}>
      <div>
        <div className="card-top">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="exp-num-badge">
              LAB {String(experiment.number).padStart(2, '0')}
            </span>
            <span className={`tech-tag ${getCategoryClass(experiment.category)}`}>
              {experiment.category}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleRevised(experiment.id);
              }}
              className="btn-icon"
              style={{
                width: '32px',
                height: '32px',
                color: isRevised ? '#fbbf24' : 'var(--text-muted)',
                borderColor: isRevised ? 'rgba(245, 158, 11, 0.4)' : 'var(--border-subtle)'
              }}
              title={isRevised ? "Marked as Revised" : "Mark as Revised"}
              type="button"
            >
              <Sparkles size={15} fill={isRevised ? "currentColor" : "none"} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleBookmark(experiment.id);
              }}
              className="btn-icon"
              style={{
                width: '32px',
                height: '32px',
                color: isBookmarked ? '#3b82f6' : 'var(--text-muted)',
                borderColor: isBookmarked ? 'rgba(59, 130, 246, 0.4)' : 'var(--border-subtle)'
              }}
              title={isBookmarked ? "Remove Bookmark" : "Bookmark this Experiment"}
              type="button"
            >
              <Bookmark size={15} fill={isBookmarked ? "currentColor" : "none"} />
            </button>
          </div>
        </div>

        <h3 className="card-title">{experiment.title}</h3>
        <p className="card-desc">{experiment.shortDesc}</p>
      </div>

      <div>
        <div className="card-meta-row">
          <div className="files-count">
            <FileCode size={14} />
            <span>{experiment.files.length} {experiment.files.length === 1 ? 'file' : 'files'}</span>
            <span style={{ margin: '0 4px' }}>•</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
              {experiment.files.map(f => f.filename).join(', ')}
            </span>
          </div>
          <div>
            {getStatusBadge()}
          </div>
        </div>

        <div className="card-actions-row">
          <button
            className="btn-primary"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(experiment.id);
            }}
            type="button"
          >
            <Eye size={16} />
            <span>View Experiment</span>
          </button>
        </div>
      </div>
    </div>
  );
}

