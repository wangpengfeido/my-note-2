# nmcli

网络管理工具。

<https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/networking_guide/sec-configuring_ip_networking_with_nmcli>

## 命令

```
nmcli [OPTIONS] OBJECT { COMMAND | help }
```

OBJECT 包含：`general`, `networking`, `radio`, `connection`, `device`, `agent`, `monitor`。也可以直接使用前缀。

## 相关

ubuntu 如何开启 wifi：<https://ubuntu.com/core/docs/networkmanager/configure-wifi-connections>

## 示例

## 问题

### 无法开启 wifi

wpa_supplicant 是 WPA 客户端，开启 wifi 之前必须启动 wpa_supplicant。

```
systemctl start wpa_supplicant
```

---

ubuntu 使用 [netplan](https://netplan.io/) 管理网络。如果要使用 NetworkManager ，需要配置 netplan 使用 NetworkManager 作为后端。配置文件位于`/etc/netplan`。

```
network:
  version: 2
  renderer: NetworkManager
  wifis:
    wlp2s0b1:
      dhcp4: true
      access-points:
        "network_ssid_name":
          password: "**********"
```
