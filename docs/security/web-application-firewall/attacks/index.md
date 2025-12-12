---
sidebar_label: "What kind of attacks does a WAF prevent?"
sidebar_position: 2
---

# What kind of attacks does a WAF prevent?

The Web Application Firewall behaves like a DROP-by-default firewall. Applications are trained based on acceptable input, for example - the symbols `<`, `|` or `..` are not supposed to be part of a URL.

Given the permit access design used by ANS WAFs, we benefit from the ability to prevent against new attack techniques even before a new "signature" is generated, deployed, and enforced - providing zero-day protection by default in many instances.

## Typical attack vectors a WAF protects you from (based on [OWASP](https://www.owasp.org/index.php/Main_Page) top 10 vulnerabilities):

- **Injection**: The most common injections are SQL related, even though SQL is not the only language used. It entails injecting SQL language into, for instance, a web form.
- **Broken authentication and session management**: The simplest example involves a URL containing session identifiers, which one sends to a friend via email. If the server does not check a complementary element, the second person will be able to use the account of the first person as if he or she was logged in.
- **Cross Site Scripting (XSS)**: Often called XSS, those attacks are among the easiest ones to set up. The concept is formidably simple: to make a website process JavaScript where there should be none.
- **Insecure direct object references**: It is common for a page on a website to include resources from another data frame of reference. This has to be done through the mediation of a secure access or a filtration, to avoid unauthorised resources being included.
- **Security misconfiguration**: This category is very large since it covers many subjects. Are services up to date? Well protected by strong enough passwords? Are configurations adjusted to prevent important information from being divulged or mistakenly accessible?
- **Sensitive data exposure**: OWASP guidance on data encoding states that any sensitive data must be protected to avoid clear access, and no sensitive data should be accessible from the outside.
- **Missing function level access control**: The basic idea is to never rely on security implemented on the client's side; security and it's mechanisms should be handled in a controlled environment i.e. on the server.
- **Cross-Site Request Forgery (CSRF)**: This is a flaw that will affect web applications whose functionalities are known - such as adding a user account, changing a password, adding files to known systems such as WordPress. This technique requires an element of social engineering.
- **Using components with known vulnerabilities**: If using a component with known vulnerabilities in your environment, you must expect an attacker to use it. It is important to understand that software that is not known to be vulnerable right now may become vulnerable in the future.
- **Unvalidated redirects and forward**: This category covers attacks that are led during redirects. Typically, 30x HTTP codes are used to redirect a user from a page to another, depending on some parameters. If the destination URL of the redirect is put as a parameter in the original page URL, then an attacker could modify this redirection by changing the URL which was put as a parameter.

## Threat intelligence

Due to the statistical data ANS collects and analyses, we are able to identify bad actors and generate IP-based block lists. Data can be gathered by analysing HTTP status codes to find software implementation faults, which allows us to build up a database of blocklist strings to deploy and block known bad traffic as early as possible.

Here's an example: You may have a PHPMyAdmin interface in public facing environment. This is not recommended, but could be present due to a misconfiguration, or a forgotten "temporary fix". Scanners are looking for targets like this all the time by scanning IP addresses / hostnames continually. While the vast majority of our protection comes in the form of an allow list, having blocklist signatures reporting information to ANS provides us with vital intelligence, and allows us to clean up the traffic going through to your webservers.
