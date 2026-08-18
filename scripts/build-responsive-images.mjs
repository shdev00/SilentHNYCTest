import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const IMAGE_DIRECTORY = path.resolve("public/redesign");

const jobs = [
    {
        input: "newhero.webp",
        output: "newhero",
        widths: [640, 960, 1280, 1600, 1920, 2560],
    },
    {
        input: "mewhero.png",
        output: "mewhero",
        widths: [480, 768, 960],
    },
    {
        // Home hero — the mural + two-angel interior. Hi-res 3840×1692 source (shnyc-hero),
        // replacing the pixelated 1280px one; full-bleed so the ladder goes up to 2560.
        input: "shnyc-hero.png",
        output: "home-hero",
        widths: [480, 640, 768, 960, 1280, 1600, 1920, 2560],
        avifQuality: 72,
        webpQuality: 88,
    },
    {
        // Private Dining & Events — angel statue + agave bar. Hi-res 3840×2571 source
        // (shnyc-privdin). Displays ≤1180 CSS (≈2360 @2x) → ladder to 1920.
        input: "shnyc-privdin.png",
        output: "private-dining",
        widths: [480, 768, 960, 1280, 1600, 1920],
        avifQuality: 72,
        webpQuality: 88,
    },
    {
        // Figma "footer 1" — full-width "Let's get social" doorway image.
        input: "footer-social.png",
        output: "footer-social",
        widths: [480, 768, 960, 1200],
    },
    {
        input: "monterrey-mountain.webp",
        output: "monterrey-mountain",
        widths: [640, 960, 1280, 1600, 1920],
    },
    {
        input: "monterrey-map-poster.jpg",
        output: "monterrey-map-poster",
        widths: [365, 730],
    },
    {
        // NYE landing hero. Source is the 1280×896 Figma frame, so 1280 is the
        // largest usable width — the >1280 tiers other heroes carry would be
        // dropped by withoutEnlargement anyway.
        input: "nye-hero.png",
        output: "nye-hero",
        widths: [480, 768, 960, 1280],
    },
];

async function fileExists(filePath) {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
}

async function buildImage(job) {
    const inputPath = path.join(IMAGE_DIRECTORY, job.input);

    if (!(await fileExists(inputPath))) {
        throw new Error(`Input image does not exist: ${inputPath}`);
    }

    const metadata = await sharp(inputPath).metadata();

    if (!metadata.width) {
        throw new Error(`Could not determine width of ${job.input}`);
    }

    const usableWidths = job.widths.filter((width) => width <= metadata.width);

    // Ensure that at least one image is generated.
    if (usableWidths.length === 0) {
        usableWidths.push(metadata.width);
    }

    for (const width of usableWidths) {
        const basePipeline = sharp(inputPath)
            .rotate()
            .resize({
                width,
                withoutEnlargement: true,
            });

        const avifOutput = path.join(
            IMAGE_DIRECTORY,
            `${job.output}-${width}.avif`,
        );

        const webpOutput = path.join(
            IMAGE_DIRECTORY,
            `${job.output}-${width}.webp`,
        );

        // Per-job quality (defaults keep every existing job byte-identical). Large,
        // detailed full-bleed images (hero / private dining) need a higher setting —
        // at q55 AVIF they block up into artifacts that read as "pixelation".
        await basePipeline
            .clone()
            .avif({
                quality: job.avifQuality ?? 55,
                effort: 6,
            })
            .toFile(avifOutput);

        await basePipeline
            .clone()
            .webp({
                quality: job.webpQuality ?? 78,
                effort: 6,
            })
            .toFile(webpOutput);

        console.log(`Created ${job.output}-${width}.avif`);
        console.log(`Created ${job.output}-${width}.webp`);
    }
}

async function main() {
    for (const job of jobs) {
        await buildImage(job);
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});