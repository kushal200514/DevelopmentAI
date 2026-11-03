import React, { useState } from 'react';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  CheckCircle2,
  Clock,
  Sparkles,
  Info,
  Code2,
  Terminal,
  MonitorCheck,
  HelpCircle,
  BookMarked,
  Check,
  Layers,
  Cpu,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import { CodeViewer } from '../components/CodeViewer';
import { VivaAccordion } from '../components/VivaAccordion';
import { CopyButton } from '../components/CopyButton';

export function ExperimentDetails({
  experiment,
  onBack,
  onNavigateExperiment,
  allExperiments,
  isBookmarked,
  onToggleBookmark,
  status,
  onChangeStatus,
  isRevised,
  onToggleRevised,
  onShowToast
}) {
  const [activeTab, setActiveTab] = useState('code'); // Default to 'code' as requested: "I want to open the website, click Experiment 8, see server.js, copy the complete code and immediately know how to run it."

  const currentIndex = allExperiments.findIndex(e => e.id === experiment.id);
  const prevExp = currentIndex > 0 ? allExperiments[currentIndex - 1] : null;
  const nextExp = currentIndex < allExperiments.length - 1 ? allExperiments[currentIndex + 1] : null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'code', label: `Source Code (${experiment.files.length})`, icon: Code2 },
    { id: 'run', label: 'How to Run', icon: Terminal },
    { id: 'output', label: 'Expected Output', icon: MonitorCheck },
    { id: 'viva', label: `Viva Questions (${experiment.vivaQuestions.length})`, icon: HelpCircle },
    { id: 'revision', label: 'Quick Revision', icon: BookMarked },
  ];

  return (
    <div>
      {/* Top Breadcrumb and Navigation */}
      <div className="detail-header">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div className="breadcrumb">
            <button
              onClick={onBack}
              style={{ background: 'none', border: 'none', color: 'var(--accent-blue)', display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '0.86rem', fontWeight: 500 }}
              type="button"
            >
              <ArrowLeft size={16} /> Dashboard
            </button>
            <span>/</span>
            <span>{experiment.category}</span>
            <span>/</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Lab {experiment.number}</span>
          </div>

          <div className="detail-nav-buttons">
            <button
              onClick={() => prevExp && onNavigateExperiment(prevExp.id)}
              disabled={!prevExp}
              className="btn-secondary"
              style={{ opacity: prevExp ? 1 : 0.4, cursor: prevExp ? 'pointer' : 'not-allowed', padding: '6px 12px', fontSize: '0.8rem' }}
              title={prevExp ? `Previous: Lab ${prevExp.number}` : 'First Experiment'}
              type="button"
            >
              <ChevronLeft size={16} /> Prev Lab
            </button>
            <button
              onClick={() => nextExp && onNavigateExperiment(nextExp.id)}
              disabled={!nextExp}
              className="btn-secondary"
              style={{ opacity: nextExp ? 1 : 0.4, cursor: nextExp ? 'pointer' : 'not-allowed', padding: '6px 12px', fontSize: '0.8rem' }}
              title={nextExp ? `Next: Lab ${nextExp.number}` : 'Last Experiment'}
              type="button"
            >
              Next Lab <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Experiment Title and Action Header */}
        <div className="detail-title-row">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <span className="exp-num-badge" style={{ fontSize: '0.85rem', padding: '4px 12px' }}>
                EXPERIMENT {String(experiment.number).padStart(2, '0')}
              </span>
              <span className="tech-tag tag-react" style={{ fontSize: '0.8rem' }}>
                {experiment.category}
              </span>
              {experiment.badge && (
                <span style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  {experiment.badge}
                </span>
              )}
            </div>
            <h2 className="detail-title">{experiment.title}</h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {/* Status Selector */}
            <select
              value={status}
              onChange={(e) => onChangeStatus(experiment.id, e.target.value)}
              style={{
                background: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '8px 12px',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-sans)',
                cursor: 'pointer'
              }}
            >
              <option value="not-started">⚪ Not Started</option>
              <option value="in-progress">🟡 In Progress</option>
              <option value="completed">🟢 Completed</option>
            </select>

            {/* Revised Toggle */}
            <button
              onClick={() => onToggleRevised(experiment.id)}
              className="btn-secondary"
              style={{
                color: isRevised ? '#fbbf24' : 'var(--text-muted)',
                borderColor: isRevised ? 'rgba(245, 158, 11, 0.4)' : 'var(--border-subtle)'
              }}
              title="Mark as Revised for Exams"
              type="button"
            >
              <Sparkles size={16} fill={isRevised ? "currentColor" : "none"} />
              <span className="hidden sm:inline">{isRevised ? 'Revised' : 'Mark Revised'}</span>
            </button>

            {/* Bookmark Toggle */}
            <button
              onClick={() => onToggleBookmark(experiment.id)}
              className="btn-secondary"
              style={{
                color: isBookmarked ? '#3b82f6' : 'var(--text-muted)',
                borderColor: isBookmarked ? 'rgba(59, 130, 246, 0.4)' : 'var(--border-subtle)'
              }}
              title="Bookmark Experiment"
              type="button"
            >
              <Bookmark size={16} fill={isBookmarked ? "currentColor" : "none"} />
              <span className="hidden sm:inline">{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Navigation Bar */}
      <div className="tabs-header">
        {tabs.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              type="button"
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <div className="output-card">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Info size={18} style={{ color: '#60a5fa' }} /> Aim of the Experiment
            </h3>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
              {experiment.aim}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            <div className="revision-card">
              <div className="revision-card-title">
                <Cpu size={18} style={{ color: '#34d399' }} /> System Requirements & Software
              </div>
              <ul className="revision-list">
                {experiment.requirements.map((req, i) => (
                  <li key={i}>
                    <span className="revision-bullet">▹</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="revision-card">
              <div className="revision-card-title">
                <Layers size={18} style={{ color: '#c084fc' }} /> Theoretical Background & Reading
              </div>
              <ul className="revision-list">
                {experiment.suggestedReading.map((read, i) => (
                  <li key={i}>
                    <span className="revision-bullet">▹</span>
                    <span>{read}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {experiment.dependencies && experiment.dependencies.length > 0 && (
            <div className="output-card">
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '10px' }}>
                Required Packages & Dependencies
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {experiment.dependencies.map((dep, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-subtle)',
                      color: '#60a5fa'
                    }}
                  >
                    {dep}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: SOURCE CODE */}
      {activeTab === 'code' && (
        <div>
          <CodeViewer files={experiment.files} onShowToast={onShowToast} />
        </div>
      )}

      {/* TAB 3: HOW TO RUN */}
      {activeTab === 'run' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="output-card">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Terminal size={18} style={{ color: '#60a5fa' }} /> Step-by-Step Execution Instructions
            </h3>
            <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {experiment.runInstructions.map((step, idx) => (
                <li key={idx} style={{ color: 'var(--text-primary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {experiment.commands && experiment.commands.length > 0 && (
            <div className="output-card">
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '14px' }}>
                Terminal Execution Commands
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {experiment.commands.map((cmd, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: '#020617',
                      padding: '10px 16px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.88rem'
                    }}
                  >
                    <span style={{ color: '#38bdf8' }}>$ {cmd}</span>
                    <CopyButton text={cmd} label="Copy" onCopySuccess={onShowToast} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: OUTPUT */}
      {activeTab === 'output' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="output-card">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MonitorCheck size={18} style={{ color: '#34d399' }} /> Expected Output & Inferences
            </h3>
            <div className="terminal-box">
              {experiment.expectedOutput}
            </div>
          </div>

          {experiment.screenshot && (
            <div className="output-card">
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '12px' }}>
                Actual Lab Manual Output Screenshot
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                Verified laboratory execution capture directly from your CMR University Full Stack Development record.
              </p>
              <div className="output-screenshot-wrapper">
                <img
                  src={experiment.screenshot}
                  alt={`Output for Experiment ${experiment.number}`}
                  className="output-screenshot-img"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 5: VIVA QUESTIONS */}
      {activeTab === 'viva' && (
        <div>
          <VivaAccordion questions={experiment.vivaQuestions} />
        </div>
      )}

      {/* TAB 6: QUICK REVISION */}
      {activeTab === 'revision' && (
        <div className="revision-grid">
          <div className="revision-card">
            <div className="revision-card-title">
              <Lightbulb size={18} style={{ color: '#fbbf24' }} /> Key Concepts
            </div>
            <ul className="revision-list">
              {experiment.quickRevision.keyConcepts.map((item, i) => (
                <li key={i}>
                  <span className="revision-bullet">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="revision-card">
            <div className="revision-card-title">
              <Code2 size={18} style={{ color: '#60a5fa' }} /> Important Functions & Syntax
            </div>
            <ul className="revision-list">
              {experiment.quickRevision.importantFunctions.map((item, i) => (
                <li key={i}>
                  <span className="revision-bullet">▹</span>
                  <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', background: 'var(--bg-tertiary)', padding: '2px 6px', borderRadius: '4px', color: '#93c5fd' }}>
                    {item}
                  </code>
                </li>
              ))}
            </ul>
          </div>

          <div className="revision-card">
            <div className="revision-card-title">
              <Sparkles size={18} style={{ color: '#c084fc' }} /> Memory Tricks & Mnemonics
            </div>
            <ul className="revision-list">
              {experiment.quickRevision.memoryTips.map((item, i) => (
                <li key={i}>
                  <span className="revision-bullet">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="revision-card">
            <div className="revision-card-title">
              <AlertTriangle size={18} style={{ color: '#f43f5e' }} /> Common Student Errors & Fixes
            </div>
            <ul className="revision-list">
              {experiment.quickRevision.commonErrors.map((item, i) => (
                <li key={i}>
                  <span className="revision-bullet" style={{ color: '#f43f5e' }}>✖</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="revision-card" style={{ gridColumn: '1 / -1' }}>
            <div className="revision-card-title">
              <CheckCircle2 size={18} style={{ color: '#34d399' }} /> Practical Exam Verification Checklist
            </div>
            <ul className="revision-list">
              {experiment.quickRevision.examChecklist.map((item, i) => (
                <li key={i}>
                  <span className="revision-bullet" style={{ color: '#34d399' }}>✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

