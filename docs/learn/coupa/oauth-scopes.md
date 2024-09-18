---
title: 'Coupa: OAuth 2.0 scopes'
sidebar_position: 6
sidebar_label: 'OAuth 2.0 scopes'
---

# OAuth 2.0 scopes

_OAuth Scopes and Associated Permissions_

## 1. core.accounting.read
### 1.1 API/Account Groups
- Index – Query account groups
- Show – Show account groups

### 1.2 API/Account Types
- Index – Query COAs
- Show – Show COAs

### 1.3 API/Account Validation Rules
- Index – Query account validations
- Show – Show account validations

### 1.4 API/Accounts
- Favorites – Account favorites
- Index – Query accounts
- List – List accounts
- Recent – Recent accounts
- Show – Show accounts
- User Accounts – Accounts for the user

## 2. core.accounting.write
### 2.1 API/Account Groups
- Create – Create account group
- Update – Update account group

### 2.2 API/Account Types
- Copy – Copy/Clone existing COA
- Create – Create COA

### 2.3 API/Account Validation Rules
- Create – Create account validation
- Update – Update account validation

### 2.4 API/Accounts
- Create – Create account
- Update – Update account
- Validate account – Validate account

## 3. core.approval.read
### 3.1 API/Approvals
- Approver Search – Allows autocomplete when searching for approvers or watchers
- Index – Query approvals
- Show – Show approvals

### 3.2 API/Average Approval Times
- Index – Average approval times

## 4. core.approval.write
### 4.1 API/Approvals
- Approve – Perform approve action on an approval
- Create – Create approval
- Hold – Perform hold action on an approval
- Reject – Perform reject action on an approval
- Update – Update approval

## 5. core.budget.read
### 5.1 API/Budget Line Adjustments
- Index – Query budget line adjustments
- Show – Show budget line adjustments

### 5.2 API/Budget Lines
- Index – Query budget lines
- Show – Show budget lines

## 6. core.budget.write
### 6.1 API/Budget Line Adjustments
- Create – Create budget line adjustments

### 6.2 API/Budget Lines
- Adjust – Adjust budget lines
- Create – Create budget lines
- Update – Update budget lines

## 7. core.business_entity.read
### 7.1 Business Entities
- Index – List business entities
- Show – Show a business entity

## 8. core.business_entity.write
### 8.1 Business Entities
- Create – Create a new business entity
- Update – Update a business entity

## 9. core.catalog.read
### 9.1 API/Items
- Image – Send item image via API
- Index – Query items
- Show – Show items

### 9.2 API/Supplier Items
- Catalogue Item Info – Show supplier ID and item count for the supplier
- Catalogue Items – Show supplier items with fields from the item loader
- Index – Query supplier items
- Search – Advanced supplier item search
- Show – Show supplier items

## 10. core.catalog.write
### 10.1 API/Supplier
- Create – Create supplier item
- Destroy – Delete supplier item
- Update – Update supplier item

## 11. core.comment.read
### 11.1 API/Comments
- Index – Query comments
- Show – Show comments

## 12. core.comment.write
### 12.1 API/Comments
- Create – Create comment
- Destroy – Ability to delete my own comments
- Update - Ability to edit my own comments

## 13. core.common.read
### 13.1 API/Addresses
- Index – Query addresses
- Show – Show addresses

### 13.2 API/Announcements
- Index – Query the announcements page
- Show – Show the announcements page

### 13.3 API/API Docs
- Index – List open API docs
- Show – Retrieve open API docs

### 13.4 API/Business Groups
- Index – Query business groups
- Show – Show business groups

### 13.5 API/Commodities
- Index – Query commodities
- Show – Show commodities

### 13.6 API/Commodity Translations
- Index – Query commodity translations
- Show – Show commodity translations

### 13.7 API/Currencies
- Index – Query currencies
- Show – Show currency

### 13.8 API/Custom Field Attributes
- Index – Query custom field attributes
- Show – Show custom field attributes

### 13.9 API/Departments
- Index – Query departments
- Show – Show department

### 13.10 Diversity Categories
- Index – List diversity categories
- Show – Show diversity categories

### 13.11 API/Exchange Rates
- Index – Query exchange rates
- Show – Show exchange rates

### 13.12 API/Lookup values
- Index – Query lookup values
- Show – Show lookup values
- User Lookup Values – Lookup values for a user

### 13.13 API/Lookups
- Index – Query lookups
- Show – Show lookups

### 13.14 API/Notifications
- Index – Query notifications
- Show – Show notifications

### 13.15 Custom Object Instances
- Index – List of object instances
- Show – Show the object instances

### 13.16 API/Payment Terms
- Index – Query payment terms
- Show – Show payment terms

### 13.17 API/Roles
- Index – Query roles
- Show – Show roles

### 13.18 API/Setup
- Index – Query the company setup information
- Show – Show setup keys

### 13.19 API/Shipping Terms
- Index – Query shipping terms
- Show – Show shipping terms

### 13.20 API/Tax Codes
- Index – Query tax codes
- Show – Show tax codes

### 13.21 API/UOMs
- Index – List of active UOMs
- Show – Show details of a UOM

## 14. core.common.write
### 14.1 API/Addresses
- Create – Create address
- Update – Update addresses

### 14.2 API/Business Groups
- Create – Create a business group
- Update – Update business groups

### 14.3 API/Commodities
- Create – Create a commodity
- Update – Update a commodity

