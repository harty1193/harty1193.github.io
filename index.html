<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SysOps Notes — PowerShell & Windows Tooling</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Sora:wght@300;400;600&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0d0f14;
    --bg2: #13161e;
    --bg3: #1a1e28;
    --surface: #1f2330;
    --border: #2a2f3e;
    --accent: #4e9bff;
    --accent2: #7dd3fc;
    --green: #34d399;
    --amber: #fbbf24;
    --red: #f87171;
    --purple: #a78bfa;
    --text: #e2e8f0;
    --muted: #8892a4;
    --faint: #4a5568;
    --font-mono: 'JetBrains Mono', monospace;
    --font-sans: 'Sora', sans-serif;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-sans);
    font-weight: 300;
    line-height: 1.75;
    min-height: 100vh;
  }

  /* ── NAV ── */
  nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(13,15,20,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    padding: 0 2rem;
    display: flex; align-items: center; justify-content: space-between;
    height: 56px;
  }

  .nav-brand {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    color: var(--accent);
    text-decoration: none;
    letter-spacing: 0.05em;
  }

  .nav-brand span { color: var(--muted); }

  .nav-links { display: flex; gap: 1.5rem; list-style: none; }
  .nav-links a {
    font-size: 0.78rem;
    color: var(--muted);
    text-decoration: none;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--text); }

  /* ── HERO ── */
  .hero {
    padding: 5rem 2rem 3rem;
    max-width: 860px;
    margin: 0 auto;
    border-bottom: 1px solid var(--border);
  }

  .hero-eyebrow {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--accent);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .hero h1 {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-bottom: 1rem;
    color: #fff;
  }

  .hero p {
    font-size: 1rem;
    color: var(--muted);
    max-width: 600px;
  }

  /* ── LAYOUT ── */
  .page-wrapper {
    max-width: 860px;
    margin: 0 auto;
    padding: 3rem 2rem 6rem;
    display: grid;
    grid-template-columns: 1fr 220px;
    gap: 3rem;
    align-items: start;
  }

  @media (max-width: 700px) {
    .page-wrapper { grid-template-columns: 1fr; }
    .sidebar { display: none; }
  }

  /* ── ARTICLE ── */
  article { min-width: 0; }

  .post-meta {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .tag {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    padding: 3px 10px;
    border-radius: 4px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-weight: 500;
  }

  .tag-windows { background: #1e3a5f; color: var(--accent2); }
  .tag-security { background: #1e2d1e; color: var(--green); }
  .tag-powershell { background: #2d1e3a; color: var(--purple); }

  .post-date {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--faint);
    margin-left: auto;
  }

  article h2 {
    font-size: 1.6rem;
    font-weight: 600;
    color: #fff;
    letter-spacing: -0.015em;
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  article h3 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--accent2);
    margin: 2.5rem 0 0.75rem;
    letter-spacing: 0.02em;
    font-family: var(--font-mono);
  }

  article p {
    font-size: 0.95rem;
    color: #b0bac8;
    margin-bottom: 1.25rem;
    line-height: 1.8;
  }

  article ul {
    margin: 0 0 1.5rem 1.25rem;
    color: #b0bac8;
    font-size: 0.93rem;
  }

  article ul li { margin-bottom: 0.4rem; }

  article a { color: var(--accent); text-decoration: none; }
  article a:hover { text-decoration: underline; }

  /* ── CALLOUT ── */
  .callout {
    border-left: 3px solid;
    padding: 0.9rem 1.1rem;
    margin: 1.5rem 0;
    border-radius: 0 6px 6px 0;
    font-size: 0.88rem;
  }

  .callout.info {
    border-color: var(--accent);
    background: rgba(78,155,255,0.07);
    color: var(--accent2);
  }

  .callout.warn {
    border-color: var(--amber);
    background: rgba(251,191,36,0.07);
    color: #fde68a;
  }

  .callout.tip {
    border-color: var(--green);
    background: rgba(52,211,153,0.07);
    color: #6ee7b7;
  }

  .callout strong {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.3rem;
    opacity: 0.8;
  }

  /* ── METHOD CARDS ── */
  .methods {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    margin: 1.5rem 0 2.5rem;
  }

  .method {
    background: var(--surface);
    padding: 1.25rem 1.5rem;
    transition: background 0.15s;
  }

  .method:hover { background: #242840; }

  .method-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
  }

  .method-num {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--accent);
    background: rgba(78,155,255,0.12);
    border-radius: 4px;
    padding: 2px 8px;
    font-weight: 700;
  }

  .method h4 {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text);
    letter-spacing: -0.01em;
  }

  .method p {
    font-size: 0.85rem;
    color: var(--muted);
    margin: 0;
    line-height: 1.6;
  }

  /* ── CODE BLOCK ── */
  .code-wrap {
    background: #0a0c12;
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    margin: 1.5rem 0;
    font-family: var(--font-mono);
  }

  .code-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 1rem;
    background: var(--bg3);
    border-bottom: 1px solid var(--border);
  }

  .code-lang {
    font-size: 0.68rem;
    color: var(--purple);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 500;
  }

  .copy-btn {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--muted);
    background: none;
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 2px 10px;
    cursor: pointer;
    transition: all 0.15s;
    letter-spacing: 0.05em;
  }

  .copy-btn:hover {
    color: var(--text);
    border-color: var(--faint);
    background: var(--border);
  }

  .copy-btn.copied {
    color: var(--green);
    border-color: var(--green);
  }

  .code-body {
    padding: 1.25rem 1.25rem;
    overflow-x: auto;
    font-size: 0.82rem;
    line-height: 1.7;
  }

  /* PowerShell syntax coloring */
  .ps-comment { color: #4e6a4a; font-style: italic; }
  .ps-kw { color: #a78bfa; font-weight: 500; }
  .ps-cmd { color: #60a5fa; }
  .ps-param { color: var(--amber); }
  .ps-str { color: #34d399; }
  .ps-var { color: #f9a8d4; }
  .ps-num { color: #fb923c; }

  /* Script placeholder */
  .script-placeholder {
    border: 2px dashed var(--border);
    border-radius: 8px;
    padding: 2.5rem;
    text-align: center;
    margin: 1.5rem 0;
    background: rgba(30,35,50,0.4);
  }

  .script-placeholder p {
    color: var(--faint);
    font-family: var(--font-mono);
    font-size: 0.8rem;
    margin: 0;
  }

  .script-placeholder .ph-icon {
    font-size: 2rem;
    margin-bottom: 0.75rem;
    opacity: 0.3;
  }

  .ph-btn {
    margin-top: 1rem;
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--accent);
    border: 1px solid rgba(78,155,255,0.3);
    border-radius: 4px;
    padding: 5px 14px;
    cursor: pointer;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    background: rgba(78,155,255,0.06);
    transition: all 0.2s;
  }

  .ph-btn:hover { background: rgba(78,155,255,0.14); border-color: var(--accent); }

  /* ── DIVIDER ── */
  .divider {
    border: none;
    border-top: 1px solid var(--border);
    margin: 2.5rem 0;
  }

  /* ── SIDEBAR ── */
  .sidebar { position: sticky; top: 72px; }

  .sidebar-section {
    margin-bottom: 2rem;
  }

  .sidebar-label {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--faint);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }

  .toc { list-style: none; }
  .toc li { margin-bottom: 0.4rem; }
  .toc a {
    font-size: 0.8rem;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.15s;
    line-height: 1.5;
    display: block;
  }
  .toc a:hover { color: var(--accent); }
  .toc a.active { color: var(--accent); }

  .related-post {
    display: block;
    padding: 0.7rem;
    border: 1px solid var(--border);
    border-radius: 6px;
    margin-bottom: 0.5rem;
    text-decoration: none;
    transition: all 0.15s;
    background: var(--bg2);
  }

  .related-post:hover {
    border-color: var(--accent);
    background: var(--bg3);
  }

  .related-post .rp-tag {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    color: var(--accent);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }

  .related-post .rp-title {
    font-size: 0.78rem;
    color: var(--text);
    line-height: 1.4;
  }

  /* ── FOOTER ── */
  footer {
    border-top: 1px solid var(--border);
    padding: 2rem;
    text-align: center;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--faint);
  }

  footer a { color: var(--muted); text-decoration: none; }
  footer a:hover { color: var(--accent); }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <a class="nav-brand" href="#">&gt;_ <span>sysops</span>.notes</a>
  <ul class="nav-links">
    <li><a href="#">Blog</a></li>
    <li><a href="#">Scripts</a></li>
    <li><a href="#">About</a></li>
    <li><a href="https://github.com/" target="_blank">GitHub ↗</a></li>
  </ul>
</nav>

<!-- HERO -->
<header class="hero">
  <p class="hero-eyebrow">// sysops.notes — practical windows administration</p>
  <h1>PowerShell scripts &amp; Windows<br>hardening guides</h1>
  <p>No-fluff documentation on endpoint management, BitLocker, Entra ID, and automation for sysadmins.</p>
</header>

<!-- MAIN -->
<div class="page-wrapper">

  <!-- ARTICLE -->
  <article>

    <!-- POST META -->
    <div class="post-meta">
      <span class="tag tag-windows">Windows</span>
      <span class="tag tag-security">Security</span>
      <span class="tag tag-powershell">PowerShell</span>
      <span class="post-date">2025-05-20</span>
    </div>

    <h2 id="top">Backing up BitLocker recovery keys for USB drives to Entra ID, Active Directory, or a Microsoft Account</h2>

    <p>
      BitLocker can encrypt removable drives (USB sticks, external SSDs) via <strong>BitLocker To Go</strong>.
      By default the recovery key is only saved locally — if the user loses their password and you never
      backed up the key, the data is gone for good. This post covers three escrow destinations and shows
      a PowerShell script you can adapt for each.
    </p>

    <div class="callout warn">
      <strong>⚠ Important</strong>
      Recovery key escrow for <em>removable</em> drives behaves differently from OS drives.
      Entra ID and AD escrow require special handling. Read each section before deploying.
    </div>

    <!-- SECTION 1 -->
    <h3 id="overview">// 01 — How BitLocker key backup works</h3>

    <p>
      BitLocker stores a 48-digit numerical recovery key (the <em>recovery password</em>) per volume.
      Escrow is the process of uploading that key to a managed store before you need it.
      Three stores are relevant here:
    </p>

    <div class="methods">
      <div class="method">
        <div class="method-header">
          <span class="method-num">01</span>
          <h4>Microsoft Entra ID (Azure AD)</h4>
        </div>
        <p>For Entra-joined or hybrid-joined devices. Keys land in the device object in
           Entra and can be retrieved by admins or users via <a href="https://myaccount.microsoft.com" target="_blank">myaccount.microsoft.com</a>.
           Requires the <code>BackupToAAD-BitLockerKeyProtector</code> cmdlet.</p>
      </div>
      <div class="method">
        <div class="method-header">
          <span class="method-num">02</span>
          <h4>Active Directory (on-prem)</h4>
        </div>
        <p>For domain-joined devices. Keys are written to the <code>msFVE-RecoveryInformation</code>
           child object on the computer account. Requires the <code>Backup-BitLockerKeyProtector</code>
           cmdlet and the AD schema extended for BitLocker (Server 2008 R2+).</p>
      </div>
      <div class="method">
        <div class="method-header">
          <span class="method-num">03</span>
          <h4>Microsoft Account (MSA)</h4>
        </div>
        <p>For personal / consumer devices. Key is uploaded to
           <a href="https://account.microsoft.com/devices/recoverykey" target="_blank">account.microsoft.com/devices/recoverykey</a>.
           This happens automatically when the user signs in with an MSA, but can be triggered
           via <code>BackupToAAD-BitLockerKeyProtector</code> on MSA-connected devices.</p>
      </div>
    </div>

    <!-- SECTION 2 -->
    <h3 id="entra">// 02 — Backup to Entra ID</h3>

    <p>
      The <code>BackupToAAD-BitLockerKeyProtector</code> cmdlet, available in Windows 10 1703+,
      uploads a recovery password protector to the device's Entra record.
      The device must already be Entra-joined or hybrid-joined.
    </p>

    <div class="callout info">
      <strong>ℹ Note — removable drives</strong>
      Entra key escrow was designed for OS volumes. Removable drives are associated with the <em>computer</em>
      account that performed the backup, not the drive itself. Keys will appear under that computer object in Entra.
    </div>

    <div class="code-wrap" id="code-entra">
      <div class="code-header">
        <span class="code-lang">PowerShell — Entra ID backup</span>
        <button class="copy-btn" onclick="copyCode('code-entra', this)">Copy</button>
      </div>
      <pre class="code-body"><span class="ps-comment">#Requires -RunAsAdministrator</span>
<span class="ps-comment"># ── Backup BitLocker recovery key for a USB drive to Entra ID ──</span>

<span class="ps-kw">param</span>(
    [<span class="ps-cmd">Parameter</span>(<span class="ps-param">Mandatory</span>)]
    [<span class="ps-cmd">string</span>] <span class="ps-var">$DriveLetter</span>   <span class="ps-comment"># e.g. "E"</span>
)

<span class="ps-kw">Set-StrictMode</span> <span class="ps-param">-Version</span> Latest
<span class="ps-var">$ErrorActionPreference</span> = <span class="ps-str">'Stop'</span>

<span class="ps-comment"># Normalise drive letter</span>
<span class="ps-var">$vol</span> = <span class="ps-var">$DriveLetter</span>.TrimEnd(<span class="ps-str">':'</span>) + <span class="ps-str">':'</span>

<span class="ps-comment"># Confirm BitLocker is on and get the recovery password protector</span>
<span class="ps-var">$bl</span> = <span class="ps-cmd">Get-BitLockerVolume</span> <span class="ps-param">-MountPoint</span> <span class="ps-var">$vol</span>

<span class="ps-kw">if</span> (<span class="ps-var">$bl</span>.ProtectionStatus <span class="ps-kw">-ne</span> <span class="ps-str">'On'</span>) {
    <span class="ps-cmd">Write-Error</span> <span class="ps-str">"BitLocker is not enabled on $vol"</span>
}

<span class="ps-var">$protector</span> = <span class="ps-var">$bl</span>.KeyProtector |
    <span class="ps-cmd">Where-Object</span> { <span class="ps-var">$_</span>.KeyProtectorType <span class="ps-kw">-eq</span> <span class="ps-str">'RecoveryPassword'</span> }

<span class="ps-kw">if</span> (<span class="ps-kw">-not</span> <span class="ps-var">$protector</span>) {
    <span class="ps-cmd">Write-Warning</span> <span class="ps-str">"No recovery password protector found — adding one..."</span>
    <span class="ps-cmd">Add-BitLockerKeyProtector</span> <span class="ps-param">-MountPoint</span> <span class="ps-var">$vol</span> <span class="ps-param">-RecoveryPasswordProtector</span> | <span class="ps-cmd">Out-Null</span>
    <span class="ps-var">$protector</span> = (<span class="ps-cmd">Get-BitLockerVolume</span> <span class="ps-var">$vol</span>).KeyProtector |
        <span class="ps-cmd">Where-Object</span> { <span class="ps-var">$_</span>.KeyProtectorType <span class="ps-kw">-eq</span> <span class="ps-str">'RecoveryPassword'</span> }
}

<span class="ps-comment"># Upload key to Entra ID (Azure AD)</span>
<span class="ps-cmd">BackupToAAD-BitLockerKeyProtector</span> <span class="ps-param">-MountPoint</span> <span class="ps-var">$vol</span> `
    <span class="ps-param">-KeyProtectorId</span> <span class="ps-var">$protector</span>.KeyProtectorId

<span class="ps-cmd">Write-Host</span> <span class="ps-str">"✓ Recovery key for $vol backed up to Entra ID."</span> <span class="ps-param">-ForegroundColor</span> Green
<span class="ps-cmd">Write-Host</span> <span class="ps-str">"  Key ID : $($protector.KeyProtectorId)"</span>
<span class="ps-cmd">Write-Host</span> <span class="ps-str">"  Verify : https://endpoint.microsoft.com → Devices → $env:COMPUTERNAME → Recovery keys"</span></pre>
    </div>

    <!-- SECTION 3 -->
    <h3 id="ad">// 03 — Backup to Active Directory</h3>

    <p>
      For domain-joined machines the <code>Backup-BitLockerKeyProtector</code> cmdlet writes the key
      to the AD computer object. Group Policy can also enforce this automatically
      (<em>Computer Config → Windows Settings → Security Settings → BitLocker Drive Encryption →
      Removable Data Drives → Choose how BitLocker-protected removable drives can be recovered</em>).
    </p>

    <div class="callout tip">
      <strong>✓ Tip</strong>
      Enable <em>"Do not enable BitLocker until recovery information is stored to AD DS"</em>
      in Group Policy to prevent encryption starting before the key is safely escrowed.
    </div>

    <div class="code-wrap" id="code-ad">
      <div class="code-header">
        <span class="code-lang">PowerShell — Active Directory backup</span>
        <button class="copy-btn" onclick="copyCode('code-ad', this)">Copy</button>
      </div>
      <pre class="code-body"><span class="ps-comment">#Requires -RunAsAdministrator</span>
<span class="ps-comment"># ── Backup BitLocker recovery key for a USB drive to AD ──</span>

<span class="ps-kw">param</span>(
    [<span class="ps-cmd">Parameter</span>(<span class="ps-param">Mandatory</span>)]
    [<span class="ps-cmd">string</span>] <span class="ps-var">$DriveLetter</span>
)

<span class="ps-var">$ErrorActionPreference</span> = <span class="ps-str">'Stop'</span>
<span class="ps-var">$vol</span> = <span class="ps-var">$DriveLetter</span>.TrimEnd(<span class="ps-str">':'</span>) + <span class="ps-str">':'</span>

<span class="ps-var">$bl</span>         = <span class="ps-cmd">Get-BitLockerVolume</span> <span class="ps-param">-MountPoint</span> <span class="ps-var">$vol</span>
<span class="ps-var">$protector</span>  = <span class="ps-var">$bl</span>.KeyProtector |
                  <span class="ps-cmd">Where-Object</span> { <span class="ps-var">$_</span>.KeyProtectorType <span class="ps-kw">-eq</span> <span class="ps-str">'RecoveryPassword'</span> }

<span class="ps-kw">if</span> (<span class="ps-kw">-not</span> <span class="ps-var">$protector</span>) {
    <span class="ps-cmd">Add-BitLockerKeyProtector</span> <span class="ps-param">-MountPoint</span> <span class="ps-var">$vol</span> <span class="ps-param">-RecoveryPasswordProtector</span> | <span class="ps-cmd">Out-Null</span>
    <span class="ps-var">$protector</span> = (<span class="ps-cmd">Get-BitLockerVolume</span> <span class="ps-var">$vol</span>).KeyProtector |
                    <span class="ps-cmd">Where-Object</span> { <span class="ps-var">$_</span>.KeyProtectorType <span class="ps-kw">-eq</span> <span class="ps-str">'RecoveryPassword'</span> }
}

<span class="ps-comment"># Retrieve the AD computer object's distinguishedName</span>
<span class="ps-var">$dn</span> = (<span class="ps-cmd">Get-ADComputer</span> <span class="ps-var">$env:COMPUTERNAME</span>).DistinguishedName

<span class="ps-cmd">Backup-BitLockerKeyProtector</span> <span class="ps-param">-MountPoint</span> <span class="ps-var">$vol</span> `
    <span class="ps-param">-KeyProtectorId</span> <span class="ps-var">$protector</span>.KeyProtectorId

<span class="ps-cmd">Write-Host</span> <span class="ps-str">"✓ Recovery key backed up to AD for computer: $dn"</span> <span class="ps-param">-ForegroundColor</span> Green
<span class="ps-cmd">Write-Host</span> <span class="ps-str">"  Verify in ADUC: $dn → BitLocker Recovery → msFVE-RecoveryInformation"</span></pre>
    </div>

    <!-- SECTION 4 -->
    <h3 id="msa">// 04 — Backup to Microsoft Account (MSA)</h3>

    <p>
      On personal devices signed into a Microsoft Account, Windows will automatically escrow the key
      when BitLocker is enabled through the Settings UI. To trigger this programmatically on an
      MSA-connected device you can use the same <code>BackupToAAD-BitLockerKeyProtector</code> cmdlet
      — Windows routes the request to the MSA endpoint instead of Entra when no AAD join is detected.
    </p>

    <div class="callout info">
      <strong>ℹ Note</strong>
      MSA key backup can only be initiated by the signed-in user account. Running this from an
      elevated local admin context that is <em>not</em> the MSA may fail silently.
      Run from the user's own elevated session.
    </div>

    <div class="code-wrap" id="code-msa">
      <div class="code-header">
        <span class="code-lang">PowerShell — Microsoft Account backup</span>
        <button class="copy-btn" onclick="copyCode('code-msa', this)">Copy</button>
      </div>
      <pre class="code-body"><span class="ps-comment">#Requires -RunAsAdministrator</span>
<span class="ps-comment"># ── Backup BitLocker recovery key for a USB drive to MSA ──</span>
<span class="ps-comment"># Run as the signed-in MSA user (elevated). Not suitable for SYSTEM/SCCM context.</span>

<span class="ps-kw">param</span>(
    [<span class="ps-cmd">Parameter</span>(<span class="ps-param">Mandatory</span>)]
    [<span class="ps-cmd">string</span>] <span class="ps-var">$DriveLetter</span>
)

<span class="ps-var">$ErrorActionPreference</span> = <span class="ps-str">'Stop'</span>
<span class="ps-var">$vol</span>       = <span class="ps-var">$DriveLetter</span>.TrimEnd(<span class="ps-str">':'</span>) + <span class="ps-str">':'</span>
<span class="ps-var">$protector</span> = (<span class="ps-cmd">Get-BitLockerVolume</span> <span class="ps-var">$vol</span>).KeyProtector |
                <span class="ps-cmd">Where-Object</span> { <span class="ps-var">$_</span>.KeyProtectorType <span class="ps-kw">-eq</span> <span class="ps-str">'RecoveryPassword'</span> }

<span class="ps-kw">if</span> (<span class="ps-kw">-not</span> <span class="ps-var">$protector</span>) {
    <span class="ps-cmd">Add-BitLockerKeyProtector</span> <span class="ps-param">-MountPoint</span> <span class="ps-var">$vol</span> <span class="ps-param">-RecoveryPasswordProtector</span> | <span class="ps-cmd">Out-Null</span>
    <span class="ps-var">$protector</span> = (<span class="ps-cmd">Get-BitLockerVolume</span> <span class="ps-var">$vol</span>).KeyProtector |
                    <span class="ps-cmd">Where-Object</span> { <span class="ps-var">$_</span>.KeyProtectorType <span class="ps-kw">-eq</span> <span class="ps-str">'RecoveryPassword'</span> }
}

<span class="ps-comment"># BackupToAAD routes to MSA on non-Entra-joined personal devices</span>
<span class="ps-cmd">BackupToAAD-BitLockerKeyProtector</span> <span class="ps-param">-MountPoint</span> <span class="ps-var">$vol</span> `
    <span class="ps-param">-KeyProtectorId</span> <span class="ps-var">$protector</span>.KeyProtectorId

<span class="ps-cmd">Write-Host</span> <span class="ps-str">"✓ Recovery key backed up to Microsoft Account."</span> <span class="ps-param">-ForegroundColor</span> Green
<span class="ps-cmd">Write-Host</span> <span class="ps-str">"  Verify: https://account.microsoft.com/devices/recoverykey"</span></pre>
    </div>

    <!-- SECTION 5: CUSTOM SCRIPT -->
    <h3 id="custom">// 05 — Your script</h3>

    <p>Drop your own PowerShell script below. Replace the placeholder with your code, then commit the file to your GitHub Pages repo.</p>

    <div class="code-wrap" id="code-custom">
      <div class="code-header">
        <span class="code-lang">PowerShell — custom script</span>
        <button class="copy-btn" onclick="copyCode('code-custom', this)">Copy</button>
      </div>
      <pre class="code-body" id="custom-script-body"><span class="ps-comment"># ── Paste your PowerShell script here ──────────────────────────────────
# Replace this entire block with your own code.
# This section is intentionally left as a placeholder.
#
# Example structure:
#   param(...)
#   function Invoke-MyTask { ... }
#   Invoke-MyTask
# ──────────────────────────────────────────────────────────────────────</span></pre>
    </div>

    <div class="callout tip">
      <strong>✓ How to update this page</strong>
      Edit <code>index.html</code> in your GitHub repo. Replace the contents of
      <code>#custom-script-body</code> with your script wrapped in the same
      <code>&lt;span class="ps-…"&gt;</code> syntax used above, or just paste plain text.
    </div>

    <hr class="divider">

    <!-- SECTION 6: VERIFY -->
    <h3 id="verify">// 06 — Verifying the backup</h3>

    <ul>
      <li><strong>Entra ID:</strong> Intune admin centre → Devices → [device name] → Recovery keys</li>
      <li><strong>Entra (user self-service):</strong> <a href="https://myaccount.microsoft.com/device-list" target="_blank">myaccount.microsoft.com</a> → Devices → View BitLocker Keys</li>
      <li><strong>Active Directory:</strong> ADUC → computer object → Properties → BitLocker Recovery tab (requires RSAT + AD schema)</li>
      <li><strong>MSA:</strong> <a href="https://account.microsoft.com/devices/recoverykey" target="_blank">account.microsoft.com/devices/recoverykey</a></li>
      <li><strong>PowerShell verify:</strong> <code>(Get-BitLockerVolume E:).KeyProtector</code> — look for <code>RecoveryPassword</code> type and confirm the ID matches your escrowed entry.</li>
    </ul>

    <hr class="divider">

    <!-- REFERENCES -->
    <h3 id="refs">// References</h3>
    <ul>
      <li><a href="https://learn.microsoft.com/en-us/powershell/module/bitlocker/backup-bitlockerprotectortoad" target="_blank">Backup-BitLockerKeyProtector — Microsoft Learn</a></li>
      <li><a href="https://learn.microsoft.com/en-us/powershell/module/bitlocker/backuptoaad-bitlockerprotector" target="_blank">BackupToAAD-BitLockerKeyProtector — Microsoft Learn</a></li>
      <li><a href="https://learn.microsoft.com/en-us/windows/security/information-protection/bitlocker/bitlocker-use-bitlocker-recovery-password-viewer" target="_blank">BitLocker Recovery Password Viewer for AD</a></li>
      <li><a href="https://learn.microsoft.com/en-us/mem/intune/protect/encrypt-devices" target="_blank">Intune — Manage disk encryption policy</a></li>
    </ul>

  </article>

  <!-- SIDEBAR -->
  <aside class="sidebar">
    <div class="sidebar-section">
      <p class="sidebar-label">On this page</p>
      <ul class="toc">
        <li><a href="#overview">How key backup works</a></li>
        <li><a href="#entra">Backup to Entra ID</a></li>
        <li><a href="#ad">Backup to Active Directory</a></li>
        <li><a href="#msa">Backup to MSA</a></li>
        <li><a href="#custom">Your script</a></li>
        <li><a href="#verify">Verifying the backup</a></li>
        <li><a href="#refs">References</a></li>
      </ul>
    </div>

    <div class="sidebar-section">
      <p class="sidebar-label">Other posts</p>
      <a class="related-post" href="#">
        <div class="rp-tag">Coming soon</div>
        <div class="rp-title">Enforcing BitLocker on OS drives via Intune</div>
      </a>
      <a class="related-post" href="#">
        <div class="rp-tag">Coming soon</div>
        <div class="rp-title">Silently encrypting new machines at enrolment</div>
      </a>
      <a class="related-post" href="#">
        <div class="rp-tag">Coming soon</div>
        <div class="rp-title">Auditing key escrow with Graph API</div>
      </a>
    </div>
  </aside>

</div><!-- /page-wrapper -->

<footer>
  <p>built with plain HTML · hosted on GitHub Pages ·
    <a href="https://github.com/" target="_blank">view source ↗</a>
  </p>
</footer>

<script>
function copyCode(blockId, btn) {
  const pre = document.querySelector('#' + blockId + ' .code-body');
  const text = pre ? pre.innerText : '';
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 1800);
  }).catch(() => {
    btn.textContent = 'Error';
  });
}

// Highlight active TOC link on scroll
const sections = document.querySelectorAll('article [id]');
const tocLinks = document.querySelectorAll('.toc a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      tocLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-20% 0px -70% 0px' });
sections.forEach(s => observer.observe(s));
</script>
</body>
</html>
