import React from 'react';
import { Bookmark, ArrowLeft, BookOpen } from 'lucide-react';
import { ExperimentCard } from '../components/ExperimentCard';

export function Bookmarks({
  experiments,
  bookmarks,
  onToggleBookmark,
  onSelectExperiment,
  statuses,
  onChangeStatus,
  revised,
  onToggleRevised,
  onBackToDashboard
}) {
  const bookmarkedExperiments = experiments.filter(e => bookmarks.includes(e.id));

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div>
          <button
            onClick={onBackToDashboard}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent-blue)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              fontSize: '0.86rem',
              fontWeight: 500,
              marginBottom: '10px'
            }}
            type="button"
          >
            <ArrowLeft size={16} /> Back to Dashboard
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="brand-icon-wrapper" style={{ width: '34px', height: '34px' }}>
              <Bookmark size={18} />
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-heading)' }}>
              Saved Bookmarks ({bookmarkedExperiments.length})
            </h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
            Your quick-access collection of important laboratory experiments saved for examination revision.
          </p>
        </div>
      </div>

      {bookmarkedExperiments.length > 0 ? (
        <div className="experiments-grid">
          {bookmarkedExperiments.map(exp => (
            <ExperimentCard
              key={exp.id}
              experiment={exp}
              onSelect={onSelectExperiment}
              isBookmarked={true}
              onToggleBookmark={onToggleBookmark}
              status={statuses[exp.id] || 'not-started'}
              onChangeStatus={onChangeStatus}
              isRevised={!!revised[exp.id]}
              onToggleRevised={onToggleRevised}
            />
          ))}
        </div>
      ) : (
        <div style={{
          padding: '80px 20px',
          textAlign: 'center',
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px dashed var(--border-subtle)'
        }}>
          <Bookmark size={48} style={{ color: 'var(--text-muted)', margin: '0 auto 16px' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '8px' }}>
            No experiments bookmarked yet
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 20px', fontSize: '0.9rem' }}>
            Click the bookmark icon on any experiment card or detail view to save it here for fast revision before your lab exams.
          </p>
          <button
            onClick={onBackToDashboard}
            className="btn-primary"
            style={{ margin: '0 auto' }}
            type="button"
          >
            Browse All Experiments
          </button>
        </div>
      )}
    </div>
  );
}