### 14.4 API/ Commodity Translations
- Create – Create commodity translations
- Destroy – Destroy commodity translations
- Update – Update commodity translations

### 14.5 API/Departments
- Create – Create a department
- Update – Update a department

### 14.6 API/Exchange Rates
- Create – Create an exchange rate
- Update – Update an exchange rate

### 14.7 API/Lookup Values
- Create – Create lookup values
- Update – Update lookup values

### 14.8 API/Lookups
- Create – Create lookups
- Update – Update lookups

### 14.9 Custom Object Instances
- Create – Create a new object instance
- Update – Update the object instance

### 14.10 API/Payment Terms
- Create – Create payment terms
- Update – Update payment terms

### 14.11 API/Periods
- Create – Create periods

### 14.12 API/Roles
- Create – Create a new custom role
- Update – Update an existing custom role

### 14.13 API/Shipping Terms
- Create – Create shipping terms
- Update – Update shipping terms

### 14.14 API/Tax Codes
- Create – Create tax codes
- Update – Update tax codes

## 15. core.contract.read
### 15.1 API/Contract Business Groups
- Index – Query a contract’s association to a business group
- Show – Show a contract’s association to a business group

### 15.2 API/Contract Terms
- Index – Query contract terms
- Show – Show contract terms

### 15.3 API/Contract Types
- Index – Search contract types

### 15.4 API/Contracts
- Index – Query contracts
- My Draft Fields – INTERNAL TO COUPA – consumed by Coupa’s MS Word add-in to compare edited document field values with draft field values
- Retrieve Legal Agreement – retrieve legal agreement
- Show – Show contract

### 15.5 API/Contract Templates
- Index – Query contract templates
- Show – Show contract templates

### 15.6 API/Legal Documents
- Index – List legal documents
- Show – show legal documents

### 15.7 CLMA Risk Widget
- Permissions – Check if user has access to risk widget

## 16. core.contract.write
### 16.1 API/Contract Business Groups
- Add- Add a business group to a contract
- Remove – Remove a business group from a contract
- Remove All - Remove all business groups from a contract

### 16.2 API/Contract Terms
- Create – Create a contract term
- Update – Update a contract term

### 16.3 API/Contracts
- Add Approver – Allows the manual addition of approvers to the list of approvals of a contract
- Notify that a signature has been added in CCC – Notifies that a signature has been added in CCC
- Check-in – Check-in a legal document
- Complete – Moves the contract from pending signatures to completed
- Create – Create a contract
- Create Publisher – Create a published contract
- Legal Agreement – Update a legal agreement
- Remove Approval – Allows the removal of a manual approval from the list of approvals of a contract
- Submit for Approval – Submit the contract for approval
- Update – Update a contract
- Update Legal Agreement – Update the legal agreement for completed or published contracts
- Update Completed or Published- Update completed or published contracts
- Moves contract to corresponding status after CCC withdraws signatures - Moves contracts to corresponding status after CCC withdraws signatures

### 16.4 API/Legal Documents
- Add Approver – Add an approver to the approval chain of the legal document
- Attach – Attach a file to a legal document
- Complete – Moves the legal document to the completed status
- Create – Create a legal document
- Remove Approval – Allows the removal of a manual approval from the list of approvals of a legal document
- Submit for Approval – Submits a legal document for approval
- Update – Update a legal document

## 17. core.easy_form_response.approval.write
### 17.1 API/Easy Form Responses
- Add Approver - Allows the manual addition of approvers to the list of approvals of an easy form response
- Remove Approval – Removes a manual approval from the list of approvals of an easy form response

## 18. core.easy_form_response.read
### 18.1 API/Easy Form Responses
- Index – Query form response
- Show – Show form response

## 19. core.easy_form_response.write
### 19.1 API/Easy Form Responses
- Approval – Submit form response for approval
- Review – Review form responses
- Update – Update form responses

## 20. core.expense.read
### 20.1 API/Expense Artifacts
- Image – Upload expense artifact image
- Index – Query expense artifacts
- Show – Show expense artifacts

### 20.2 API/Expense Attendees
- Auto-Complete – Allows autocomplete when searching for attendees
- Recent – Recent attendees
- Show – Show attendee

### 20.3 API/Expense Categories
- Index – Query expense categories
- Milage Metadata – Returns milage related metadata
- Show – Show expense category
- Tax Metadata – Get metadata of tax configurations

### 20.4 API/Expense Category Translations
- Index – Query expense category translations
- Show – Show expense category translations

### 20.5 API/Expense Lines
- Expense Trip Segments Recent Milage – Recent locations for expense mileage
- Index – Query expense lines
- Show – Show expense lines

### 20.6 Expense Per Diem Configs
- Index – View per diem configurations

### 20.7 Expense Per Diem Data
- Index – View per diem rates

### 20.8 API/Expense Polices
- Index – Query expense polices
- Show – Show expense policy

### 20.9 API/Expense Preapprovals
- Index – List expense preapprovals
- Show – Show specified expense preapproval

### 20.10 API/Expense Reports
- Download – Download expense reports
- Index – Query expense reports
- Show – Show expense reports

### 20.11 API/Expense Wallet Lines
- Index – Query to get a user’s expense wallet lines
- Show – Show the expense wallet lines

### 20.12 API/Travel/Expense Artifacts
- Index – List travel artifacts
- Show – Show travel artifacts

## 21. core.expense.secure.read
### 21.1 API/Expense Account Number Lookups
- Index – Translate internal account numbers to real account numbers
- PCI – Handle translations from internal account numbers to real account numbers
- Show – Translate internal account numbers to real account numbers

