## 0.1.4

- Fixes `astro` version to \*

## 0.1.3

### Change

- Updated package version to `0.1.3`.
- Updated contact email and URL in `package.json` from `PlayForm.LTD` to
  `PlayForm.Cloud`.
- Updated dependencies:
    - `@playform/pipe` from `0.1.3` to `0.1.4`.
    - `astro` from `*` to `5.16.8`.
    - `beasties` from `0.2.0` to `0.3.5`.
    - `@playform/build` from `0.2.1` to `0.2.6`.
- Set `external: true` in `Beasties` configuration
  (`Source/Variable/Beasties.ts`).

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

- Updated email and URL in `package.json` to `Source/Open@PlayForm.Cloud` and
  `HTTPS://PlayForm.Cloud`.
- Updated dependencies:
    - `@playform/pipe` from `0.1.0` to `0.1.2`.
    - `critters` from `0.0.24` to `0.0.25`.
    - Added `deepmerge-ts` version `7.1.3`.
    - `@playform/build` from `0.1.2` to `0.2.1`.

### Add

- Added imports for `Action`, `Path`, and `Interface` in `Integration.ts`.
- Added optional `Option` parameter in `Integration.ts`.

### Removed

- Removed unnecessary imports and comments in various files.

## 0.1.0

### Change

- Updated `@playform/pipe` from `0.0.5` to `0.1.0`.
- Updated `critters` from `0.0.22` to `0.0.24`.
- Updated `@playform/build` from `0.0.10` to `0.1.2`.
- Added `provenance` field in `package.json`.

### Add

- Added `reduceInlineStyles` option in `Critters.ts`.

## 0.0.7

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

## 0.0.1

- Initial version
