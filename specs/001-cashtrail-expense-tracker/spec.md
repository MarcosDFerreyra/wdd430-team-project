# Feature Specification: Cashtrail Personal Expense Tracker

**Feature Branch**: `001-cashtrail-expense-tracker`  
**Created**: 2026-11-05  
**Status**: Draft  
**Input**: User description: "Create a project specification for Cashtrail, a personal expense tracker for students and young adults. Users create their own spending categories, record expenses linked to a category, and see a monthly summary of totals per category. Include: a project title and description, the purpose and target audience, user stories for core workflows (sign up, log in, log out, create/read/update/delete categories, create/read/update/delete expenses, view monthly summary), acceptance criteria for each story, API endpoints, and implementation priority (P0/P1/P2)."

## Overview

**Project title**: Cashtrail — Personal Expense Tracker

**Description**: Cashtrail helps an individual keep track of spending by organizing expenses into personal categories and reviewing category totals for a month.

**Purpose**: Make it straightforward to record and understand day-to-day spending without requiring users to maintain a separate spreadsheet.

**Target audience**: Students and young adults who want a simple, private way to track personal expenses and review monthly spending patterns.

**Priority levels**:

- **P0 — MVP critical**: Required to create a private account and deliver the essential expense-tracking and monthly-review journey.
- **P1 — Core completeness**: Important management workflows that make the records and categories maintainable.
- **P2 — Later enhancement**: Valuable additions outside the requested first release. No P2-only feature is included in this specification.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Sign up (Priority: P0)

As a new user, I want to create an account so that I can keep my expense records private and available to me.

**Why this priority**: An account is the entry point to private, persistent expense tracking.

**Independent Test**: Complete account creation with valid details and verify that the user can proceed to their own Cashtrail account.

**Acceptance Scenarios**:

1. **Given** a visitor who has not registered, **When** they submit valid, unused sign-up details, **Then** an account is created and they receive a clear success outcome.
2. **Given** a visitor submits invalid details or details already in use, **When** they attempt to sign up, **Then** account creation is rejected with a helpful message and no duplicate account is created.
3. **Given** a newly registered user, **When** they open their account, **Then** they see only their own initially empty categories and expenses.

### User Story 2 - Log in (Priority: P0)

As a registered user, I want to log in so that I can access my saved categories and expenses.

**Why this priority**: Users must be able to return to their private records across visits.

**Independent Test**: Sign in with an existing account, verify access to its records, then attempt sign-in with invalid credentials.

**Acceptance Scenarios**:

1. **Given** a registered user with valid credentials, **When** they log in, **Then** they gain access to their own Cashtrail records.
2. **Given** invalid credentials, **When** a visitor attempts to log in, **Then** access is denied and the visitor receives a clear, non-sensitive error.
3. **Given** a user logs in on a later visit, **When** their account opens, **Then** their previously saved categories and expenses remain available.

### User Story 3 - Log out (Priority: P0)

As a signed-in user, I want to log out so that someone using the same device cannot continue to access my account.

**Why this priority**: A reliable way to end access protects personal financial information, especially on shared devices.

**Independent Test**: Log out and try to reopen a protected Cashtrail view without signing in again.

**Acceptance Scenarios**:

1. **Given** a signed-in user, **When** they choose to log out, **Then** their authenticated access ends and they are returned to a public or sign-in view.
2. **Given** a user has logged out, **When** they try to view or change a protected record, **Then** access is denied until they sign in again.

### User Story 4 - Create a category (Priority: P0)

As a signed-in user, I want to create spending categories so that my expenses can be organized in a way that suits me.

**Why this priority**: User-defined categories are central to Cashtrail's organizing model.

**Independent Test**: Create a uniquely named category and verify it appears in the user's category list and expense-entry choices.

**Acceptance Scenarios**:

1. **Given** a signed-in user submits a non-empty category name, **When** they save it, **Then** the category is created for that user and appears in their list.
2. **Given** a category name is empty or duplicates one of the user's existing category names, **When** the user saves it, **Then** the category is not created and the user is told what to correct.
3. **Given** two different users create categories with the same name, **When** each views their categories, **Then** each sees only categories belonging to their own account.