## 22. core.expense.secure.write
- Nothing as of R34.3.0

## 23. core.expense.write
### 23.1 API/Expense Artifacts
- Create – Create expense artifacts
- Destroy – Destroy expense artifacts
- Update – Update expense artifacts

### 23.2 API/Expense Attendees
- Create – Attach attendee to an expense line
- Deactivate – Deactivate attendee
- Self-Attendee – Returns self-attendee
- Update – Update attendee

### 23.3 API/Expense Categories
- Create – Create expense category
- Destroy – Delete expense category
- Update – Update expense category

### 23.4 API/Expense Category Translation
- Create – Create expense category translation
- Destroy – Delete expense category translation
- Update – Update expense category translation

### 23.5 API/Expense Lines
- Assign Attendee – Assign new attendee to an expense line
- Calculate Mileage Amount – Calculate line amount based on mileage info
- Calculate expense line total based on trip data – Calculate line amount based on trip info
- Calculate Taxes – Allow associating tax lines to expense lines
- Classify – Returns a matching expense category from the expense classification engine
- Create – Create an expense line
- Destroy – Delete an expense line
- Estimate Taxes – Allow estimating taxes for an expense line
- Unassign attendees – Unassign attendee from expense lines
- Update – Update expense lines

### 23.6 API/Expense Policies
- Create – Create an expense policy
- Destroy – Delete an expense policy
- Update – Update an expense policy

### 23.7 API/Expense Reports
- Add Approver – Allows the manual addition of approvers to the list of approvals of an expense report
- Create – Create an expense report in draft status
- Destroy – Ability to delete an expense report
- Export – Mark the expense report as exported
- Remove Approval – Allows the removal of a manual approval from the list of approvals of an expense report
- Sending expense line back to submitter – Sending expense line back to submitter
- Submit – Submit expense report
- Update – Update expense report

### 23.8 API/Expense Wallet Lines
- Create – Ability to add receipts to a wallet
- Destroy – Delete expense wallet lines
- Merge with expense line – Merge wallet lines with expense lines
- Move to expense report – Move wallet lines to an expense report
- Update – Ability to update wallet lines

### 23.9 API/OCR/Expense Artifacts
- Update with OCR response – Update expense artifact with OCR response

### 23.10 API/Travel/Expense Artifacts
- Create Placeholder – Create travel artifact placeholder
- Update – Update travel artifact
- Update with OCR response – Update travel artifact with OCR response

### 23.11 API/Travel/Travel Expense Lines
- Create – Create expense lines from a travel itinerary
- Receipts – Attach receipts to expense lines
- Update – Update travel expense line

## 24. core.financial_counterparty.read
### 24.1 API/Financial Counterparties
- Index – Query financial counterparties
- Show – Show financial counterparties

## 25. core.financial_counterparty.write
### 25.1 API/Financial Counterparties
- Create – Create financial counterparties
- Update – Update financial counterparties

## 26. core.global_navigation.read
- Nothing as of R34.3.0

## 27. core.integration.read
### 27.1 API/Data File Sources
- Index – Query data file sources
- Show – Show data file source

### 27.2 API/Data Sources
- Index – Query data sources
- Show – Show data sources

### 27.3 API/Integration Contacts
- Index – Query integration contacts
- Show – Show integration contacts

### 27.4 API/Integration Errors
- Index – Query integration errors
- Show – Show integration errors

### 27.5 API/Integration History Records
- Index – Query integration history records
- Show – Show integration history records

### 27.6 API/Integration Runs
- Index – Query integration runs
- Show – Show integration runs

### 27.7 API/Integrations
- Index – Query integrations
- Show – Show integrations

## 28. core.integration.write
### 28.1 API/Data File Sources
- Load File – Loads a single file into the request body
- Load from SFTP – Upload flat file and process via data file source
- Load from storage – Allow posting of files

### 28.2 API Integration Contacts
- Create – Create an integration contact
- Update – Update an integration contact

### 28.3 API/Integration Errors
- Create – Create an integration error
- Create alert – Create an integration error alert
- Resolve – Resolve an integration error
- Unresolve – Unresolve an integration error
- Update – Update an integration error

### 28.4 API/Integration History Records
- Acknowledge – The acknowledge action is not documented ... yet
- Create – Create integration history records
- Create Alert – The create_alert action is not documented ... yet
- Create alert and mark export – The create_alert_and_mark_exported action is not documented ... yet
- Mark export – The mark_exported action is not documented ... yet
- Resolve – Resolve integration history records
- Unresolve – Unresolve integration history record
- Update – Update integration history record

### 28.5 API/Integration Runs
- Create – Create an integration run with the status of pending
- Fail – Set an integration to fail
- Finish – Set an integration run status as successful if no errors exist
- Pause – Set an integration run to pause
- Pending – Set an integration run to pending
- Run – Set an integration run to run
- Success – Set an integration run to success
- Update – Update an integration run

### 28.6 API/Integrations
- Create – Create an integration
- Update – Update an integration

## 29. core.inventory.adjustment.read
### 29.1 API Inventory Adjustment
- Index – List inventory adjustments
- Show – Show inventory adjustments

## 30. core.inventory.adjustment.write
### 30.1 API/Attachments
- Create – Create an attachment

### 30.2 API Inventory Adjustment
- Create – Create inventory adjustments
- Index – List inventory adjustments
- Show – Show inventory adjustments
- Update – Update inventory adjustments

