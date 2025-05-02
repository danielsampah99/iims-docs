---
title: New Fire Policy Creation
nextjs:
    metadata:
        title: New Fire Policy Creation | Integrated Insurance Management System
        description: Comprehensive guide for underwriting new fire insurance policies with detailed information on customer data, property specifications, coverage options, and premium calculations.
---

A fire policy is the product an insurance company offers to protect its customers against financial loss due to damage to property from fire, lightning, and other covered perils. This section provides complete instructions for underwriting new fire insurance policies, with detailed explanations of all form fields, calculation methods, and policy management features. { %.text-justify % }

---

## Navigating to the Fire Policy Creation form
1. Login to the Integrated Insurance Management System, Navigate to the **Policies** Section of the sidebar and from the list of risk classes:
* Motor Policies
* **Fire Policies**
* Accident Policies
* Engineering Policies
* Bond Policies
* Marine Policies
* Oil & Gas Policies

2. To underwrite a **Fire Policy**, click on the "New Non-Motor Policy" button from the "Policies" section, then select "FIRE" from the Risk Class dropdown to access the __form__ grouped into sections of customer, intermediary agency, Policy Information, other details and premium calculations.

## New Fire Policy Form Overview

The New Fire Policy form is a comprehensive interface for creating property insurance policies split into multiple sections for customer, property details, policy information, and premium calculations.

![New Fire Policy Form Interface](/new-fire-policy-form.webp)

### Form Organization

The New Fire Policy form is organized into several main sections:

1. **Basic Policy Information**: Core policy identifiers and status
2. **Customer Information**: Policyholder details
3. **Intermediary Information**: Broker or agent details (if applicable)
4. **Policy Information**: Coverage details, dates, and calculations
5. **Premium Computation**: Detailed breakdown of premium calculations
6. **Other sections**: Property details and coverage specifics, Standard Perils, Clauses, Deductibles, Discounts, Loadings, and Documents

---

## Basic Policy Information

This section contains fundamental policy identifiers and status information that establish the core parameters of the policy.

![Basic Policy Information](/basic-fire-info.webp)

### Risk Class
A required dropdown selection that identifies the class of insurance being issued, with "FIRE" selected for fire insurance policies. This determines which type of non-motor policy is being created and affects the available fields and calculations throughout the form.

### Risk Type
A dropdown selection that further refines the type of fire risk being insured. Options may include "Residential," "Business Interruption," "Fire and Allied Perils," or other categories based on the property use and risk profile. The selection affects premium calculations and required documentation.

### Branch
The branch field (marked with *) is a required dropdown selection that identifies which office location is issuing the policy. This affects reporting, commission calculations, and user access permissions. The dropdown includes all authorized branches the current user has access to, with an 'x' button to clear the selection if needed.

### Number
A system-assigned unique identifier for the policy. This field is typically auto-generated when the policy is saved and follows a predetermined format that may include branch codes, risk class identifiers, and sequential numbers.

### Debit Number
This field contains the associated financial record identifier that links the policy to accounting entries. It is typically auto-generated when the policy is saved but may be editable by users with appropriate permissions. The debit number facilitates financial tracking and reconciliation.

### Identifier
A field for additional policy identification information that may be required for specific business or regulatory purposes. This might include special coding for group policies, reinsurance arrangements, or internal classification systems.

---


## Customer Information

This section captures comprehensive details about the policyholder and establishes the legal relationship between the insurer and the insured party. A customer can be selected from existing customer records by clicking the the search button **Magnifiying Glass Icon** to open the dialog that allows for searching or finding existing customers/ policy holders

![Customer Information Section](/new-motor-policy-customer-section.webp)

### Customer Number
A unique identifier that connects the policy to an existing customer record in the system. This text field is autopopulated via a quick lookup of existing customers from the database.

### Customer Name
The full legal name of the policyholder, whether an individual or organization. Though auto-populated, this is a required text input field that establishes the primary insured party. For individual customers, this typically follows the format of first name followed by last name. For corporate customers, the full registered business name is used.

### Customer Address
The complete mailing address of the policyholder, captured in a multi-line text field. This autopopulated information is used for policy document delivery, claims correspondence, and regulatory reporting. The address includes all necessary components for postal delivery, including building number, street name, city, region/state, and postal code.

### Customer Phone
The primary contact telephone number for the policyholder. This information is used to facilitate communication regarding claims, renewals, and policy updates. The phone number should follow the standard format for the region, including country code when applicable.

### Financial Interest
This field captures information about any third party with a financial stake in the insured vehicle, such as a bank or leasing company that has provided financing. When a vehicle is financed, this field should contain the lender's name and any relevant loan or lease reference numbers. This ensures the interest is properly noted on the policy documents.

