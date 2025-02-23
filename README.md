# Apatheia
Public use protocol for getting safe when working remotely

Details list:

**Dailies:**
- Automated backups.
- Software Updates.
- Antivirus Scan.
- Check Logs.

**Weekly:**
- Offline backup.
- Check File permissions.
- Email security Settings.
- 2FA Verification.

**Monthly:**
- Anti ransonware.
- Password Keychain.
- Yubikey.
- Physical sec (Face, bio, etc).
- Avoid phishing.
- AI Monitoring.
- Cyber Insurance.
- Router Firmware.
- Anti Theft Apps.

Additional Recommendations:

**Data Encryption**: 
Use encryption on sensitive files and communications (especially on laptops or mobile devices).

**Remote Desktop Security**: 
If using remote desktop services, ensure secure VPN access and enable encryption.

**Password Rotation**: 
Periodically rotate passwords, especially for critical accounts and systems.

Additional Core Features for Enhanced Security:
**VPN (Virtual Private Network)**:
Use a trusted VPN service to secure remote connections and protect data in transit, especially on public networks.
Ensure the VPN is configured with strong encryption (AES-256) and DNS leak protection.

**Zero Trust Architecture (ZTA)**:
Implement a Zero Trust approach for network security, where access to resources is constantly verified and authenticated, even within the organization’s network.
Use Identity and Access Management (IAM) solutions like Okta to enforce the principle of least privilege and prevent unauthorized access.

**Cloud Security (CASB)**:
Integrate a Cloud Access Security Broker (CASB) (e.g., McAfee, Netskope) to monitor and secure cloud usage, especially for sensitive data in SaaS platforms.


**How to run the current version:**

git clone https://github.com/Arthur-Prc/Apatheia/

**go to the project directory**

npm init -y

npm install electron --save-dev

npx electron .

**Pending updates:**
- .exe and .cmd executable files for Windows and Mac.
- React mobile app for iOS and Android.
- CVEDB automated updates.
- Brave or Swash ads for crypto earnings