## 31. core.inventory.asn.read
### 31.1 API/Advance Ship Notice Lines
- Index – Query advance ship notice lines
- Show – Show advance ship notice lines

### 31.2 API/ASN/Headers
- Export – Export ASN
- Index – List ASN headers
- Show – Show ASN headers

## 32. core.inventory.asn.write
### 32.1 API/ASN/Headers
- Create – Create ASN header
- Receive – Receive ASN header
- Update – Update ASN header

### 32.2 API/ASN/Lines
- Receive ASN lines
- Void ASN lines

## 33. core.inventory.balance.read
### 33.1 API/Asset tags
- Index – Query asset tags
- Show – Show asset tags

### 33.2 API/Inventory
- Index – Query inventory

### 33.3 API/Inventory Balance Lots
- Index – Query inventory balance lot

## 34. core.inventory.common.read
### 34.1 API Default receiving location
- Index – Query the default receiving locations list
- Show – Show a default receiving location

### 34.2 API inspection codes
- Index – Permission to access inspection codes

### 34.3 API/Inventory
- Configurations – Read inventory and receiving configurations
- Show – Show inventory balance

### 34.4 API/Inventory codes
- Index – Allows user to query inventory codes

### 34.5 API warehouse locations
- Index – List warehouse locations
- Show – Show warehouse locations

### 34.6 API/Warehouses
- Index – Query warehouses
- Show – Show warehouses

## 35. core.inventory.common.write
### 35.1 API/Asset tags
- Bulk Update – Bulk updates the asset tags
- Create – Create asset tag
- Update – Update asset tag

### 35.2 API Default Receiving Location
- Create – Create a default receiving location

### 35.3 API Warehouse Locations
- Create – Create warehouse location
- Destroy – Delete warehouse location
- Update – Update warehouse location

### 35.4 API Warehouses
- Create – Create warehouse
- Update – Update warehouse

## 36. core.inventory.consumption.read
### 36.1 API Inventory Consumptions
- Index – List inventory consumptions
- Show – Show inventory consumptions

## 37. core.inventory.consumption.write
### 37.1 API/Attachments
- Create – Create an attachment

### 37.2 API Inventory Consumptions
- Create – Create inventory consumptions
- Index – List inventory consumptions
- Show – Show inventory consumptions
- Update – Update inventory consumptions
- Void – Void inventory consumptions

## 38. core.inventory.cycle_counts.read
### 38.1 Cycle Count Lines
- Index – Query cycle count lines
- Show – Show cycle count lines

### 38.2 API/Cycle Counts
- Index – Query cycle counts
- Show – Show cycle counts

## 39. core.inventory.cycle_counts.write
### 39.1 Cycle Count Lines
- Update – Update cycle count lines via API

### 39.2 API/Cycle Counts
- Create – Create cycle counts
- Submit – Submit cycle counts
- Update – Update cycle counts

## 40. core.inventory.pick_list.read
### 40.1 API/ASN/Lines
- Void – Void ASN lines

### 40.2 API/Pick Lists
- Index – Query pick lists

## 41. core.inventory.pick_list.write
### 41.1 API/Pick Lists
- Update Fulfillments – Update fulfilment pick lists

## 42. core.inventory.receiveing.read
### 42.1 API Receipt Requests
- Index – List receipt requests
- Show – Show receipt requests

### 42.2 API Receiving Purchase Order Lines
- Index – Query the receivable purchase order lines
- Show – Show the receivable purchase order lines

### 42.3 API Inventory Receiving
- Index – List the receiving transactions
- Show – Show the receiving transactions

## 43. core.inventory.receiving.write
### 43.1 API/Attachments
- Create – Create an attachment

### 43.2 API Purchase Order Line Receipt Request
- Create – Create receipt or receipt request for PO lines

### 43.3 API Receipt Requests
- Destroy – Delete the receipt request
- Submit – Submit the receipt request
- Withdraw – Withdraw the receipt request

### 43.4 API Receivable Purchase Order Lines
- Index – Query the receivable purchase order lines
- Show – Show the receivable purchase order lines

### 43.5 API Inventory Receiving
- Create – Create receiving transactions
- Index – Query receiving transactions
- Show – Show receiving transactions
- Update – Update receiving transactions
- Void – Void receiving transactions

## 44. core.inventory.return_to_supplier.read
### 44.1 API Return to Supplier Transactions
- Index – Query return to supplier transactions
- Show – Show return to supplier transactions

## 45. core.inventory.return_to_supplier.write
### 45.1 API Return to Supplier Transactions
- Update – Update return to supplier transaction

## 46. core.inventory.transfer.read
### 46.1 API Inventory Transfer
- Index – Query inventory transfer
- Show – Show inventory transfer

## 47. core.inventory.transfer.write
### 47.1 API/Attachments
- Create – Create attachments

### 47.2 API Inventory Transfer
- Create – Create inventory transfer
- Index – Query inventory transfer
- Show – Show inventory transfer

## 48. core.invoice.approval.bypass
### 48.1 API/Invoices
- Bypass Approvals – Bypass approvals
- Bypass Current Approval – Bypass current approvals

## 49. core.invoice.approval.write
### 49.1 API/Invoices
- Add Approver – Allows the manual addition of approvers to the list of approvals of an invoice
- Remove Approval – Allows the removal of a manual approval from the list of approvals of an invoice
- Restart Approvals – Restart approvals on submit invoices

## 50. core.invoice.create
### 50.1 API/Attachments
- Create – Create attachments

