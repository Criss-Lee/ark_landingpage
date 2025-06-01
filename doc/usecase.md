You are a technical strategist creating a full **Korean** Use Case Document for the service below. Please write it in **Markdown**, using clear stepwise flows and exception logic.

<actors>
- Visitor: Enters the landing page and fills out the form.
- System: Receives input and sends it to the designated webhook endpoint.
</actors>

<core-flows>
1. Visitor opens the landing page.
2. Visitor inputs name, contact info, and optional message.
3. Visitor clicks “Submit”.
4. System validates input.
5. If valid, system sends POST request to:
   https://hook.eu2.make.com/243bsiu38f92hsu6v5pctvz34n11qcv1
6. Visitor sees confirmation message (“Your info has been received!”)
</core-flows>

<edge-cases>
- Input missing required fields (name/contact)
- Webhook endpoint is down or times out
- User refreshes during submission
</edge-cases>

<business-rules>
- No login required
- POST payload must include all form fields in JSON format
- No data stored locally or persistently
- Only one submission per page load
</business-rules>

Use case document must include the following in Korean:

<table-of-contents>
- Actor Definitions
- Use Case Scenarios
- Main Steps
- Exception Handling
- Comprehensive Actor Definitions
- Detailed Use Case Scenarios
- Main Steps and Flow of Events
- Alternative Flows and Edge Cases
- Preconditions and Postconditions
- Business Rules and Constraints
- Exception Handling Procedures
- User Interface Considerations
- Data Requirements and Data Flow
- Security and Privacy Considerations
</table-of-contents>

<Formatting-Guidelines>
- Output in Korean  
- Use step-by-step numbered lists for flows  
- Organize exception logic in tables  
- End each flow with “Verification:” line  
- Use pure Markdown with no code blocks
