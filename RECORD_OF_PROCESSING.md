# Record of Processing Activities (RoPA)

**Maintained pursuant to Article 30 of the EU General Data Protection Regulation (Regulation (EU) 2016/679).**

This is an internal record. It is not published on the website. It exists to satisfy Article 30 and to provide a clear, defensible answer if a supervisory authority requests one.

---

## 1. Controller details

| | |
|---|---|
| Legal name | Inventist LLC |
| Form | Florida (USA) limited liability company |
| Address | Apopka, Florida, United States |
| Contact for processing | `contact@inventist.io` |
| Data Protection Officer | Not appointed (not required under Art. 37 — small-scale, no large-scale processing of special-category data, no systematic monitoring) |
| Joint controllers | None |
| EU/UK representative | Not appointed (Art. 27 derogation: occasional processing, no large-scale processing of special-category data, low risk to data subjects). Reassessment trigger: if EU/UK active install base exceeds ~5,000 monthly users or if any new processing is introduced. |

---

## 2. Products in scope

- **Whereabouts** — native iOS daily-geography game, distributed via the Apple App Store.
- **inventist.io** — static marketing and legal-information website hosted on Cloudflare Pages.

---

## 3. Processing activities

### Activity A — Game operation (on-device)

| Field | Detail |
|---|---|
| Purpose | Allow the user to play Whereabouts and retain their own progress, scores, streak, and settings between sessions on their own device. |
| Data subjects | App users. |
| Categories of data | Game state: daily scores, streak counter, completed-rounds set, unlocked content, app settings/preferences. No identifiers of any kind. |
| Recipients | None. Data does not leave the user's device. |
| Cross-border transfers | None — data is not transmitted. |
| Lawful basis | Art. 6(1)(b) — performance of a contract (the user installed the app). |
| Retention | Until the user resets the data inside the app (Settings → Reset) or uninstalls the app. |
| Technical/organizational measures | iOS sandbox; standard iOS file-protection class; no remote endpoint to attack. |

### Activity B — Imagery delivery from Wikimedia Commons

