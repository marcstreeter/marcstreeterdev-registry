# MarcStreeter.dev Registry justfile
# Run with: just <command>

# Variables
namespace := "default"
deployment := "marcstreeterdev-registry"
kubexec := "kubectl -n " + namespace + " exec deploy/" + deployment

# Default recipe to run when no arguments are provided
default:
    @just --list

# Check if docker is installed
_check-docker:
    #!/usr/bin/env bash
    if ! command -v docker &> /dev/null; then
        echo "Error: docker is not installed. Please install docker first."
        exit 1
    fi

# Check if kubectl is installed
_check-kubectl:
    #!/usr/bin/env bash
    if ! command -v kubectl &> /dev/null; then
        echo "Error: kubectl is not installed. Please install kubectl first."
        echo "Visit: https://kubernetes.io/docs/tasks/tools/"
        exit 1
    fi

# Check if tilt is installed
_check-tilt: _check-docker _check-kubectl
    #!/usr/bin/env bash
    if ! command -v tilt &> /dev/null; then
        echo "Error: tilt is not installed. Please install tilt first."
        echo "Visit: https://docs.tilt.dev/install.html"
        exit 1
    fi

# Development setup
_setup-local:
    @echo "🔧 Setting up development environment..."
    @echo "Installing dependencies..."
    npm install
    @echo "✅ Development setup complete!"

# Local development (without Tilt)
start-local: _setup-local
    @echo "🚀 Starting local development server..."
    @echo "Note: Use 'just start' for containerized development with Tilt"
    npm run registry

# Development with Tilt (recommended)
start: _check-tilt
    @echo "🚀 Starting development environment with Tilt..."
    @echo "This will start the app in a container with live reloading."
    @echo "Access the app at: http://localhost:18080"
    @echo "Press Ctrl+C to stop"
    tilt up -vvv --port 10352

stop: _check-tilt
    @echo "🛑 Stopping development environment..."
    tilt down

# Testing with Tilt
test: _check-tilt
    @echo "🧪 Running tests in the development container..."
    {{kubexec}} -- pnpm test
