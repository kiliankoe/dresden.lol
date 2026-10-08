# dresden.lol

Landing page for [dresden.lol](https://dresden.lol), a community collection of small tools, maps and data projects about Dresden. Anyone is welcome to add theirs.

## Adding a project

Add an entry to [`src/projects.ts`](src/projects.ts) and open a pull request.

## Development

The nix flake provides bun; with direnv it loads automatically.

```bash
bun install
bun run dev
bun run lint
bun run format
bun run build
```
