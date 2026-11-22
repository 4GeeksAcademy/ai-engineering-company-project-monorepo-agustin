# Brasaland Public Website

Static, semantic HTML public website for Brasaland. Styling uses Tailwind CSS through its CDN; the landing page includes Schema.org `Restaurant` JSON-LD. `application.html` is a separate Brasa Points customer sign-up page; its client-side vanilla JavaScript validation is implemented in `validation.js`.

## Run locally

From the repository root, run:

```bash
npx --yes http-server uis/website -p 8080
```

Open the URL printed by `http-server` (typically `http://127.0.0.1:8080`). This works in Codespaces; forward port 8080 if prompted. An internet connection is needed for the Tailwind CDN and remote photography.

Open `/` for the landing page or `/application.html` for Brasa Points sign-up. The form validates the submitted data in the browser, then shows a confirmation; it does not send or store personal information. Connect a secure backend and review privacy requirements before production use.