### User Story 5 - Read categories (Priority: P0)

As a signed-in user, I want to view my categories so that I can organize new expenses and manage existing ones.

**Why this priority**: Category selection and management require a dependable view of the user's own categories.

**Independent Test**: View the category list for an account containing several categories and for a newly created account with none.

**Acceptance Scenarios**:

1. **Given** a signed-in user has categories, **When** they open the category list, **Then** their categories are shown with their names.
2. **Given** a signed-in user has no categories, **When** they open the category list, **Then** they see a clear empty state and an option to create a category.
3. **Given** a user requests another user's category, **When** the request is made, **Then** the category's private details are not disclosed.

### User Story 6 - Update a category (Priority: P1)

As a signed-in user, I want to rename a category so that it continues to reflect how I describe my spending.

**Why this priority**: Renaming allows users to maintain their organization without losing history.

**Independent Test**: Rename a category and verify that its new name is shown while expenses remain associated with it.

**Acceptance Scenarios**:

1. **Given** a user owns a category, **When** they change its name to a valid, non-duplicate name, **Then** the new name is saved and displayed.
2. **Given** the category has expenses, **When** its owner renames it, **Then** those expenses remain linked to the renamed category.
3. **Given** a user submits an empty or duplicate name, **When** they try to save the change, **Then** the change is rejected and the existing category remains unchanged.
4. **Given** a user attempts to rename a category owned by someone else, **When** the change is submitted, **Then** no other user's data is changed or revealed.

### User Story 7 - Delete a category (Priority: P1)

As a signed-in user, I want to delete a category I no longer use so that my category list stays relevant.

**Why this priority**: Removing obsolete categories supports ongoing organization, while preserving expense history is essential.

**Independent Test**: Delete an unused category and attempt to delete a category that still has linked expenses.

**Acceptance Scenarios**:

1. **Given** a user owns a category with no linked expenses, **When** they confirm deletion, **Then** the category is removed from their list.
2. **Given** a category still has linked expenses, **When** its owner tries to delete it, **Then** deletion is prevented and the user is told to move or remove those expenses first.
3. **Given** a user tries to delete a category owned by someone else, **When** the request is submitted, **Then** no data is deleted or disclosed.

### User Story 8 - Create an expense (Priority: P0)

As a signed-in user, I want to record an expense and assign it to one of my categories so that my spending is tracked.

**Why this priority**: Recording categorized spending is the essential input to Cashtrail's monthly summary.

**Independent Test**: Create an expense with an amount, date, and owned category, then verify it appears in the expense list and the relevant monthly total.

**Acceptance Scenarios**:

1. **Given** a signed-in user has at least one category, **When** they submit a positive amount, a date, and one of their categories, **Then** the expense is saved under their account and linked to that category.
2. **Given** an expense has a non-positive or invalid amount, no date, or no valid category, **When** the user tries to save it, **Then** it is rejected with a helpful message and no expense is recorded.
3. **Given** a user tries to assign an expense to another user's category, **When** they submit it, **Then** the expense is rejected and neither user's private data is disclosed.
4. **Given** a valid expense has been saved, **When** the user views expenses for its month, **Then** the expense is present and included in that category's total.

### User Story 9 - Read expenses (Priority: P0)

As a signed-in user, I want to view my recorded expenses so that I can review what I spent and where it was categorized.

**Why this priority**: Users need to inspect their records to verify spending and understand summary totals.

**Independent Test**: View a user's expenses across multiple categories and verify that another account's expenses are not present.

**Acceptance Scenarios**:

1. **Given** a signed-in user has recorded expenses, **When** they open their expense list, **Then** each displayed expense shows its amount, date, and category.
2. **Given** a signed-in user has no expenses, **When** they open their expense list, **Then** they see a clear empty state and a way to record an expense.
3. **Given** a user requests another user's expense, **When** the request is made, **Then** the expense is not disclosed.

### User Story 10 - Update an expense (Priority: P1)

As a signed-in user, I want to correct an expense's amount, date, or category so that my records and summaries stay accurate.

**Why this priority**: Users need to correct mistakes without creating duplicate records.

