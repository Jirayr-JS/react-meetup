import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllMeetsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" exact element={<AllMeetsPage />} />
            <Route path="/new-meetup" element={<NewMeetupPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
