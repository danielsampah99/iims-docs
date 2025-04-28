---
title: Customer Account Statement
nextjs:
    metadata:
        title: Customer Account Statement | Integrated Insurance Management System
        description: Comprehensive guide to generating and viewing customer account statements in the Insurance Management System. Learn how to set parameters, view transaction details, and export statements in various formats.
---

This section provides detailed guidance on generating and viewing customer account statements within the Integrated Insurance Management System. Learn about setting statement parameters, understanding the statement layout, viewing transaction details, and exporting statements in different formats.

---

## Customer Account Statement Interface

The Customer Account Statement interface allows staff to generate comprehensive financial statements for individual customers. These statements provide a detailed overview of a customer's financial transactions within a specified time period.

### Accessing the Account Statement

1. Log into the Insurance Management System
2. Select "Statements" from the Operations menu in the sidebar, or
3. Access directly from a customer's preview page by clicking the "Customer Statement" button
4. The system will display the Account Statement generation interface

![Customer Account Statement Interface for Royal Insurance Gambia Limited](/account-statement.webp)

---

## Understanding the Account Statement Layout

The Account Statement page is divided into two main sections: the parameter selection area and the statement display area. Below is a detailed explanation of each component and its purpose in the system.

### Parameter Selection Area

This section allows users to define the parameters for generating the statement:

* **Account**: Input field for entering the customer account number (e.g., CUST0000001). This field includes a search button with a magnifying glass icon to look up customers.

* **Customer Name**: Display field showing the name associated with the entered account number (e.g., ROHEY SAYE). This field automatically populates after a valid account number is entered or selected.

* **Start Date**: Date picker for selecting the beginning of the statement period. This defines the earliest transaction date to include in the statement.

* **End Date**: Date picker for selecting the end of the statement period. This defines the latest transaction date to include in the statement.

* **Branch**: Dropdown selector for filtering transactions by a specific company branch. Options typically include "All" and specific branch names.

* **Type**: Dropdown to select the level of detail for the statement. Options include:
  - Detailed: Shows all individual transactions
  - Daily: Shows only Transactions done on a specific day
  - Monthly: Shows only Transactions done in a specific month

* **Run**: Button that processes the parameters and generates the statement based on the selected criteria. Clicking this button displays the statement in the viewer below.

* **Excel**: Button that exports the generated statement to Microsoft Excel format for further analysis or record-keeping. This button becomes available after the statement is generated.

### Statement Viewer Area

Once generated, the statement displays in a document viewer with the following components:

* **Zoom Controls**: Buttons to adjust the statement view size (zoom in/out, fit to width).

* **Page Navigation**: Controls to move between pages for multi-page statements.

* **Print and Export Options**: Buttons for printing the statement or exporting to various formats.

## Account Statement Content

The generated statement contains comprehensive customer financial information:

### Header Section

* **Company Information**: Royal Insurance Gambia Limited name, logo, and address.

* **Statement Title**: Clearly identifies the document as an "Account Statement".

### Customer Information

* **Name**: The customer's full name as registered in the system.

* **Account No.**: The unique customer identifier in the system.

* **Opening Balance**: The customer's balance at the start of the selected period.

* **Closing Balance**: The customer's balance at the end of the selected period.

* **Balance Type**: Indicates whether the balance is a debit (DR) or credit (CR).

* **Period**: The date range covered by the statement (e.g., From 2025-04-28 to 2025-04-28).

### Detailed Transactions

A tabular presentation of all transactions within the selected period:

* **Date**: The date when each transaction occurred.

* **Reference**: Unique transaction identifier or reference number.

* **Narration**: Description of the transaction (e.g., "Balance b/f" for brought forward balance).

* **Cheque**: Cheque number if applicable to the transaction.

* **Debit**: Amount debited from the account in the transaction.

* **Credit**: Amount credited to the account in the transaction.

* **Balance**: Running balance after each transaction.

### Footer Information

* **Total**: Sum totals for the Debit and Credit columns.

* **Final Balance**: The closing balance after all transactions.

* **Print Information**: Shows who generated the report and when (e.g., "Printed by danny@globalinformics.com - 2025-04-28").

## Account Statement Functions

### Generating a Statement

To create a customer account statement:

1. Enter the customer account number or use the search button to select a customer
2. Verify the customer name displays correctly
3. Set the desired Start Date and End Date for the statement period
4. Select the appropriate Branch if filtering by branch is needed
5. Choose the statement Type (Detailed or Summary)
6. Click the "Run" button to generate the statement
7. The statement appears in the viewer area below the parameters

### Searching Within a Statement

To locate specific information within a generated statement:

1. Enter search terms in the Search field at the top-right
2. Click "Go!" to initiate the search
3. The viewer highlights matching results within the statement
4. Use navigation buttons to move between multiple search results

### Exporting a Statement

To save or share the statement in different formats:

1. Generate the statement by clicking "Run"
2. For Excel format:
   - Click the "Excel" button to download the statement as an Excel file
3. For other formats, use the document viewer's export options:
   - PDF: For portable document format
   - Print: To send the statement directly to a printer
   - Other formats may include CSV, XML, or text depending on system configuration

## Best Practices for Customer Statements

To effectively use the Account Statement feature:

* Verify the customer account number before generating statements
* Select appropriate date ranges to capture relevant transaction history
* Use the detailed view for complete transaction information and summary view for quick overviews
* Export statements to Excel when further analysis or calculations are needed
* Save generated statements to the customer's electronic file for future reference
* Generate statements before customer meetings or when reviewing accounts
* Use the search function to quickly locate specific transactions in lengthy statements
* Consider regular statement generation as part of customer relationship management
* Include appropriate date ranges when investigating specific transactions or discrepancies
* Ensure printed statements are properly secured to maintain customer privacy