**Independent Test**: Change an expense's amount, date, and category in separate cases and verify the record and affected monthly totals update.

**Acceptance Scenarios**:

1. **Given** a user owns an expense, **When** they save valid changes to its amount, date, or category, **Then** the saved expense reflects those changes.
2. **Given** an expense's date or category is changed, **When** the user views the affected monthly summaries, **Then** the expense is removed from the former month/category total and included in the new one.
3. **Given** a user submits invalid expense details or a category they do not own, **When** they attempt to update the expense, **Then** the change is rejected and the saved expense remains unchanged.
4. **Given** a user attempts to update an expense owned by someone else, **When** the request is made, **Then** no data is changed or disclosed.

### User Story 11 - Delete an expense (Priority: P1)

As a signed-in user, I want to delete an expense that I no longer want recorded so that my history and totals remain accurate.

**Why this priority**: Removing an erroneous or unwanted record is part of complete expense management.

**Independent Test**: Delete an expense and verify it is absent from the list and removed from its month's category and overall totals.

**Acceptance Scenarios**:

1. **Given** a user owns an expense, **When** they confirm deletion, **Then** the expense is removed from their records.
2. **Given** an expense is deleted, **When** the user next views its month, **Then** category and overall totals no longer include it.
3. **Given** a user attempts to delete an expense owned by someone else, **When** the request is made, **Then** no record is deleted or disclosed.

### User Story 12 - View monthly summary (Priority: P0)

As a signed-in user, I want to see monthly expense totals by category so that I can understand where my money went.

**Why this priority**: A clear monthly breakdown is Cashtrail's primary review outcome.

**Independent Test**: Seed expenses across several categories and months, open a selected month, and compare each displayed total and the overall total with the recorded expenses.

**Acceptance Scenarios**:

1. **Given** a signed-in user has expenses in a month, **When** they view that month, **Then** the summary shows a total for each category with expenses and an overall total that equals the sum of those category totals.
2. **Given** a user selects a different calendar month, **When** its summary is displayed, **Then** only expenses dated in the selected month contribute to the totals.
3. **Given** a selected month has no expenses, **When** the summary is displayed, **Then** the user sees a zero-total empty state rather than misleading or stale totals.
4. **Given** an expense is created, changed, or deleted, **When** the user views its affected month, **Then** the summary reflects the saved records.
5. **Given** another user has expenses in the selected month, **When** a user views their own summary, **Then** totals include only the signed-in user's expenses.

### Edge Cases

- An account with no categories or expenses receives clear empty states and a path to the next relevant action.
- Amounts must be valid positive monetary values; invalid or non-positive values are rejected without changing saved data.
- Category names must not be empty or duplicate another category name for the same user; names used by different users do not conflict.
- A category with linked expenses cannot be deleted until its expenses are moved to another owned category or deleted; this avoids silent loss of spending history.
- Updating an expense's date across month boundaries moves its amount between the affected monthly summaries.
- A monthly summary for a month without expenses shows zero totals and does not reuse values from another month.
- Requests made without an authenticated user, or for records belonging to another user, must not reveal or modify private records.
- Concurrent or repeated submissions must not create duplicate categories or expenses from a single user action.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The product MUST let a person create an account, log in, and log out.
- **FR-002**: The product MUST restrict personal categories, expenses, and summaries to their authenticated owner for every read and change.
- **FR-003**: A user MUST be able to create, list, rename, and delete their own spending categories.
- **FR-004**: A category name MUST be non-empty and unique among that user's categories.
- **FR-005**: The product MUST prevent deletion of a category that has linked expenses and explain how the user can resolve the dependency.
- **FR-006**: A user MUST be able to create, list, update, and delete their own expenses.
- **FR-007**: Each expense MUST have a positive monetary amount, a date, and a category owned by the same user; a description MAY be supplied.
- **FR-008**: All expenses in an account MUST use that account's single selected currency; currency conversion is outside this feature's scope.
- **FR-009**: The product MUST let a user view a selected calendar month's expense totals grouped by category and an overall total.
- **FR-010**: Monthly totals MUST be calculated from the user's saved expenses and reflect category, amount, date, and deletion changes.
- **FR-011**: The product MUST provide understandable validation and empty-state messages without exposing another user's information.
- **FR-012**: The user MUST be able to choose a month to review; the current calendar month is the initial selection.

