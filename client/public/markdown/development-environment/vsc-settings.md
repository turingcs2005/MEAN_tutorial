Use <kbd><i>Ctrl</i></kbd> + <kbd><i>Shift</i></kbd> + <kbd><i>p</i></kbd> and select 'Preferences: Open User Settings (JSON)'. Paste code below. 

```json
{
    "workbench.startupEditor": "none",
    "editor.minimap.enabled": false,
    "editor.fontFamily": "'Fira Code', Consolas, 'Courier New', monospace",
    "editor.fontLigatures": true,
    // The settings below prevent hot-key conflicts between Vim and VS Code. Remove them if you do not use Vim.
    "vim.handleKeys": {
        "<C-p>": false,     // Quick file search
        "<C-f>": false,     // Find in file
        "<C-b>": false,     // Toggle sidebar
        "<C-d>": false,     // Multi-cursor select
        "<C-z>": false      // Undo
    },
    "terminal.integrated.inheritEnv": false,
    // If your app's business logics are straightforward, you can hide files for unit test.
    "files.exclude": {
        "**/*.spec.ts": true
    },
    "git.enableSmartCommit": true,
    // Auto start MCP （Model Context Protocol) server, which enables natural-language interaction with your MongoDB data via AI plugins such as GitHub Copilot
    "mdb.mcp.server": "autoStartEnabled",
    "terminal.integrated.fontFamily": "FiraCode Nerd Font",
}
```