### 50.2 API/Invoices
- Create – Create invoice
- Submit for approval – Submit invoices for approval

## 51. core.invoice.delete
### 51.1 API/Invoices
- Abandon – To abandon the invoice
- Void – Void an approved invoice

## 52. core.invoice.read
### 52.1 API/Invoices
- Index – Query invoice
- Retrieve Clearance Document - Download government-stamped document that was used to create this invoice
- Retrieve Image Scan – Retrieve/download the image scan
- Retrieve/Download Legal Invoice PDF - Retrieve/download the legal invoice PDF
- Show – Show an invoice

### 52.2 API/Matching_allocations
- Index – Query the matching allocations created for tying receipts to various invoice lines
- Show - Show a single matching allocation in detail

### 52.3 API/Payment Receipts
- Retrieve Clearance Document – Download the CFDI document of payment receipt.

### 52.4 API/Remit to Addresses
- Show – Show the remit to address

### 52.5 API/Tax Registrations
- Index – Index tax registrations
- Show – Show tax registrations

## 53. core.invoice.write
### 53.1 API/Invoice Emails
- Update – Update an invoice email

### 53.2 API/Invoices
- Create – Create an invoice
- Dispute – Dispute an invoice
- Export – Allows user to mark an invoice as exported
- Flip to Advance Ship Notice – Flip an invoice to advance ship notice
- Image Scan – Scan image for an invoice
- Revalidate tolerances – Revalidate invoice tolerances
- Submit – Submit an invoice
- Submit for approval – Submit an invoice for approval
- Update – Update an invoice
- Update line accounts – Update invoice line accounts
- Withdraw dispute – Withdraw an invoice dispute

### 53.3 API/Tax Registrations
- Create – Create tax registration
- Update – Update tax registration

## 54. core.item.read
### 54.1 API/Items
- Index – Query an item
- Show – Show an item

## 55. core.item.write
### 55.1 API/Items
- Create – Create an item
- Image – Send an image
- Update – Update an item

## 56. core.legal_entity.read
### 56.1 API/Legal Entities
- Index – Query legal entities
- Show – Show legal entities

## 57. core.legal_entity.write
### 57.1 API/Legal Entities
- Create – Create a legal entity
- Update – Update a legal entity

## 58. core.object_translations.read
### 58.1 Object Translations
- Index – Query all translations
- Show – Show details of a translation

## 59. core.object_translations.write
### 59.1 Object Translations
- Create – Create a translation
- Destroy – Delete a translation
- Update – Update a translation

## 60. core.order_pad.read
### 60.1 API/Order Pad Lines
- Index – Query order pad lines
- Show – Show order pad lines

### 60.2 API/Order Pads
- Index – Query order pads
- Show – Show order pads

## 61. core.order_pad.write
### 61.1 API/Order Pad Lines
- Create – Create order pad lines
- Update – Update order pad lines

### 61.2 API/Order Pad Lines
- Create – Create an order pad
- Update – Update an order pad

## 62. core.pay.charges.read
### 62.1 API Charges
- Index – Query charge objects
- Show – Display specific charge objects

## 63. core.pay.charges.write
### 63.1 API Charges
- Export – Mark charge as exported
- Update – Update the exported flag for a specific charge object

## 64. core.pay.payment_accounts.read
### 64.1 API/Coupa_Pay/Company Payment Accounts
- Index – Query company payment accounts
- Show – Show company payment accounts

### 64.2 API/Coupa_Pay/Employee Payment Accounts
- Index – Query an employee payment accounts
- Show – Show an employee payment accounts

### 64.3 API Payment Partners
- Index – List payment partners
- Show – Show payment partners

### 64.4 API/Coupa_Pay/Supplier Payment Accounts
- Index – Query supplier payment accounts
- Show – Show supplier payment accounts

## 65. core.pay.payments.read
### 65.1 API Coupa Payment Details
- Index – Query payment details
- Show – Show payment details

### 65.2 API Coupa Pay Payments
- Index – Query payments
- Show – Show specific payments

## 66. core.pay.payments.write
### 66.1 API Coupa Pay Payments
- Export – Mark payment as exported
- Update – Update an exported flag for a specific payment object

## 67. core.pay.statements.read
### 67.1 API Coupa Pay Statements
- Index – Query statements
- Show – Show a specific statement

## 68. core.pay.statements.write
### 68.1 API Coupa Pay Statements
- Export – Mark statement as exported
- Updated – Update an exported flag for a specific statement object

## 69. core.pay.virtual_cards.read
### 69.1 API Charges
- Index – Query charge objects
- Show – Show a specific charged object

### 69.2 API Coupa Pay Statements
- Index – Query statements
- Show – Show specific statements

### 69.3 API/Coupa_Pay/Virtual Cards
- Index – Query a list of virtual card details
- Show – Show the details of a specific virtual card

## 70. core.pay.virtual_cards.write
### 70.1 API Charges
- Export – Mark charge as exported
- Update – Update an exported flag for a specific charged object

### 70.2 API/Coupa_Pay/Virtual Cards
- Update – Update a custom field for virtual cards

## 71. core.payables.allocations.read
### 71.1 API Payable Allocations
- Index – Query all allocations

### 71.2 API Invoice Payables
- List payables that are available to be allocated to this one – Show other payables that can be allocated to this invoice

## 72. core.payables.allocations.write
### 72.1 API Payables Allocations
- Create – Create a new allocation
- Export – Mark allocations as exported
- Reverse the payable allocation and associated reconciliation lines – Reverse this allocation and any associated reconciliation lines
- Update – Modify an existing allocation

