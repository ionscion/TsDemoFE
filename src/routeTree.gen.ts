/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UsersImport } from './routes/users'
import { Route as CounterImport } from './routes/counter'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as UsersIndexImport } from './routes/users.index'
import { Route as UsersUserIdImport } from './routes/users.$userId'

// Create/Update Routes

const UsersRoute = UsersImport.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => rootRoute,
} as any)

const CounterRoute = CounterImport.update({
  id: '/counter',
  path: '/counter',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const UsersIndexRoute = UsersIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => UsersRoute,
} as any)

const UsersUserIdRoute = UsersUserIdImport.update({
  id: '/$userId',
  path: '/$userId',
  getParentRoute: () => UsersRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/counter': {
      id: '/counter'
      path: '/counter'
      fullPath: '/counter'
      preLoaderRoute: typeof CounterImport
      parentRoute: typeof rootRoute
    }
    '/users': {
      id: '/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersImport
      parentRoute: typeof rootRoute
    }
    '/users/$userId': {
      id: '/users/$userId'
      path: '/$userId'
      fullPath: '/users/$userId'
      preLoaderRoute: typeof UsersUserIdImport
      parentRoute: typeof UsersImport
    }
    '/users/': {
      id: '/users/'
      path: '/'
      fullPath: '/users/'
      preLoaderRoute: typeof UsersIndexImport
      parentRoute: typeof UsersImport
    }
  }
}

// Create and export the route tree

interface UsersRouteChildren {
  UsersUserIdRoute: typeof UsersUserIdRoute
  UsersIndexRoute: typeof UsersIndexRoute
}

const UsersRouteChildren: UsersRouteChildren = {
  UsersUserIdRoute: UsersUserIdRoute,
  UsersIndexRoute: UsersIndexRoute,
}

const UsersRouteWithChildren = UsersRoute._addFileChildren(UsersRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/counter': typeof CounterRoute
  '/users': typeof UsersRouteWithChildren
  '/users/$userId': typeof UsersUserIdRoute
  '/users/': typeof UsersIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/counter': typeof CounterRoute
  '/users/$userId': typeof UsersUserIdRoute
  '/users': typeof UsersIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/counter': typeof CounterRoute
  '/users': typeof UsersRouteWithChildren
  '/users/$userId': typeof UsersUserIdRoute
  '/users/': typeof UsersIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/counter'
    | '/users'
    | '/users/$userId'
    | '/users/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/counter' | '/users/$userId' | '/users'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/counter'
    | '/users'
    | '/users/$userId'
    | '/users/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  CounterRoute: typeof CounterRoute
  UsersRoute: typeof UsersRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  CounterRoute: CounterRoute,
  UsersRoute: UsersRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/counter",
        "/users"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/counter": {
      "filePath": "counter.tsx"
    },
    "/users": {
      "filePath": "users.tsx",
      "children": [
        "/users/$userId",
        "/users/"
      ]
    },
    "/users/$userId": {
      "filePath": "users.$userId.tsx",
      "parent": "/users"
    },
    "/users/": {
      "filePath": "users.index.tsx",
      "parent": "/users"
    }
  }
}
ROUTE_MANIFEST_END */
