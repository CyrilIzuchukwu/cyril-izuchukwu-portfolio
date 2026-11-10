import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("public/images/projects");

const targets = [
  {
    id: "getyovo",
    url: "https://www.getyovo.app/",
    fallbacks: [],
  },
  {
    id: "kodex-learn",
    url: "https://learn.kodexafrica.com/login",
    fallbacks: [
      "https://learn.kodexafrica.com/",
      "https://kodexafrica.com/",
    ],
  },
  {
    id: "business-desk",
    url: "https://businessdesk.ng/",
    fallbacks: [],
  },
  {
    id: "ago-cares",
    url: "https://agocaresfoundation.org/",
    fallbacks: [],
  },
];

async function shot(page, url, filePath) {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(2500);
  await page.screenshot({
    path: filePath,
    fullPage: false,
  });
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
  });

  for (const target of targets) {
    const filePath = path.join(outDir, `${target.id}.png`);
    const urls = [target.url, ...target.fallbacks];
    let ok = false;
    for (const url of urls) {
      try {
        console.log(`Capturing ${target.id} <- ${url}`);
        await shot(page, url, filePath);
        console.log(`Saved ${filePath}`);
        ok = true;
        break;
      } catch (error) {
        console.warn(`Failed ${url}: ${error.message}`);
      }
    }
    if (!ok) {
      throw new Error(`Could not capture ${target.id}`);
    }
  }

  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
