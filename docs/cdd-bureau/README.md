---
title: "ClearDebit Bureau"
---
# ClearDebit Bureau

## Flow of Processing

### Uploading Files

The uploading of BACS files for submission is the simplest side of the flow. Simply a file needs to be uploaded
either to the `/uploads/` directory of the SFTP server, or the file contents base64 encoded, and sent via the API
utilising the `upload` action.

You should check that the file has been uploaded successfully either by polling the directory on the SFTP server once
the upload has completed; or by handling the response to the API request which will confirm the successful uploading
of the file.

### Downloading Reports

Various BACS reports will be uploaded for retrieval by the integrator. These can either be retrieved using the SFTP or
API integration method.

For SFTP integrators, simply polling the `/reports/` directory on a regular basis will detail any reports which have been
made available for download.

For API integrators, there are a couple of possible options to integrate.

Either a call can be made to the API with the `download` action. This will retrieve, supply & then automatically archive
all available reports.

Alternatively the integrator can iterate through all available reports by calling:

 1. `countReports` which will confirm if any available reports are available.
 1. If there are more than zero reports available, `listReports` will retrieve a list of all available reports.
 1. `downloadByName` can then be called for each individual report, downloading & then archiving these reports.

## SFTP or API

The integration with ClearDebit can be completed using _either_ SFTP or the API (both are documented here),
both operate with the same feature-set as each other.