### Search Functionality
The customer search functionality allows quick access to existing customer records. When the search button is clicked, a lookup dialog appears where users can search by name, phone, or other identifiers. Once a customer is selected, all fields are populated automatically. Users can still edit customer information directly in the form if needed, which can also update the customer record in the database depending on user permissions. {% .text-justify %}

![Customer Search Dialog](/new-motor-policy-customer-search.webp)

---

## Intermediary Information

This section captures details about any broker, agent, or intermediary involved in facilitating the policy arrangement between the insurance company and the customer.

![Intermediary Agency Section](/new-motor-policy-intermediary-section.webp)

### Intermediary Number
This field contains the unique identification code assigned to the broker or agent who arranged the policy. Like the customer number field, it includes a search button (magnifying glass icon) that provides access to the intermediary database. This mandatory field is only populated via a lookup. The intermediary number serves as the link to commission calculations and broker performance tracking.

### Intermediary Name
The full registered name of the brokerage firm or individual agent who facilitated the policy arrangement. This field automatically populates when a valid intermediary number is entered but can also be manually entered when necessary. The intermediary name appears on policy documents and commission statements, providing clear attribution of the business relationship.

### Intermediary Address
The complete business address of the intermediary, displayed in a multi-line text field. This information is auto-filled when an intermediary is selected via the search function and is not editable to accommodate any recent changes. The address is used for commission statements, and regulatory reporting related to intermediary activities.

### Intermediary Phone
The primary contact telephone number for the intermediary. This field auto-populates when an intermediary record is selected but can be updated if needed. This contact information facilitates direct communication regarding policy details, customer inquiries, or commission matters.

### Intermediary Search
The intermediary search function operates similarly to the customer search, providing a convenient way to retrieve authorized intermediary details from the system database. Clicking the magnifying glass icon opens a search dialog where users can look up intermediaries by name, code, or region. The system maintains a register of approved intermediaries, ensuring that only authorized entities can be associated with policies. If the policy is arranged directly with no intermediary involvement, all these fields should remain blank. {% .text-justify %}

![Intermediary Agency Search](/new-motor-policy-intermediary-search.webp)

---

## Policy Information

This section defines the coverage specifics, policy duration, and financial terms that form the contractual basis of the insurance agreement.

![Policy Information Section](/fire-policy-section.webp)

### Status
This field displays the current policy status, which is system-generated and automatically filled. For new policies, this typically shows as "New" or "Draft" until the policy is finalized. The status field updates throughout the policy lifecycle to reflect its current state (e.g., "Active," "Pending Payment," "Expired").

### Currency
A dropdown field specifying the currency in which the policy is denominated, with the base currency shown as the selected option. This required field affects all monetary calculations and reporting. The system typically defaults to the local currency of operation but provides options for policies issued in foreign currencies.

### Exchange Rate
A numeric input field that specifies the conversion rate between the selected currency and the system's base currency. This field is marked as required (*) and defaults to 1.00 for local currency policies. For foreign currency policies, this value is set to the rate at the time of policy issuance or renewal.


### Computation
A dropdown selection that determines how the policy term is calculated. The example shows "One Year" as the selected option. This required field affects date calculations and premium prorating. Other common options might include "Pro Rata," "Short Term,"

### Days
A numeric input showing the total number of days of coverage provided by the policy. The example shows 364 days, which is typical for a one-year policy mostly attached ot the selected value for __"Computation"__ (allowing for renewal processing). This field is auto-calculated based on the effective and expiry dates but may be adjusted manually in special circumstances, which would then recalculate the expiry date.

### Issue Date
The date when the policy is created in the system, presented in a date picker field using YYYY-MM-DD format. This field is typically auto-filled with the current date but and cannot be adjusted. The issue date is used for administrative tracking and may differ from the effective date in cases of advance booking or backdating.

### Effective Date
The date when insurance coverage begins, entered in a date picker field using YYYY-MM-DD format. This required field establishes the official start of the coverage period. The system allows this date to be set in the past (backdating) or future (advance booking) within authorized limits, typically controlled by user permissions.

### Expiry Date
The date when insurance coverage ends, presented as a read-onlydate picker field using YYYY-MM-DD format. This field is auto-calculated based on the effective date and the selected computation period and number of days selected (showing 2026-04-28 in the example, which is 364 days, One year for computation period, after the effective date). The expiry date marks the point at which the policy must be renewed to maintain continuous coverage.

### Co Insurance
A toggle switch that indicates whether this policy is part of a co-insurance arrangement where risk is shared with other insurers. When set to "On," additional fields may appear to record details of participating insurers and their respective shares of the risk.

