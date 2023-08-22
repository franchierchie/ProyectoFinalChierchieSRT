import { Navigate, Route, Routes } from 'react-router-dom';
import { useCheckAuth } from './hooks';

import { EcommerceRoutes } from './ecommerce/routes/EcommerceRoutes';
import { AuthRoutes } from './auth/routes/AuthRoutes';

import { CheckingAuth } from './ui';

function App() {

  const status = useCheckAuth();

  if ( status === 'checking' ) {
    return <CheckingAuth />
}

  return (
    <Routes>
      {
        ( status === 'authenticated' )
          ? <Route path="/*" element={ <EcommerceRoutes /> } />
          : <Route path="/*" element={ <AuthRoutes /> } />
      }

      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}

export default App