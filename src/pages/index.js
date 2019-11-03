import { lazy } from 'react'

export const HomePage = lazy(() => import('./HomePage'))

export const ResumePage = lazy(() => import('./ResumePage'))
export const ArticlePage = lazy(() => import('./ArticlePage'))

export const NotFoundPage = lazy(() => import('./NotFoundPage'))
