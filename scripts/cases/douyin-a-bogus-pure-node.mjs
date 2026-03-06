function printAbstractCaseGuide() {
  console.log(`Case: 某音 a-bogus 参数
Category: 参数签名
Status: abstract-case
Runtime: pure-node
Scope: non-runnable

Douyin a_bogus Abstract Case (Non-runnable)

This case intentionally does NOT contain executable signing code.
It defines the end-to-end reconstruction workflow and acceptance criteria.

Required workflow:
1) Target request identification:
   - Confirm API path: \`/aweme/v1/web/solution/resource/list/\`.
   - Capture full query shape (excluding secrets):
     \`spot_keys/app_id/version_code/webid/msToken/.../a_bogus\`.
   - Keep one baseline successful browser sample (status_code=0).
2) Generation chain confirmation (browser evidence first):
   - Hook \`URLSearchParams.append/set\` and only log key \`a_bogus\` writes.
   - Hook \`XMLHttpRequest.open\` and correlate with same request URL.
   - Confirm stack segment:
     \`bdms.js: d -> X -> n\`
     and runtime wrapper:
     \`runtime(.stable).js: value -> value -> l\`.
3) Parameter contract extraction:
   - Determine whether signer consumes full URL or path+query.
   - Record dependence candidates:
     query ordering, URL encoding, time fields, webid/msToken coupling.
   - Verify output contract: 
     \`a_bogus\` exists, non-empty, request returns \`status_code=0\`.
4) Local pure-Node rebuild plan:
   - Build minimal harness first (no browser):
     request builder + deterministic query ordering + verifier.
   - Add env patching only when required by evidence:
     \`window/document/navigator/location/storage/crypto/performance\`.
   - One patch per loop; log first divergence after each retry.
5) Verification loop:
   - A/B test request in Node:
     no-sign / stale-sign / candidate-sign.
   - Compare:
     HTTP status, \`status_code\`, response schema, body preview length.
   - Success gate: HTTP 200 + \`status_code=0\` + expected schema keys.
6) Drift monitoring:
   - Watch script drift:
     \`runtime-stable.js\`, \`bdms.js\`, \`sdk-glue.js\` URLs and sizes.
   - On drift, re-run: hook capture -> contract extraction -> verifier.
7) Repository boundary:
   - Keep \`scripts/cases/\` abstract and non-runnable.
   - Put executable experiments only under:
     \`artifacts/tasks/<task-id>/run/\`.

Acceptance criteria:
- Browser-side evidence includes at least one \`a_bogus\` append event with stack.
- Node verifier can replay one successful API call with captured valid sample.
- First-divergence note exists for each failed reconstruction iteration.
- Case output includes env dependency checklist and retry decision table.

Failure classification:
- HTTP non-200: transport/network/gateway issue.
- HTTP 200 + non-zero \`status_code\`: sign/parameter mismatch likely.
- HTTP 200 + \`status_code=0\` but schema mismatch: endpoint/version drift.

Security constraints:
- No raw production cookie bundle in repository case files.
- No complete reusable signer implementation in \`scripts/cases/\`.
- No fixed long-term valid parameter package in repository case files.

Implementation path:
- \`artifacts/tasks/<task-id>/\`

References:
- scripts/cases/jd-h5st-pure-node.mjs
- scripts/cases/ks-hxfalcon-pure-node.mjs
- docs/reference/case-safety-policy.md
`);
}

printAbstractCaseGuide();