## 73. core.payables.expense.read
### 73.1 API Payables Expenses
- Index – Query a list of all pay expenses
- Show – Show specific pay expenses

## 74. core.payables.expenses.write
### 74.1 API Payables Expenses
- Export – Mark pay expenses as exported
- Update – Update a specific pay expense

## 75. core.payables.external.read
### 75.1 API External Payables
- Index – Query external payables
- Show – Show external payables

## 76. core.payables.external.write
### 76.1 API External Payables
- Create – Create external payables
- Update – Update external payables
- Void – Void external payables

## 77. core.payables.invoice.read
### 77.1 API/Coupa_Pay/Invoices
- Export – Mark a Coupa Pay invoice as exported
- Index – Query a list of Coupa Pay invoice records
- Show – Show a single Coupa Pay invoice record

### 77.2 API Invoice Payables
- List payables that are available to be allocated to this one - Show other payables that can be allocated to this invoice
- Index – Query all invoice payables
- Show – Show invoice payables

## 78. core.payables.invoice.write
### 78.1 API/Coupa_Pay/Invoices
- Export – Mark a Coupa Pay invoice as exported
- Update – Update a Coupa Pay invoice record

### 78.2 API Invoice Payables
- Exported – Mark this invoice payable exported
- Mark this document as paid and stop tracking it in Coupa – Mark as paid and stop tracking in Coupa
- Stop tracking this document in Coupa – Stop tracking in Coupa
- Resume tracking this document in Coupa – Resume tracking in Coupa

## 79. core.payables.order.read
### 79.1 API Payables Order Reconciliation Lines
- Index – Query pay order reconciliation lines
- Show – Show an individual pay order reconciliation lines

### 79.2 API Payables Orders
- Index – Query a list of all pay orders
- Show – Show a specific pay order

## 80. core.payables.order.write
### 80.1 API Payables Order Reconciliation Lines
- Create - Create new order reconciliation lines

### 80.2 API Payables Orders
- Export – Mark Coupa Pay orders as exported
- Mark this document as paid and stop tracking it in Coupa – Allow API users to mark Coupa Pay orders as paid externally
- Allow API users to mark Coupa Pay orders as ready to pay – Allow API users to mark Coupa Pay orders as ready to pay

## 81. core.project.read
### 81.1 API/Project Memberships
- Index – Query project memberships
- Show – Show a project membership

### 81.2 API/Project
- Index – Query a project
- Show – Show a project

### 81.3 API/Tasks
- Index – Query tasks
- Show – Show a task

## 82. core.project.write
### 82.1 API/Project Memberships
- Create – Create a project membership
- Destroy – Delete a project membership
- Update – Update a project membership

### 82.2 API/Projects
- Cancelled – Update status to canceled
- Complete – Update status to complete
- Create – Create a project
- Draft – Update status to draft
- In progress - Update status to in progress
- Planned - Update status to planned
- Update – Update a project

### 82.3 API/Tasks
- Create – Create a task
- Destroy – Delete a task
- Update – Update a task

## 83. core.purchase_order.read
### 83.1 API/Purchase Order Changes
- Changes - Returns only the differences on the PO Change compared to the previous version of the PO
- Index – Query purchase order changes
- Show – Show purchase order changes

### 83.2 API/Purchase Order Lines
- Index – Query purchase order lines
- Show – Show purchase order lines

### 83.3 API/Purchase Order Revisions
- Index – Query purchase order revisions
- Show – Show purchase order revisions

### 83.4 API/Purchase Orders
- Index – Query purchase orders
- List – List purchase orders
- Show – Show purchase orders

### 83.5 Purchase Orders
- Index – Query all POs pending receipt for the current user
- Show - Shows details of a single PO that’s pending receipt for the current user

### 83.6 API Receivable Purchase Order Lines
- Index – Query the receivable purchase order lines
- Show – Show the receivable purchase order lines

### 83.7 API/Work Confirmation/Headers
- Index – Query the list of work confirmation headers
- New Supplier Review – Create a supplier review
- Show – Show the work confirmation header

## 84. core.purchase_order.write
### 84.1 API/Purchase Order Changes
- Add Approver – Allows the manual addition of approvers to the list of approvals of a purchase order change
- Create – Create a purchase order change
- Remove Approval – Allows the removal of a manual approval from the list of approvals of a purchase order change
- Submit for Approval – Allows submitting draft purchase order change for approval
- Update – Update a purchase order change

### 84.2 API/Purchase Order Lines
- Create – Create a purchase order line
- Destroy – Delete order lines
- Reopen for invoicing – Allow order lines to be reopened for invoicing
- Reopen for receiving - Allow order lines to be reopened for receiving
- Soft close for invoicing - Allow order lines to be soft closed for invoicing
- Soft close for receiving - Allow order lines to be soft closed for receiving
- Update – Update a purchase order line

### 84.3 API/Purchase Order Revisions
- Update – Update a purchase order revision

### 84.4 API/Purchase Orders
- Cancel – Cancel the purchase order
- Close – Close the purchase order
- Create – Create the purchase order
- Export – Mark a purchase order as exported
- Ignore window and issue – Ignore windows and issue the purchase order
- Issue – Issue a purchase order to the supplier
- Issue without send – Issue the purchase order but don’t send it to the supplier
- Reopen – Reopen a soft closed purchase order
- Update – Update a purchase order

