# Define the folders you need to create under the project root.
$folders = @(
    "src/apollo",
    "src/components/common",
    "src/components/layout",
    "src/components/project",
    "src/components/about",
    "src/components/ui",
    "src/config",
    "src/context",
    "src/graphql",
    "src/hooks",
    "src/pages/api",
    "src/stories",
    "src/styles",
    "src/utils",
    "src/views",
    "tests/__mocks__",
    "tests/components",
    "tests/pages"
)

Write-Host "Creating directories..."
foreach ($folder in $folders) {
    if (-not (Test-Path $folder)) {
        New-Item -ItemType Directory -Force -Path $folder | Out-Null
        Write-Host "Created directory: $folder"
    }
    else {
        Write-Host "Directory already exists: $folder"
    }
}

# Define placeholder files with their intended content.
$files = @{
    "src/apollo/client.ts"           = "// Apollo client configuration will go here";
    "src/context/ThemeContext.tsx"   = "// Theme context and dark mode logic";
    "src/hooks/useDebounce.ts"       = "// Custom useDebounce hook implementation";
    "src/hooks/useScroll.ts"         = "// Custom useScroll hook implementation";
    "src/hooks/useTheme.ts"          = "// Custom hook to access and toggle theme";
    "src/styles/globals.css"         = "/* Global CSS and Tailwind directives */";
    "src/styles/theme.ts"            = "// Theme configuration";
    "src/pages/api/contact.ts"       = "// Contact API endpoint";
    "src/pages/_app.tsx"             = "// Custom App component to include global styles and providers";
    "src/pages/_document.tsx"        = "// Custom Document for meta tags and PWA integration";
    "src/pages/index.tsx"            = "// Home page content";
    "src/pages/about.tsx"            = "// About page (biography and 'About This Project')";
    "src/pages/projects.tsx"         = "// Projects overview page";
    "src/pages/project/[id].tsx"     = "// Dynamic route for individual project details";
    "src/pages/contact.tsx"          = "// Contact page with form and interactive features";
    "src/utils/api.ts"               = "// API helper functions";
    "src/utils/constants.ts"         = "// Constants (colors, breakpoints, etc.) for the project";
}

Write-Host "Creating placeholder files..."
foreach ($file in $files.Keys) {
    if (-not (Test-Path $file)) {
        New-Item -ItemType File -Force -Path $file -Value $files[$file] | Out-Null
        Write-Host "Created file: $file"
    }
    else {
        Write-Host "File already exists: $file"
    }
}

Write-Host "File structure update complete."
