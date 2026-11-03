import React from 'react';
import { Code2, Moon, Sun, Bookmark, Menu, X } from 'lucide-react';
import { SearchBar } from './SearchBar';

export function Navbar({
  theme,
  toggleTheme,
  searchQuery,
  setSearchQuery,
  onNavigateHome,
  onNavigateBookmarks,
  bookmarksCount,
  isMobileMenuOpen,
  toggleMobileMenu,
  activeView
}) {
  return (
    <header className="navbar">
      <div className="nav-left">
        <button
          className="btn-icon mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          type="button"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="nav-brand" onClick={onNavigateHome}>
          <div className="brand-icon-wrapper">
            <Code2 size={24} />
          </div>
          <div className="brand-text">
            <h1>Vault</h1>
            <span> v ()</span>
          </div>
        </div>
      </div>

      <div className="nav-center">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      <div className="nav-right">
        <button
          className={`btn-secondary ${activeView === 'bookmarks' ? 'active' : ''}`}
          onClick={onNavigateBookmarks}
          title="View Saved Bookmarks"
          type="button"
          style={{ gap: '6px' }}
        >
          <Bookmark size={16} fill={bookmarksCount > 0 ? "currentColor" : "none"} />
          <span className="hidden sm:inline">Bookmarks</span>
          {bookmarksCount > 0 && <span className="badge-count">{bookmarksCount}</span>}
        </button>

        <button
          className="btn-icon"
          onClick={toggleTheme}
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          type="button"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
}

