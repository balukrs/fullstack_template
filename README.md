# Fullstack Template

A full-stack monorepo built with **Turborepo**, **pnpm workspaces**, React, and Node.js.

## Install

```bash
pnpm install
```

## Run

```bash
# All apps
pnpm dev

# Specific app
pnpm --filter @template/web dev
pnpm --filter @template/api dev
```

## Build

```bash
pnpm build
```

## Add a dependency

```bash
# To a specific workspace
pnpm add <package> --filter @template/api
pnpm add <package> --filter @template/web

# To root (all workspaces)
pnpm add -D <package> -w
```

## Add a new package

1. Create a directory in `apps/` or `packages/`
2. Add a `package.json` with name `@template/<name>`
3. Run `pnpm install`
