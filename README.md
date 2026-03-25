# 🎮 FreezeHost 自动续期

使用 Playwright + GitHub Actions 每天自动续期 FreezeHost 免费服务器。

## ⚙️ 配置步骤

### 1️⃣ Fork 或上传此仓库到 GitHub

### 2️⃣ 添加 Secrets

进入仓库 → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**：

| 🔑 Secret 名称 | 📝 格式 | ✅ 必填 |
|---|---|---|
| `DISCORD_TOKEN` | `你的 Discord Token` | ✅ |
| `TG_BOT` | `chat_id,bot_token` | ✅ |
| `GOST_PROXY` | `socks5://host:port` | 可选 |

> **💡 如何获取 Discord Token？**
> 1. 在电脑浏览器中登录 [Discord 网页版](https://discord.com/app)。
> 2. 按 `F12` 打开开发者工具，切换到 **Network (网络)** 面板。
> 3. 在 Discord 页面中随便点击一个服务器或频道来产生网络活动。
> 4. 在 Network 列表里随便点开一个名为 `science` 或其他相关的请求。
> 5. 在右侧的 **Headers (标头)** -> **Request Headers (请求标头)** 中，找到 `Authorization` 字段，对应的那一长串字符就是你的 Token（不需要加 `"` 双引号）。请妥善保管，**千万不要直接发给任何人数**！

### 3️⃣ 启用 Actions

进入 **Actions** 标签页，点击 **Enable GitHub Actions**。

### 4️⃣ 手动触发测试

**Actions** → **🎮 FreezeHost 自动续期** → **Run workflow**

## 🕐 运行时间

自动任务配置为 **每 3 天**（即 1, 4, 7... 号）的 **UTC 08:00**（北京时间 16:00）运行一次。
少于 7 天续期后，服务器时间会重置回 14 天。因此每 3 天检查一次（14 -> 11 -> 8 -> 5天触发续防）完美契合机制，且避免资源浪费。
可在 `.github/workflows/freeze.yml` 的 `cron` 表达式中修改。

## 📊 续期结果说明

| 状态 | 说明 |
|---|---|
| ✅ passed | 续期成功，TG 已推送通知 |
| ⚠️ skipped | 余额不足，待赚够金币后下次自动重试 |
| ❌ failed | 登录失败或脚本异常，查看 failure-screenshots |
