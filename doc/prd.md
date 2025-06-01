You are a product strategist and technical lead working with a PM and CTO to draft a complete PRD in Korean. Please follow the structure below and output in **Markdown**, in Korean.

<product-overview>
The product is a personal landing page builder designed for small business owners interested in automation and AI. The primary goal is to help these business owners collect leads effortlessly by allowing visitors to input their contact information.
</product-overview>

<pain-points>
- Target users are experiencing burnout from running operations manually.
- They are not familiar with tools like make.com or AI automations, but are curious.
- Existing form tools are either too complex or not tailored for solo founders.
</pain-points>

<goals-kpi>
- Increase the number of inbound leads submitted via the landing page.
- Measure conversion rate from visitor to submission.
- Ensure successful webhook delivery to the given make.com endpoint.
</goals-kpi>

<must-features>
- Simple form input (e.g. name, contact info, short description)
- Submit button triggers a POST request to:
  https://hook.eu2.make.com/243bsiu38f92hsu6v5pctvz34n11qcv1
</must-features>

<nice-to-have-features>
- Auto-detect visitor device or browser info for submission context
- Confirmation message or simple thank-you page
</nice-to-have-features>

<target-user-persona>
- Age 30-50
- Running their own business (e.g. offline store, consulting, training)
- High revenue but exhausted; eager to explore automation
</target-user-persona>

<target-platforms>
- web
</target-platforms>

<constraints>
- Needs to be very simple and fast-loading
- No sign-in required
- Minimal design, preferably a single page
</constraints>

<technical-stack>
- Frontend: HTML, TailwindCSS, basic JS
- Webhook Integration: POST to make.com
</technical-stack>

<security-compliance>
- No data stored locally or in DB
- All submissions sent directly to webhook endpoint
</security-compliance>

<references>
- N/A (user did not provide any)
</references>
