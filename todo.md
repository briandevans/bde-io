# BDE Ventures Website Updates

## Core Messaging & Positioning
- [ ] Update positioning statement to reflect "Strategic Advisory Firm" instead of "Family Office"
- [ ] Shift tone from "investor" to "strategic partner/advisor" across all pages

## Home Page
- [ ] Update Headline to one of the new options (e.g., "Guidance for the architects of tomorrow.")
- [ ] Update Subheadline to the new "operator-led advisory" text
- [ ] Update CTAs to "Explore Our Focus" and "Our Approach"
- [ ] Remove "System Operational" badge if it conflicts with the new advisory tone (or adapt it)

## Thesis Page -> Areas of Focus
- [ ] Rename "Thesis" page/section to "Areas of Focus"
- [ ] Update intro text
- [ ] Replace existing thesis points with the 4 new Focus Areas:
    - [ ] AI & Decentralized Infrastructure
    - [ ] Tokenization of RWAs
    - [ ] Digital Identity & Social Platforms
    - [ ] Go-to-Market for Complex Technologies

## Portfolio Page -> Our Approach
- [ ] **REPLACE** the entire "Portfolio" page with a new "Our Approach" page
- [ ] Add the 3 Core Pillars:
    - [ ] Strategic Counsel & Narrative Design
    - [ ] Ecosystem & Go-to-Market Activation
    - [ ] Capital & Corporate Strategy
- [ ] Add "Connect with Us" CTA at the bottom

## Contact Section
- [ ] Update Headline to "Let's build the future."
- [ ] Update Subheadline to the "limited number of teams" text

## Navigation
- [ ] Update nav links: Home, Areas of Focus, Our Approach, The Office
- [ ] Remove "Portfolio" link

## Bio & Image Updates (User Request)
- [ ] Research `briandevans.com` for bio details and images
- [ ] Download a high-quality photo of Brian D. Evans from his site
- [ ] Update `Office.tsx`:
    - [ ] Remove specific mention of "Influencive"
    - [ ] Replace with narrative about "building a media empire"
    - [ ] Enhance bio with additional context from his personal site
    - [ ] Replace the placeholder image with the downloaded photo

- [ ] Update bio to reflect "over two decades" of experience instead of one
- [ ] Ensure the narrative emphasizes "building a media empire" without specific brand names

- [ ] Remove "& Principal" from the title in `Office.tsx`

- [ ] Update bio in `Office.tsx` to include "built and exited numerous tech and ecom companies"

- [ ] Initialize git repository
- [ ] Create GitHub repository `bde-io`
- [ ] Push code to GitHub

## Image Cropping Updates
- [ ] Crop Brian_Turtleneck.webp to remove the watch and Gemini logo at the bottom.
- [ ] Upload the cropped image to CDN.
- [ ] Update the image URL in Home.tsx and Office.tsx.
- [ ] Adjust the aspect ratio of the image container in Office.tsx to match the new cropped image.
- [ ] Save checkpoint and push to GitHub.

## Dapper Tech Lab Redesign
- [ ] Create a new SVG render based on the "Dapper Tech Lab" aesthetic (sleek, dark mode, precise grid lines, technical monospace fonts, sharp geometric sans-serifs, subtle electric/neon accents).
- [ ] Convert the new SVG to PNG.
- [ ] Send the new render to the user for approval.
- [ ] Implement the approved design in code.

## Refined Dapper Tech Lab Redesign
- [ ] Remove cliché AI tropes (SYS.INIT, 01/02 numbering, latency readouts).
- [ ] Update copy to focus on "Capital with Conviction" and advisory rather than "institutional checks".
- [ ] Add credibility logos to the render.
- [ ] Add founder headshot and mini-bio to the render.
- [ ] Create refined SVG render and convert to PNG.
- [ ] Send the refined render to the user for approval.
- [ ] Implement the approved design in code.

## Premium Dapper Tech Lab Render
- [ ] Add atmospheric glow/radial gradients to simulate depth.
- [ ] Add precision crosshairs at corners of containers.
- [ ] Enhance contrast and texture simulation in the SVG.
- [ ] Convert to PNG and send to user.

