---
title: "Creating a New Account (Paper)"
---
In order to collect a direct debit from a customer, the customer’s details need to be stored in Mandate Express. This is called an account.

To create an account, click ‘New Account' on the main screen or select 'New Account' from the File menu or click 'Create New Account' on the Account Viewer. The following screen will be displayed.

## Reference Information

![](https://files.readme.io/f95f3f7-image.png)

Select which group the account is to belong to from the drop down list. For more information on groups, see Mandate Groups.

In the example above, the reference field is available. Enter the Direct Debit Reference number of the new account. Mandate Express can auto fill this field with a sequential reference if required.

The UDReference (User Defined Reference) can be used for any other reference number held for this customer e.g. customer account numbers

Bacs User Number will be automatically updated, based on the Group selected.

Currency is automatically set to GBP.

Mandate provides the facility to link accounts, this means that an account can have several others linked to it and collections will be taken from the parent account.  If the account is to be a parent, check the box, or if the account is to belong to a parent select from the dropdown list.

For example, if the direct debit was for membership to a gym a father with two children may wish the membership fees to be collected from his bank account but each gym member is required to have their own account number. In this case, when creating the fathers account, tick the box ‘This account is the Primary/Parent Account’ and when creating the children’s’ accounts select the fathers reference from the Parent Account drop down.

In all other instances, these options can be ignored.

Click Next to move to the next section.

## Personal Information

![](https://files.readme.io/1f7d699-image.png)

Complete the Personal information fields. Alternative Name can be used if the letters are to be addressed to someone other than the Mandate Account holder.

If you have subscribed to the Postcode lookup service, the Find Address link will be enabled. This will display all the available addresses for the inputted postal code.

Please note, name and address information are required if you wish to use Mandate Express Letters and a valid email address is required to email letters.

Click Next to move to the next section.

## Bank Details

![](https://files.readme.io/428e443-image.png)

Select Record Type from the drop down list. The table below describes the options.  
Bank = The funds will be collected from a bank account  
Manual = The funds will be collected manually e.g. cash or cheque

Enter the 6 digit sort code. The branch information will be immediately displayed at the right hand side.

Enter the 8 digit account number.

The bank account details are modulus checked when you tab off the account number field. Any errors are identified by exclamation marks and highlighted.

The Account Name field will auto fill with the Title, Forename and Surname entered in the personal section. Should this combination exceed 18 characters (including spaces) the title will be dropped, then forename dropped and surname truncated to 18 characters.

![](https://files.readme.io/42c72a6-image.png)

Click Next to move to the next section.

## Miscellaneous

![](https://files.readme.io/48725a1-image.png)

All of the information in the miscellaneous section is optional. Complete what you require. Mandate Express offers 12 additional utility fields that are displayed here if they are in use. These fields are flexible and can be named and used dependent on your company's requirements.

Click Next to move to the final section.

## Instructions

![](https://files.readme.io/0079d3f-image.png)

**Reference** should remain blank at this point and is only used when creating a new instruction on an existing account.

**Instruction Type** can be either Debit or Credit. For collection of Direct Debits, this should be Debit.

**Narrative** is information you wish to enter to describe what kind of instruction you are creating e.g. 'Donation', or 'Subscription'.

**Invoice No** can be used if the direct debit relates to a specific invoice.

**Frequency** (how often the direct debit is to be collected) can be selected as None, Single, Weekly, Four Weekly, Monthly, Quarterly, Bi-annual or Annual.

**Frequency Multiplier** will generally be left at 1. However, it can be used to create unusual frequencies. E.g. If the frequency is monthly and the multiplier is 2, the direct debit will be collected every 2nd month.

**Continuous** If the instruction is to continue indefinitely, tick the box. If the instruction is for a set number of direct debits leave the box blank.

**Count** is the number of direct debits to be collected. If the instruction is continuous, leave blank.

**End Date** can be used to define the date a sequence of transactions ends. Count must be 0 and continuous unchecked if an end date is to be used.

**First Amount** is the amount of the first direct debit - this only needs to be completed if the first date or amount is different from the standard date and amount.

**First Date** is the date the first direct debit is due - this only needs to be completed if the first date or amount is different from the regular date and amount.

**Regular Amount** is the amount of all subsequent direct debits.

**Regular Date** is the date of all subsequent direct debits - please note, if the first collection date has been completed, this date will be the date the second direct debit is due.

**Final Amount** is the amount of the last direct debit to be collected. This cannot be used for a continuous instruction.

**Month End** can be selected if the direct debit is due on the last day of every month. If month end is selected, a direct debit with a regular date of the 30/09/2006 will be collected on the 30th September then the 31st October. Mandate will automatically select the last day of the month when compiling the payment schedule.
