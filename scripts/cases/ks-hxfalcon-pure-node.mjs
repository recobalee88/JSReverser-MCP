function printAbstractCaseGuide() {
  console.log(`Case: 某手 falcon 风控参数
Category: 风控参数
Status: abstract-case
Runtime: pure-node
Scope: non-runnable

Kuaishou __NS_hxfalcon Abstract Case (Non-runnable)

This case intentionally does NOT contain executable signing code.
It only defines the workflow and acceptance criteria for repeatable analysis.

Required workflow:
1) Target API split:
   - Weak-check sample: \`/rest/wd/kconf/get\`
   - Strict-check sample: \`/rest/wd/ugH5App/tag/text/feed/recent\`
   - Do NOT judge success by HTTP 200 only.
2) Browser-side chain confirmation:
   - Confirm signing call site shape: \`Ee.call("$encode", [payload, callbacks])\`.
   - Confirm cat-version retrieval: \`Ee.call("$getCatVersion")\`.
   - Confirm VM object capability: methods include \`eval/run/call/createFiber\`.
3) Local pure-Node rebuild plan:
   - Rebuild minimum browser-like env: \`window/document/navigator/storage/performance\`.
   - Load local runtime module and verify signer object availability.
   - Generate one sign for weak-check payload, one sign for strict-check payload.
4) Verification loop:
   - Send weak-check request with no/fake/real sign and record \`result/hasData/errorMsg\`.
   - Send strict-check request with no/fake/real sign and record same fields.
   - Store first divergence note and next action.
5) Equality check against browser capture:
   - Compare response body shape between Node request and MCP-captured browser request.
   - Allow \`host-name\` differences (gateway instance variance).
   - Focus on business keys under \`data\`.
6) Repository boundary:
   - Keep this file abstract (workflow + criteria only).
   - Keep executable experiments under \`artifacts/tasks/<task-id>/\`.

Acceptance criteria:
- Weak-check API: real sign should return \`result=1\`, but fake/no-sign may also pass.
- Strict-check API: only real sign returns \`result=1\` and \`hasData=true\`.
- Node vs browser response: core \`data\` shape is aligned (excluding dynamic host fields).

Failure classification:
- \`UND_ERR_CONNECT_TIMEOUT\`: network path issue, not signing logic issue.
- \`result=50\` + sign-fail message on strict API: signing chain not fully reconstructed.

Security constraints:
- No raw production cookie/token bundle in repository case files.
- No complete reusable signing implementation in \`scripts/cases/\`.
- No fixed production request pack in repository case files.

References:
- scripts/cases/jd-h5st-pure-node.mjs
- docs/reference/case-safety-policy.md
`);
}

printAbstractCaseGuide();
