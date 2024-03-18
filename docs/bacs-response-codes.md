---
title: "BACS Response Codes"
---

# BACS Response Codes

## Application Response Codes

The following tables detail the descriptions that should be used when the applicable application response codes are returned by BacscomIP.

The response codes are structured according to the main validation activities conducted by Mandate Express.

### BACSTEL-IP Logon & Submission XML Header Response Codes

| Response Code | Outcome | Details | Required Action |
| ------------- | ------- | ------- | --------------- |
| 1001 | Your submission has been rejected. | The last request/slice that BACS received was not the one expected. | Please contact your solution supplier. |
| 1002 | Your payment file has been rejected. | There is no valid relationship between the bureau submitting the payment file and the payment originator. | Please contact your sponsor to discuss your profile for BACS Payment Services. |
| 1004 | Your submission has been rejected. | You have attempted to transmit a submission with the same "submission serial number" as another submission for the same service user number and processing day that has already been accepted by BACS. | Please ensure you have not already transmitted this submission to BACS on the current processing day. If you have not, please amend the submission serial number in the VOL1 and retransmit the submission. If you require assistance, please contact your solution supplier. |
| 1005 | Your submission has been rejected. | The security checks at BACS have identified that the “signature hash” for the submission is invalid.  | Please re-validate and then re-sign the submission and retransmit from the start submission request. If this problem persists please contact your solution supplier. |
| 1009 | Your submission has been rejected. | Your software has transmitted a slice of an incorrect size.  | Please contact your solution supplier. |
| 1011 | Your submission has been rejected. | BACS has received a different number of slices to the number expected based on information provided by your software (in the XML submission header). | Please contact your solution supplier. |
| 1012 | Your submission has been rejected. | Your session with BACS Payment Services has timed out.  | If you wish to continue using BACS Payment Services please re-authenticate and restart the submission. |
| 1013 | Your submission has been aborted. | Your submission has been aborted at your request. | No action required. |
| 1014 | Your submission has been rejected. | A BACS operator has terminated your submission. | Please contact BACS. |
| 1015 | Your submission has been rejected. | This submission was not completed before another one was started. | No action required. |
| 1016 | Your submission has been rejected. | A technical error has occurred at BACS.  | Please try retransmitting the submission. If the problem persists, please contact BACS. |
| 1021 | Your submission has been rejected. | You have submitted a multi-file submission, however, as you are not a bureau service user this is not permitted.  | The payment files should be sent in separate submissions. If you have any concerns, please contact your sponsor to discuss your profile for BACS Payment Services. |
| 1023 | Your submission has been rejected. | You are submitting on behalf of a service user you are not linked to. | Please ensure the submission is sent by a contact associated with the service user. If the problem persists, please contact your sponsor to discuss your profile for BACS Payment Services. |
| 1024 | Your submission has been rejected. | You do not have the correct permissions to submit files.  | Please ensure the submission is sent by a contact who has the correct permissions. If you have any concerns, please contact your sponsor to discuss your profile for BACS Payment Services. |
| 1025 | Your submission has been rejected. | The submission has been signed by a contact who is not recognised by BACS.  | Please ensure the submission is signed by a recognised contact. If you have any concerns, please contact your sponsor to discuss your profile for BACS Payment Services. |
| 1026 | Your submission has been rejected. | The submission has been signed by a contact who is not associated with the service user. | Please ensure the submission is signed by an associated contact. If you have any concerns, please contact your sponsor to discuss your profile for BACS Payment Services. |
| 1027 | Your submission has been rejected. | The signature on your submission cannot be read. | Please re-sign the submission and retransmit. If this problem persists, please contact your solution supplier. |
| 1028 | Your submission has been rejected. | The submission has been signed by a contact that is not active on BACSTEL-IP | Please ensure the submission is signed by an active contact. If you have any concerns, please contact your sponsor to discuss your profile for BACS Payment Services. |
| 1029 | Your submission has been rejected. | The submission has been signed by a contact that does not have signing privileges. | Please ensure the submission is signed by a contact that has signing privileges. If you have any concerns, please contact your sponsor to discuss your profile for BACS Payment Services |
| 1031 | Your submission has been rejected. | BACS does not recognise your submitting software. | Please contact your solution supplier to ensure the package has been registered and approved by BACS. |
| 1032 | Your submission has been rejected. | Your submitting software has not been approved by BACS. | Please contact your solution supplier to ensure the package has been approved by BACS. |
| 1033 | Your submission has been rejected. | Your submitting software is not linked to the submitting service user. | Please contact your sponsor to ensure the software has been properly associated with the service user or use a package that has been. |
| 1034 | Your logon has been rejected. | The submitting software has not supplied a software package identifier in the logon request. | Please contact your solution supplier. |
| 1035 | Your submission has been rejected. | The solution supplier associated with the submitting software is not linked to the service user you are submitting with, where the service user is designated as a Supplier Tester service user. | Please contact your sponsor. |
| 1039 | Your submission has been rejected. | The submitting service user is not allowed to submit live submissions using this package. | Please contact your sponsor. |
| 1040 | Your submission has been rejected. | The submitting service user is designated as a Supplier Tester service user, and as such cannot submit live submissions. | Please submit using a normal service user. |
| 1050 | Your submission has been rejected. | There is an error in the structure of your submission. (The transmitted data does not consist of a complete submission.) | Please try retransmitting your Submission. Please contact your solution supplier. |
| 1911 | Your submission has been rejected. | You have submitted a payment file that exceeds the allowed number of payment instructions (1.2 million). | Please resubmit the payment instructions in smaller payment files. |