| Field | Detail |
|---|---|
| Purpose | Display location photographs during gameplay. Imagery is hot-loaded from `upload.wikimedia.org` rather than bundled, to keep the app binary small. |
| Data subjects | App users (incidentally — only as viewers). |
| Categories of data | Standard HTTP request data: source IP address, user-agent, requested URL. **No app-level identifier or game state is sent.** |
| Recipients | Wikimedia Foundation (operator of `upload.wikimedia.org`). |
| Cross-border transfers | Wikimedia operates globally. Their handling is governed by the [Wikimedia Foundation Privacy Policy](https://foundation.wikimedia.org/wiki/Policy:Privacy_policy). |
| Lawful basis | Art. 6(1)(b) — performance of a contract. The user requested to play the game; image delivery is necessary to do so. |
| Retention | Inventist retains nothing related to this. Wikimedia's retention is governed by their policy. |
| Technical/organizational measures | HTTPS-only requests. No referrer header that would reveal user state. |

### Activity C — Apple App Store distribution and StoreKit purchases

| Field | Detail |
|---|---|
| Purpose | Distribute the app and process optional in-app purchases / subscriptions. |
| Data subjects | App downloaders and purchasers. |
| Categories of data | (Inventist's view only) Aggregate, de-identified statistics from App Store Connect: install counts, country, OS version, app version, subscription totals. Inventist receives no payment-method data, no Apple ID email, no individual identifying information. |
| Recipients | Apple Inc. (acts as independent controller for transaction data and as processor for App Store Connect aggregates). |
| Cross-border transfers | Apple operates globally; transfers covered by Apple's published mechanisms (including SCCs where applicable). |
| Lawful basis | Art. 6(1)(b) — performance of a contract (purchase). For aggregate analytics: Art. 6(1)(f) — legitimate interest in understanding install/purchase volume; balanced against minimal/no impact on the data subject because the data is aggregated. |
| Retention | Aggregate data retained indefinitely for business records (no individual data is held). |
| Technical/organizational measures | Access to App Store Connect protected by 2FA on the operator's Apple ID. |

### Activity D — Email correspondence (`contact@inventist.io`)

| Field | Detail |
|---|---|
| Purpose | Reply to questions, support requests, press, partnerships, and rights requests. |
| Data subjects | Anyone who emails us. |
| Categories of data | Sender's email address, name (if provided), contents of message, attachments (if any), reply correspondence. |
| Recipients | Apple Inc. (iCloud Mail infrastructure that hosts the mailbox). No other third parties. |
| Cross-border transfers | iCloud Mail is operated globally; covered by Apple's transfer mechanisms. |
| Lawful basis | Art. 6(1)(b) where the email is about an installed app (contractual support); Art. 6(1)(f) for general inquiries (legitimate interest in being responsive to customers and the public). |
| Retention | Up to 24 months after the last exchange in a thread, then deleted. Earlier deletion on request (Art. 17). |
| Technical/organizational measures | iCloud account secured with strong password and 2FA; macOS / iOS Mail app on devices with full-disk encryption; no third-party CRM or marketing tool. |

### Activity E — Website hosting

| Field | Detail |
|---|---|
| Purpose | Serve the marketing and legal-information website at `inventist.io`. |
| Data subjects | Website visitors. |
| Categories of data | Standard HTTP request data: IP address, user-agent, requested URL, timestamp. No cookies set by us. |
| Recipients | Cloudflare, Inc. (hosting and CDN). Cloudflare may also process limited request data for security/abuse mitigation as an independent controller for that subset. |
| Cross-border transfers | Cloudflare operates globally; transfers covered by Cloudflare's published mechanisms (including SCCs and DPF where applicable). |
| Lawful basis | Art. 6(1)(f) — legitimate interest in operating a public website and protecting it from abuse. |
| Retention | Inventist does not retain server logs. Cloudflare's retention is governed by its own policies (typically minutes to hours for raw request logs). |
| Technical/organizational measures | HTTPS-only; HSTS; no third-party trackers, analytics, or fonts that would expose visitor data. |

---

## 4. Categories of personal data NOT processed

For clarity, Inventist does not process any of the following:

- Special-category data under Art. 9 (health, biometrics, genetics, racial/ethnic origin, political opinions, religious beliefs, trade-union membership, sex life, sexual orientation).
- Data relating to criminal convictions or offences (Art. 10).
- Children's data beyond what is incidentally received from email senders (the app collects no children's data because it collects no user data).
- Location data, contact lists, photos, microphone, or camera input from the device.
- Behavioural-tracking, advertising-identifier, or attribution data of any kind.

---

## 5. Data subject rights handling

- **Receiving requests:** All rights requests arrive via `contact@inventist.io` (or via the in-app Settings → Support flow once enabled, which routes to the same human-monitored mailbox).
- **Verification:** For requests concerning game data, no verification is possible or necessary because Inventist holds no game data. For requests concerning email correspondence, identity is verified by replying from the same email address that initiated the correspondence.
- **Response time:** Within 30 days as required by Art. 12(3). Extension by up to two further months only when justified by complexity, with notice to the data subject.
- **No fee** charged in any case.
- **Records:** Each request and the response are retained in the email thread for at least 24 months as audit evidence.

---

## 6. Breach notification procedure

In the event of a personal-data breach:

1. Contain and assess within 24 hours of becoming aware.
2. Notify the relevant supervisory authority within 72 hours (Art. 33), unless the breach is unlikely to result in a risk to data subjects.
3. Notify affected data subjects without undue delay if the breach is likely to result in a high risk to their rights and freedoms (Art. 34).
4. Document the breach, its effects, and remedial action in this RoPA's appendix.

To date: no personal-data breaches have occurred.

---

## 7. DPIAs (Data Protection Impact Assessments)

No DPIA is required at this time. The processing activities above are low-risk: no large-scale processing, no systematic monitoring, no special-category data, no profiling, no automated decision-making with legal effect, and the principal product is local-only by design.

A DPIA will be conducted if any of the following are introduced:
- Cloud-stored user accounts.
- Server-side leaderboards beyond an opaque-identifier model.
- Any analytics SDK or third-party tracking.
- Voice, image, or location data collection.
- Children's data collected at scale.

---

## 8. Subprocessors and third-party processors

| Party | Role | Location | Coverage |
|---|---|---|---|
| Apple Inc. | App distribution, in-app purchases, iCloud Mail hosting | USA / global | Apple's published privacy and DPA terms; SCCs / DPF where applicable. |
| Wikimedia Foundation | Image hosting | USA / global | [Wikimedia privacy policy](https://foundation.wikimedia.org/wiki/Policy:Privacy_policy). Acts as an independent controller for HTTP request data; not a processor for Inventist. |
| Cloudflare, Inc. | Website hosting and CDN | USA / global | Cloudflare's published privacy and DPA terms; SCCs / DPF where applicable. |

---

## 9. Maintenance of this record

| | |
|---|---|
| Maintained by | Inventist LLC (sole operator) |
| Initial version | May 2, 2026 |
| Review cadence | At least annually, and whenever a new processing activity is introduced. |
| Storage | This document is stored in the inventist.io git repository at `/RECORD_OF_PROCESSING.md` and exported to PDF on each material update for off-line retention. |
| Disclosure | Not published. Provided to a supervisory authority on request. |
