# Apatheia

**Apatheia** is a security automation engine and protocol designed to keep remote workers, freelancers, and distributed teams **safe by default**.

Originally built as an Electron JS task-highlighting and reminder engine, Apatheia is evolving into a **ready-to-import security framework for RMM platforms** such as **NinjaOne**, with support for scheduled checks, policy enforcement, and security posture visibility.

The goal is simple:

> **Make good security hygiene unavoidable, lightweight, and verifiable.**

---

## What Apatheia Is

* A **security checklist engine** with opinionated best practices
* A **task scheduling and reminder system**
* A **public-use protocol** for remote work safety
* A **foundation for RMM integrations** (NinjaOne, etc.)
* A **human-readable + machine-executable security standard**

---

## Core Concepts

* **Time-based security hygiene** (daily / weekly / monthly)
* **Low-friction automation**
* **Defense-in-depth**
* **Remote-first threat model**
* **Zero Trust mindset**

---

## Security Tasks Protocol

### 🔁 Daily Tasks (Automated / Silent Where Possible)

These are designed to be **automatic**, with alerts only on failure.

* Automated backups verification
* Operating system & application update checks
* Antivirus / EDR scan status
* System & security log review

---

### 📆 Weekly Tasks (Preventive Controls)

Focused on **misconfiguration drift** and account security.

* Offline / air-gapped backup verification
* File and folder permission audit
* Email security settings review (SPF, DKIM, DMARC)
* 2FA / MFA enforcement and verification

---

### 🗓 Monthly Tasks (Hardening & Risk Reduction)

Longer-cycle protections and resilience checks.

* Anti-ransomware protection verification
* Password manager / keychain audit
* Hardware security key (YubiKey or equivalent) validation
* Physical security review (biometrics, lock screen, camera/mic)
* Phishing awareness validation
* AI-based threat monitoring status
* Cyber insurance review
* Router / network device firmware updates
* Anti-theft & device tracking apps verification

---

## Additional Security Recommendations

These are **strongly recommended extensions** to the core protocol and may be enforced depending on the environment.

### 🔐 Data Protection

* Full-disk encryption on laptops and mobile devices
* Encrypted communications for sensitive data

### 🖥 Remote Access Security

* Remote desktop access only via secure VPN
* Enforced encryption for all remote sessions

### 🔑 Credential Hygiene

* Periodic password rotation for critical systems
* Immediate rotation after suspected compromise

---

## Advanced Security Architecture (Optional but Recommended)

These features elevate Apatheia from hygiene to **enterprise-grade security posture**.

### 🌐 VPN (Virtual Private Network)

* Mandatory VPN usage on untrusted networks
* Strong encryption (AES-256)
* DNS leak protection

### 🧠 Zero Trust Architecture (ZTA)

* Continuous authentication and authorization
* Least-privilege access model
* Identity and Access Management (IAM) integration

  * Example: Okta, Azure AD

### ☁ Cloud Security (CASB)

* Cloud Access Security Broker integration
* SaaS activity monitoring and data protection
* Examples: Netskope, McAfee CASB

---

## RMM Integration Vision

Apatheia is designed to be:

* Imported as **scripts, policies, or task templates**
* Mapped directly into **NinjaOne checks and automations**
* Used as a **baseline security profile** for endpoints
* Extended via plugins or custom checks

Future versions will include:

* Prebuilt NinjaOne policies
* JSON/YAML task definitions
* Compliance scoring
* Alert severity mapping

---

## Target Users

* Remote workers & freelancers
* MSPs and IT administrators
* Security-conscious teams
* RMM platform users
* Solo developers and consultants

---

## Status

🚧 **Active development**
Currently transitioning from an Electron-based task engine into a **modular security protocol and RMM-ready solution**.

---

## Philosophy

> Security should not depend on motivation, memory, or discipline.
> It should be **automatic, boring, and always on**.

Apatheia exists to make that happen.