### Rate
A numeric input field for the base premium rate applied to calculate the basic premium. This required field is typically determined by underwriting guidelines based on property type, construction, occupation, and coverage specifics.

---

## Other Sections

This section documents the specific properties covered and their respective values, representing the core risk data for the fire policy.

![Other Fire Section](/other-fire-section.webp)

### Tab Navigation
The section includes tabs for navigating between different aspects of the policy:
- **Details of Insured Items and Locations**: The main tab for recording property information
- **Standard Perils**: A tab for specifying the standard covered perils included in the policy
- **Clauses**: A tab for adding policy clauses and endorsements
- **Deductibles**: A tab for defining the customer's financial responsibility in claims
- **Discounts**: A tab for applying premium reductions based on risk factors
- **Loadings**: A tab for applying premium increases based on risk factors
- **Documents**: A tab for attaching relevant documentation to the policy

### Details of Insured Item and Location
A sub-section that displays the specific property items covered under the policy. For new policies, this area starts empty and is populated using the "Add Risk Details" button.

### Add Risk Details Button
A green button with a plus icon that opens a dialog for adding new property items to the policy. This allows underwriters to record multiple buildings, contents, or other insurable interests within a single policy.

### Risk Details Entry Fields
When adding risk details, users typically enter information such as:
- Property address/location
- Building construction type
- Year built
- Occupancy/usage
- Security features
- Fire protection systems
- Sum insured values for buildings, contents, etc.
- Special conditions or exclusions

---

## Premium Computation

This section provides a detailed breakdown of the premium calculation with itemized components, offering transparency into how the final premium is derived.

### Sub Total Premium
The base premium amount before the application of taxes and levies. This amount represents the pure insurance cost for all selected coverages and is calculated based on the sum insured values, rates, and any applicable loadings or discounts.

### Tax
The applicable insurance tax charged on the policy, calculated as a percentage of the sub-total premium according to current tax regulations. This amount is collected by the insurance company but remitted to the government tax authorities.

### Levy
Regulatory or statutory charges imposed on insurance policies to fund industry supervisory bodies, compensation funds, or other mandated purposes. Like tax, the levy is typically calculated as a percentage of the sub-premium according to current regulations.

### TOTAL PREMIUM
The final amount payable by the policyholder, representing the sum of the sub-total premium, taxes, and levies. This is the bottom-line figure that appears on invoices and receipts and represents the complete cost of insurance coverage for the specified term.

---

## Save Action

The "Save" button at the bottom of the form completes the policy creation process.

### Save Process
1. System validates all required fields
2. Policy number is confirmed or generated
3. Policy is saved to the database
4. User is redirected to policy details view

### Validation Requirements
- All required fields must be completed
- Business validation rules check for logical consistency
- Date ranges must be valid
- Premium calculations must be completed
- At least one insured item must be added

---

## Best Practices for Creating Fire Policies

**Property Verification**: When possible, verify property details through site inspections or documentation review

**Risk Assessment**: Thoroughly evaluate construction, occupancy, protection, and exposure (COPE) factors

**Coverage Explanation**: Ensure customer understands perils covered, exclusions, and conditions

**Documentation**: Attach copies of relevant documents such as property valuations, inspection reports, or fire safety certificates

**Endorsements and Clauses**: Apply appropriate endorsements based on property type and risk factors

---

## System Behavior Notes

1. **Auto-calculation**:
   - Many fields auto-calculate based on other inputs
   - Days field auto-populates based on effective and expiry dates
   - Premium components calculate automatically when rate and sum insured are entered

2. **Required Fields**:
   - Fields marked with asterisk (*) are mandatory
   - System prevents saving until all required fields are completed

3. **Default Values**:
   - Current date is default for Issue Date and Effective Date
   - Default currency is set to system preference ("Gambian Dalasi" shown)
   - Exchange Rate defaults to 1.00
   - Some dropdowns have pre-selected values

4. **Search Integration**:
   - Customer search integrates with customer database
   - Property search may validate addresses against mapping services (if connected)
   - Intermediary search pulls from approved broker/agent list

---

## Special Field Behaviors

### Sum Insured
- Represents the maximum potential payout for covered losses
- Should accurately reflect current property replacement value
- May be itemized for building, contents, fixtures, stock, etc.
- Directly affects premium calculation

### Risk Type Selection
- Determines available options throughout the form
- Changes which premium components are active
- May trigger required fields based on regulatory requirements

### Currency Handling
- Local currency is default ("Gambian Dalasi" shown)
- Exchange rate applies for foreign currency policies
- All calculations convert to local currency for accounting purposes

### Clauses and Endorsements
- Standard clauses apply based on Risk Type selection
- Additional clauses can be added based on specific property characteristics
- Each clause may affect coverage terms or premium calculation