### 84.5 API/Work Confirmation/Headers
- New supplier review – Create a supplier review

## 85. core.requisition.read
### 85.1 API/Group Buying Memberships
- Recently added members – Returns recently added users and groups

### 85.2 API/Requisition Lines
- Index – Query requisition lines
- Show – Show requisition lines

### 85.3 API/Requisitions
- To display current cart details via API – Returns the current cart for that user or create a new one
- Index – Query requisitions
- Mine – List requisitions created or requested by the user
- Show – Show the requisition

## 86. core.requisition.write
### 86.1 API/Requisition Lines
- Create – Create a requisition line
- Destroy - Delete a requisition line
- Realtime Status Update – Update open buy item with complete item information from the supplier site
- Requisition Line Detail – Return the description of the requisition line item
- Update – Update a requisition line
- Update Alternate Status – Update requisition line item with alternative item status

### 86.2 API/Requisitions
- Add Approver – Allows the manual addition of approvers to the list of approvals of a requisition
- Add to cart – Allows user to add an item in the current cart
- Create – Create a requisition
- Create as cart – Create a requisition in draft status, which will then need to be submitted manually
- Destroy – Delete requisitions
- Export – Mark requisition as an export
- Remove Approval - Allows the removal of a manual approval from the list of approvals of a requisition
- Save for later for API requisitions – Saving current cart as a new requisition
- Set as current cart – Set specified requisition as current cart for the user if possible
- Submit for Approval – Create a requisition and attempt to submit it for approval/buyer action
- Update – Update requisition
- Update requisition and submit for approval – Update requisition and submit for approval
- Update requisition without validation – Update requisition without validation

## 87. core.sourcing.pending_supplier.read
### 87.1 API/Pending Quote Supplier
- Index – Query all pending quote suppliers

## 88. core.sourcing.pending_supplier.write
### 88.1 API/Pending Quote Supplier
- Create – Create a new pending quote supplier

## 89. core.sourcing.read
### 89.1 API/Quote Award Approvables
- Index – Query list of comments on the quote award approvable document
- Show – Show the sourcing award approvable document along with the linked sourcing event

### 89.2 API/Quote Request Approvables
- Index – Query list of comments on the quote request approvable document
- Show – Show the sourcing launch approvable document along with the linked sourcing event

### 89.3 API/Quote Requests
- Index – Query all sourcing events
- Show – Show the details for a specific sourcing event

### 89.4 API/Quote Suppliers
- Show – Show the information about a particular sourcing event

## 90. core.sourcing.response.award.write
### 90.1 API/Quote Responses
- Award – Reward a response
- Remove award – Remove a reward

## 91. core.sourcing.response.read
### 91.1 API/Quote Responses
- Index – Query all responses from the sourcing event
- Show – Show the details for a specific quote response

## 92. core.sourcing.response.write
### 92.1 API/Quote Responses
- Update – Update a quote response

## 93. core.sourcing.write
### 93.1 API/Quote Award Approvables
- Add approver – Add an approver to the sourcing event award approvals
- Bypass approver – Ability to bypass approvals on sourcing event award approvals
- Bypass current approval – Bypass the current approval on a sourcing event award approval
- Create – Create a comment on the quote award approvable document
- Remove and regenerate – Remove self and regenerate sourcing event award approvals
- Remove approval – Remove approver from the sourcing event award approvals
- Withdraw – Withdraw the sourcing event award approval

### 93.2 API/Quote Request Approvables
- Add approver – Add an approver to the sourcing event launch approvals
- Bypass approver – Bypass the approvals on sourcing event launch approvals
- Bypass current approval – Bypass the current approval on sourcing event launch approvals
- Create – Create a comment on the quote request approvable document
- Remove and regenerate – Remove self and regenerate sourcing event launch approvals
- Remove approval – Remove an approver from the sourcing event launch approvals
- Withdraw – Withdraw the sourcing event launch approval

### 93.3 API/Quote Requests
- Create – Create a sourcing event
- Create a sourcing event from the requisition – Create the sourcing event from different sources
- End event – End the sourcing event
- Submit sourcing event to production – Submits the event to production
- Move a sourcing event to a test state – Move the sourcing event to the test state
- Update – Update the specific sourcing event

## 94. core.sourcing_information_sites.read
### 94.1 API/Supplier Information Sites
- Index – Query all sites of specific supplier information
- Show – Show all the attributes of supplier information site of supplier information

## 95. core.sourcing_information_sites.write
### 95.1 API/Supplier Information Sites
- Create - Create supplier information site of specific supplier information
- Destroy – Delete supplier information site of specific supplier information
- Update – Update attributes of a supplier information site of supplier information

## 96. core.supplier_information_tax_registrations.delete
### 96.1 API/Supplier Information Tax Registration
- Destroy – Delete supplier information tax registration

## 97. core.supplier_information_tax_registrations.read
### 97.1 API/Supplier Information Tax Registrations
- Show – Show supplier information tax registration

## 98. core.supplier_information_tax_registrations.write
### 98.1 API/Supplier Information Tax Registrations
- Create – Create supplier information tax registration
- Update – Update supplier information tax registration

## 99. core.supplier_sharing_settings.read
### 99.1 API Supplier Sharing Settings
- Index – Query supplier sharing settings
- Show – Show supplier sharing settings

## 100. core.supplier_sharing_settings.write
### 100.1 API Supplier Sharing Settings
- Create – Create supplier sharing settings
- Destroy – Remove supplier sharing settings
- Update – Update supplier sharing settings

