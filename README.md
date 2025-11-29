# Rossmary Rangel Website

A Hugo-based website for musician Rossmary Rangel, built using the Roxo Hugo theme.

## Setup Instructions

### Prerequisites
- Hugo Extended (v0.58.0 or later) - [Install Hugo](https://gohugo.io/getting-started/installing/)
- Git
- Node.js and npm (for TinaCMS)

### Initial Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rossmaryrangel/Mary-website.git
   cd Mary-website
   ```

2. **Initialize the theme submodule:**
   ```bash
   git submodule init
   git submodule update
   ```

3. **Install Node.js dependencies (for TinaCMS):**
   ```bash
   npm install
   ```

### Development

1. **Run Hugo development server:**
   ```bash
   hugo server -D
   ```
   The site will be available at `http://localhost:1313`

2. **Run with TinaCMS (for content editing):**
   ```bash
   npx @tinacms/cli dev -c "hugo server -D"
   ```
   TinaCMS admin will be available at `http://localhost:1313/admin`

### Building for Production

```bash
hugo --minify
```

The built site will be in the `public/` directory.

## Project Structure

```
├── content/           # Site content (markdown files)
│   ├── about/        # About page
│   ├── agenda/       # Events/agenda items
│   ├── contact/      # Contact page
│   ├── enseignement/ # Teaching/courses
│   ├── galerie/      # Gallery
│   └── projets/      # Projects
├── data/             # YAML data files for theme sections
├── layouts/          # Hugo layout templates (theme overrides)
├── static/           # Static assets (images, etc.)
├── themes/           # Hugo themes (roxo-hugo as submodule)
├── tina/             # TinaCMS configuration
└── hugo.toml         # Hugo configuration
```

## Configuration

Main configuration is in `hugo.toml`. Key sections:
- Site parameters and metadata
- Navigation menu
- Theme-specific settings
- Footer configuration

## Content Management

### Adding New Projects
1. Create a new `.md` file in `content/projets/`
2. Use the following front matter template:
   ```yaml
   ---
   title: "Project Name"
   date: 2025-02-09T09:44:46.000Z
   type: projets
   weight: 1
   image: /images/project-image.jpg
   category:
     - "Category Name"
   project_images:
     - /images/projects/project-name/image1.jpg
     - /images/projects/project-name/image2.jpg
   project_videos:
     - 'https://www.youtube.com/embed/VIDEO_ID'
   ---
   
   Project description here...
   ```

### Adding New Events
1. Create a new `.md` file in `content/agenda/`
2. Use the following front matter template:
   ```yaml
   ---
   title: "Event Name"
   date: "2025-06-01"  # YYYY-MM-DD format
   time: "15:00"
   location: "Event Location"
   show_contact_button: true  # true for future events, false for past
   weight: 1
   ---
   
   Event description here...
   ```

**Note**: Events are automatically separated into:
- **Future Events**: Sorted by date (soonest first) with reservation buttons
- **Past Events**: Sorted by date (most recent first) with identical formatting

## Contact Form Configuration

The site uses FabForm.io for contact form handling. Configuration is in `hugo.toml`:

### Current Setup:
```toml
# Contact form endpoint (FabForm.io)
fabform = "https://fabform.io/f/Zrr0MZi"

# Contact form field labels (in hugo.toml)
[params.contactForm]
  placeholder_first_name = "First Name"
  placeholder_last_name = "Last Name" 
  placeholder_email = "Email"
  placeholder_project_type = "Project Type"
  placeholder_about_the_project = "About the Project"
  send_message = "Send Message"
```

### To Set Up Contact Form:
1. **Create FabForm.io Account**: Go to [fabform.io](https://fabform.io)
2. **Create New Form**: Set up form fields to match the site
3. **Get Form URL**: Replace `fabform` value in `hugo.toml`
4. **Update Contact Info**: Edit `data/contact.yml` with real contact details

### Contact Info (data/contact.yml):
Currently contains placeholder data - update with real information:
```yaml
enable: true
contactFormTitle: "CONTACT WITH ME"
contactFormSubtitle: "Your contact subtitle here"
mapTitle: "FIND US"
mapSubtitle: "Location description"
officeAddress1: "Real address here"
officeAddress2: "Secondary address (optional)"
mail1: "real-email@domain.com"
mail2: "secondary-email@domain.com (optional)"
phone1: "Real phone number"
phone2: "Secondary phone (optional)"
```

### Form Fields:
- **Prénom** (First Name) - Required
- **Nom** (Last Name) - Required  
- **Email** - Required
- **Votre message** (Your message) - Optional

The contact form opens submissions in a new tab and handles them via FabForm.io.

## TinaCMS Integration

The site includes TinaCMS for user-friendly content editing:
- Configuration in `tina/config.ts`
- Admin interface at `/admin` when running dev server
- Manages content in `content/` directory
- Media files stored in `static/images/`

## Theme Customization

The site uses the Roxo Hugo theme with customizations:
- Custom layouts in `layouts/` override theme defaults
- Custom partials for agenda and projects
- Modified templates to handle optional fields safely

## Deployment

The site can be deployed to:
- Netlify (with auto-deployment from Git)
- Vercel
- GitHub Pages
- Any static hosting provider

For TinaCMS to work in production, you'll need to:
1. Set up a Tina Cloud account
2. Configure environment variables for client ID and token
3. Set up Git-based editing workflow

## Environment Variables

For production with TinaCMS:
```bash
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id
TINA_TOKEN=your_token
```

## Support

For theme-related issues, refer to:
- [Roxo Hugo Theme Documentation](https://github.com/StaticMania/roxo-hugo)
- [Hugo Documentation](https://gohugo.io/documentation/)
- [TinaCMS Documentation](https://tina.io/docs/)