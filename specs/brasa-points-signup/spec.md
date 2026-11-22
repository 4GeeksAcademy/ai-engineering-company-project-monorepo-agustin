# Brasa Points Sign-up — Specification

## Goal

Provide a separate Brasa Points customer sign-up page, linked from the Brasaland landing page, with client-side validation only. No application backend or persistence is included.

## Scope

- Preserve the landing page's existing identity and style while limiting it to header/navigation, hero, key benefits, contact/call to action, and professional footer.
- Remove the embedded sign-up form from the landing page.
- Add a dedicated application/sign-up page and link to it from relevant landing-page calls to action.
- Keep the site static HTML and use Tailwind CDN utility classes, with vanilla JavaScript for custom validation.

## Form fields

Required:

- First name
- Last name
- Email
- Date of birth

Optional:

- Country
- Preferred restaurant location

## Validation and submission behavior

- Validate all fields on submit and provide specific, field-level, helpful messages.
- Required text fields must not be empty after trimming whitespace.
- Email must be a well-formed email address.
- Date of birth must be a real, parseable date and cannot be in the future.
- Country and preferred location may be left blank; if selected/entered, values must pass any applicable control constraints.
- Prevent submission when any invalid value is present; focus the first invalid field and expose errors accessibly.
- On valid submission, prevent network submission and show a clear success confirmation; do not persist or transmit personal data.

## Accessibility and presentation

- Semantic HTML, associated labels, keyboard-accessible controls, and accessible error/status announcements.
- Keep responsive layout and existing Brasaland/Tailwind visual language.

## Out of scope

- Backend/API integration, database storage, email delivery, authentication, legal/privacy policy drafting, or collection beyond the approved fields.
