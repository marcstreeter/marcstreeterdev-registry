"use client"

import * as React from "react"
import Link from "next/link"
// import { OpenInV0Button } from "@/components/open-in-v0-button"
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world"
// Removed async components that cause promise suspension issues in client components
// import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form"
// import PokemonPage from "@/registry/new-york/blocks/complex-component/page"
// import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card"
import { Button } from "@/registry/new-york/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/new-york/ui/card"
import { Badge } from "@/registry/new-york/ui/badge"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import { Switch } from "@/registry/new-york/ui/switch"
import { Checkbox } from "@/registry/new-york/ui/checkbox"
import { Slider } from "@/registry/new-york/ui/slider"
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  const [sliderValue, setSliderValue] = React.useState([50])
  const [isChecked, setIsChecked] = React.useState(false)
  const [isSwitchOn, setIsSwitchOn] = React.useState(false)

  return (
    <div className="max-w-4xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">MarcStreeterDev Registry</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A personal shadcn/ui component registry featuring 46+ carefully crafted UI components 
          and example blocks for modern React applications.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild>
            <Link href="/components">Browse Components</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about">About Registry</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://github.com/marcstreeter/marcstreeterdev-registry" target="_blank">
              View on GitHub
            </Link>
          </Button>
        </div>
      </header>

      <section className="flex flex-col gap-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-2">UI Components Showcase</h2>
          <p className="text-muted-foreground">
            Interactive examples of the core UI components available in this registry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Buttons</CardTitle>
              <CardDescription>Various button styles and variants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex gap-2 flex-wrap">
                <Button size="sm">Default</Button>
                <Button variant="secondary" size="sm">Secondary</Button>
                <Button variant="outline" size="sm">Outline</Button>
                <Button variant="ghost" size="sm">Ghost</Button>
              </div>
              <div className="flex gap-2">
                <Badge>New</Badge>
                <Badge variant="secondary">Updated</Badge>
                <Badge variant="outline">Popular</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Form Controls</CardTitle>
              <CardDescription>Input fields and form elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="demo-input">Sample Input</Label>
                <Input id="demo-input" placeholder="Type something..." />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="demo-checkbox" 
                  checked={isChecked}
                  onCheckedChange={setIsChecked}
                />
                <Label htmlFor="demo-checkbox">Accept terms</Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Interactive Elements</CardTitle>
              <CardDescription>Toggles and sliders</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch 
                  id="demo-switch"
                  checked={isSwitchOn}
                  onCheckedChange={setIsSwitchOn}
                />
                <Label htmlFor="demo-switch">Enable notifications</Label>
              </div>
              <div className="space-y-2">
                <Label>Value: {sliderValue[0]}</Label>
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-2">Example Blocks</h2>
          <p className="text-muted-foreground">
            Pre-built component blocks available in this registry
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Hello World</h3>
                <p className="text-sm text-muted-foreground">A simple hello world component</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/components">View All Components</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center min-h-[200px] bg-muted/30 rounded-lg">
              <HelloWorld />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Interactive Components</h3>
                <p className="text-sm text-muted-foreground">Browse the full component library with live examples</p>
              </div>
            </div>
            <div className="flex items-center justify-center min-h-[200px] bg-muted/30 rounded-lg">
              <Button asChild size="lg">
                <Link href="/components">Explore Components</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
