---
layout: page
title: "Methodologies"
subtitle: "Methodologies and Process to Support Threat Intelligence"
permalink: /methodologies/
toc: true
---

{:toc}

# Psychology of Intelligence Analysis by Richard J. Heuer, Jr.

[Psychology of Intelligence Analysis by Richard J. Heuer, Jr. PDF](http://www.foo.be/docs/intelligence/PsychofIntelNew.pdf) \[[epub](files/Psychology_of_Intelligence_Analysis_Richards_Heuer.epub)\] provides insight for intelligence analysts, practitioners and academics to improve analysis at large.

# Judgment under Uncertainty: Heuristics and Biases by Amos Tversky; Daniel Kahneman

[Judgment under Uncertainty: Heuristics and Biases ](http://www.foo.be/docs/intelligence/Tversky_Kahneman_1974.pdf) helps analysts to take into account biases in judgements especially when evaluating uncertainty.

## The Admiralty Scale (also called the NATO System)

The Admiralty Scale (also called the NATO System) is used to rank the reliability of a source and the credibility of an information.

_The Admiralty Code is a relatively simple scheme for categorising evidence according to its credibility. It was initially used by the British Admiralty for the assessment of evidence used in naval intelligence, but it is now used in many police departments, intelligence agencies and defense-related organisations, including the US Army (US Army Field Manual 2-22.3, 2006)_ ref: [The Admiralty Code:
A Cognitive Tool for Self-Directed Learning](https://www.ijlter.org/index.php/ijlter/article/download/494/234)

A MISP taxonomy called ['admiralty-scale'](https://www.misp-project.org/taxonomies.html#_admiralty_scale) proposes an applied model to tag information in threat intelligence platform.

# Words of Estimative Probability

[Words of Estimative Probability](https://www.cia.gov/static/0aae8f84700a256abf63f7aad73b0a7d/Words-of-Estimative-Probability.pdf) proposes clear words when estimating probability. A MISP taxonomy called ['estimative-language'](https://www.misp-project.org/taxonomies.html#_estimative_language) proposes an applied model to tag information in threat intelligence platform.

## Expressing Confidence In Analytic Judgments

[In JP 2-0, Joint Intelligence](http://www.jcs.mil/Portals/36/Documents/Doctrine/pubs/jp2_0.pdf) (page 114) includes an appendix to express confidence in analytic judgments. This has been included in a MISP taxonomy called ['estimative-language'](https://www.misp-project.org/taxonomies.html#_estimative_language) where these analytic judgments can be used in threat intelligence platform to directly express the confidence level on the information tagged.

# Model of Intrusion and Attack Analysis

## Cyber Threat Framework by Office of the Director of National Intelligence

_The Cyber Threat Framework was developed by the US Government to enable consistent characterization and categorization of cyber threat events, and to identify trends or changes in the activities of cyber adversaries.  The Cyber Threat Framework is applicable to anyone who works cyber-related activities, its principle benefit being that it provides a common language for describing and communicating information about cyber threat activity.  The framework and its associated lexicon provide a means for consistently describing cyber threat activity in a manner that enables efficient information sharing and cyber threat analysis, that is useful to both senior policy/decision makers and detail oriented cyber technicians alike._ ref: [Cyber Threat Framework ](https://www.dni.gov/index.php/cyber-threat-framework)

A MISP taxonomy called ['cyber-threat-framework'](https://www.misp-project.org/taxonomies.html#_cyber_threat_framework) proposes an applied model to tag information in threat intelligence platform.

## The Diamond Model of Intrusion Analysis by Sergio Caltagirone, Andrew Pendergast, and Christopher Betz.

[The Diamond Model of Intrusion Analysis](http://www.activeresponse.org/wp-content/uploads/2013/07/diamond.pdf) presents a novel model of intrusion analysis built by analysts, derived from years of experience, asking the simple question, “What is the underlying method to our work?” The model establishes the basic atomic element of any intrusion activity, the event, composed of four core features: adversary, infrastructure, capability, and victim. A MISP taxonomy called ['diamond-model'](https://www.misp-project.org/taxonomies.html#_diamond_model) proposes an applied model to tag information in threat intelligence platform.

## Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains by Eric M. Hutchins, Michael J. Cloppert, Rohan M. Amin

_Using a kill chain model to describe phases of intrusions, mapping adversary kill chain indicators to defender courses of action, identifying patterns that link individual intrusions into broader campaigns, and understanding the iterative nature of intelligence gathering form the basis of intelligence-driven computer network defense (CND)._ ref: [Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains](https://www.lockheedmartin.com/content/dam/lockheed/data/corporate/documents/LM-White-Paper-Intel-Driven-Defense.pdf)

A MISP taxonomy called ['kill-chain'](https://www.misp-project.org/taxonomies.html#_kill_chain) proposes an applied model to tag information in threat intelligence platform.

## MITRE Adversarial Tactics, Techniques, and Common Knowledge (ATT&CK)

_MITRE’s Adversarial Tactics, Techniques, and Common Knowledge (ATT&CK™) is a curated knowledge base and model for cyber adversary behavior, reflecting the various phases of an adversary’s lifecycle and the platforms they are known to target. ATT&CK is useful for understanding security risk against known adversary behavior, for planning security improvements, and verifying defenses work as expected._ ref [Adversarial Tactics, Techniques & Common Knowledge](https://attack.mitre.org)

MISP implements the complete set of ATT&CK as [galaxy](https://www.misp-project.org/galaxy.html).
