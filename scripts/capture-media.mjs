import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { dirname } from "path";

const base = "http://127.0.0.1:3000/";
const desktopPath = "/cursor/stores/self/media/portfolio-desktop.png";
const mobilePath = "/cursor/stores/self/media/portfolio-mobile.png";
const videoDir = "/tmp/portfolio-demo-video";

mkdirSync(dirname(desktopPath), { recursive: true });
mkdirSync(videoDir, { recursive: true });

const browser = await chromium.launch({ headless: true });

const desktop = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const desktopPage = await desktop.newPage();
await desktopPage.goto(base, { waitUntil: "networkidle" });
await desktopPage.waitForTimeout(800);
await desktopPage.screenshot({ path: desktopPath, fullPage: false });
console.log("Wrote", desktopPath);

const mobile = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
const mobilePage = await mobile.newPage();
await mobilePage.goto(base, { waitUntil: "networkidle" });
await mobilePage.waitForTimeout(800);
await mobilePage.screenshot({ path: mobilePath, fullPage: false });
console.log("Wrote", mobilePath);

await desktop.close();
await mobile.close();

const videoContext = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  recordVideo: { dir: videoDir, size: { width: 1280, height: 720 } },
});
const videoPage = await videoContext.newPage();
await videoPage.goto(base, { waitUntil: "networkidle" });
await videoPage.waitForTimeout(1000);
await videoPage.evaluate(() => window.scrollTo({ top: 700, behavior: "smooth" }));
await videoPage.waitForTimeout(900);
await videoPage.evaluate(() => window.scrollTo({ top: 1600, behavior: "smooth" }));
await videoPage.waitForTimeout(900);
await videoPage.click('button[role="tab"]:nth-of-type(2)');
await videoPage.waitForTimeout(700);
await videoPage.evaluate(() => window.scrollTo({ top: 2800, behavior: "smooth" }));
await videoPage.waitForTimeout(1000);
await videoPage.evaluate(() => window.scrollTo({ top: 4200, behavior: "smooth" }));
await videoPage.waitForTimeout(1000);
await videoContext.close();

const { copyFileSync, readdirSync } = await import("fs");
const files = readdirSync(videoDir).filter((f) => f.endsWith(".webm"));
if (files.length) {
  const src = `${videoDir}/${files[0]}`;
  const destWebm = "/cursor/stores/self/media/portfolio-demo.webm";
  copyFileSync(src, destWebm);
  console.log("Wrote", destWebm);
}

await browser.close();
