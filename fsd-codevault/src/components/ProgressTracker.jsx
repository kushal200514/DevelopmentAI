import React from 'react';
import { CheckCircle2, Sparkles, BookOpen, FileCode2 } from 'lucide-react';

export function ProgressTracker({
  totalExperiments = 13,
  totalPrograms = 21,
  completedCount = 0,
  revisedCount = 0
}) {
  const percentComplete = Math.round((completedCount / totalExperiments) * 100);

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-icon blue">
          <BookOpen size={24} />
        </div>
        <div className="stat-info">
          <h3>{totalExperiments}</h3>
          <p>Total Experiments</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon purple">
          <FileCode2 size={24} />
        </div>
        <div className="stat-info">
          <h3>{totalPrograms}</h3>
          <p>Total Programs & Files</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon green">
          <CheckCircle2 size={24} />
        </div>
        <div className="stat-info">
          <h3>{completedCount} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>({percentComplete}%)</span></h3>
          <p>Completed Experiments</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon amber">
          <Sparkles size={24} />
        </div>
        <div className="stat-info">
          <h3>{revisedCount}</h3>
          <p>Revised for Viva</p>
        </div>
      </div>
    </div>
  );
}

