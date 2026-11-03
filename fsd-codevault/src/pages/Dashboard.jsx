import React from 'react';
import { Sparkles, Terminal, BookOpen, AlertCircle } from 'lucide-react';
import { ProgressTracker } from '../components/ProgressTracker';
import { ExperimentCard } from '../components/ExperimentCard';
import { categories, getTotalProgramsCount } from '../data/experiments';

export function Dashboard({
  experiments,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSelectExperiment,
  bookmarks,
  onToggleBookmark,
  statuses,
  onChangeStatus,
  revised,
  onToggleRevised
}) {
  const totalPrograms = getTotalProgramsCount();
  const completedCount = Object.values(statuses).filter(s => s === 'completed').length;
  const revisedCount = Object.values(revised).filter(Boolean).length;

  // Filter experiments based on category and search query
  const filteredExperiments = experiments.filter(exp => {
    // Category filter
    const matchesCategory = selectedCategory === 'All' || exp.category === selectedCategory;
    if (!matchesCategory) return false;

    // Search query filter
    if (!searchQuery.trim()) return true;

    const q = searchQuery.toLowerCase().trim();
    const inTitle = exp.title.toLowerCase().includes(q);
    const inNum = `lab ${exp.number}`.includes(q) || `exp ${exp.number}`.includes(q) || `experiment ${exp.number}`.includes(q) || String(exp.number) === q;
    const inCategory = exp.category.toLowerCase().includes(q);
    const inAim = exp.aim.toLowerCase().includes(q);
    const inShortDesc = exp.shortDesc.toLowerCase().includes(q);

    // Search in files (filenames, code, descriptions)
    const inFiles = exp.files.some(f =>
      f.filename.toLowerCase().includes(q) ||
      f.completeCode.toLowerCase().includes(q) ||
      (f.description && f.description.toLowerCase().includes(q))
    );

    // Search in viva questions
    const inViva = exp.vivaQuestions.some(v =>
      v.question.toLowerCase().includes(q) ||
      v.answer.toLowerCase().includes(q)
    );

    // Search in quick revision
    const inRevision =
      exp.quickRevision.importantFunctions.some(fn => fn.toLowerCase().includes(q)) ||
      exp.quickRevision.keyConcepts.some(kc => kc.toLowerCase().includes(q));

    return inTitle || inNum || inCategory || inAim || inShortDesc || inFiles || inViva || inRevision;
  });

  return (
    <div>
      {/* Welcome Hero Section */}
      <div className="hero-banner">
        <div className="hero-badge">
          <Terminal size={14} />
          <span>Full Stack Development • CMR University (4CSPL2021)</span>
        </div>
        <h2 className="hero-title">Welcome to your FSD CodeVault</h2>
        <p className="hero-subtitle">
          All your laboratory experiments, source codes and viva preparation in one place.
          Browse, copy complete programs, review terminal commands, and master viva answers before practical exams.
        </p>

        {/* Statistics Cards */}
        <ProgressTracker
          totalExperiments={experiments.length}
          totalPrograms={totalPrograms}
          completedCount={completedCount}
          revisedCount={revisedCount}
        />
      </div>

      {/* Category Pills Bar */}
      <div className="categories-bar">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`cat-pill ${selectedCategory === cat ? 'active' : ''}`}
            type="button"
          >
            <span>{cat}</span>
            <span style={{ fontSize: '0.72rem', opacity: 0.8 }}>
              ({cat === 'All' ? experiments.length : experiments.filter(e => e.category === cat).length})
            </span>
          </button>
        ))}
      </div>

      {/* Results Header when searching */}
      {searchQuery && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
          padding: '12px 18px',
          background: 'var(--bg-tertiary)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)'
        }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Showing <b>{filteredExperiments.length}</b> {filteredExperiments.length === 1 ? 'experiment' : 'experiments'} matching: <span style={{ color: '#60a5fa', fontWeight: 600 }}>"{searchQuery}"</span>
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Matches title, files, code, & viva
          </span>
        </div>
      )}

      {/* Experiments Grid */}
      {filteredExperiments.length > 0 ? (
        <div className="experiments-grid">
          {filteredExperiments.map(exp => (
            <ExperimentCard
              key={exp.id}
              experiment={exp}
              onSelect={onSelectExperiment}
              isBookmarked={bookmarks.includes(exp.id)}
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
          padding: '60px 20px',
          textAlign: 'center',
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px dashed var(--border-subtle)'
        }}>
          <AlertCircle size={48} style={{ color: 'var(--text-muted)', margin: '0 auto 16px' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '8px' }}>
            No experiments found
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '450px', margin: '0 auto 20px', fontSize: '0.9rem' }}>
            No experiments matched your search query "{searchQuery}". Try searching by experiment number (e.g., "Exp 8"), a function name like "createServer", or clear your filter.
          </p>
          <button
            onClick={() => onSelectCategory('All')}
            className="btn-primary"
            style={{ margin: '0 auto' }}
            type="button"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

