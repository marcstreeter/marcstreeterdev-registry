import * as React from "react"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Code2, Palette, Zap } from "lucide-react"
import { Button } from "@/registry/new-york/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/new-york/ui/card"
import { Badge } from "@/registry/new-york/ui/badge"
import { Separator } from "@/registry/new-york/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/registry/new-york/ui/breadcrumb"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col min-h-screen px-4 py-8 gap-8">
      <header className="flex flex-col gap-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">About This Registry</h1>
          <p className="text-muted-foreground text-lg">
            Learn more about the MarcStreeterDev Registry and how to use it in your projects.
          </p>
        </div>
      </header>

      <main className="space-y-8">
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                What is this registry?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The MarcStreeterDev Registry is a personal collection of shadcn/ui components that have been 
                carefully curated, tested, and optimized for modern React applications. It includes all the 
                essential UI components you need to build beautiful, accessible interfaces.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>46+ Components</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>Radix UI</Badge>
                <Badge>Accessible</Badge>
                <Badge>Dark Mode</Badge>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Palette className="h-4 w-4" />
                  Design System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All components follow a consistent design system with carefully crafted 
                  color palettes, typography, and spacing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Zap className="h-4 w-4" />
                  Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Optimized for performance with tree-shaking, minimal bundle size, 
                  and efficient rendering patterns.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Code2 className="h-4 w-4" />
                  Developer Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Full TypeScript support, comprehensive documentation, 
                  and easy installation with the shadcn CLI.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">How to Use</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Configure your project</CardTitle>
              <CardDescription>
                Set up your Next.js or React project to use this custom registry
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-md">
                <code className="text-sm">
                  npx shadcn@latest init
                </code>
              </div>
              <p className="text-sm text-muted-foreground">
                When prompted, configure your registry URL to point to this custom registry.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 2: Install components</CardTitle>
              <CardDescription>
                Add any component to your project with a single command
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-md">
                <code className="text-sm">
                  npx shadcn add button card input
                </code>
              </div>
              <p className="text-sm text-muted-foreground">
                Components will be copied to your project with all necessary dependencies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 3: Import and use</CardTitle>
              <CardDescription>
                Start using the components in your React components
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm">
{`import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function MyComponent() {
  return (
    <Card>
      <Button>Click me!</Button>
    </Card>
  )
}`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}