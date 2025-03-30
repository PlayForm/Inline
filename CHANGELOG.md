<<<<<<< HEAD
## 0.1.2

### Change

- Updated package version to `0.1.2` and adjusted description emojis.
- Replaced `critters` dependency with `beasties@0.2.0`.
- Updated dependencies:
    - `@playform/pipe` from `0.1.2` to `0.1.3`.
    - `deepmerge-ts` from `7.1.3` to `7.1.5`.
- Migrated from `critters` to `beasties` integration:
    - Updated module references in `Integration.ts`, `Option.ts`, and
      `Logger.ts`.
    - Changed `node:url` import for `fileURLToPath`.

### Add

- New `Beasties` interface and default configuration in
  `Source/Interface/Beasties.ts` and `Source/Variable/Beasties.ts`.
- Async CSS processing with `beasties` in `Integration.ts`.

### Removed

- Deleted all `Critters`-related code:
    - Removed `Source/Interface/Critters.ts` and `Source/Variable/Critters.ts`.
    - Removed `critters` dependency and legacy configuration.

## 0.1.1

### Change
=======
## 2.2.1

#### Changed
>>>>>>> 0597a43c6a5824115d23ea591fa0d70df310101e

- Updated the version in `package.json` from `2.2.0` to `2.2.1`.
- Updated email and URL in `package.json` to use the `.LTD` domain.
- Updated dependencies in `package.json`:
    - `@playform/pipe` from `0.1.0` to `0.1.2`
    - `critters` from `0.0.2`4 to `0.0.2`5
    - Added `deepmerge-ts` version `7.1.3`
    - `@playform/build` from `0.1.2` to `0.2.1`

<<<<<<< HEAD
### Add
=======
#### Added
>>>>>>> 0597a43c6a5824115d23ea591fa0d70df310101e

- Added `DEPENDENTS.md` and `docs/` to `.npmignore`.
- Added type imports in `Source/Function/Integration.ts` for `Action`, `Path`,
  and `Interface`.
- Added type imports in `Source/Interface/Critters.ts` for `Logger`.
- Added type imports in `Source/Interface/Integration.ts` for `AstroIntegration`
  and `Option`.
- Added type imports in `Source/Interface/Option.ts` for `Option` and
  `Critters`.
- Added type imports in `Source/Variable/Critters.ts` for `Interface`.
- Added type imports in `Source/Variable/Option.ts` for `Interface`.

#### Fixed

- Modified `Integration.ts` to handle `Path` as an instance of `Map`.

#### Removed

- Removed redundant imports in various files.

## 2.2.0

### Change

- Updated `@playform/pipe` from `0.0.5` to `0.1.0`.
- Updated `critters` from `0.0.22` to `0.0.24`.
- Updated `@playform/build` from `0.0.10` to `0.1.2`.
- Added `provenance` field in `package.json`.

### Add

- Added `reduceInlineStyles` option in `Critters.ts`.

## 2.1.10

- Cleanup

## 2.1.9

- Cleanup

## 2.1.8

- Cleanup

## 2.1.7

- Cleanup

## 2.1.6

- Cleanup

## 2.1.5

- Cleanup

## 2.1.4

- Cleanup

## 2.1.3

- Cleanup

## 2.1.2

- Cleanup
- Bug fix

## 2.1.1

- Cleanup

## 2.1.0

- Refactor
- Documentation

## 2.0.1`

- Cleanup

## 2.0.1`

- Cleanup

## 2.0.9

- Cleanup

## 2.0.8

- Cleanup

## 2.0.7

- Cleanup

## 2.0.6

- Cleanup

## 2.0.5

- Cleanup

## 2.0.4

- Cleanup

## 2.0.3

- Cleanup

## 2.0.2

- Cleanup

## 2.0.1

- Restoration

## 1.1.4`

- Cleanup

## 1.1.3`

- Bug fix

## 1.1.3`

- Bug fix

## 1.1.3`

- Bug fix

## 1.1.3`

- Cleanup

## 1.1.3`

- Cleanup

## 1.1.3`

- Bug fix

## 1.1.3`

- Version with provenance

## 1.1.3`

- Cleanup

## 1.1.3`

- Switches to the files-pipe component

## 1.1.3`

- Updates files-pipeline component

## 1.1.2`

- Enhancement

## 1.1.2`

- Bug fix

## 1.1.2`

- Cleanup

## 1.1.2`

- Bug fix

## 1.1.2`

- Cleanup

## 1.1.2`

- Cleanup

## 1.1.2`

- Switches ownership

## 1.1.2`

- Cleanup

## 1.1.2`

- Bug fix

## 1.1.2`

- Cleanup

## 1.1.1`

- Bug fix

## 1.1.1`

- Updates pipeline

## 1.1.1`

- Bug fix

## 1.1.1`

- Refactor

## 1.1.1`

- Adds missing types

## 1.1.1`

- Adapt

## 1.1.1`

- Bug fix

## 1.1.1`

- Cleanup

## 1.1.1`

- Bug fix

## 1.1.1`

- Cleanup

## 1.1.9

- Bug fix

## 1.1.8

- Cleanup

## 1.1.7

- Cleanup

## 1.1.6

- Cleanup

## 1.1.5

- Cleanup

## 1.1.4

- Adds multiple paths

## 1.1.3

- Bug fix

## 1.1.2

- Switches to media preloading

## 1.1.1

- Cleanup

## 1.1.0

- Introduces filters

## 1.0.5

- Switches ownership

## 1.0.4

- Enhancement

## 1.0.3

- Cleanup

## 1.0.2

- Refactor

## 1.0.1

- Bug fix

## 1.0.0

- First stable version

## 0.0.1`

- Refactor

## 0.0.1`

- Cleanup

## 0.0.9

- Updates dependencies

## 0.0.8

- Refactor

## 0.0.7

<<<<<<< HEAD
### Change

- Changed `astro` version to `*`.

## 0.0.6

### Change

- Updated `@playform/build` from `0.0.9` to `0.0.10`.

## 0.0.5

### Change

- Updated `astro` from `4.9.1` to `4.9.2`.
- Moved `@playform/build` from `peerDependencies` to `devDependencies`.

## 0.0.4

### Change

- Updated `@playform/pipe` from `0.0.3` to `0.0.5`.
- Updated `astro` from `4.8.2` to `4.9.1`.
- Added `peerDependenciesMeta` for optional dependencies.

### Removed

- Deleted the `Merge` interface.
- Removed usage of `Merge` in `Option.ts` and `Critters.ts`.

## 0.0.3

### Change

- Updated `@playform/pipe` from `0.0.2` to `0.0.3`.
- Updated `@playform/build` from `0.0.5` to `0.0.8`.
- Updated `astro` from `4.5.16` to `4.8.2`.
- Changed URLs in `package.json` to uppercase.

### Add

- Added `astro-critters`, `astro-inline`, and `playform` dependencies.

## 0.0.2

### Change

- Added `astro-component`, `astro-integration`, and `withastro` dependencies.
- Updated `Document` field in `package.json`.
=======
- Updates package.json
- Updates README.md
- Minify

## 0.0.6

- Updates package.json
- Updates README.md
- Refactor

## 0.0.5

- Updates README.md

## 0.0.4

- Updates README.md
- Refactor

## 0.0.3

- Adds hedgehog

## 0.0.2

- Provides a CHANGELOG.md
- Adds typescript to devDependencies
>>>>>>> 0597a43c6a5824115d23ea591fa0d70df310101e

## 0.0.1

- Initial version
