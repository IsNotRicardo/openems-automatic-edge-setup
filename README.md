# OpenEMS Automatic Edge Setup

## Introduction

This code can be used to automatically set up multiple OpenEMS Edges when doing a simulation. It can also be used to
update existing Edges if the WebSocket port or API keys are changed.

## Setup

1. Clone the repository or download the source code.
2. Rename the `.env.example` file to `.env`.
3. Replace the API keys and the WebSocket URL with the ones you are using in the `.env` file. For more information about
this, see [this guide](https://docs.google.com/document/d/1jlzYWELOZlOSCAUN_QZrmKhfBdIGzFCbjZBVsHW-s-Q/edit?tab=t.0).
4. Replace the ports in the `common.ts` file with the ones you are using for the Edges.
5. Ensure that the OpenEMS Backend and Edges are running.
6. Run the command `npm run setup`. Check the terminal for potential errors.