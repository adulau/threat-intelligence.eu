---
layout: page
title: "Standards"
subtitle: "Standards related to Threat Intelligence"
permalink: /standards/
toc: true
---

{:toc}

# Threat Intelligence Standards and Formats

This page provides an overview of key open standards, formats, and specifications used in the field of threat intelligence and cybersecurity.  
These standards enable interoperability, improve collaboration, and help security teams exchange actionable information more effectively.  
Below is a non-exhaustive list of widely adopted initiatives.

---

# MISP Threat Sharing Standard

The [MISP project](https://www.misp-project.org/) has developed a set of standards for threat intelligence sharing, documented as [Standards](https://www.misp-standard.org/) under the [MISP Standard](https://www.misp-standard.org/) umbrella:

- **MISP core format** — defines the core JSON format of MISP. [https://www.misp-standard.org/rfc/misp-standard-core.html](https://www.misp-standard.org/rfc/misp-standard-core.html)
- **MISP taxonomy format** — defines the taxonomy JSON format of MISP. [https://www.misp-standard.org/rfc/misp-standard-taxonomy-format.html](https://www.misp-standard.org/rfc/misp-standard-taxonomy-format.html)
- **MISP galaxy format** — defines the [galaxy](https://github.com/MISP/misp-galaxy) template format used to expand MISP’s threat actor modelling. [https://www.misp-standard.org/rfc/misp-standard-galaxy-format.html](https://www.misp-standard.org/rfc/misp-standard-galaxy-format.html)
- **MISP object template format** — defines the [object](https://github.com/MISP/misp-objects) template format used to construct combined and composite objects for the MISP core format. [https://www.misp-standard.org/rfc/misp-standard-object-template-format.html](https://www.misp-standard.org/rfc/misp-standard-object-template-format.html)

In addition, the MISP project maintains a wide range of supporting resources:  
- [Taxonomies](https://www.misp-project.org/taxonomies.html)  
- [Warning-lists](https://github.com/MISP/misp-warninglists)  
- [Object templates](https://www.misp-project.org/objects.html)  
- [Galaxy clusters](https://www.misp-project.org/galaxy.html)  

MISP development takes place at the official [GitHub organisation](https://github.com/MISP).

---

# IODEF — Incident Object Description Exchange Format

IODEF (Incident Object Description Exchange Format) was first described in [RFC 5070](https://tools.ietf.org/html/rfc5070) (2007) and [RFC 6685](https://tools.ietf.org/html/rfc6685), and later replaced by [RFC 7970](https://datatracker.ietf.org/doc/html/rfc7970) (2016).  

An important extension is defined in [RFC 7203](https://tools.ietf.org/html/rfc7203) — Structured Cybersecurity Information in IODEF — which adds classes for **AttackPattern, Platform, Vulnerability, Scoring, Weakness, EventReport, Verification, and Remediation**.

Development continues within the [IETF Managed Incident Lightweight Exchange (MILE) Working Group](https://datatracker.ietf.org/wg/mile/documents/).

---

# IDMEF — Intrusion Detection Message Exchange Format

IDMEF (Intrusion Detection Message Exchange Format) is specified in [RFC 4765](https://tools.ietf.org/html/rfc4765) (2007).  

---

# OpenTPX — Open Threat Partner Exchange

OpenTPX (Open Threat Partner Exchange) is a JSON format designed to exchange machine-readable threat intelligence along with network security-related information.  

Development takes place at the [opentpx GitHub repository](https://github.com/Lookingglass/opentpx/).

---

# STIX — Structured Threat Information eXpression (1.1 and 1.2)

STIX was originally developed by MITRE. Version 1.2 was released in 2014, with specifications available here:  
- [STIX 1.2](http://stixproject.github.io/releases/1.2/)  
- [STIX 1.1](https://stix.mitre.org/language/version1.1/)  

---

# STIX — Structured Threat Information eXpression (2.0)

STIX 2.0 is developed by the [OASIS Cyber Threat Intelligence (CTI) Technical Committee](http://www.oasis-open.org/committees/tc_home.php?wg_abbrev=cti).  

The following documents were released for version 2.0:  
- [Core Concepts](http://docs.oasis-open.org/cti/stix/v2.0/cs01/part1-stix-core/stix-v2.0-cs01-part1-stix-core.html)  
- [STIX Objects](http://docs.oasis-open.org/cti/stix/v2.0/cs01/part2-stix-objects/stix-v2.0-cs01-part2-stix-objects.html)  
- [Cyber Observable Core Concepts](http://docs.oasis-open.org/cti/stix/v2.0/cs01/part3-cyber-observable-core/stix-v2.0-cs01-part3-cyber-observable-core.html)  
- [STIX Patterning](http://docs.oasis-open.org/cti/stix/v2.0/cs01/part5-stix-patterning/stix-v2.0-cs01-part5-stix-patterning.html)  

---

# Sigma — Generic Signature Format for SIEM Systems

Sigma is a generic and open signature format that allows analysts to describe relevant log events in a straightforward way.  

Specifications are available in the [Sigma wiki](https://github.com/Neo23x0/sigma/wiki/Specification).  
Development takes place at the [Sigma GitHub repository](https://github.com/Neo23x0/sigma).

---

# YARA — The Pattern-Matching Swiss Knife

YARA is an open format used to identify textual or binary patterns in files, binaries, or streams.  

Documentation is available at [yara.readthedocs.io](https://yara.readthedocs.io).  
Development takes place at the [YARA GitHub repository](https://github.com/virustotal/yara).

---

# GENE — Go Evtx sigNature Engine

GENE is an open format designed to detect and match patterns in Windows Event Logs (EVTX).  

Development takes place at the [GENE GitHub repository](https://github.com/0xrawsec/gene).

