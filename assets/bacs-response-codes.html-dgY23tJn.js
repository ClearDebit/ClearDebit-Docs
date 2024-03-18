import{_ as e,o as s,c as r,a as o}from"./app-N0yL1QX4.js";const t={},i=o('<h1 id="bacs-response-codes" tabindex="-1"><a class="header-anchor" href="#bacs-response-codes"><span>BACS Response Codes</span></a></h1><h2 id="application-response-codes" tabindex="-1"><a class="header-anchor" href="#application-response-codes"><span>Application Response Codes</span></a></h2><p>The following tables detail the descriptions that should be used when the applicable application response codes are returned by BacscomIP.</p><p>The response codes are structured according to the main validation activities conducted by Mandate Express.</p><h3 id="bacstel-ip-logon-submission-xml-header-response-codes" tabindex="-1"><a class="header-anchor" href="#bacstel-ip-logon-submission-xml-header-response-codes"><span>BACSTEL-IP Logon &amp; Submission XML Header Response Codes</span></a></h3><p>Application Response Code Description</p><table><thead><tr><th>Response Code</th><th>Outcome</th><th>Details</th><th>Required Action</th></tr></thead><tbody><tr><td>1001</td><td>Your submission has been rejected.</td><td>The last request/slice that BACS received was not the one expected.</td><td>Please contact your solution supplier.</td></tr><tr><td>1002</td><td>Your payment file has been rejected.</td><td>There is no valid relationship between the bureau submitting the payment file and the payment originator.</td><td>Please contact your sponsor to discuss your profile for BACS Payment Services.</td></tr><tr><td>1004</td><td>Your submission has been rejected.</td><td>You have attempted to transmit a submission with the same &quot;submission serial number&quot; as another submission for the same service user number and processing day that has already been accepted by BACS.</td><td>Please ensure you have not already transmitted this submission to BACS on the current processing day. If you have not, please amend the submission serial number in the VOL1 and retransmit the submission. If you require assistance, please contact your solution supplier.</td></tr></tbody></table><h4 id="response-code-1005" tabindex="-1"><a class="header-anchor" href="#response-code-1005"><span>Response Code: 1005</span></a></h4><p><strong>Outcome:</strong> Your submission has been rejected.<br><strong>Details:</strong> The security checks at BACS have identified that the “signature hash” for the submission is invalid.<br><strong>Required action:</strong> Please re-validate and then re-sign the submission and retransmit from the start submission request. If this problem persists please contact your solution supplier.</p><h4 id="response-code-1009" tabindex="-1"><a class="header-anchor" href="#response-code-1009"><span>Response Code: 1009</span></a></h4><p><strong>Outcome:</strong> Your submission has been rejected.<br><strong>Details:</strong> Your software has transmitted a slice of an incorrect size.<br><strong>Required action:</strong> Please contact your solution supplier.</p><h4 id="response-code-1011" tabindex="-1"><a class="header-anchor" href="#response-code-1011"><span>Response Code: 1011</span></a></h4><p><strong>Outcome:</strong> Your submission has been rejected.<br><strong>Details:</strong> BACS has received a different number of slices to the number expected based on information provided by your software (in the XML submission header).<br><strong>Required action:</strong> Please contact your solution supplier.</p><h4 id="response-code-1012" tabindex="-1"><a class="header-anchor" href="#response-code-1012"><span>Response Code: 1012</span></a></h4><p><strong>Outcome:</strong> Your submission has been rejected.<br><strong>Details:</strong> Your session with BACS Payment Services has timed out.<br><strong>Required action:</strong> If you wish to continue using BACS Payment Services please re-authenticate and restart the submission.</p><h4 id="response-code-1013" tabindex="-1"><a class="header-anchor" href="#response-code-1013"><span>Response Code: 1013</span></a></h4><p><strong>Outcome:</strong> Your submission has been aborted.<br><strong>Details:</strong> Your submission has been aborted at your request.<br><strong>Required action:</strong> No action required.</p><h4 id="response-code-1014" tabindex="-1"><a class="header-anchor" href="#response-code-1014"><span>Response Code: 1014</span></a></h4><p><strong>Outcome:</strong> Your submission has been rejected.<br><strong>Details:</strong> A BACS operator has terminated your submission.<br><strong>Required action:</strong> Please contact BACS.</p><h4 id="response-code-1015" tabindex="-1"><a class="header-anchor" href="#response-code-1015"><span>Response Code: 1015</span></a></h4><p><strong>Outcome:</strong> Your submission has been rejected.<br><strong>Details:</strong> This submission was not completed before another one was started.<br><strong>Required action:</strong> No action required.</p><h4 id="response-code-1016" tabindex="-1"><a class="header-anchor" href="#response-code-1016"><span>Response Code: 1016</span></a></h4><p><strong>Outcome:</strong> Your submission has been rejected.<br><strong>Details:</strong> A technical error has occurred at BACS.<br><strong>Required action:</strong> Please try retransmitting the submission. If the problem persists, please contact BACS.</p><h4 id="response-code-1021" tabindex="-1"><a class="header-anchor" href="#response-code-1021"><span>Response Code: 1021</span></a></h4><p><strong>Outcome:</strong> Your submission has been rejected.<br><strong>Details:</strong> You have submitted a multi-file submission, however, as you are not a bureau service user this is not permitted.<br><strong>Required action:</strong> The payment files should be sent in separate submissions. If you have any concerns, please contact your sponsor to discuss your profile for BACS Payment Services.</p><h4 id="response-code-1023" tabindex="-1"><a class="header-anchor" href="#response-code-1023"><span>Response Code: 1023</span></a></h4><p><strong>Outcome:</strong> Your submission has been rejected.<br><strong>Details:</strong> You are submitting on behalf of a service user you are not linked to.<br><strong>Required action:</strong> Please ensure the submission is sent by a contact associated with the service user. If the problem persists, please contact your sponsor to discuss your profile for BACS Payment Services.</p><h4 id="response-code-1024" tabindex="-1"><a class="header-anchor" href="#response-code-1024"><span>Response Code: 1024</span></a></h4><p><strong>Outcome:</strong> Your submission has been rejected.<br><strong>Details:</strong> You do not have the correct permissions to submit files.<br><strong>Required action:</strong> Please ensure the submission is sent by a contact who has the correct permissions. If you have any concerns, please contact your sponsor to discuss your profile for BACS Payment Services.</p><h4 id="response-code-1025" tabindex="-1"><a class="header-anchor" href="#response-code-1025"><span>Response Code: 1025</span></a></h4><p><strong>Outcome:</strong> Your submission has been rejected.<br><strong>Details:</strong> The submission has been signed by a contact who is not recognised by BACS.<br><strong>Required action:</strong> Please ensure the submission is signed by a recognised contact. If you have any concerns, please contact your sponsor to discuss your profile for BACS Payment Services.</p><p>1026 Your submission has been rejected.<br> Details: The submission has been signed by a contact who is not associated with the service user.<br> Required action: Please ensure the submission is signed by an associated contact. If you have any concerns, please contact your sponsor to discuss your profile for BACS Payment Services.</p><p>1027 Your submission has been rejected.<br> Details: The signature on your submission cannot be read.<br> Required action: Please re-sign the submission and retransmit. If this problem persists, please contact your solution supplier.</p><p>1028 Your submission has been rejected.<br> Details: The submission has been signed by a contact that is not active on BACSTEL-IP<br> Required action: Please ensure the submission is signed by an active contact. If you have any concerns, please contact your sponsor to discuss your profile for BACS Payment Services.</p><p>1029 Your submission has been rejected.<br> Details: The submission has been signed by a contact that does not have signing privileges.<br> Required action: Please ensure the submission is signed by a contact that has signing privileges. If you have any concerns, please contact your sponsor to discuss your profile for BACS Payment Services</p><p>1031 Your submission has been rejected.<br> Details: BACS does not recognise your submitting software.<br> Required action: Please contact your solution supplier to ensure the package has been registered and approved by BACS.</p><p>1032 Your submission has been rejected.<br> Details: Your submitting software has not been approved by BACS.<br> Required action: Please contact your solution supplier to ensure the package has been approved by BACS.</p><p>1033 Your submission has been rejected.<br> Details: Your submitting software is not linked to the submitting service user.<br> Required action: Please contact your sponsor to ensure the software has been properly associated with the service user or use a package that has been.</p><p>1034 Your logon has been rejected.<br> Details: The submitting software has not supplied a software package identifier in the logon request.<br> Required action: Please contact your solution supplier.</p><p>1035 Your submission has been rejected.<br> Details: The solution supplier associated with the submitting software is not linked to the service user you are submitting with, where the service user is designated as a Supplier Tester service user.<br> Required action: Please contact your sponsor.</p><p>1039 Your submission has been rejected.<br> Details: The submitting service user is not allowed to submit live submissions using this package.<br> Required action: Please contact your sponsor.</p><p>1040 Your submission has been rejected.<br> Details: The submitting service user is designated as a Supplier Tester service user, and as such cannot submit live submissions.<br> Required action: Please submit using a normal service user.</p><p>1050 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The transmitted data does not consist of a complete submission.)<br> Required action: Please try retransmitting your Submission. Please contact your solution supplier.</p><p>1911 Your submission has been rejected.<br> Details: You have submitted a payment file that exceeds the allowed number of payment instructions (1.2 million).<br> Required action: Please resubmit the payment instructions in smaller payment files.</p><p>• VOL1 Record Response Codes<br> Application Response Code Description<br> 1101 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (BACS did not receive a valid VOL1 record as the first record of the first slice of your submission.)<br> Required action: Please contact your solution supplier.</p><p>1102 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The service user number in the VOL1 record of your submission was not the same as the service user number your software included in the XML submission header.) .<br> Required action: Please contact your solution supplier.</p><p>1103 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The characters in positions 38 to 41 and 48 to 51 of the VOL1 record must be spaces.)<br> Required action: Please contact your solution supplier.</p><p>• XML File Header Response Codes<br> Application Response Code Description<br> 1201 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (A valid XML payment file header did not follow a VOL1 record.)<br> Required action: Please contact your solution supplier.</p><p>1202 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (This was a multi-file submission and a valid XML payment file header did not follow the UTL1 record.)<br> Required action: Please contact your solution supplier.</p><p>1203 Your payment file has been rejected.<br> Details: There has been an error in the validation of the signature of the payment file. (The signature was invalid.)<br> Required action: Please try re-signing and retransmitting the payment file and retransmit the payment file. If this problem persists please contact your solution supplier.</p><p>1204 Your payment file has been rejected.<br> Details: You are required to sign individual payment files, however, your payment file was not signed.<br> Required action: Please try retransmitting the payment file. Please note one of the following:<br> • If you are signing the payment file and the problem persists, please contact your solution supplier; or<br> • If you believe you do not require a payment file level signature, please contact your sponsor to discuss.</p><p>1205 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The XML payment file header was invalid.)<br> Required action: Please contact your solution supplier.</p><p>1206 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The XML payment file header sequence number was not numbered consecutively.)<br> Required action: Please contact your solution supplier.</p><p>1211 Your payment file has been rejected.<br> Details: The payment file has been signed by a contact who is not recognised by BACS.<br> Required action: Please ensure the payment file is signed by a recognised contact. If this problem persists, please contact your sponsor to discuss your profile for BACS Payment Services.</p><p>1212 Your payment file has been rejected.<br> Details: The payment file has been signed by a contact who is not associated with the originating service user.<br> Required action: Please ensure the payment file is signed by an associated contact. If this problem persists, please contact your sponsor to discuss your profile for BACS Payment Services.</p><p>• HDR1 Record Response Codes<br> Application Response Code Description<br> 1301 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (A valid HDR1 record did not follow an XML payment file header in your submission.)<br> Required action: Please contact your solution supplier.</p><p>1302 Your submission has been rejected.<br> Details: There is an error in the structure of your single file submission. (The service user number in the VOL1 record of your submission was not the same as the service user number your software included in the HDR1 record.)<br> Required action: Please contact your solution supplier.</p><p>1303 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The file identifier in the HDR1 record was not equal to the file identifier in the XML payment file header.)<br> Required action: Please contact your solution supplier.</p><p>1304 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The service user number in the HDR1 record was invalid.)<br> Required action: Please contact your solution supplier.</p><p>• HDR2 Record Response Codes<br> Application Response Code Description<br> 1401 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (A valid HDR2 record did not follow a HDR1 record.)<br> Required action: Please contact your solution supplier.</p><p>• Structural Response Codes<br> Application Response Code Description<br> 1501 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (A valid UHL1 record did not follow a HDR2 record.)<br> Required action: Please contact your solution supplier.</p><p>• Processing Day Response Codes<br> Application Response Code Description<br> 1502 Warning – A processing day in your submission will be overridden by BACS.<br> Details: There is an error in the structure of your submission (the UHL1 processing day was not in the correct format). The file will be processed on the current processing day.<br> Required action: If you have any concerns, please contact your sponsor.</p><p>1503 Warning – A processing day in your submission will be overridden by BACS.<br> Details: The processing day of your payment file is invalid (the processing date was supplied in UHL1). If the payment file is a single processing day file it will be processed on the next available processing date after the date supplied in your payment file. If this falls outside the valid processing date range, your payment file will be processed on the latest available processing date within the range. If the payment pile is a multi-processing day file it will be processed on the current BACS processing date.<br> Required action: If you have any concerns, please contact your sponsor.</p><p>1504 Warning – A European non-processing day has been used.<br> Details: The processing day included in the submission is a European non-processing day. Settlement for this record will occur on the next available day. (The processing day was supplied in the UHL1 record.)<br> Required action: If you have any concerns, please contact your sponsor.</p><p>1506 Warning – A processing day in your submission will be overridden by BACS.<br> Details: The processing day in your submission has already passed. The submission will be processed on the current processing day. (The processing day was supplied in the UHL1 record.)<br> Required action: If you have any concerns, please contact your sponsor.</p><p>1507 Warning – A processing day in your submission will be overridden by BACS.<br> Details: The processing day in your submission was not the current processing day. This is required for the file type submitted. The submission will be processed on the current processing day. (The processing day was supplied in the UHL1 record.)<br> Required action: If you have any concerns, please contact your sponsor.</p><p>1508 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The work code in UHL1 was not a valid work code.)<br> Required action: Please contact your solution supplier.</p><p>1509 Your payment file has been rejected.<br> Details: There is an error in the structure of your submission. (The file number in UHL1 must be numeric.)<br> Required action: Please contact your solution supplier.</p><p>• Currency Code Response Codes<br> Application Response Code Description<br> 1551 For information.<br> Details: The payment file submitted is in euros.<br> Required action: No action required.</p><p>1552 Warning - A currency used has not been recognised.<br> Details: The currency of a payment file submitted was not recognised. It will be processed as sterling.<br> Required action: If you have any concerns, please contact your sponsor.</p><p>• Payment Item Structure Response Codes<br> Application Response Code Description<br> 1901 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (A payment instruction in the submission contained an unrecognised transaction code.)<br> Required action: Please contact your solution supplier.</p><p>1902 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (A valid contra record has not been included for a particular day section or file.)<br> Required action: Please contact your solution supplier.</p><p>1905 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (No valid payment instructions were included for a particular day section or file.)<br> Required action: Please contact your solution supplier.</p><p>• Standard Debit and Credit Response Codes<br> Application Response Code Description<br> 1931 Your submission has been rejected.<br> Details: There is an error in the account details of a payment instruction. A destination sorting code was not all numeric.<br> Required action: Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier.</p><p>1932 Your submission has been rejected.<br> Details: There is an error in the account details of a payment instruction. A destination account number was not all numeric.<br> Required action: Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier.</p><p>1933 Your submission has been rejected.<br> Details: There is an error in the account details of a payment instruction. A destination account code type was not all numeric.<br> Required action: Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier.</p><p>1934 Your submission has been rejected.<br> Details: There is an error in the account details of a payment instruction. An originating sorting code was not all numeric.<br> Required action: Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier.</p><p>1935 Your submission has been rejected.<br> Details: There is an error in the account details of a payment instruction. An originating account number used was not all numeric.<br> Required action: Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier.</p><p>1936 Your submission has been rejected.<br> Details: You have submitted a payment instruction with a zero value.<br> Required action: Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier.</p><p>1937 Your submission has been rejected.<br> Details: There is an error in the value of a payment instruction. The value was not all numeric.<br> Required action: Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. .</p><p>1938 Your submission has been rejected.<br> Details: There is an error in the account details of a Direct Debit instruction. A destination account number used was all zeroes.<br> Required action: Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier.</p><p>• Credit Card Specific Response Codes<br> Application Response Code Description<br> 1939 Your submission has been rejected.<br> Details: There is an error in a credit card record. The merchant number was not all numeric.<br> Required action: Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier.</p><p>1940 Your submission has been rejected.<br> Details: There is an error in a credit card record. The merchant number is all zeroes.<br> Required action: Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier.</p><p>1941 Your submission has been rejected.<br> Details: There is an error in a credit card record. The cardholder number was not numeric followed by spaces.<br> Required action: Please check the cardholder number used was numeric. If it was all numeric, there may be an error in the structure of your submission, in which case, contact your solution supplier.</p><p>1942 Your submission has been rejected.<br> Details: There is an error in the account details of an unapplied automated credit record. An originating account number was zero filled.<br> Required action: Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier.</p><p>• Contra Response Codes<br> Application Response Code Description<br> 1991 Your submission has been rejected.<br> Details: There is an error in the account details of a contra record. A destination sorting code was not all numeric.<br> Required action: Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier.</p><p>1992 Your submission has been rejected.<br> Details: There is an error in the account details of a contra record. A destination account number was not all numeric.<br> Required action: Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier.</p><p>1993 Your submission has been rejected.<br> Details: There is an error in the account details of a contra record. A destination account code type was not all numeric.<br> Required action: Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier.</p><p>1994 Your submission has been rejected.<br> Details: There is an error in the account details of a contra record. An originating sorting code was not all numeric.<br> Required action: Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier.</p><p>1995 Your submission has been rejected.<br> Details: There is an error in the account details of a contra record. An originating account number was not all numeric.<br> Required action: Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier.</p><p>1996 Your submission has been rejected.<br> Details: You have submitted a contra record with a zero value.<br> Required action: Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier.</p><p>1997 Your submission has been rejected.<br> Details: There is an error in the value of a contra record. The value was not all numeric.<br> Required action: Please check the details used. If correct details were used, there may be an error in the structure of your submission, in which case, contact your solution supplier. .</p><p>• Multi Processing Day Response Codes<br> Application Response Code Description<br> 1912 Warning – A processing day will be overridden by BACS.<br> Details: There is an error in the structure of your submission (a processing day in a payment instruction was not in the correct format). The affected payment instruction will be processed on the processing day of the payment file (the UHL1 date).<br> Required action: If you have any concerns, please contact your sponsor.</p><p>1913 Warning – A processing day will be overridden by BACS.<br> Details: The processing date of a payment instruction is invalid. The payment instruction will be processed on the next valid processing date after the date supplied. If this falls outside the valid processing date range the payment instruction will be processed on the latest valid processing date within the range.<br> Required action: If you have any concerns, please contact your sponsor.</p><p>1914 Warning – A European non-processing day has been used.<br> Details: The processing day of a payment instruction is a European non-processing day. Settlement for this record will occur on the next available day.<br> Required action: If you have any concerns, please contact your sponsor.</p><p>1915 Warning – A processing day will be overridden by BACS.<br> Details: The processing day of a payment instruction is more than 39 calendar days after the processing day of the payment file (in UHL1). The affected payment instruction will be processed on the processing day of the payment file (the UHL1 date).<br> Required action: If you have any concerns, please contact your sponsor.</p><p>1916 Warning – A processing day will be overridden by BACS.<br> Details: The processing day of a payment instruction has already passed. The affected payment instruction will be processed on the processing day of the payment file (the UHL1 date).<br> Required action: If you have any concerns, please contact your sponsor.</p><p>• Contra Processing Day Response Codes<br> Application Response Code Description<br> 1982 Warning – A processing day will be overridden by BACS.<br> Details: There is an error in the structure of your submission (a processing day in a contra record is not in the correct format). The contra record will be processed on the same processing day of the payment file (the UHL1 date).<br> Required action: If you have any concerns, please contact your sponsor.</p><p>1983 Warning – A processing day will be overridden by BACS.<br> Details: The processing day of a contra record is not a valid BACS processing day. The affected contra record will be processed on the nearest valid processing day to the day you used.<br> Required action: If you have any concerns, please contact your sponsor.</p><p>1984 Warning – A European non-processing day has been used.<br> Details: The processing day of a contra record is a European non-processing day. Settlement for this record will occur on the next available day.<br> Required action: If you have any concerns, please contact your sponsor.</p><p>1985 Warning – A processing day will be overridden by BACS.<br> Details: The processing day of a contra record is more than 39 calendar days after the processing day of the payment file (in UHL1). The affected contra record will be processed on the same processing day of the payment file (the UHL1 date).<br> Required action: If you have any concerns, please contact your sponsor.</p><p>1986 Warning – A processing day will be overridden by BACS.<br> Details: The processing day of a contra record has already passed. The affected contra will be processed on the same processing day of the payment file (the UHL1 date).<br> Required action: If you have any concerns, please contact your sponsor.</p><p>• EOF1 Record Response Codes<br> Application Response Code Description<br> 1601 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (A valid payment instruction or EOF1 record does not follow a payment record.)<br> Required action: Please contact your solution supplier.</p><p>1602 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The characters in positions 6 to 11 of EOF1 are not all numeric.)<br> Required action: Please contact your solution supplier.</p><p>1603 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (A valid standing order recall record or EOF1 record does not follow a standing order recall record.)<br> Required action: Please contact your solution supplier.</p><p>• EOF2 Record Response Codes<br> Application Response Code Description<br> 1701 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (A valid EOF2 record does not follow the EOF1 record.)<br> Required action: Please contact your solution supplier.</p><p>• UTL1 Record Contra Response Codes<br> Application Response Code Description<br> 1801 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (A valid UTL1 record does not follow the EOF2 record.)<br> Required action: Please contact your solution supplier.</p><p>1802 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The count of credit payment instructions in UTL1 is not all numeric.)<br> Required action: Please contact your solution supplier.</p><p>1803 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The count of debit payment instructions in UTL1 is not all numeric.)<br> Required action: Please contact your solution supplier.</p><p>1804 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The count of Direct Debit instruction records in UTL1 is not all numeric.)<br> Required action: Please contact your solution supplier.</p><p>1805 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The count of credit payment instructions in UTL1 does not contain the correct count of credit payment instructions and debit contra records since the preceding UHL1 record.)<br> Required action: Please contact your solution supplier.</p><p>1807 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The count of debit payment instructions in UTL1 does not contain the correct count of debit payment instructions and credit contra records since the preceding UHL1 record.)<br> Required action: Please contact your solution supplier.</p><p>1809 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The count of Direct Debit instruction records in UTL1 does not contain the correct count of Direct Debit instruction records since the preceding UHL1 record.)<br> Required action: Please contact your solution supplier.</p><p>• UTL1 Record Amount Response Codes<br> Application Response Code Description<br> 1811 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The monetary total of credit payment instructions in UTL1 is not numeric.)<br> Required action: Please contact your solution supplier.</p><p>1812 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The monetary total of debit payment instructions in UTL1 is not numeric.)<br> Required action: Please contact your solution supplier.</p><p>1813 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The monetary total of credit payment instructions in UTL1 did not contain the correct monetary total of the credit payment instructions and debit contra amounts since the preceding UHL1.)<br> Required action: Please contact your solution supplier.</p><p>1814 Your submission has been rejected.<br> Details: There is an error in the structure of your Submission. (The monetary total of debit payment instructions in UTL1 did not contain the correct monetary total of the debit payment instructions and credit contra amounts since the preceding UHL1.)<br> Required action: Please contact your solution supplier.</p><p>1815 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The total value of credit contra records did not equal the total value of credit payment instructions in the day section/file.)<br> Required action: Please contact your solution supplier.</p><p>1816 Your submission has been rejected.<br> Details: There is an error in the structure of your submission. (The total value of debit contra records did not equal the total value of debit payment instructions in the day section/file.)<br> Required action: Please contact your solution supplier.</p>',119),n=[i];function a(c,u){return s(),r("div",null,n)}const p=e(t,[["render",a],["__file","bacs-response-codes.html.vue"]]),l=JSON.parse('{"path":"/bacs-response-codes.html","title":"BACS Response Codes","lang":"en-GB","frontmatter":{"title":"BACS Response Codes"},"headers":[{"level":2,"title":"Application Response Codes","slug":"application-response-codes","link":"#application-response-codes","children":[{"level":3,"title":"BACSTEL-IP Logon & Submission XML Header Response Codes","slug":"bacstel-ip-logon-submission-xml-header-response-codes","link":"#bacstel-ip-logon-submission-xml-header-response-codes","children":[]}]}],"git":{"updatedTime":1710776027000,"contributors":[{"name":"Matt Clements","email":"matt@mattclements.co.uk","commits":2}]},"filePathRelative":"bacs-response-codes.md"}');export{p as comp,l as data};
