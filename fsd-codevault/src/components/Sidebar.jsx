import React from 'react';
import {
  LayoutDashboard,
  Code,
  FileCode2,
  Atom,
  Server,
  Zap,
  Database,
  Layers,
  Bookmark,
  CheckCircle2,
  BookOpen
} from 'lucide-react';

export function Sidebar({
  selectedCategory,
  onSelectCategory,
  activeView,
  onSelectView,
  experiments,
  bookmarks,
  completedIds,
  revisedIds,
  isMobileOpen,
  closeMobileMenu
}) {
  const getCategoryCount = (cat) => {
    if (cat === 'All') return experiments.length;
    return experiments.filter(e => e.category === cat).length;
  };

  const navCategories = [
    { name: 'All', icon: LayoutDashboard },
    { name: 'HTML and CSS', icon: Code },
    { name: 'JavaScript', icon: FileCode2 },
    { name: 'React', icon: Atom },
    { name: 'Node.js', icon: Server },
    { name: 'Express.js', icon: Zap },
    { name: 'MongoDB', icon: Database },
    { name: 'Mongoose', icon: Layers },
  ];

  const handleNavClick = (cat) => {
    onSelectView('experiments');
    onSelectCategory(cat);
    if (closeMobileMenu) closeMobileMenu();
  };

  const handleBookmarksClick = () => {
    onSelectView('bookmarks');
    if (closeMobileMenu) closeMobileMenu();
  };

  const completedCount = completedIds.length;
  const revisedCount = revisedIds.length;
  const progressPercent = Math.round((completedCount / experiments.length) * 100);

  return (
    <aside className={`sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
      <div className="sidebar-section">
        <div className="sidebar-title">Navigation</div>
        <div
          className={`sidebar-nav-item ${activeView === 'experiments' && selectedCategory === 'All' ? 'active' : ''}`}
          onClick={() => handleNavClick('All')}
        >
          <div className="sidebar-nav-item-left">
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </div>
          <span className="badge-count">{experiments.length}</span>
        </div>

        <div
          className={`sidebar-nav-item ${activeView === 'bookmarks' ? 'active' : ''}`}
          onClick={handleBookmarksClick}
        >
          <div className="sidebar-nav-item-left">
            <Bookmark size={18} />
            <span>Bookmarks</span>
          </div>
          <span className="badge-count">{bookmarks.length}</span>
        </div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-title">Categories</div>
        {navCategories.filter(c => c.name !== 'All').map(cat => {
          const IconComponent = cat.icon;
          const isSelected = activeView === 'experiments' && selectedCategory === cat.name;
          return (
            <div
              key={cat.name}
              className={`sidebar-nav-item ${isSelected ? 'active' : ''}`}
              onClick={() => handleNavClick(cat.name)}
            >
              <div className="sidebar-nav-item-left">
                <IconComponent size={18} />
                <span>{cat.name}</span>
              </div>
              <span className="badge-count">{getCategoryCount(cat.name)}</span>
            </div>
          );
        })}
      </div>

      <div className="sidebar-section" style={{ marginTop: 'auto', paddingTop: '16px' }}>
        <div className="sidebar-title">Your Progress</div>
        <div style={{
          background: 'var(--bg-tertiary)',
          padding: '14px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '8px' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Completed</span>
            <span style={{ fontWeight: 700, color: '#34d399', fontFamily: 'var(--font-mono)' }}>
              {completedCount} / {experiments.length}
            </span>
          </div>
          <div style={{
            height: '6px',
            background: 'var(--bg-secondary)',
            borderRadius: '999px',
            overflow: 'hidden',
            marginBottom: '12px'
          }}>
            <div style={{
              height: '100%',
              width: `${progressPercent}%`,
              background: 'linear-gradient(90deg, #10b981 0%, #3b82f6 100%)',
              transition: 'width 0.3s ease'
            }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            <span>Revised: <b>{revisedCount}</b></span>
            <span>Progress: <b>{progressPercent}%</b></span>
          </div>
        </div>
      </div>
    </aside>
  );
}

