# Feature Specification: Cashtrail

**Feature Branch**: `001-cashtrail-expense-tracker`  
**Created**: 2026-11-05  
**Status**: Approved  

## Overview

**Project title**: Cashtrail

**Description**: Cashtrail is a personal expense tracker for students and young adults. Users create their own spending categories, record expenses linked to a category, and see a monthly summary of where their money goes.

The initial release focuses on core workflows: account access, category management, expense management, and a monthly summary.

## Purpose & Target Audience

- **Audience**: Students and young adults who want a simple way to track personal spending
- **Purpose**: Help users understand where their money goes each month without maintaining a spreadsheet

## User Stories

1. **Account access**: As a user, I want to sign up, log in, and log out so that my expense records stay private.
2. **Manage categories**: As a user, I want to create, rename, and delete spending categories so that I can organize expenses my own way.
3. **Manage expenses**: As a user, I want to add, edit, and delete expenses linked to a category so that my spending is recorded accurately.
4. **View expenses**: As a user, I want to view a list of my expenses so that I can review what I spent.
5. **Monthly summary**: As a user, I want to see a monthly summary with totals per category so that I can understand where my money went.

## Acceptance Criteria

### Story 1 - Account access

1. **Given** a new visitor, **When** they complete sign-up, **Then** an account is created and they are signed in.
2. **Given** a signed-out user, **When** they try to open a protected page, **Then** they are redirected to sign in.
3. **Given** any signed-in user, **When** they view or change data, **Then** they can only access their own categories and expenses.

### Story 2 - Manage categories

1. **Given** a signed-in user, **When** they submit a non-empty, unique category name, **Then** the category is saved and appears in their list.
2. **Given** an empty or duplicate name, **When** the form is submitted, **Then** the system shows a validation message and does not save it.
3. **Given** a category that still has expenses, **When** the user tries to delete it, **Then** deletion is blocked and a message explains why.

### Story 3 - Manage expenses

1. **Given** a signed-in user with at least one category, **When** they submit a positive amount, a date, and a category, **Then** the expense is saved.
2. **Given** a missing or invalid amount, date, or category, **When** the form is submitted, **Then** the system highlights the error and does not save.

### Story 4 - View expenses

1. **Given** a user with expenses, **When** they open the expenses page, **Then** each expense shows its amount, date, and category.
2. **Given** a user with no expenses, **When** they open the page, **Then** an empty-state message with an "Add expense" action is shown.

### Story 5 - Monthly summary

1. **Given** a selected month, **When** the summary loads, **Then** it shows a total per category and an overall total for that month only.
2. **Given** a month with no expenses, **When** it is selected, **Then** the summary shows zero totals and an empty-state message.

## Main Views

- **Dashboard / Monthly Summary**: totals per category for the selected month
- **Expenses**: list, add, edit, and delete expenses
- **Categories**: list, create, rename, and delete categories
- **Sign in / Sign up**: provided by Clerk

## Technical Requirements

- **Framework**: Next.js App Router
- **Language**: TypeScript in strict mode
- **Styling**: Tailwind CSS
- **Data**: Supabase (PostgreSQL)
- **Auth**: Clerk for sign-up, sign-in, and session management
- **Hosting**: Vercel
- **Code quality**: ESLint and Prettier, feature-branch workflow with pull requests
- **Performance**: Server components by default; client components only where interactivity is needed

## Core API Endpoints

Authentication is handled by Clerk, so no custom auth endpoints are required.

| Method | Endpoint |
|---|---|
| GET | `/api/categories` |
| POST | `/api/categories` |
| PATCH | `/api/categories/:id` |
| DELETE | `/api/categories/:id` |
| GET | `/api/expenses` |
| POST | `/api/expenses` |
| PATCH | `/api/expenses/:id` |
| DELETE | `/api/expenses/:id` |
| GET | `/api/summary?month=YYYY-MM` |

## Implementation Priority

- **P0**: Sign up, log in, log out, create and list categories, create and list expenses, monthly summary
- **P1**: Rename and delete categories, edit and delete expenses
- **P2**: Budgets per category, spending charts, CSV export, recurring expenses, multi-currency support