### VOL1 Record Response Codes
| Response Code | Outcome | Details | Required Action |
| ------------- | ------- | ------- | --------------- |
| 1101 | Your submission has been rejected. | There is an error in the structure of your submission. (BACS did not receive a valid VOL1 record as the first record of the first slice of your submission.) | Please contact your solution supplier. |
| 1102 | Your submission has been rejected. | There is an error in the structure of your submission. (The service user number in the VOL1 record of your submission was not the same as the service user number your software included in the XML submission header.). | Please contact your solution supplier. |
| 1103 | Your submission has been rejected. | There is an error in the structure of your submission. (The characters in positions 38 to 41 and 48 to 51 of the VOL1 record must be spaces.) | Please contact your solution supplier. |

### XML File Header Response Codes
| Response Code | Outcome | Details | Required Action |
| ------------- | ------- | ------- | --------------- |
| 1201 | Your submission has been rejected. | There is an error in the structure of your submission. (A valid XML payment file header did not follow a VOL1 record.) | Please contact your solution supplier. |
| 1202 | Your submission has been rejected. | There is an error in the structure of your submission. (This was a multi-file submission and a valid XML payment file header did not follow the UTL1 record.) | Please contact your solution supplier. |
| 1203 | Your payment file has been rejected. | There has been an error in the validation of the signature of the payment file. (The signature was invalid.) | Please try re-signing and retransmitting the payment file and retransmit the payment file. If this problem persists please contact your solution supplier. |
| 1204 | Your payment file has been rejected. | You are required to sign individual payment files, however, your payment file was not signed. | Please try retransmitting the payment file. Please note one of the following:  <br><ul><li>If you are signing the payment file and the problem persists, please contact your solution supplier; or</li><li>If you believe you do not require a payment file level signature, please contact your sponsor to discuss.</li></ul> |
| 1205 | Your submission has been rejected. | There is an error in the structure of your submission. (The XML payment file header was invalid.) | Please contact your solution supplier. |
| 1206 | Your submission has been rejected. | There is an error in the structure of your submission. (The XML payment file header sequence number was not numbered consecutively.) | Please contact your solution supplier. |
| 1211 | Your payment file has been rejected. | The payment file has been signed by a contact who is not recognised by BACS. | Please ensure the payment file is signed by a recognised contact. If this problem persists, please contact your sponsor to discuss your profile for BACS Payment Services. |
| 1212 | Your payment file has been rejected. | The payment file has been signed by a contact who is not associated with the originating service user. | Please ensure the payment file is signed by an associated contact. If this problem persists, please contact your sponsor to discuss your profile for BACS Payment Services. | 

