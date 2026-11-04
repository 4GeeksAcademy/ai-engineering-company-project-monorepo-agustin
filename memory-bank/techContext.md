# Technical Context

## Tech Stack

The project will use the following stack:

- Frontend: React with TypeScript
- Backend: Node.js with Express
- Database: MongoDB
- Authentication: JWT-based

## Architectural Decisions

- **Centralized API:** Use a Node.js/Express backend as the central entry point for Brasaland applications and integrations, rather than starting with multiple independent backend services.
- **MVC backend structure:** Separate data access/models, request handling/controllers, and routes to keep backend responsibilities organized.
- **Component-based frontend:** Build the React UI from reusable components and use hooks for state and lifecycle-related behavior.
- **Typed frontend:** Use TypeScript in the frontend to make component and API data contracts clearer and reduce type-related errors.
- **JWT authentication:** Protect routes and API operations with token-based authentication. Authorization rules should restrict access according to user role and business function.
- **MongoDB persistence:** Use MongoDB as the selected database. Define and validate schemas for core entities and document relationships and data ownership clearly.

## Technical Constraints

- **Existing POS systems are disconnected:** Colombia and Florida use different POS systems, with no existing central integration. Ingestion must accommodate each system's available interfaces; batch imports may be needed where APIs or webhooks are unavailable.
- **Two countries and currencies:** Sales must retain the original currency (COP or USD). Consolidated reporting must record conversion rates and effective timestamps rather than overwrite original amounts.
- **Bilingual operations:** The business operates in Spanish and English. User-facing content and training data should allow for both languages, even if support is introduced incrementally.
- **Sensitive customer and employee data:** Access to personal, HR, and customer information must be limited by role. Data collection, retention, and processing must be reviewed for applicable Colombian and US requirements before production use.
- **Real-time visibility depends on source data:** Dashboards and alerts can only be as current and reliable as the POS integrations and location connectivity allow. Data freshness and integration failures should be visible to users/operators.
- **Data consistency in a document database:** Sales, customers, suppliers, and locations have different relationships and reporting needs. The MongoDB data model must preserve referential integrity where required and support reliable cross-location reporting.
- **Project is starting from limited infrastructure:** There is no current central API or consolidated data platform. Integrations, data definitions, access controls, and operational monitoring need to be established as part of the implementation.

The stack and architecture above are the selected project direction. Detailed deployment, hosting, API contracts, POS integration mechanisms, and regulatory controls still need to be specified as implementation decisions.
