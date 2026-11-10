import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const mediaDir = path.resolve(
  "C:/Users/HomePC/AppData/Local/Cursor/AgentStores/cursor_agent_stores/bc-ab0c5ee2-dd43-4393-989c-b5e83c0e742f/files/media",
);

const baseUrl = process.env.PORTFOLIO_URL || "http://127.0.0.1:3000";

async function main() {
  await mkdir(mediaDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });

  const desktop = await browser.newPage({
    viewport: { width: 1440, height: 980 },
    deviceScaleFactor: 1,
  });
  await desktop.goto(baseUrl, { waitUntil: "networkidle", timeout: 60000 });
  await desktop.waitForTimeout(1200);
  await desktop.screenshot({
    path: path.join(mediaDir, "brittany-match-desktop.png"),
    fullPage: false,
  });

  const mobile = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  await mobile.goto(baseUrl, { waitUntil: "networkidle", timeout: 60000 });
  await mobile.waitForTimeout(1200);
  await mobile.screenshot({
    path: path.join(mediaDir, "brittany-match-mobile.png"),
    fullPage: false,
  });

  await browser.close();
  console.log("Saved proof screenshots to", mediaDir);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
