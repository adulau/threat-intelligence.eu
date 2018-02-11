---
layout: page
title: "Standards"
subtitle: "Standards related to Threat Intelligence"
permalink: /standards/
toc: true
---

{:toc}

# MISP Threat Sharing Standard

The MISP project developed a set of standards for threat intelligence sharing, including a list of IETF Internet-Drafts:

- _MISP core format_ which describes the core JSON format of MISP. Current Internet-Draft: [03](https://tools.ietf.org/html/draft-dulaunoy-misp-core-format)
- _MISP taxonomy format_ which describes the taxonomy JSON format of MISP. Current Internet-Draft: [04](https://tools.ietf.org/html/draft-dulaunoy-misp-taxonomy-format)
- _MISP galaxy format_ which describes the [galaxy](https://github.com/MISP/misp-galaxy) template format used to expand the threat actor modelling of MISP. Current Internet-Draft: [00](https://datatracker.ietf.org/doc/draft-dulaunoy-misp-galaxy-format/)
- _MISP object template format_ which describes the [object](https://github.com/MISP/misp-objects) template format used to construct combined and composite objects for the MISP core format. Current Internet-Draft: [00](https://datatracker.ietf.org/doc/draft-dulaunoy-misp-object-template-format/)

In addition to standards, the MISP project maintains a list of [taxonomies](https://www.misp-project.org/taxonomies.html), warning-list, [objects templates](https://www.misp-project.org/objects.html) and [galaxy clusters](https://www.misp-project.org/galaxy.html) to support analysts.

MISP development takes place at the following [GitHub organisation](https://github.com/MISP).

# IODEF - Incident Object Description Exchange Format

IODEF - Incident Object Description Exchange Format was originally described in [RFC 5070](https://tools.ietf.org/html/rfc5070) (2007) and  [RFC 6685](https://tools.ietf.org/html/rfc6685) and replaced by [RFC 7970](Incident Object Description Exchange Format Version 2) (2016). Specific extension like Structured Cybersecurity Information in IODEF: [RFC 7203](https://tools.ietf.org/html/rfc7203) defines extension classes like AttackPattern, Platform, Vulnerability, Scoring, Weakness, EventReport, Verification and Remediation.

IODEF development takes place at [IETF Managed Incident Lightweight Exchange (mile) WG](https://datatracker.ietf.org/wg/mile/documents/).

# IDMEF - Intrusion Detection Message Exchange Format

IDMEF - Intrusion Detection Message Exchange Format is described in [RFC 4765](https://tools.ietf.org/html/rfc4765) (2007).

# OpenTPX - Open Threat Partner Exchange

OpenTPX - Open Threat Partner Exchange is a JSON format to exchange machine-readable threat intelligence along with network security related information.

OpenTPX development takes place at the following GitHub repository [opentpx](https://github.com/Lookingglass/opentpx/)

# STIX Structured Threat Information eXpression 1.1 and 1.2

STIX Structured Threat Information eXpression was originally developed by MITRE and version 1.2 was released in 2014. Core specifications are available for version 1.2 at [http://stixproject.github.io/releases/1.2/](http://stixproject.github.io/releases/1.2/) and version 1.1 at [https://stix.mitre.org/language/version1.1/](https://stix.mitre.org/language/version1.1/).

# STIX Structured Threat Information Expression 2.0

STIX Structured Threat Information Expression 2.0 is developed by the CTI TC at OASIS and the following documents were released for version 2.0: [Core Concepts](http://docs.oasis-open.org/cti/stix/v2.0/cs01/part1-stix-core/stix-v2.0-cs01-part1-stix-core.html), [STIX Objects](http://docs.oasis-open.org/cti/stix/v2.0/cs01/part2-stix-objects/stix-v2.0-cs01-part2-stix-objects.html), [Cyber Observable Core Concepts](http://docs.oasis-open.org/cti/stix/v2.0/cs01/part3-cyber-observable-core/stix-v2.0-cs01-part3-cyber-observable-core.html) and [STIX Patterning](http://docs.oasis-open.org/cti/stix/v2.0/cs01/part5-stix-patterning/stix-v2.0-cs01-part5-stix-patterning.html).

STIX 2.0 development takes place at [OASIS Cyber Threat Intelligence (CTI) TC](http://www.oasis-open.org/committees/tc_home.php?wg_abbrev=cti).

# Sigma - Generic Signature Format for SIEM Systems

Sigma is a generic and open signature format that allows you to describe relevant log events in a straight forward manner. Specifications are available at the following location [https://github.com/Neo23x0/sigma/wiki/Specification](https://github.com/Neo23x0/sigma/wiki/Specification).

Sigma development takes place at the following [GitHub repository](https://github.com/Neo23x0/sigma).

# YARA - The pattern matching swiss knife for malware researchers (and everyone else)

YARA is an open pattern-matching format to find textual or binary patterns in binary or stream of binary. Documentation of the YARA format is available at the following location [https://yara.readthedocs.io](https://yara.readthedocs.io).

YARA development takes place at the following [GitHub repository](https://github.com/virustotal/yara).

# GENE - Go Evtx sigNature Engine

GENE is an open format to match Windows Event Logs (EVTX).

GENE development takes place at the following [GitHub repository](https://github.com/0xrawsec/gene).

