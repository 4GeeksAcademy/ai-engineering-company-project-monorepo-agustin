# Implementation — Brasa Points Sign-up

## Delivered

- Simplified `uis/website/index.html` to the requested header/navigation, hero, benefits, contact/call-to-action, and footer areas. The contact email is included in the CTA area.
- Added `uis/website/application.html` as a separate Brasa Points customer sign-up page.
- Added vanilla JavaScript client-side validation for required names, email, date of birth, and the optional selections. Errors are associated with their fields and the first invalid field receives focus.
- A valid submission is intercepted and acknowledged in-page; it does not send or store submitted data.
- Updated the website README with page and local-run guidance.

## Design notes

- Both pages remain static HTML and use Tailwind CDN utilities with the Brasaland palette.
- No backend, persistence, email delivery, or network form submission was introduced.

## Verification record

See [verification.md](verification.md) for checks run and outstanding browser-level coverage.