### API Endpoint Expectations

The following paths describe the product's logical request/response contract and expected user-visible behavior. They define scope and priorities, not a required implementation or identity-provider protocol. A request for another user's resource must not disclose or change that resource.

| Method | Endpoint | Expected behavior | Priority |
|---|---|---|---|
| POST | `/api/auth/sign-up` | Create a user account from valid sign-up details; reject invalid or duplicate details. | P0 |
| POST | `/api/auth/login` | Authenticate a registered user and deny invalid credentials without disclosing sensitive account details. | P0 |
| POST | `/api/auth/logout` | End the current user's authenticated access. | P0 |
| GET | `/api/categories` | List only the current user's categories. | P0 |
| POST | `/api/categories` | Create a non-empty category name that is unique for the current user. | P0 |
| GET | `/api/categories/{categoryId}` | Return one category only when it belongs to the current user. | P1 |
| PATCH | `/api/categories/{categoryId}` | Rename the current user's category after validating the new name. | P1 |
| DELETE | `/api/categories/{categoryId}` | Delete the current user's category only when no expenses reference it. | P1 |
| GET | `/api/expenses` | List only the current user's expenses, including amount, date, and category. | P0 |
| POST | `/api/expenses` | Create an expense with a positive amount, date, and category owned by the current user. | P0 |
| GET | `/api/expenses/{expenseId}` | Return one expense only when it belongs to the current user. | P1 |
| PATCH | `/api/expenses/{expenseId}` | Update the current user's expense after validating all changed fields and category ownership. | P1 |
| DELETE | `/api/expenses/{expenseId}` | Delete the current user's expense and remove it from calculated totals. | P1 |
| GET | `/api/summary/monthly?month=YYYY-MM` | Return the current user's category totals and overall total for the requested calendar month. | P0 |

### Key Entities *(include if feature involves data)*

- **User account**: An individual user's identity, sign-in state, and selected account currency; owns all of that user's categories and expenses.
- **Category**: A user-owned spending label with a name; may be linked to multiple expenses.
- **Expense**: A user-owned monetary record with an amount, date, category, and optional description.
- **Monthly summary**: A calculated view of one user's expenses for one calendar month, grouped by category and including an overall total; it is derived from expenses rather than an independently editable record.

### Assumptions

- Each account uses one currency, selected during account setup or before recording the first expense; Cashtrail does not convert between currencies in this feature.
- Calendar months are interpreted using the user's account locale/time-zone settings. An expense belongs to the month containing its recorded date.
- Sign-up and sign-in use the project's established account identity experience; the logical authentication endpoints above describe outcomes and do not prescribe a particular identity protocol.
- Category names need to be unique only within one user's account. Category deletion never deletes linked expenses implicitly.
- The monthly summary initially opens to the current calendar month and lets the user select other months.
- Authentication and the user's account currency are prerequisites for private expense tracking; no bank, payment, or external financial-account integration is included.

### Implementation Priority

- **P0**: Sign up, log in, log out, create/read categories, create/read expenses, and view monthly summaries. These are needed for a user to securely record spending and receive the primary value.
- **P1**: Update/delete categories and update/delete expenses, plus individual category/expense detail requests. These complete the requested record-management workflows.
- **P2**: No P2-only capability is defined in this first-release scope; future enhancements should be prioritized separately rather than assumed.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: At least 90% of first-time users in usability testing can complete sign-up and reach their account in under 2 minutes.
- **SC-002**: At least 90% of users can record a valid categorized expense in under 1 minute without assistance.
- **SC-003**: For all tested accounts and selected months, every displayed category total and overall total exactly matches the sum of the account's saved expenses for that month.
- **SC-004**: In all ownership-isolation acceptance tests, users can neither view nor change another user's categories, expenses, or summary data.
- **SC-005**: After a user logs out and later logs back in, 100% of their saved categories and expenses remain available and unchanged.
- **SC-006**: At least 90% of test users can identify the highest-spending category for a selected month using the monthly summary without help.
