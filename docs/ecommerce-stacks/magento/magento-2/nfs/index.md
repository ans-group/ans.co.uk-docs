---
sidebar_label: "NFS"
sidebar_position: 5
---

# NFS

### Distributed files/folders

It's very important to only use NFS for files/folder which need to be distributed between multiple servers. We strongly advise against having the entire document root of your Magento website on NFS. For Magento 2, the typical directories that need NFS are:

- `pub/media`
- `pub/static`

There are a number of ways in which you can achieve this.

#### Customise `MAGE_DIRS`

You can set `MAGE_DIRS` in any of the following ways:

##### Bootstrap parameters

Please refer to the Magento guide on how to set the value of bootstrap parameters: [https://developer.adobe.com/commerce/docs/](https://developer.adobe.com/commerce/docs/)

##### Custom entry point script

You can use a custom entry point script such as the following:

```php
use Magento\Framework\App\Filesystem\DirectoryList;
use Magento\Framework\App\Bootstrap;

require __DIR__ . '/app/bootstrap.php';
$params = $_SERVER;
$params[Bootstrap::INIT_PARAM_FILESYSTEM_DIR_PATHS] = [
 	    DirectoryList::PUB => [DirectoryList::URL_PATH => '',
 	    DirectoryList::MEDIA => [DirectoryList::PATH => '/nfsshare/media', DirectoryList::URL_PATH => ''],
 	    DirectoryList::STATIC_VIEW => [DirectoryList::URL_PATH => 'static'],
 	    DirectoryList::UPLOAD => [DirectoryList::URL_PATH => '/nfsshare/media/upload'],
 	    DirectoryList::CACHE => [DirectoryList::PATH => '/nfsshare/cache'],
];
$bootstrap = \Magento\Framework\App\Bootstrap::create(BP, $params);
/** @var \Magento\Framework\App\Http $app */
$app = $bootstrap->createApplication('Magento\Framework\App\Http');
$bootstrap->run($app);
```

#### Direct mount point

You can directly mount NFS to the folder within your document root:

```
NFSSERVER/nfsshare/media -> /var/www/vhosts/magentodomain.com/htdocs/pub/media
```

You can do this with the following entry in `/etc/fstab`:

```
 ~]# cat /etc/fstab | grep -i nfs
NFSSERVER:/nfsshare/media /var/www/vhosts/magentodomain.com/htdocs/pub/media nfs rw,noatime,nodiratime,async,timeo=1800 0 0
 ~]# mount /var/www/vhosts/magentodomain.com/htdocs/pub/media
```

#### Symlinks

You can symlink files/folders from your document root to the NFS mount point.

```
~]# ln -s /var/www/vhosts/magentodomain.com/htdocs/pub/media /nfsshare/media
```

[Here's some more information on the NFS service](../../../../operating-systems/linux/nfs/nfs/).
