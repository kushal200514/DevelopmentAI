import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { ExperimentDetails } from './pages/ExperimentDetails';
import { Bookmarks } from './pages/Bookmarks';
import { experiments } from './data/experiments';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Check } from 'lucide-react';

export function App() {
  const [theme, setTheme] = useLocalStorage('fsd_vault_theme', 'dark');
  const [bookmarks, setBookmarks] = useLocalStorage('fsd_vault_bookmarks', []);
  const [statuses, setStatuses] = useLocalStorage('fsd_vault_statuses', {});
  const [revised, setRevised] = useLocalStorage('fsd_vault_revised', {});

  const [activeView, setActiveView] = useState('dashboard'); // 'dashboard' | 'detail' | 'bookmarks'
  const [selectedExpId, setSelectedExpId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Apply data-theme to HTML root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Handle URL hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/exp/')) {
        const id = hash.replace('#/exp/', '');
        const found = experiments.find(e => e.id === id);
        if (found) {
          setSelectedExpId(id);
          setActiveView('detail');
          window.scrollTo(0, 0);
          return;
        }
      }
      if (hash === '#/bookmarks') {
        setActiveView('bookmarks');
        setSelectedExpId(null);
        window.scrollTo(0, 0);
        return;
      }
      if (hash.startsWith('#/category/')) {
        const cat = decodeURIComponent(hash.replace('#/category/', ''));
        setSelectedCategory(cat);
        setActiveView('dashboard');
        setSelectedExpId(null);
        window.scrollTo(0, 0);
        return;
      }
      setActiveView('dashboard');
      setSelectedExpId(null);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleSelectExperiment = (id) => {
    setSelectedExpId(id);
    setActiveView('detail');
    window.location.hash = `#/exp/${id}`;
    window.scrollTo(0, 0);
  };

  const handleBackToDashboard = () => {
    setActiveView('dashboard');
    setSelectedExpId(null);
    window.location.hash = `#/`;
    window.scrollTo(0, 0);
  };

  const handleNavigateBookmarks = () => {
    setActiveView('bookmarks');
    setSelectedExpId(null);
    window.location.hash = `#/bookmarks`;
    window.scrollTo(0, 0);
  };

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setActiveView('dashboard');
    setSelectedExpId(null);
    if (cat === 'All') {
      window.location.hash = `#/`;
    } else {
      window.location.hash = `#/category/${encodeURIComponent(cat)}`;
    }
  };

  const toggleBookmark = (id) => {
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter(bId => bId !== id));
      showToast('Removed from Bookmarks');
    } else {
      setBookmarks([...bookmarks, id]);
      showToast('Saved to Bookmarks!');
    }
  };

  const handleChangeStatus = (id, newStatus) => {
    setStatuses({
      ...statuses,
      [id]: newStatus
    });
    if (newStatus === 'completed') {
      showToast(`Marked Lab as Completed!`);
    }
  };

  const toggleRevised = (id) => {
    const nextVal = !revised[id];
    setRevised({
      ...revised,
      [id]: nextVal
    });
    if (nextVal) {
      showToast(`Marked Lab as Revised for Exams!`);
    }
  };

  const currentExperiment = experiments.find(e => e.id === selectedExpId);
  const completedIds = Object.keys(statuses).filter(id => statuses[id] === 'completed');
  const revisedIds = Object.keys(revised).filter(id => revised[id]);

  return (
    <div className="app-container">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onNavigateHome={handleBackToDashboard}
        onNavigateBookmarks={handleNavigateBookmarks}
        bookmarksCount={bookmarks.length}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        activeView={activeView}
      />

      <div className="main-layout">
        <Sidebar
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          activeView={activeView}
          onSelectView={(v) => {
            if (v === 'bookmarks') handleNavigateBookmarks();
            else handleBackToDashboard();
          }}
          experiments={experiments}
          bookmarks={bookmarks}
          completedIds={completedIds}
          revisedIds={revisedIds}
          isMobileOpen={isMobileMenuOpen}
          closeMobileMenu={() => setIsMobileMenuOpen(false)}
        />

        <main className="content-area">
          {activeView === 'dashboard' && (
            <Dashboard
              experiments={experiments}
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              searchQuery={searchQuery}
              onSelectExperiment={handleSelectExperiment}
              bookmarks={bookmarks}
              onToggleBookmark={toggleBookmark}
              statuses={statuses}
              onChangeStatus={handleChangeStatus}
              revised={revised}
              onToggleRevised={toggleRevised}
            />
          )}

          {activeView === 'detail' && currentExperiment && (
            <ExperimentDetails
              experiment={currentExperiment}
              onBack={handleBackToDashboard}
              onNavigateExperiment={handleSelectExperiment}
              allExperiments={experiments}
              isBookmarked={bookmarks.includes(currentExperiment.id)}
              onToggleBookmark={toggleBookmark}
              status={statuses[currentExperiment.id] || 'not-started'}
              onChangeStatus={handleChangeStatus}
              isRevised={!!revised[currentExperiment.id]}
              onToggleRevised={toggleRevised}
              onShowToast={showToast}
            />
          )}

          {activeView === 'bookmarks' && (
            <Bookmarks
              experiments={experiments}
              bookmarks={bookmarks}
              onToggleBookmark={toggleBookmark}
              onSelectExperiment={handleSelectExperiment}
              statuses={statuses}
              onChangeStatus={handleChangeStatus}
              revised={revised}
              onToggleRevised={toggleRevised}
              onBackToDashboard={handleBackToDashboard}
            />
          )}
        </main>
      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="toast-container">
          <div className="toast">
            <Check size={16} style={{ color: '#34d399' }} />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
