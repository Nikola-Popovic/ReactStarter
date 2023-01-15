import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import { JsxElement } from 'typescript';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export function ProtectedRoute({ children, ...props } : ProtectedRouteProps) {
  const { user } = useAuth0();
  return <>{!user ?  
    <Navigate to="/" /> 
    : <>{children}</>
  }</>;
}