## 101. core.supplier_sites.read
### 101.1 API/Supplier Sites
- Index – Query all sites of a specific supplier
- Show – Show all the attributes of supplier site of suppler

## 102. core.supplier_sites.write
### 102.1 API/Supplier Sites
- Create – Create a supplier site for a specific supplier
- Destroy – Delete a supplier site for a specific supplier
- Update – Update attributes of a supplier site for a specific supplier

## 103. core.supplier.read
### 103.1 API/Invoice Emails
- Index – Query invoice emails
- Show – Show invoice emails

### 103.2 Proxy Supplier
- Index – Query proxy suppliers

### 103.3 API/Remit to Addresses
- Index – Query remit to addresses
- Show – Show remit to address

### 103.4 API/Supplier Business Groups
- Index – Query supplier’s associations to business groups
- Show – Show supplier’s associations to a business group

### 103.5 API/Supplier Information
- Index – Query supplier information
- Show – Show supplier information

### 103.6 Supplier Invites
- Show – Show the status of an initiated background job of multiple supplier invites

### 103.7 API/Supplier Sites
- Index – Query out all sites of a specific supplier
- Show – Show all the attributes of the supplier site of a supplier

### 103.8 API/Supplier
- Index – Query supplier
- Show – Show supplier

## 104. core.supplier.risk_aware.read
### 104.1 Risk Aware Feed
- Index – Query risk aware feed
- Show – Show risk aware feed

## 105. core.supplier.risk_aware.write
### 105.1 Risk Aware Feed
- Create – Create a risk aware feed
- Update – Update risk aware feed

## 106. core.supplier.write
### 106.1 API/Invoice Emails
- Create - Create an invoice email

### 106.2 API/Remit to Addresses
- Create – Create a remit to address
- Destroy – Delete a remit to address
- Update – Update a remit to address

### 106.3 API/Supplier Business Groups
- Add – Add a supplier to a business group
- Remove – Remove a supplier from a business group
- Remove all – Remove a supplier from all business groups

### 106.4 API/Supplier Information
- Create – Create supplier information
- Export – Mark supplier information as exported
- Update – Update supplier information

### 106.5 Supplier Invites
- Create – Start a background job to invite multiple suppliers

### 106.6 API/Supplier Sites
- Create – Create a supplier site for a specific supplier
- Update – Update attributes of a supplier site for a specific supplier

### 106.7 Supplier users Integration Contacts
- Add – Add a supplier user integration contact
- Remove – Remove a supplier user integration contact

### 106.8 API/Suppliers
- Create – Create a supplier
- Create supplier user preferences – Create a supplier user preference
- Sync supplier user locale – Sync a supplier user’s locale
- Update – Update a supplier

## 107. core.uom.read
### 107.1 API/UOMs
- Show – Show details of a UOM

## 108. core.uom.write
### 108.1 API/UOMs
- Create – Create a new UOM
- Update – Update an existing UOM

## 109. core.user_group.read
### 109.1 API/Tasks
- Index – Query tasks
- Show – Show a task

### 109.2 API/User Group Memberships
- Index – Query user group memberships
- Show – Show a user group membership

### 109.3 API/User Groups
- Index – Query user groups
- Show – Show a user group

## 110. core.user_group.write
### 110.1 API/Tasks
- Create – Create a task
- Update – Update a task

### 110.2 API/User Group Memberships
- Create – Create a user group membership
- Destroy – Delete a user group membership
- Update – Update a user group membership

### 110.3 API/User Groups
- Create – Create a user group
- Update – Update a user group

## 111. core.user.read
### 111.1 API/User Addresses
- Index – Query user’s association to addresses
- Show – Show a user’s association to an address

### 111.2 API/User Business Groups
- Index – Query a user’s association to a business group

### 111.3 API/Users
- Avatar show – Show an avatar
- Index – Query user
- Show – Show a user

## 112. core.user.write
### 112.1 API/User Addresses
- Create – Create the user association to an address
- Update – Update a user’s association to an address

### 112.2 API/User Business Groups
- Add – Add a business group
- Remove - Remove a user group

### 112.3 API/Users
- Delete avatar – Delete a user’s avatar
- Avatar update – Update a user’s avatar
- Create – Create a user
- Update – Update a user

## 113. email

## 114. login

## 115. offline_access

## 116. openid

## 117. profile
### 117.1 API/Coupa Messenger
- Message action – To enable the Coupa messenger message

## 118. travel_booking.common.read
- Nothing as of R34.3.0

## 119. travel_booking.search.write
- Nothing as of R34.3.0

## 120. travel_booking.team.read
- Nothing as of R34.3.0

## 121. travel_booking.team.write
- Nothing as of R34.3.0

## 122. travel_booking.trip.read
- Nothing as of R34.3.0

## 123. travel_booking.trip.write
- Nothing as of R34.3.0

## 124. travel_booking.user.read
- Nothing as of R34.3.0

## 125. travel_booking.user.write
- Nothing as of R34.3.0

## 126. treasury.cash_management.delete
### 126.1 API/Treasury/Cash Management
- Cash Flows/Delete – Delete cash flow in the treasury

## 127. treasury.cash_management.read
### 127.1 API/Treasury/Cash Management
- Cash Flows/Index – Query for the cash flow in the treasury

## 128. treasury.cash_management.write
### 128.1 API/Treasury/Cash Management
- Cash Flows/Create – Create a cash flow in the treasury
- Cash Flows/Update – Modify a cash flow in the treasury
