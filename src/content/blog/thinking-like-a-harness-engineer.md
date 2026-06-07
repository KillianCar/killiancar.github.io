---
title: 'Thinking Like a Harness Engineer'
description: 'Your job is no longer to produce the code, but to produce the system that produces the code.'
pubDate: '2026-06-07'
---

Your job is no longer to produce the code, but to produce the system that produces the code.

That system is the harness: the tools, constraints, context, and feedback loops surrounding the model. The harness creates the conditions for the model to produce high-quality output over longer periods, with less human intervention, and at far greater scale than was previously possible. The harness and the model together make up an agent. 

Since your job is to produce the harness rather than the code, you should not spend a significant amount of time correcting output during code review. Providing feedback on implementation details relevant to a particular change is fine, but feedback that is broadly applicable should be incorporated back into the harness. When a generated pull request deviates too far from what is expected, treat that as a failure of the harness. Be willing to discard the pull request, improve the harness, and try again.

Anything you can validate deterministically should not be left only to prompts. Instructions and skills are critical for steering agent behaviour, but an LLM cannot apply its attention evenly across the whole context, so prompt-only rules will eventually be missed. You'll increasingly encode your structural conventions and developer taste as CI checks.

The agent must be able to run the code it creates. A passing test suite is often not sufficient to demonstrate that a change has been correctly implemented. What you want is the agent to provide evidence that the changes were validated as close to reality as possible. The evidence may come in forms like execution logs, screenshots or links to deployed artefacts. You will need to provision the harness with the same technologies and system access you would use if developing by hand. The agent may run on your machine or, increasingly, in an environment of its own.

## Apply Pressure Early

As the pace of agentic development ramps up and trust in your harness increases, it will not be feasible to review every line of output. A several-hundred line feature specification may explode into thousands of lines of code. Rather than focusing on the output, it's far more effective to spend your limited human brainpower on the inputs, which often take the form of product requirements documents, OpenAPI descriptions, design documents and bug reports.

A common pattern is for an agent to generate a technical implementation plan from a requirements document, then to have a human review it. This plan contains a sufficient level of detail to apply your software-engineering expertise without diving into minute detail, so you can catch high-level misalignment before any implementation work begins.

Although you shouldn't review every line of code, you will have critical areas that still require human review. For example, difficult to reverse or high risk changes like database schema updates or changes to your authorisation logic should be evaluated and understood by a human. Areas that require human input should be escalated deterministically so that you don't need to trawl through code to find them.

## Session Retrospection

Each time a new coding session is initiated, the agent is seeing your codebase for the first time and will repeat the mistakes of previous sessions. To improve the effectiveness of your agents, you will need to analyse your sessions at scale.

Using a combination of scripts and LLM-driven analysis, you should review coding sessions for behaviour that hurts agent performance, such as commonly misunderstood abstractions, missing context, and instances where the agent built its own tooling because none existed. Code-review feedback, from agents and particularly from humans, is a strong signal when identifying improvement opportunities.

The output of each retrospective should be a concrete, actionable list of changes to the harness: a tool allow-list entry, a validation script, access to a new data source, better cross-references in your documentation, added business context. Over time these changes will compound to build a powerful, self-improving product delivery engine.
