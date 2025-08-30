---
layout: page
title: "Methodologies"
subtitle: "Methodologies and Process to Support Threat Intelligence"
permalink: /methodologies/
toc: true
---

{:toc}

# General Methodologies for Intelligence Analysis

This page brings together a set of key methodologies, frameworks, and references that support intelligence analysis.  
They provide practical tools for analysts, help mitigate cognitive bias, and introduce structured models for intrusion and attack analysis.  
Whenever possible, these methodologies are also mapped to [MISP taxonomies](https://www.misp-project.org/taxonomies.html) to enable direct application in threat intelligence platforms.

---

## At a Glance

| Category                                | Methodology / Reference                                                                 | Key Focus                                     | MISP Integration |
|-----------------------------------------|------------------------------------------------------------------------------------------|-----------------------------------------------|-----------------|
| **Cognitive & Analytical Bias**         | [Psychology of Intelligence Analysis](http://www.foo.be/docs/intelligence/PsychofIntelNew.pdf) (Heuer) | Understanding and mitigating cognitive biases | `confidence-in-analytic-judgment` in [`estimative-language`](https://www.misp-project.org/taxonomies.html#_estimative_language) |
|                                         | [Judgment under Uncertainty](http://www.foo.be/docs/intelligence/Tversky_Kahneman_1974.pdf) (Tversky & Kahneman) | Heuristics and biases in uncertainty          | [`event-assessment`](https://www.misp-project.org/taxonomies.html#_event_assessment) |
| **Source Reliability & Confidence**     | [Admiralty Scale](https://www.ijlter.org/index.php/ijlter/article/download/494/234)     | Source reliability & information credibility | [`admiralty-scale`](https://www.misp-project.org/taxonomies.html#_admiralty_scale) |
|                                         | [Words of Estimative Probability](https://www.cia.gov/readingroom/docs/CIA-RDP93T01132R000100020036-3.pdf) | Standardized probability terms                | [`estimative-language`](https://www.misp-project.org/taxonomies.html#_estimative_language) |
|                                         | [JP 2-0 Appendix A](https://irp.fas.org/doddir/dod/jp2_0.pdf)                           | Expressing confidence in analytic judgments   | [`estimative-language`](https://www.misp-project.org/taxonomies.html#_estimative_language) |
| **Intrusion & Attack Models**           | [Cyber Threat Framework](https://www.dni.gov/index.php/cyber-threat-framework)          | Consistent classification of cyber threats    | [`cyber-threat-framework`](https://www.misp-project.org/taxonomies.html#_cyber_threat_framework) |
|                                         | [Diamond Model](http://www.activeresponse.org/wp-content/uploads/2013/07/diamond.pdf)  | Event-centric intrusion analysis              | [`diamond-model`](https://www.misp-project.org/taxonomies.html#_diamond_model) |
|                                         | [Kill Chain](https://www.lockheedmartin.com/content/dam/lockheed/data/corporate/documents/LM-White-Paper-Intel-Driven-Defense.pdf) | Intrusion phases & campaign linkage           | [`kill-chain`](https://www.misp-project.org/taxonomies.html#_kill_chain) |
|                                         | [MITRE ATT&CK](https://attack.mitre.org)                                                | Tactics & techniques knowledge base           | [MISP Galaxy](https://www.misp-project.org/galaxy.html) |
| **Process & Data Science Approaches**   | [CSAE Framework](https://cpb-eu-w2.wpmucdn.com/blogs.bristol.ac.uk/dist/1/670/files/2021/03/White-Paper-Towards-Data-Scientific-Investigations.pdf) | Data science for intelligence analysis        | — |

---

## Psychology of Intelligence Analysis (Richard J. Heuer, Jr.)

[**Psychology of Intelligence Analysis** (PDF)](http://www.foo.be/docs/intelligence/PsychofIntelNew.pdf) · [EPUB](/files/Psychology_of_Intelligence_Analysis_Richards_Heuer.epub)  

This classic book provides insights for intelligence analysts, practitioners, and academics to improve analysis by understanding cognitive limitations and biases.

---

# Analytical Judgments and Estimative Analysis

## Judgment under Uncertainty: Heuristics and Biases (Amos Tversky & Daniel Kahneman)

[**Judgment under Uncertainty: Heuristics and Biases**](http://www.foo.be/docs/intelligence/Tversky_Kahneman_1974.pdf) introduces the concept of cognitive biases that affect judgments, particularly when evaluating uncertainty — a critical concern for intelligence analysts.

---

## The Admiralty Scale (NATO System)

The **Admiralty Scale** (also known as the NATO System) ranks the reliability of sources and the credibility of information.  

_“The Admiralty Code is a relatively simple scheme for categorising evidence according to its credibility. It was initially used by the British Admiralty for naval intelligence, but is now applied in police departments, intelligence agencies, and defense organisations worldwide, including the US Army.”_  
— Ref: [The Admiralty Code: A Cognitive Tool for Self-Directed Learning](https://www.ijlter.org/index.php/ijlter/article/download/494/234)

- A [MISP taxonomy](https://www.misp-project.org/taxonomies.html#_admiralty_scale) called **admiralty-scale** provides a practical implementation for tagging information in a threat intelligence platform.

![The Admiralty Code for evaluating the credibility of evidence](/assets/img/credibility-of-evidence.png)

---

## Words of Estimative Probability

[**Words of Estimative Probability**](https://www.cia.gov/readingroom/docs/CIA-RDP93T01132R000100020036-3.pdf) proposes standardized terminology for expressing probability in analytic judgments.  

- A [MISP taxonomy](https://www.misp-project.org/taxonomies.html#_estimative_language) called **estimative-language** provides a practical model to apply this in a structured way.

---

## Expressing Confidence in Analytic Judgments

The US [**JP 2-0 Joint Intelligence**](https://irp.fas.org/doddir/dod/jp2_0.pdf) (Appendix A, p.114) includes a structured method to express confidence levels in analytic judgments.  

- This has been implemented in the MISP taxonomy **estimative-language**, enabling analysts to directly tag confidence levels on shared information.  

![Intelligence Confidence Levels in Analytic Judgments](/assets/img/jp-2.0.png)

---

# Models of Intrusion and Attack Analysis

## Cyber Threat Framework (Office of the Director of National Intelligence)

_The Cyber Threat Framework was developed by the US Government to provide consistent characterization and categorization of cyber threat events. It introduces a common lexicon that supports information sharing, trend analysis, and communication between technical analysts and policymakers._  
— Ref: [Cyber Threat Framework](https://www.dni.gov/index.php/cyber-threat-framework)

- Implemented as a [MISP taxonomy](https://www.misp-project.org/taxonomies.html#_cyber_threat_framework).

---

## The Diamond Model of Intrusion Analysis

[**The Diamond Model of Intrusion Analysis**](http://www.activeresponse.org/wp-content/uploads/2013/07/diamond.pdf) (Sergio Caltagirone, Andrew Pendergast, Christopher Betz) establishes the event as the atomic element of intrusion analysis, defined by four features: **adversary, infrastructure, capability, and victim**.  

- Implemented as a [MISP taxonomy](https://www.misp-project.org/taxonomies.html#_diamond_model).

---

## Intelligence-Driven Computer Network Defense (Kill Chain Model)

[**Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains**](https://www.lockheedmartin.com/content/dam/lockheed/data/corporate/documents/LM-White-Paper-Intel-Driven-Defense.pdf) (Eric M. Hutchins, Michael J. Cloppert, Rohan M. Amin) introduces the **kill chain** model.  

This model maps phases of adversary intrusions to defender actions, linking individual intrusions into campaigns.  

- Implemented as a [MISP taxonomy](https://www.misp-project.org/taxonomies.html#_kill_chain).

---

## MITRE ATT&CK

[**MITRE ATT&CK™**](https://attack.mitre.org) is a curated knowledge base and framework of adversary tactics and techniques, reflecting phases of adversary lifecycles and targeted platforms.  

It is widely used to:  

- Assess security risks based on known adversary behavior
- Plan and prioritize defensive improvements
- Validate the effectiveness of security controls

- MISP includes the full ATT&CK dataset as a [galaxy](https://www.misp-project.org/galaxy.html) also easily searchable at [https://misp-galaxy.org/](https://misp-galaxy.org/).

---

# Processes and Frameworks Supporting Threat Intelligence Analysis

## CSAE Framework — Collect, Store, Analyze, Engage

[**A Comprehensive Data Science Framework and Case Study for Investigating Organized Crime and Serving the Public Interest**](https://cpb-eu-w2.wpmucdn.com/blogs.bristol.ac.uk/dist/1/670/files/2021/03/White-Paper-Towards-Data-Scientific-Investigations.pdf)  
Erik van de Sandt, Arthur van Bunningen, Jarmo van Lenthe, John Fokker  

This framework (CSAE) applies data science methodologies to intelligence work, with a particular case study in organized crime investigations, illustrating how to **collect, store, analyze, and engage** with intelligence effectively.

