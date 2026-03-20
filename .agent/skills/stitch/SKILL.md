# Stitch UI Designer Skill

## Description
Generate high-fidelity UI screens and components using the StitchMCP server. This skill enables the agent to transform text prompts into structured UI designs and integrate them into the workspace with modern aesthetics and responsiveness.

## Capabilities
- **Generate Screens**: Create full UI mockups from text descriptions.
- **Edit Screens**: Modify existing designs with targeted prompts.
- **Generate Variants**: Produce design alternatives for A/B testing or refinement.
- **Project Management**: Organize screens into Stitch projects for coherent application design.

## Workflow

### 1. Project Initialization
Before generating design files, ensure a Stitch project exists or create one:
```javascript
// Example use of StitchMCP
const project = await mcp_StitchMCP_create_project({ title: "My Workspace Design" });
```

### 2. Screen Generation
Use full descriptions for screen generation. Include preferred design styles (e.g., "vibrant colors", "dark mode", "inter font"):
```javascript
const screen = await mcp_StitchMCP_generate_screen_from_text({
  projectId: "PROJECT_ID",
  prompt: "A modern Dashboard header with a profile avatar and search bar",
  deviceType: "DESKTOP"
});
```

### 3. Verification and Iteration
After generating a screen:
1. Retrieve details with `mcp_StitchMCP_get_screen`.
2. Evaluate aesthetics (e.g., layout, modern styling tokens).
3. Use `mcp_StitchMCP_edit_screens` and improve specific parts.

### 4. Code Synthesis
Convert generated design files or details into high-quality HTML/CSS on disk.
- Apply semantic HTML.
- Adopt modern CSS utilities (grids, Flexbox).
- Include responsive styles.

## Guidelines
- **Rich Aesthetics**: Always aim for premium, wow-effect designs (vibrant colors, smooth gradients).
- **SEO Ready**: Maintain heading hierarchies and semantic tags.
- **Micro-Animations**: Request smooth transitions and hover micro-animations in prompts.
