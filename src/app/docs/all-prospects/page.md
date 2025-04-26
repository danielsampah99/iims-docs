---
title: All Prospects Management
nextjs:
    metadata:
        title: All Prospects Management | Integrated Insurance Management System
        description: Manage all prospect records with search, pagination, and tracking capabilities. Create new prospects and monitor lead conversion.
---

This section provides complete oversight of the prospects pipeline, including search functionality, paginated listings, and tools for creating and tracking potential customers.

---

## All Prospects Listing

The prospect listing displays all potential customers in a paginated table format with essential contact information and management tools.

<!-- TODO: Update when the page is loaded and beefed with data -->
![All Prospects Listing Interface](/all-prospects-list.webp)

### Accessing the Prospect List

1. Log into the Insurance Management System
2. Select "Prospects" from the Sales menu in the sidebar
3. The system displays the default prospect listing view

### Prospect Table Structure

The prospects table includes these columns:



**#** Sequence number | 1, 2, 3... |

**Number** System-generated prospect ID. Eg: PROS0000123

**Name** Prospect's full name. Eg: Fatou Ndiaye

**Contact Person** Primary contact. Eg: Mr. Jallow

**Phone** Primary contact number: Eg: +220 123 4567

**Email** Electronic contact address. Eg: fndiaye@example.com

### Table Features

1. **Pagination**:
   - Navigate through prospect pages using numbered links
   - Default display: 500 records per page
   - System shows current range (e.g., "Showing 1-20 of 45")
   ![Pagination Controls](/all-prospects-pagination.webp)

2. **Search Functionality**:
   - Instant search across all prospect fields
   - Partial match support (e.g., "222" finds phone numbers)
   - Clears with single click
   ![Search Bar](/all-prospects-search.webp)

3. **Action Buttons**:
   - **New Prospect**: Opens the prospect creation form
   - **Refresh**: Reloads current view
   ![Action Buttons](/all-prospects-actions.webp)

---

## Prospect Search Options

### Basic Search
- Located above the prospect table
- Searches all columns simultaneously
- Updates results with each keystroke

---

## Working With Prospects

### Creating New Prospects
1. Click "New Prospect" button
2. Complete the creation form
3. System assigns PROS number automatically

<!-- ### Prospect Actions
- **Convert to Customer**: Transforms prospect into active client
- **Add Note**: Logs interaction details
- **Assign**: Reassigns to different officer
- **Follow-up**: Schedules next contact

### Status Indicators
- **New**: Recently added (blue)
- **Contacted**: Initial outreach made (yellow)
- **Nurturing**: Ongoing communications (green)
- **Cold**: No recent activity (gray) -->

---

## Best Practices for Prospect Management

**Clear Naming**: Use consistent name formats

---

## System-Generated Prospect IDs

The system automatically assigns prospect IDs in this format:
- Prefix: PROS
- 7-digit sequential number (e.g., PROS0000456)
- Numbers maintain sequence regardless of deletions

Example prospect flow:
1. PROS0000456 created (Fatou Ndiaye)
2. After 2 weeks: Converted to CUST0000789
3. Original PROS record archived