### HDR1 Record Response Codes
| Response Code | Outcome | Details | Required Action |
| ------------- | ------- | ------- | --------------- |
| 1301 | Your submission has been rejected. | There is an error in the structure of your submission. (A valid HDR1 record did not follow an XML payment file header in your submission.) | Please contact your solution supplier. |
| 1302 | Your submission has been rejected. | There is an error in the structure of your single file submission. (The service user number in the VOL1 record of your submission was not the same as the service user number your software included in the HDR1 record.) | Please contact your solution supplier. |
| 1303 | Your submission has been rejected. | There is an error in the structure of your submission. (The file identifier in the HDR1 record was not equal to the file identifier in the XML payment file header.) | Please contact your solution supplier. |
| 1304 | Your submission has been rejected. | There is an error in the structure of your submission. (The service user number in the HDR1 record was invalid.) | Please contact your solution supplier. |

### HDR2 Record Response Codes
| Response Code | Outcome | Details | Required Action |
| ------------- | ------- | ------- | --------------- |
| 1401 | Your submission has been rejected. | There is an error in the structure of your submission. (A valid HDR2 record did not follow a HDR1 record. | Please contact your solution supplier. |

### Structural Response Codes
| Response Code | Outcome | Details | Required Action |
| ------------- | ------- | ------- | --------------- |
| 1501 | Your submission has been rejected. | There is an error in the structure of your submission. (A valid UHL1 record did not follow a HDR2 record.) | Please contact your solution supplier. |

### Processing Day Response Codes   
1502	  	  	Warning – A processing day in your submission will be overridden by BACS.  
Details: 	 	There is an error in the structure of your submission (the UHL1 processing day was not in the correct format). The file will be processed on the current processing day.  
Required action: 	 	If you have any concerns, please contact your sponsor. 

1503	  	  	Warning – A processing day in your submission will be overridden by BACS.  
Details: 	 	The processing day of your payment file is invalid (the processing date was supplied in UHL1). If the payment file is a single processing day file it will be processed on the next available processing date after the date supplied in your payment file. If this falls outside the valid processing date range, your payment file will be processed on the latest available processing date within the range. If the payment pile is a multi-processing day file it will be processed on the current BACS processing date.  
Required action: 	 	If you have any concerns, please contact your sponsor. 

1504	  	  	Warning – A European non-processing day has been used.  
Details: 	 	The processing day included in the submission is a European non-processing day. Settlement for this record will occur on the next available day. (The processing day was supplied in the UHL1 record.)  
Required action: 	 	If you have any concerns, please contact your sponsor. 

1506	  	  	Warning – A processing day in your submission will be overridden by BACS.  
Details: 	 	The processing day in your submission has already passed. The submission will be processed on the current processing day. (The processing day was supplied in the UHL1 record.)  
Required action: 	 	If you have any concerns, please contact your sponsor. 

1507	  	  	Warning – A processing day in your submission will be overridden by BACS.  
Details: 	 	The processing day in your submission was not the current processing day. This is required for the file type submitted. The submission will be processed on the current processing day. (The processing day was supplied in the UHL1 record.)  
Required action: 	 	If you have any concerns, please contact your sponsor. 

1508	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (The work code in UHL1 was not a valid work code.)  
Required action: 	 	Please contact your solution supplier. 

1509	  	  	Your payment file has been rejected.  
Details: 	 	There is an error in the structure of your submission. (The file number in UHL1 must be numeric.)  
Required action: 	 	Please contact your solution supplier. 

### Currency Code Response Codes  
1551	  	  	For information.  
Details: 	 	The payment file submitted is in euros.  
Required action: 	 	No action required.

1552	  	  	Warning - A currency used has not been recognised.  
Details: 	 	The currency of a payment file submitted was not recognised. It will be processed as sterling.  
Required action: 	 	If you have any concerns, please contact your sponsor. 

### Payment Item Structure Response Codes  
1901 	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (A payment instruction in the submission contained an unrecognised transaction code.)  
Required action: 	 	Please contact your solution supplier. 

1902	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (A valid contra record has not been included for a particular day section or file.)  
Required action: 	 	Please contact your solution supplier. 

1905	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (No valid payment instructions were included for a particular day section or file.)  
Required action: 	 	Please contact your solution supplier. 

### Standard Debit and Credit Response Codes   
1931 	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the account details of a payment instruction. A destination sorting code was not all numeric.  
Required action: 	 	Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. 

1932 	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the account details of a payment instruction. A destination account number was not all numeric.  
Required action: 	 	Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. 

1933	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the account details of a payment instruction. A destination account code type was not all numeric.  
Required action: 	 	Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. 

1934	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the account details of a payment instruction. An originating sorting code was not all numeric.  
Required action: 	 	Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. 

1935	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the account details of a payment instruction. An originating account number used was not all numeric.  
Required action: 	 	Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. 

1936	  	  	Your submission has been rejected.  
Details: 	 	You have submitted a payment instruction with a zero value.  
Required action: 	 	Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. 

1937	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the value of a payment instruction. The value was not all numeric.  
Required action: 	 	Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. . 

1938	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the account details of a Direct Debit instruction. A destination account number used was all zeroes.  
Required action: 	 	Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. 

### Credit Card Specific Response Codes  
1939	  	  	Your submission has been rejected.  
Details: 	 	There is an error in a credit card record. The merchant number was not all numeric.  
Required action: 	 	Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. 

1940	  	  	Your submission has been rejected.  
Details: 	 	There is an error in a credit card record. The merchant number is all zeroes.  
Required action: 	 	Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. 

1941	  	  	Your submission has been rejected.  
Details: 	 	There is an error in a credit card record. The cardholder number was not numeric followed by spaces.  
Required action: 	 	Please check the cardholder number used was numeric. If it was all numeric, there may be an error in the structure of your submission, in which case, contact your solution supplier. 

1942	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the account details of an unapplied automated credit record. An originating account number was zero filled.  
Required action: 	 	Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. 

### Contra Response Codes   
1991 	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the account details of a contra record. A destination sorting code was not all numeric.  
Required action: 	 	Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. 

1992 	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the account details of a contra record. A destination account number was not all numeric.  
Required action: 	 	Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. 

1993	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the account details of a contra record. A destination account code type was not all numeric.  
Required action: 	 	Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. 

1994	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the account details of a contra record. An originating sorting code was not all numeric.  
Required action: 	 	Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. 

1995	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the account details of a contra record. An originating account number was not all numeric.  
Required action: 	 	Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. 

1996	  	  	Your submission has been rejected.  
Details: 	 	You have submitted a contra record with a zero value.  
Required action: 	 	Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. 

1997	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the value of a contra record. The value was not all numeric.  
Required action: 	 	Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. . 

### Multi Processing Day Response Codes  
1912 	  	  	Warning – A processing day will be overridden by BACS.  
Details: 	 	There is an error in the structure of your submission (a processing day in a payment instruction was not in the correct format). The affected payment instruction will be processed on the processing day of the payment file (the UHL1 date).  
Required action: 	 	If you have any concerns, please contact your sponsor. 

1913	  	  	Warning – A processing day will be overridden by BACS.  
Details: 	 	The processing date of a payment instruction is invalid. The payment instruction will be processed on the next valid processing date after the date supplied. If this falls outside the valid processing date range the payment instruction will be processed on the latest valid processing date within the range.  
Required action: 	 	If you have any concerns, please contact your sponsor. 

1914	  	  	Warning – A European non-processing day has been used.  
Details: 	 	The processing day of a payment instruction is a European non-processing day. Settlement for this record will occur on the next available day.  
Required action: 	 	If you have any concerns, please contact your sponsor. 

1915	  	  	Warning – A processing day will be overridden by BACS.  
Details: 	 	The processing day of a payment instruction is more than 39 calendar days after the processing day of the payment file (in UHL1). The affected payment instruction will be processed on the processing day of the payment file (the UHL1 date).  
Required action: 	 	If you have any concerns, please contact your sponsor. 

1916	  	  	Warning – A processing day will be overridden by BACS.  
Details: 	 	The processing day of a payment instruction has already passed. The affected payment instruction will be processed on the processing day of the payment file (the UHL1 date).  
Required action: 	 	If you have any concerns, please contact your sponsor. 

### Contra Processing Day Response Codes  
1982 	  	  	Warning – A processing day will be overridden by BACS.  
Details: 	 	There is an error in the structure of your submission (a processing day in a contra record is not in the correct format). The contra record will be processed on the same processing day of the payment file (the UHL1 date).  
Required action: 	 	If you have any concerns, please contact your sponsor. 

1983	  	  	Warning – A processing day will be overridden by BACS.  
Details: 	 	The processing day of a contra record is not a valid BACS processing day. The affected contra record will be processed on the nearest valid processing day to the day you used.  
Required action: 	 	If you have any concerns, please contact your sponsor. 

1984	  	  	Warning – A European non-processing day has been used.  
Details: 	 	The processing day of a contra record is a European non-processing day. Settlement for this record will occur on the next available day.  
Required action: 	 	If you have any concerns, please contact your sponsor. 

1985	  	  	Warning – A processing day will be overridden by BACS.  
Details: 	 	The processing day of a contra record is more than 39 calendar days after the processing day of the payment file (in UHL1). The affected contra record will be processed on the same processing day of the payment file (the UHL1 date).  
Required action: 	 	If you have any concerns, please contact your sponsor. 

1986	  	  	Warning – A processing day will be overridden by BACS.  
Details: 	 	The processing day of a contra record has already passed. The affected contra will be processed on the same processing day of the payment file (the UHL1 date).  
Required action: 	 	If you have any concerns, please contact your sponsor. 

### EOF1 Record Response Codes  
1601 	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (A valid payment instruction or EOF1 record does not follow a payment record.)  
Required action: 	 	Please contact your solution supplier. 

1602	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (The characters in positions 6 to 11 of EOF1 are not all numeric.)  
Required action: 	 	Please contact your solution supplier. 

1603	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (A valid standing order recall record or EOF1 record does not follow a standing order recall record.)  
Required action: 	 	Please contact your solution supplier. 

### EOF2 Record Response Codes  
1701 	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (A valid EOF2 record does not follow the EOF1 record.)  
Required action: 	 	Please contact your solution supplier. 

### UTL1 Record Contra Response Codes  
1801 	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (A valid UTL1 record does not follow the EOF2 record.)  
Required action: 	 	Please contact your solution supplier.

1802 	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (The count of credit payment instructions in UTL1 is not all numeric.)  
Required action: 	 	Please contact your solution supplier.

1803	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (The count of debit payment instructions in UTL1 is not all numeric.)  
Required action: 	 	Please contact your solution supplier.

1804	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (The count of Direct Debit instruction records in UTL1 is not all numeric.)  
Required action: 	 	Please contact your solution supplier.

1805	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (The count of credit payment instructions in UTL1 does not contain the correct count of credit payment instructions and debit contra records since the preceding UHL1 record.)  
Required action: 	 	Please contact your solution supplier.

1807	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (The count of debit payment instructions in UTL1 does not contain the correct count of debit payment instructions and credit contra records since the preceding UHL1 record.)  
Required action: 	 	Please contact your solution supplier.

1809	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (The count of Direct Debit instruction records in UTL1 does not contain the correct count of Direct Debit instruction records since the preceding UHL1 record.)  
Required action: 	 	Please contact your solution supplier.

### UTL1 Record Amount Response Codes  
1811 	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (The monetary total of credit payment instructions in UTL1 is not numeric.)  
Required action: 	 	Please contact your solution supplier.

1812 	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (The monetary total of debit payment instructions in UTL1 is not numeric.)  
Required action: 	 	Please contact your solution supplier.

1813	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (The monetary total of credit payment instructions in UTL1 did not contain the correct monetary total of the credit payment instructions and debit contra amounts since the preceding UHL1.)  
Required action: 	 	Please contact your solution supplier.

1814	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your Submission. (The monetary total of debit payment instructions in UTL1 did not contain the correct monetary total of the debit payment instructions and credit contra amounts since the preceding UHL1.)  
Required action: 	 	Please contact your solution supplier.

1815	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (The total value of credit contra records did not equal the total value of credit payment instructions in the day section/file.)  
Required action: 	 	Please contact your solution supplier.

1816	  	  	Your submission has been rejected.  
Details: 	 	There is an error in the structure of your submission. (The total value of debit contra records did not equal the total value of debit payment instructions in the day section/file.)  
Required action: 	 	Please contact your solution supplier.