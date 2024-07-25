import{_ as e,o as t,c as a,a as n}from"./app-et0uEcFb.js";const i={},r=n('<h1 id="sftp-documentation" tabindex="-1"><a class="header-anchor" href="#sftp-documentation"><span>SFTP Documentation</span></a></h1><h2 id="general-information" tabindex="-1"><a class="header-anchor" href="#general-information"><span>General Information</span></a></h2><p>The SFTP server is hosted at <code>cdd1.cleardebit.co.uk</code></p><p>You will be provided a Username &amp; Password by the implementation team during the setup &amp; configuration.</p><h2 id="directory-structure" tabindex="-1"><a class="header-anchor" href="#directory-structure"><span>Directory Structure:</span></a></h2><ul><li>Upload Files: Any BACS files that require submission via the Bureau, should be uploaded to the <code>/uploads/</code> directory</li><li>Downloading Files/Reports: Any BACS reports will be uploaded for retrieval from the <code>/reports/</code> directory</li></ul><h2 id="test-file-transfer" tabindex="-1"><a class="header-anchor" href="#test-file-transfer"><span>Test File Transfer</span></a></h2><p>To test file transfer, please right click on the file on your computer and select upload. This will move the file into the uploads folder. If successful, you should receive an email to the nominated account for email confirmations that will contain the name of the file transferred and the time that it was received onto the Clear Direct Debit SFTP site. Please be sure to name any test files with TEST clearly displayed in the file name.</p><h2 id="ongoing-file-transfers" tabindex="-1"><a class="header-anchor" href="#ongoing-file-transfers"><span>Ongoing File Transfers</span></a></h2><p>Please Note: File names containing the following characters cannot be accepted for processing:</p><ul><li><code>£</code></li><li><code>&amp;</code></li><li><code>‘</code></li></ul>',11),o=[r];function l(s,c){return t(),a("div",null,o)}const f=e(i,[["render",l],["__file","sftp-documentation.html.vue"]]),h=JSON.parse('{"path":"/cdd-bureau/sftp-documentation.html","title":"SFTP Documentation","lang":"en-GB","frontmatter":{"title":"SFTP Documentation"},"headers":[{"level":2,"title":"General Information","slug":"general-information","link":"#general-information","children":[]},{"level":2,"title":"Directory Structure:","slug":"directory-structure","link":"#directory-structure","children":[]},{"level":2,"title":"Test File Transfer","slug":"test-file-transfer","link":"#test-file-transfer","children":[]},{"level":2,"title":"Ongoing File Transfers","slug":"ongoing-file-transfers","link":"#ongoing-file-transfers","children":[]}],"git":{"updatedTime":1710325421000,"contributors":[{"name":"Matt Clements","email":"matt@mattclements.co.uk","commits":1}]},"filePathRelative":"cdd-bureau/sftp-documentation.md"}');export{f as comp,h as data};