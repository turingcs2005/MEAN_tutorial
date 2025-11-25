# Key npm commands

---
<details>
    <summary>1. Installing/uninstalling packages</summary>

Install dependencies listed in your project's package.json into the local node_modules/ folder; creating or updating the package-lock.json file as needed.

<code><pre class="command-line">npm i</pre></code>

Install packages into the local node_modules/ folder and update the package.json file and the package-lock.json file.
<code><pre class="command-line">npm i PACKAGE1 PACKAGE2 ...</pre></code>

Install packages as development dependencies into the local node_modules/ folder and update the package.json file and the package-lock.json file.
<code><pre class="command-line">npm i -D PACKAGE1 PACKAGE2 ...</pre></code>

Uninstall packages from your local node_modules/ folder an update the package.json file and the package-lock.json file.
<code><pre class="command-line">npm uninstall PACKAGE1 PACKAGE2 ...</pre></code>

The same commands work for the global node.js environment if you add an option -g to them.
<code><pre class="command-line">npm i -g PACKAGE1 PACKAGE2 ...
npm uninstall -g PACKAGE1 PACKAGE2 ...</pre></code>
</details>

<details>
    <summary>2. Listing installed packages</summary>
List all packages installed in the local node_modules/ folders and nested node_modules/ folders (A dependency package may have its own dependencies, and hence nested node_modules/ folder).

<code><pre class="command-line">npm list</pre></code>

List a specific package installed in the local node_modules/ folders and nested node_modules/ folders. You may precede the package name with a namespace.
- The same package may appear multiple times in npm list if different parent packages depend on different versions of it.
- If a package name is followed by “deduped,” it means the package is installed in a parent node_modules/ folder and shared by multiple parent packages.
<code><pre class="command-line">npm list express
npm list @angular/material</pre></code>

For global node.js environment:
<code><pre class="command-line">npm list -g @angular/cli
npm list -g typescript</pre></code>
</details>

<details>
    <summary>3. Updating packages</summary>
List top-level outdated packages: current version, wanted version (within semantic version range), and latest version.

<code><pre class="command-line">npm outdated</pre></code>

Update packages and nested packages in nested node_modules/ folders within the version ranges specified in the package.json files; update package-lock.json files accordingly. This is a conservative update.
<code><pre class="command-line">npm update</pre></code>

The two commands also work for the global node.js environment.
<code><pre class="command-line">npm -g outdated
npm -g update</pre></code>

Update the top-level package.json file with the latest package versions without modifying node_modules/ directly. This is aggressive and may introduce conflicts.
<code><pre class="command-line">ncu -u</pre></code>

After package.json has been updated, you can either:
1. Run npm install and then manually adjust package.json (for example, downgrading packages) based on any error messages, or
2. Ignore version incompatibilities and install the latest versions directly.
Even if some packages introduce breaking changes, your app may still work correctly. This is because the affected APIs (such as exported functions, classes, or objects) might not actually be used in your project or by the packages that consume them.
<code><pre class="command-line">rm -rf node_modules package-lock.json
npm cache clean --force
npm i
npm i --legacy-peer-deps</pre></code>
</details>

<details>
    <summary>4. Audit packages and fix vulnerabilities</summary>
Automatically updates dependencies to non-breaking patched versions (if possible).

<code><pre class="command-line">npm audit fix</pre></code>

Update to newer major versions even if they may introduce breaking changes.
<code><pre class="command-line">npm audit fix --force</pre></code>

</details>