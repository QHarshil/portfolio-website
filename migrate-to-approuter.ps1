# Step 1: Create the necessary directories under src/app for the App Router
$folders = @(
    "src/app/about",
    "src/app/projects",
    "src/app/project/[id]",
    "src/app/contact",
    "src/app/api/contact"
)

Write-Host "Creating new app router directories..."
foreach ($folder in $folders) {
    if (-not (Test-Path $folder)) {
        New-Item -ItemType Directory -Force -Path $folder | Out-Null
        Write-Host "Created directory: $folder"
    } else {
        Write-Host "Directory already exists: $folder"
    }
}

# Step 2: Move files from src/pages to the new app folder structure

# Move index.tsx to src/app/page.tsx (Home Page)
if (Test-Path "src/pages/index.tsx") {
    if (-not (Test-Path "src/app/page.tsx")) {
        Move-Item -Path "src/pages/index.tsx" -Destination "src/app/page.tsx"
        Write-Host "Moved src/pages/index.tsx to src/app/page.tsx"
    } else {
        Write-Host "src/app/page.tsx already exists. Skipping index.tsx move."
    }
} else {
    Write-Host "src/pages/index.tsx not found."
}

# Move about.tsx to src/app/about/page.tsx
if (Test-Path "src/pages/about.tsx") {
    Move-Item -Path "src/pages/about.tsx" -Destination "src/app/about/page.tsx"
    Write-Host "Moved src/pages/about.tsx to src/app/about/page.tsx"
} else {
    Write-Host "src/pages/about.tsx not found."
}

# Move projects.tsx to src/app/projects/page.tsx
if (Test-Path "src/pages/projects.tsx") {
    Move-Item -Path "src/pages/projects.tsx" -Destination "src/app/projects/page.tsx"
    Write-Host "Moved src/pages/projects.tsx to src/app/projects/page.tsx"
} else {
    Write-Host "src/pages/projects.tsx not found."
}

# Move contact.tsx to src/app/contact/page.tsx
if (Test-Path "src/pages/contact.tsx") {
    Move-Item -Path "src/pages/contact.tsx" -Destination "src/app/contact/page.tsx"
    Write-Host "Moved src/pages/contact.tsx to src/app/contact/page.tsx"
} else {
    Write-Host "src/pages/contact.tsx not found."
}

# Move dynamic project route [id].tsx to src/app/project/[id]/page.tsx
if (Test-Path "src/pages/project/[id].tsx") {
    Move-Item -Path "src/pages/project/[id].tsx" -Destination "src/app/project/[id]/page.tsx"
    Write-Host "Moved src/pages/project/[id].tsx to src/app/project/[id]/page.tsx"
} else {
    Write-Host "src/pages/project/[id].tsx not found."
}

# Move API route for contact from src/pages/api/contact.ts to src/app/api/contact/route.ts
if (Test-Path "src/pages/api/contact.ts") {
    Move-Item -Path "src/pages/api/contact.ts" -Destination "src/app/api/contact/route.ts"
    Write-Host "Moved src/pages/api/contact.ts to src/app/api/contact/route.ts"
} else {
    Write-Host "src/pages/api/contact.ts not found."
}

# Step 3: (Optional) Remove the src/pages folder if it is now empty
if (Test-Path "src/pages") {
    $remainingFiles = Get-ChildItem "src/pages" -Recurse
    if ($remainingFiles.Count -eq 0) {
        Remove-Item "src/pages" -Recurse -Force
        Write-Host "Removed empty src/pages folder."
    } else {
        Write-Host "src/pages folder is not empty. Please review its contents before removing."
    }
}

Write-Host "Directory migration to App Router structure complete."
