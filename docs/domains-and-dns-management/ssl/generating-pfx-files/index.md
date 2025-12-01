---
sidebar_label: "Generating a PFX File"
sidebar_position: 8
---

# Generating a PFX File

This guide will help you generate a PFX (also known as PKCS#12) file on different operating systems.

## Generate a PFX file on Linux

First, check if OpenSSL is installed:

```
openssl version
```

If OpenSSL is not installed, you will see an error message. In that case, install OpenSSL:

### Ubuntu

```
sudo apt install openssl
```

### RHEL/AlmaLinux

```
sudo yum install openssl
```

Now you can generate the PFX file.

Suppose you have a private key file (`privateKey.key`), a certificate file (`certificate.crt`), an intermediate certificate file (`intermediate.crt`) and a root certificate file (`root.crt`). Open a terminal and run the following command:

```
openssl pkcs12 -export -out certificate.pfx -inkey privateKey.key -in certificate.crt -certfile intermediate.crt  -certfile root.crt
```

You’ll be prompted to set an export password to protect the PFX file. Remember this password; you’ll need it later.

## Generate a CSR on Windows

Check if OpenSSL is Installed by opening a Windows Command Prompt and entering:

```
openssl version
```

If OpenSSL is not installed, you will see an error message. In that case, install OpenSSL following the official instructions located at [https://github.com/openssl/openssl/blob/master/README.md](https://github.com/openssl/openssl/blob/master/README.md).

Suppose you have a private key file (`privateKey.key`), a certificate file (`certificate.crt`), an intermediate certificate file (`intermediate.crt`) and a root certificate file (`root.crt`). Open a terminal and run the following command:

```
openssl pkcs12 -export -out certificate.pfx -inkey privateKey.key -in certificate.crt -certfile intermediate.crt -certfile root.crt
```

You’ll be prompted to set an export password. Remember this password for future use.
