---
title: Customer Management
nextjs:
    metadata:
        title: Customer Management | Integrated Insurance Management System
        description: Manage all customer records with search, pagination, and export capabilities. Create new customers and maintain existing relationships.
---

This section provides complete control over your customer database, including search functionality, paginated listings, and tools for creating new customer records or exporting existing data.

---

## All Customers Listing

The customer listing displays all registered customers in a paginated table format with search capabilities and action buttons.

### Accessing the Customer List

1. Log into the Insurance Management System
2. Select "Customers" from the Operations menu in the sidebar
3. The system displays the default customer listing view

![Customer Listing Interface](/all-customers-list.webp)

### Customer Table Features

1. **Pagination**:
   - Navigate through customer pages using numbered page links
   - Adjust items per page (default: 20 records)
   - System displays current page and total records
   ![Pagination](/all-customers-pagination.webp)

2. **Search Functionality**:
   - Search across all customer fields
   - Real-time filtering as you type
   - Supports partial matches (e.g., "BIN" finds BINTA SINGHATEN)
   ![Search Bar](/all-customers-search.webp)

3. **Action Buttons**:
   - **Export**: Download customer data in CSV or Excel format
   - **New Customer**: Open the customer creation form
   ![Action Buttons](/all-customers-actions.webp)

---

## Customer Search Options

The system provides multiple ways to locate customer records:

### Basic Search
- Located at the top of the customer listing
- Searches across all fields simultaneously
- Displays results as you type

### Advanced Search
1. Click the "Advanced Search" toggle
2. Filter by specific fields:
   - Customer ID range
   - Name (supports partial matches)
   - Phone number
   - Address keywords
   - Balance range
3. Combine multiple filters for precise results

---

## Exporting Customer Data

The system provides a controlled export process with field selection capabilities and PDF-only output.

### Export Workflow

1. **Initiate Export**:
   - Click the "Export" button in the customer listing toolbar
   - A modal dialog appears with all available fields listed

2. **Field Selection**:
   - All fields are initially toggled OFF (default state)
   - Toggle switches to select specific fields for export
   - Available fields include:
     - Customer ID
     - Name
     - Phone
     - Address
     - Balance
     - Date Created
     - Last Updated
     - Relationship Officer

3. **Export Execution**:
   - Click "Generate PDF" to confirm selection
   - System processes the request and:
     - **Success**: Automatically downloads the PDF file
     - **Failure**: Redirects to 404 error page

![Export Field Selection Dialog](/all-customers-export-dialog.webp)

### Error Handling

If the export fails (due to system error or invalid parameters):

1. The system immediately redirects to a 404 error page
2. The URL remains unchanged from the customer listing page
3. Error details are logged in the system backend
4. Users should:
   - Refresh the page
   - Verify network connection
   - Try again with fewer fields selected
   - Contact support if issue persists

### Export Limitations

- **Format**: PDF only (no CSV/Excel options)
- **Size Limit**: Maximum 500 records per export
- **Frequency**: 10 exports per minute (rate-limited)
- **Data Freshness**: Reflects system state at time of export initiation

### Best Practices for Export

1. Select only necessary fields to reduce PDF size
2. For large customer sets, use pagination and export in batches
3. Verify successful download before navigating away
4. Check 404 page refresh behavior with your IT team
---

## Creating New Customers

To add a new customer record:

1. Click the "New Customer" button
2. Complete the customer creation form (see detailed field explanations below)
3. Submit the form
4. System generates a new Customer ID (e.g., CUST0000047)

---

## Managing Customer Records

For existing customers in the listing:

1. **View Details**: Click any row to see complete customer information
2. **Edit**: Modify customer details from the view screen
3. **Add Note**: Attach internal notes to customer records
4. **Deactivate**: Flag inactive customers (retains history)

---

## System-Generated Customer IDs

The system automatically assigns customer IDs in this format:
- Prefix: CUST
- 7-digit sequential number (e.g., CUST0000045)
- Numbers maintain sequence even if customers are deleted

Example IDs from your system:
- CUST0000001 (ROHET SAYE)
- CUST0000045 (ALEU B.M. CEESAY)
- CUST0000031 (HERBERT SAMUEZ ROBIN)

---

## Best Practices for Customer Management

1. **Regular Updates**: Keep customer contact information current
2. **Consistent Formatting**: Use standard formats for phone numbers
3. **Duplicate Checks**: Search before creating new records
4. **Data Backups**: Regularly export customer data
5. **Access Control**: Limit edit permissions appropriately
