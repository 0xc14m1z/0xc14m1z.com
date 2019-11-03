import { lazy } from 'react'

export const HomePage = lazy(() => import('./HomePage'))

export const AboutPage = lazy(() => import('./AboutPage'))
export const ArticlePage = lazy(() => import('./ArticlePage'))

export const NotFoundPage = lazy(() => import('./NotFoundPage'))
