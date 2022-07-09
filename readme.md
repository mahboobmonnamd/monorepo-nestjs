
## Tools Required
### Globally installed
- pnpm


### Releasing changes
- Run `pnpm changeset version`. This will bump the versions of the packages previously specified with `pnpm changeset` (and any dependents of those) and update the changelog files.
- Run `pnpm install`. This will update the lockfile and rebuild packages.
- Commit the changes.
- Run `pnpm publish -r`. This command will publish all packages that have bumped versions not yet present in the registry.