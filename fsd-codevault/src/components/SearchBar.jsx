import React, { useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export function SearchBar({ searchQuery, setSearchQuery, placeholder = "Search experiments, functions, files (e.g. 'createServer', 'Exp 8')..." }) {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        setSearchQuery('');
        inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSearchQuery]);

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <Search size={18} className="search-icon" />
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          className="search-input"
          aria-label="Search laboratory experiments"
        />
        {searchQuery ? (
          <button
            onClick={() => setSearchQuery('')}
            className="search-clear-btn"
            title="Clear search"
            type="button"
          >
            <X size={16} />
          </button>
        ) : (
          <span className="search-shortcut-hint">Ctrl K</span>
        )}
      </div>
    </div>
  );
}

