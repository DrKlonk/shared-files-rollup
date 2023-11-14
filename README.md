# shared-files-rollup

This repository shows a problem when using shared files outside a package using rollup.

When the shared folder is _outside_ the server folder, as in the master branch, we get a Rollup error: Could not resolve "../shared/constants" from "index.ts".

When the shared folder is _inside_ the server folder, as in the feature/shared-folder-inside-server-folder branch, everything builds and starts correctly.

This is a problem when running a monorepo with shared content, for instance when you have a server and client package relying on shared files.

How can we fix this?
