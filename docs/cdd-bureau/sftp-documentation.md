---
title: "SFTP Documentation"
---
# SFTP Documentation

## General Information

The SFTP server is hosted at `cdd1.cleardebit.co.uk`

You will be provided a Username & Password by the implementation team during the setup & configuration.

## Directory Structure:

 - Upload Files: Any BACS files that require submission via the Bureau, should be uploaded to the `/uploads/` directory
 - Downloading Files/Reports: Any BACS reports will be uploaded for retrieval from the `/reports/` directory

## Test File Transfer

To test file transfer, please right click on the file on your computer and select upload. This will move 
the file into the uploads folder. If successful, you should receive an email to the nominated account 
for email confirmations that will contain the name of the file transferred and the time that it was 
received onto the Clear Direct Debit SFTP site. Please be sure to name any test files with TEST clearly 
displayed in the file name.

## Ongoing File Transfers

Please Note: File names containing the following characters cannot be accepted for processing:
 - `£`
 - `&`
 - `‘`