## Code Implementation: Dapper Tech Lab
- [ ] Update `index.html` with new Google Fonts (Space Grotesk, JetBrains Mono).
- [ ] Update `index.css` with new color palette, grid background, and animations.
- [ ] Implement new design in `Home.tsx` (Hero, Credibility Logos, Approach, Areas of Focus).
- [ ] Implement new design in `Office.tsx` (Founder Section with crosshairs and glows).
- [ ] Add interactive elements (hover states, parallax grid, entrance animations).

## Remove AI Slop
- [ ] Audit and clean Layout.tsx (remove BDE.SYS, //, etc.)
- [ ] Audit and clean Home.tsx (remove >_, SYS., DIR., ID:BDE_FOUNDER, //, etc.)
- [ ] Audit and clean Office.tsx (remove AI tropes, numbered lists, etc.)
- [ ] Audit and clean Approach.tsx (remove AI tropes, numbered lists, etc.)
- [ ] Audit and clean Focus.tsx (remove AI tropes, numbered lists, etc.)
- [ ] Review all copy for generic AI template language

## Parallax Effect
- [ ] Investigate how the grid background is currently implemented (CSS, Tailwind, etc.)
- [ ] Implement a subtle parallax effect on the grid background
- [ ] Test the parallax effect across different pages
- [ ] Save checkpoint and push to GitHub

## Bio Update
- [ ] Append Brian's original bio to the current copy on the Office page

## New Design Direction
- [ ] Extract and analyze the new design direction from the zip file
- [ ] Implement the new design (layout, branding, image, copy)
- [ ] Save checkpoint and present to user for approval

## Anti-Pitch Filter
- [ ] Replace the "Ready to connect" section on the homepage with an "Anti-Pitch" filter

## Copy Update
- [ ] Update copy across the site to say "founded by Brian D. Evans" instead of explicitly stating it's the family office

## Additional Focus Areas
- [ ] Expand areas of focus to include DTC, CPG, and advertising

## Copy and Navigation Updates
- [ ] Remove "generalist" from "generalist advisory services" across the site
- [ ] Change "Leadership" navigation category to "Founder"

## Color Update
- [ ] Change the accent color from teal to a subtle monochrome/silver

## Redesign: McKinsey + Elon + Jack Dorsey
- [ ] Generate high-fidelity visual mockup of the new homepage design
- [ ] Present mockup to user for approval
- [ ] Implement approved design in code (Homepage, Focus, Approach, Office)
- [ ] Save checkpoint and push to GitHub

## Implement New Design
- [ ] Update index.css with pure black/white minimalist theme
- [ ] Rewrite Home.tsx with massive typography and high contrast
- [ ] Rewrite Focus.tsx to match the new aesthetic
- [ ] Rewrite Approach.tsx to match the new aesthetic
- [ ] Rewrite Office.tsx to match the new aesthetic
- [ ] Update Layout.tsx to ensure navigation matches the new design

## Hero Image Upgrade
- [ ] Generate an iconic hero image that portrays legacy, innovation, and pioneering technology.
- [ ] Integrate the hero image into the homepage background.
- [ ] Ensure the image maintains the stark, high-contrast, pure black aesthetic.
- [ ] Save checkpoint and show the updated design to the user.

## Hero Image Visibility Fix
- [ ] Adjust the opacity and gradients in Home.tsx so the brutalist architecture in the hero image is clearly visible.
- [ ] Ensure the white text remains perfectly readable against the background.
- [ ] Save checkpoint and show the updated design to the user.

## Hero Image & Logos Update
- [ ] Generate a new, more exciting hero image that stands out and isn't buried behind text.
- [ ] Adjust the layout in Home.tsx so the hero image is a distinct visual element, not just a background.
- [ ] Fetch real SVG/PNG logos for Forbes, Inc., Entrepreneur, and Rolling Stone.
- [ ] Replace the text placeholders in the "As Seen In" section with the real logos.
- [ ] Save checkpoint and show the updated design to the user.

## Revert Hero Section
- [ ] Remove the hero image and split layout from Home.tsx.
- [ ] Restore the typography-only hero section design.
- [ ] Keep the real logos in the "As Seen In" section.
- [ ] Save checkpoint and show the updated design to the user.

## Combine Logos
- [ ] Write a Python script to combine the four logos into a single transparent image.
- [ ] Ensure all logos are pure white.
- [ ] Upload the combined image to webdev assets.
- [ ] Update Home.tsx to use the single combined image.
- [ ] Save checkpoint and show the updated design to the user.

## Fix Combined Logos
- [ ] Write an improved Python script to process logos.
- [ ] Extract logos from solid backgrounds (make background transparent).
- [ ] Convert logos to pure white.
- [ ] Scale logos proportionally so they look balanced.
- [ ] Upload the new combined image to webdev assets.
- [ ] Update Home.tsx to use the new combined image.
- [ ] Save checkpoint and show the updated design to the user.

## Fix Combined Logos (Again)
- [ ] Inspect original logo files to understand their structure.
- [ ] Write a precise Python script to extract, whiten, and combine all four logos.
- [ ] Ensure all four logos are visible and proportionally scaled.
- [ ] Upload the new combined image to webdev assets.
- [ ] Update Home.tsx to use the new combined image.
- [ ] Save checkpoint and show the updated design to the user.

## Fix Combined Logos (Final)
- [ ] Download proper transparent PNG logos for Forbes and Rolling Stone.
- [ ] Combine all four transparent PNG logos into a single image.
- [ ] Upload the new combined image to webdev assets.
- [ ] Update Home.tsx to use the new combined image.
- [ ] Save checkpoint and show the updated design to the user.

## Push to GitHub
- [ ] Initialize git repository in /home/ubuntu/bde-io.
- [ ] Add and commit all files.
- [ ] Create a new private GitHub repository named bde-io.
- [ ] Push the code to the new repository.
- [ ] Report successful deployment to the user.

## Replace Entrepreneur Logo
- [ ] Find a clean, high-quality Entrepreneur logo.
- [ ] Combine the new Entrepreneur logo with the others.
- [ ] Upload the new combined image to webdev assets.
- [ ] Update Home.tsx to use the new combined image.
- [ ] Save checkpoint and push to GitHub.

## Rewrite Bio
- [ ] Rewrite Brian's bio into a polished, third-person narrative.
- [ ] Update Home.tsx with the new bio.
- [ ] Save checkpoint and push to GitHub.

## Rewrite Long-Form Bio
- [ ] Rewrite the long-form bio to emphasize the 'always early' and 'marketer lens' narrative.
- [ ] Update the long-form bio page with the new content.
- [ ] Save checkpoint and push to GitHub.

## Update Bios with Exact Text
- [ ] Update Home.tsx with the new short bio.
- [ ] Update Office.tsx with the new full bio.
- [ ] Save checkpoint and push to GitHub.

## Update Bios with Pioneering AI Privacy
- [ ] Update Home.tsx with the revised short bio.
- [ ] Update Office.tsx with the revised full bio.
- [ ] Save checkpoint and push to GitHub.

## Remove Quote Icon and Unify Font
- [ ] Update Home.tsx to remove quote icon and unify font styling.
- [ ] Save checkpoint and push to GitHub.

## Update Active Thesis Terminology
- [ ] Update Home.tsx with the new Active Thesis terminology.
- [ ] Save checkpoint and push to GitHub.

## Antifund Inspiration Copy Rewrite
- [ ] Review Antifund copy for inspiration.
- [ ] Rewrite and update BDE.io copy in Home.tsx and Office.tsx.
- [ ] Save checkpoint and push to GitHub.

## Design Improvements (Feedback)
- [ ] Add navigation hover states (subtle underline animations)
- [ ] Refine CTA placement (avoid repeating "ESTABLISH CONNECTION" in both nav and footer)
- [ ] Unify section spacing and visual rhythm (consistent padding, cohesive background treatments)
- [ ] Introduce scroll momentum and parallax effects (progressive reveals, background parallax)
- [ ] Enhance the footer design (make better use of space, add more content/links)
