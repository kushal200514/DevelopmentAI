import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, CheckCircle, Search } from 'lucide-react';

export function VivaAccordion({ questions = [] }) {
  const [openIndices, setOpenIndices] = useState([0]); // first question open by default
  const [vivaSearch, setVivaSearch] = useState('');

  const toggleIndex = (idx) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter(i => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  const handleExpandAll = () => {
    setOpenIndices(questions.map((_, i) => i));
  };

  const handleCollapseAll = () => {
    setOpenIndices([]);
  };

  const filteredQuestions = questions.filter(q =>
    q.question.toLowerCase().includes(vivaSearch.toLowerCase()) ||
    q.answer.toLowerCase().includes(vivaSearch.toLowerCase())
  );

  return (
    <div style={{ marginTop: '16px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '18px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <HelpCircle size={18} className="text-blue-400" style={{ color: '#60a5fa' }} />
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-heading)' }}>
            Viva Voce & Practical Exam Questions ({questions.length})
          </h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button onClick={handleExpandAll} className="btn-secondary" style={{ padding: '6px 12px', fontSize: '0.78rem' }} type="button">
            Expand All
          </button>
          <button onClick={handleCollapseAll} className="btn-secondary" style={{ padding: '6px 12px', fontSize: '0.78rem' }} type="button">
            Collapse All
          </button>
        </div>
      </div>

      <div style={{ position: 'relative', marginBottom: '16px' }}>
        <Search size={16} style={{ position: 'absolute', left: '12px', top: '11px', color: 'var(--text-muted)' }} />
        <input
          type="text"
          value={vivaSearch}
          onChange={(e) => setVivaSearch(e.target.value)}
          placeholder="Filter viva questions or answers..."
          style={{
            width: '100%',
            padding: '8px 14px 8px 36px',
            background: 'var(--bg-input)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--text-primary)',
            fontSize: '0.85rem'
          }}
        />
      </div>

      <div className="viva-list">
        {filteredQuestions.map((item, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div key={idx} className="viva-item">
              <div className="viva-question-header" onClick={() => toggleIndex(idx)}>
                <div className="viva-question-text">
                  <span className="q-badge">Q{idx + 1}</span>
                  <span>{item.question}</span>
                </div>
                <div>
                  {isOpen ? <ChevronUp size={18} color="var(--text-muted)" /> : <ChevronDown size={18} color="var(--text-muted)" />}
                </div>
              </div>

              {isOpen && (
                <div className="viva-answer-content">
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <CheckCircle size={15} style={{ color: '#34d399', flexShrink: 0, marginTop: '3px' }} />
                    <div>{item.answer}</div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredQuestions.length === 0 && (
          <div style={{
            padding: '30px',
            textAlign: 'center',
            color: 'var(--text-muted)',
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-md)',
            border: '1px dashed var(--border-subtle)'
          }}>
            No viva questions matched your search query.
          </div>
        )}
      </div>
    </div>
  );
}

