# SOURCES.md — Sources, References, Attributions, Licenses

## Overview

This project ("English On Course") builds an original A1 English course for Spanish-speaking adults. The educational content (explanations, examples, exercises, rules, common mistakes) is **original** — written specifically for this application. External datasets and references are used to validate curriculum coverage, CEFR levels, and pedagogical methodology. No text is copied from external sources.

---

## 1. CEFR — Common European Framework of Reference for Languages

**Source:** Council of Europe — https://www.coe.int/en/web/common-european-framework-reference-languages
**Companion Volume (2020):** https://www.coe.int/en/web/common-european-framework-reference-languages/companion-volume

**Used for:**
- Defining A1 learning objectives and competences
- Can-do descriptors for listening, reading, spoken interaction, spoken production, writing
- Qualitative aspects of language use (range, control, interaction, coherence)
- Linguistic, sociolinguistic, and pragmatic competences at A1

**License:** CEFR is a Council of Europe instrument; descriptors are publicly available for educational and commercial use. The CEFR Companion Volume (2020) is published publicly by the Council of Europe.

**Attribution:** Descriptors adapted/paraphrased from the CEFR Companion Volume (2020), Council of Europe.

---

## 2. CEFR-J / Open Language Profiles

**Repository:** https://github.com/openlanguageprofiles/olp-en-cefrj

**Data files used:**
- `cefrj-vocabulary-profile-1.5.csv` — CEFR-J Vocabulary Profile (A1–B2 vocabulary, ~7,799 entries; A1 = 1,164 words)
- `cefrj-grammar-profile-20180315.csv` — CEFR-J Grammar Profile (~1,222 grammar items, mapped to CEFR-J sub-levels, English Grammar Profile, and Pearson GSE)

**Used for:**
- Validating which vocabulary is appropriate for A1 (1,164 headwords at A1)
- Validating which grammar structures belong to A1 vs A2
- Establishing the A1/A2 boundary to avoid teaching A2+ content in an A1 course
- Cross-referencing with English Grammar Profile (EGP column in the grammar CSV)

**License & Attribution:**
- Vocabulary & Grammar datasets: Copyright **Tono Laboratory, Tokyo University of Foreign Studies**. Free for research and commercial use with proper attribution.
- C1/C2 Vocabulary (Octanove): **CC BY-SA 4.0** — https://creativecommons.org/licenses/by-sa/4.0/

**Required citation:**
> Tono, Y. (2020). *The CEFR-J Wordlist Version 1.5.* Tokyo University of Foreign Studies. Retrieved from http://www.cefr-j.org/download.html on 1/20/2020.

> Tono, Y. (2020). *The CEFR-J Grammar Profile Version 20180315.* Retrieved from http://www.cefr-j.org/download.html on 1/20/2020.

**Disclaimer:** CEFR-J is not responsible for inaccuracies in the dataset. Use with attribution.

---

## 3. English Profile

**Source:** https://www.englishprofile.org/
- English Vocabulary Profile (EVP): https://www.englishprofile.org/wordlists
- English Grammar Profile (EGP): https://www.englishprofile.org/grammar

**Used for:**
- Cross-referencing A1 vocabulary and grammar levels against Cambridge English Profile
- Resolving A1/A2 boundary disputes between CEFR-J and EGP
- Identifying the more conservative A1 scope (EGP tends to classify items higher than CEFR-J's frequency-based levels)

**License:** English Profile data is for **personal non-commercial use**. The project data was used as a **reference only** — no EVP data was copied or redistributed. We do not claim "English Profile informed" status. Only publicly visible level assignments were used for validation.

**Attribution:** English Profile, Cambridge University Press & Assessment. Used as a reference for level validation.

---

## 4. British Council LearnEnglish

**Source:** https://learnenglish.britishcouncil.org/
- A1-A2 Grammar index: https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar
- A1-A2 Vocabulary index: https://learnenglish.britishcouncil.org/grammar/a1-a2-vocabulary  
- A1 Listening: https://learnenglish.britishcouncil.org/listening/a1-listening

**Used for:**
- Pedagogical methodology reference (Test-Teach-Test lesson structure)
- Topic coverage check (comparing our curriculum against BC's A1-A2 topics)
- Exercise type design (matching, gap-fill, multiple choice, true/false, drag-and-drop ordering)
- Coverage gap identification

**License:** Public website content. **Not copied.** Used as reference only — no text, exercises, or images from British Council were reproduced.

**Attribution:** British Council LearnEnglish. Used as a pedagogical reference.

---

## 5. Cambridge English

**Source:** https://www.cambridgeenglish.org/
- A2 Key exam format: https://www.cambridgeenglish.org/exams-and-tests/key/
- Qualifications: https://www.cambridgeenglish.org/exams-and-tests/qualifications/

**Used for:**
- Understanding the target outcome after A1→A2 progression (A2 Key is the first adult Cambridge exam)
- Exam format reference (Reading & Writing, Listening, Speaking)
- Task type design for the final A1 assessment (cloze, matching, guided writing, comprehension)

**License:** Public website. **Not copied.** Used as reference only.

**Attribution:** Cambridge English (Cambridge University Press & Assessment). Used as a pedagogical reference.

---

## What is original to this project

- All Spanish-language grammar explanations
- All English example sentences and their translations
- All exercises, questions, and answer explanations
- All common-mistake content (designed specifically for Spanish-speaking learners)
- The curriculum structure, progression, and module/lesson design
- The application code, UI, and architecture
- The gamification system design

## What is NOT original (used as reference/verification only)

- CEFR level assignments (from CEFR/Council of Europe)
- A1 vocabulary list validation (from CEFR-J Wordlist)
- A1 grammar structure validation (from CEFR-J Grammar Profile + English Grammar Profile)
- Pedagogical methodology (from British Council LearnEnglish reference)
- Assessment design principles (from Cambridge A2 Key format reference)